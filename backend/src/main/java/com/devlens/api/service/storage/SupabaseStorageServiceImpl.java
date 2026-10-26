package com.devlens.api.service.storage;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import jakarta.annotation.PostConstruct;
import java.util.UUID;

@Slf4j
@Service
public class SupabaseStorageServiceImpl implements StorageService {

    @Value("${supabase.url}")
    private String supabaseUrl;

    @Value("${supabase.key}")
    private String supabaseKey;

    private final RestTemplate restTemplate = new RestTemplate();

    @PostConstruct
    public void init() {
        boolean keyIsValid = supabaseKey != null && supabaseKey.startsWith("eyJ") && supabaseKey.length() > 100;
        log.info("=== Supabase Storage Init === URL: {} | Key valid: {} | Key prefix: {}",
            supabaseUrl,
            keyIsValid,
            supabaseKey != null && supabaseKey.length() > 10 ? supabaseKey.substring(0, 10) + "..." : "MISSING"
        );
        if (!keyIsValid) {
            log.error("!!! WARNING: Supabase key looks invalid. File uploads WILL FAIL. Check application-dev.yml !!!");
        }
    }

    /**
     * Sanitizes a filename for use in Supabase Storage paths.
     * - Removes special characters that Supabase considers invalid
     * - Keeps alphanumeric, hyphens, underscores, dots
     * - Prepends a UUID to guarantee uniqueness (no KeyAlreadyExists errors)
     */
    private String sanitizeFilename(String originalFilename) {
        if (originalFilename == null || originalFilename.isEmpty()) {
            return UUID.randomUUID().toString() + ".bin";
        }
        // Extract extension
        int dotIndex = originalFilename.lastIndexOf('.');
        String ext = dotIndex >= 0 ? originalFilename.substring(dotIndex) : "";
        String name = dotIndex >= 0 ? originalFilename.substring(0, dotIndex) : originalFilename;

        // Replace spaces, brackets, and any non-safe chars with underscores
        String safeName = name.replaceAll("[^a-zA-Z0-9_\\-]", "_");

        // Prepend UUID for guaranteed uniqueness (prevents KeyAlreadyExists)
        return UUID.randomUUID().toString().substring(0, 8) + "_" + safeName + ext;
    }

    @Override
    public String uploadFile(String bucket, String path, byte[] fileData, String contentType) {
        if (supabaseKey == null || !supabaseKey.startsWith("eyJ")) {
            log.error("Supabase key not configured. Upload aborted.");
            throw new RuntimeException("Supabase storage is not properly configured. Contact admin.");
        }

        // Extract the folder part and filename, then sanitize only the filename
        int lastSlash = path.lastIndexOf('/');
        String folder = lastSlash >= 0 ? path.substring(0, lastSlash + 1) : "";
        String rawFilename = lastSlash >= 0 ? path.substring(lastSlash + 1) : path;
        String safeFilename = sanitizeFilename(rawFilename);
        String safePath = folder + safeFilename;

        // Build URL - DO NOT URL-encode here. RestTemplate handles it via URI.
        String url = supabaseUrl + "/storage/v1/object/" + bucket + "/" + safePath;

        log.info("Uploading to Supabase: bucket={}, path={}, size={} bytes, type={}",
            bucket, safePath, fileData.length, contentType);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + supabaseKey);
        headers.set("apikey", supabaseKey);
        headers.set("Content-Type", contentType != null ? contentType : "application/octet-stream");
        // x-upsert: true means "overwrite if exists" - eliminates KeyAlreadyExists permanently
        headers.set("x-upsert", "true");

        HttpEntity<byte[]> entity = new HttpEntity<>(fileData, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
            if (response.getStatusCode().is2xxSuccessful()) {
                String publicUrl = getPublicUrl(bucket, safePath);
                log.info("Upload successful. Public URL: {}", publicUrl);
                return publicUrl;
            } else {
                log.error("Supabase returned non-2xx: {} | Body: {}", response.getStatusCode(), response.getBody());
                throw new RuntimeException("Upload failed. Status: " + response.getStatusCode());
            }
        } catch (HttpClientErrorException e) {
            log.error("Supabase 4xx error: {} | Body: {}", e.getStatusCode(), e.getResponseBodyAsString());
            throw new RuntimeException("Supabase upload failed: " + e.getResponseBodyAsString(), e);
        } catch (HttpServerErrorException e) {
            log.error("Supabase 5xx error: {} | Body: {}", e.getStatusCode(), e.getResponseBodyAsString());
            throw new RuntimeException("Supabase server error. Try again.", e);
        } catch (Exception e) {
            log.error("Unexpected upload error: {}", e.getMessage(), e);
            throw new RuntimeException("File upload failed: " + e.getMessage(), e);
        }
    }

    @Override
    public String getPublicUrl(String bucket, String path) {
        return supabaseUrl + "/storage/v1/object/public/" + bucket + "/" + path;
    }

    @Override
    public void deleteFile(String bucket, String path) {
        String url = supabaseUrl + "/storage/v1/object/" + bucket + "/" + path;

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + supabaseKey);
        headers.set("apikey", supabaseKey);

        HttpEntity<Void> entity = new HttpEntity<>(headers);
        try {
            restTemplate.exchange(url, HttpMethod.DELETE, entity, String.class);
            log.info("Deleted from Supabase: {}/{}", bucket, path);
        } catch (Exception e) {
            log.error("Error deleting from Supabase: {}", e.getMessage(), e);
        }
    }
}
