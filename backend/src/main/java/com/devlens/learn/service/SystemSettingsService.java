package com.devlens.learn.service;

import com.devlens.learn.entity.SystemSetting;
import com.devlens.learn.repository.SystemSettingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class SystemSettingsService {

    private final SystemSettingRepository systemSettingRepository;
    private final Map<String, String> localCache = new ConcurrentHashMap<>();

    public String getSetting(String key, String defaultValue) {
        String cached = localCache.get(key);
        if (cached != null) {
            return cached;
        }

        return systemSettingRepository.findBySettingKey(key)
                .map(setting -> {
                    localCache.put(key, setting.getSettingValue());
                    return setting.getSettingValue();
                })
                .orElse(defaultValue);
    }

    public int getIntSetting(String key, int defaultValue) {
        String val = getSetting(key, String.valueOf(defaultValue));
        try {
            return Integer.parseInt(val.trim());
        } catch (NumberFormatException e) {
            return defaultValue;
        }
    }

    public boolean getBooleanSetting(String key, boolean defaultValue) {
        String val = getSetting(key, String.valueOf(defaultValue));
        return "true".equalsIgnoreCase(val.trim()) || "1".equals(val.trim());
    }

    @Transactional
    public void updateSetting(String key, String value) {
        SystemSetting setting = systemSettingRepository.findBySettingKey(key)
                .orElseGet(() -> SystemSetting.builder()
                        .settingKey(key)
                        .description("Dynamic platform configuration key: " + key)
                        .build());

        setting.setSettingValue(value);
        systemSettingRepository.save(setting);
        localCache.put(key, value);
        log.info("System setting updated: [{}] = [{}]", key, value);
    }

    @Transactional
    public void updateSettings(Map<String, String> newSettings) {
        if (newSettings == null) return;
        newSettings.forEach(this::updateSetting);
    }

    public Map<String, String> getAllSettings() {
        Map<String, String> all = new HashMap<>();
        systemSettingRepository.findAll().forEach(s -> {
            all.put(s.getSettingKey(), s.getSettingValue());
            localCache.put(s.getSettingKey(), s.getSettingValue());
        });
        return all;
    }
}
