-- V274__seed_class11_pol_ch03_election_and_representation_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 3: Election and Representation
-- Masterclass Video: Next Toppers - 11th Humanities (ua3JQnf-qoU)
-- 100% Zero-Gap Continuous Timeline: 0s to 5320s (01:28:40, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000003';

-- 2. Insert 4 Verified Master Subtopics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2103-0000-000000000001', '65d29b56-0028-1100-0000-000000000003', 'Elections and Democracy & First Past the Post (FPTP) Electoral System', 1, true),
('65d29b56-0028-2103-0000-000000000002', '65d29b56-0028-1100-0000-000000000003', 'Proportional Representation (PR) System & Comparative Analysis: FPTP vs PR', 2, true),
('65d29b56-0028-2103-0000-000000000003', '65d29b56-0028-1100-0000-000000000003', 'Why India Adopted FPTP & Reservation of Constituencies for SCs/STs', 3, true),
('65d29b56-0028-2103-0000-000000000004', '65d29b56-0028-1100-0000-000000000003', 'Free and Fair Elections, Election Commission of India (ECI) & Electoral Reforms', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 31:29 (0s to 1889s)
('65d29b56-0028-3103-0000-000000000001', '65d29b56-0028-2103-0000-000000000001', 'VIDEO', 'Elections and Democracy & First Past the Post (FPTP) Electoral System (Direct vs Indirect Democracy, Constitutional Rules for Elections, Plurality System / First Past the Post Mechanics & 1984 Congress Election Case Study)', 'https://www.youtube.com/watch?v=ua3JQnf-qoU&t=0s&end=1889s', true, 1),

-- Topic 2: 31:29 to 49:40 (1889s to 2980s)
('65d29b56-0028-3103-0000-000000000002', '65d29b56-0028-2103-0000-000000000002', 'VIDEO', 'Proportional Representation (PR) System & Comparative Analysis: FPTP vs PR (Party List System, Single Transferable Vote in Rajya Sabha & President Elections, Majoritarian vs Proportional Models & Advantages/Disadvantages)', 'https://www.youtube.com/watch?v=ua3JQnf-qoU&t=1889s&end=2980s', true, 1),

-- Topic 3: 49:40 to 57:39 (2980s to 3459s)
('65d29b56-0028-3103-0000-000000000003', '65d29b56-0028-2103-0000-000000000003', 'VIDEO', 'Why India Adopted FPTP & Reservation of Constituencies for SCs/STs (Simplicity for Common Voters, Stable Governments, Encouragement to Inclusive Coalitions & Delimitation Commission / Reserved Seats Mechanism)', 'https://www.youtube.com/watch?v=ua3JQnf-qoU&t=2980s&end=3459s', true, 1),

-- Topic 4: 57:39 to 01:28:40 (3459s to 5320s)
('65d29b56-0028-3103-0000-000000000004', '65d29b56-0028-2103-0000-000000000004', 'VIDEO', 'Free and Fair Elections, Election Commission of India (ECI) & Electoral Reforms (Universal Adult Franchise, Multi-Member Election Commission, Powers & Model Code of Conduct, Role of Money & Criminalization, Proposed Reforms)', 'https://www.youtube.com/watch?v=ua3JQnf-qoU&t=3459s&end=5320s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
