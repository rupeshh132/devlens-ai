package com.devlens.api.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

@Slf4j
@Service
public class SseService {

    private final ConcurrentHashMap<UUID, CopyOnWriteArrayList<SseEmitter>> emittersMap = new ConcurrentHashMap<>();

    public SseEmitter createEmitter(UUID jobId) {
        SseEmitter emitter = new SseEmitter(60L * 1000 * 30); // 30 minutes timeout
        
        emittersMap.putIfAbsent(jobId, new CopyOnWriteArrayList<>());
        CopyOnWriteArrayList<SseEmitter> emitters = emittersMap.get(jobId);
        emitters.add(emitter);
        
        emitter.onCompletion(() -> removeEmitter(jobId, emitter));
        emitter.onTimeout(() -> removeEmitter(jobId, emitter));
        emitter.onError((e) -> removeEmitter(jobId, emitter));

        try {
            // Send an initial heartbeat/connection event
            emitter.send(SseEmitter.event().name("heartbeat").data("connected"));
        } catch (IOException e) {
            removeEmitter(jobId, emitter);
        }

        return emitter;
    }

    private void removeEmitter(UUID jobId, SseEmitter emitter) {
        CopyOnWriteArrayList<SseEmitter> emitters = emittersMap.get(jobId);
        if (emitters != null) {
            emitters.remove(emitter);
            if (emitters.isEmpty()) {
                emittersMap.remove(jobId);
            }
        }
    }

    public void broadcast(UUID jobId, String eventName, Object data) {
        CopyOnWriteArrayList<SseEmitter> emitters = emittersMap.get(jobId);
        if (emitters != null) {
            for (SseEmitter emitter : emitters) {
                try {
                    emitter.send(SseEmitter.event().name(eventName).data(data));
                } catch (IOException e) {
                    removeEmitter(jobId, emitter);
                }
            }
        }
    }
}
