package com.devlens.learn.config;

import com.devlens.learn.entity.LearnUser;
import com.devlens.learn.entity.LearnXpLog;
import com.devlens.learn.repository.LearnUserRepository;
import com.devlens.learn.repository.LearnXpLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class XpSyncRunner implements CommandLineRunner {

    private final LearnUserRepository userRepository;
    private final LearnXpLogRepository xpLogRepository;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("--- RUNNING XP SYNC ---");
        List<LearnUser> users = userRepository.findAll();
        for (LearnUser user : users) {
            if (user.getTotalXp() != null && user.getTotalXp() > 0) {
                // Check if they already have logs
                List<LearnXpLog> logs = xpLogRepository.findByUserId(user.getId());
                if (logs.isEmpty()) {
                    // Backfill the XP!
                    System.out.println("Backfilling " + user.getTotalXp() + " XP for user " + user.getFullName());
                    LearnXpLog log = new LearnXpLog();
                    log.setUserId(user.getId());
                    log.setActivityType(LearnXpLog.ActivityType.STUDY_TIME);
                    log.setPointsAwarded(user.getTotalXp());
                    xpLogRepository.save(log);
                }
            }
        }
        System.out.println("--- XP SYNC COMPLETE ---");
    }
}
