package com.devlens.learn;

import com.devlens.api.DevLensApiApplication;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;
import java.util.Map;

@SpringBootTest(classes = DevLensApiApplication.class)
public class DbTest {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Test
    public void queryDb() {
        System.out.println("=== USERS IN LEARN_USERS ===");
        List<Map<String, Object>> learnUsers = jdbcTemplate.queryForList("SELECT id, email FROM learn_users WHERE email LIKE '%rohit%'");
        for (Map<String, Object> u : learnUsers) {
            System.out.println("Learn User: " + u.get("email") + " ID: " + u.get("id"));
        }

        System.out.println("=== USERS IN MAIN APP ===");
        List<Map<String, Object>> mainUsers = jdbcTemplate.queryForList("SELECT id, email FROM users WHERE email LIKE '%rohit%'");
        for (Map<String, Object> u : mainUsers) {
            System.out.println("Main User: " + u.get("email") + " ID: " + u.get("id"));
        }
    }
}
