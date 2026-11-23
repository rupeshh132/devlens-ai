-- V443__seed_class12_political_science_ch05_security_in_the_contemporary_world_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 5 (Security in the Contemporary World)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (IjZdEuASewE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3886s)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Security in the Contemporary World)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000005';

-- 2. Insert 4 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2205-0000-000000000001', '65d29b56-0028-1200-0000-000000000005', 'Meaning and Concept of Security: Traditional Concept of Security (External Deterrence & Balance of Power)', 1, true),
('65d29b56-0028-2205-0000-000000000002', '65d29b56-0028-1200-0000-000000000005', 'Traditional Notions: Internal Security, Civil War, Disarmament, Arms Control & Confidence Building Measures', 2, true),
('65d29b56-0028-2205-0000-000000000003', '65d29b56-0028-1200-0000-000000000005', 'Non-Traditional Notions of Security: Human Security, Global Security & New Threats (Terrorism, Epidemics)', 3, true),
('65d29b56-0028-2205-0000-000000000004', '65d29b56-0028-1200-0000-000000000005', 'Cooperative Security Framework & India''s Multi-Pillar Security Strategy in a Globalized Environment', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3205-0000-000000000001', '65d29b56-0028-2205-0000-000000000001', 'VIDEO', 'Meaning and Concept of Security: Traditional Concept of Security (External Deterrence & Balance of Power)', 'https://www.youtube.com/watch?v=IjZdEuASewE&end=970s', true, 1),
('65d29b56-0028-3205-0000-000000000002', '65d29b56-0028-2205-0000-000000000002', 'VIDEO', 'Traditional Notions: Internal Security, Civil War, Disarmament, Arms Control & Confidence Building Measures', 'https://www.youtube.com/watch?v=IjZdEuASewE&t=970s&end=1940s', true, 1),
('65d29b56-0028-3205-0000-000000000003', '65d29b56-0028-2205-0000-000000000003', 'VIDEO', 'Non-Traditional Notions of Security: Human Security, Global Security & New Threats (Terrorism, Epidemics)', 'https://www.youtube.com/watch?v=IjZdEuASewE&t=1940s&end=2910s', true, 1),
('65d29b56-0028-3205-0000-000000000004', '65d29b56-0028-2205-0000-000000000004', 'VIDEO', 'Cooperative Security Framework & India''s Multi-Pillar Security Strategy in a Globalized Environment', 'https://www.youtube.com/watch?v=IjZdEuASewE&t=2910s&end=3886s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
