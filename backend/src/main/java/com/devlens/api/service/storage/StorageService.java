package com.devlens.api.service.storage;

public interface StorageService {
    String uploadFile(String bucket, String path, byte[] fileData, String contentType);
    String getPublicUrl(String bucket, String path);
    void deleteFile(String bucket, String path);
}
