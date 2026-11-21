-- V276__seed_class11_pol_ch05_legislature_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 5: Legislature
-- Masterclass Video: Next Toppers - 11th Humanities (B4AtR8rOQ7Q)
-- 100% Zero-Gap Continuous Timeline: 0s to 6488s (01:48:08, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000005';

-- 2. Insert 4 Verified Master Subtopics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2105-0000-000000000001', '65d29b56-0028-1100-0000-000000000005', 'Why Do We Need a Parliament & Bicameralism: Rajya Sabha and Lok Sabha', 1, true),
('65d29b56-0028-2105-0000-000000000002', '65d29b56-0028-1100-0000-000000000005', 'Functions of Parliament & Comparison of Powers Between Lok Sabha and Rajya Sabha', 2, true),
('65d29b56-0028-2105-0000-000000000003', '65d29b56-0028-1100-0000-000000000005', 'Legislative Procedure: How Does the Parliament Make Laws? (Ordinary vs Money Bills)', 3, true),
('65d29b56-0028-2105-0000-000000000004', '65d29b56-0028-1100-0000-000000000005', 'Parliamentary Control Instruments, Committees & Self-Regulation (Anti-Defection Law)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 42:31 (0s to 2551s)
('65d29b56-0028-3105-0000-000000000001', '65d29b56-0028-2105-0000-000000000001', 'VIDEO', 'Why Do We Need a Parliament & Bicameralism: Rajya Sabha and Lok Sabha (Democratic Deliberation, Law-Making Forum, Why Two Houses of Parliament, Council of States Rajya Sabha Representation vs House of the People Lok Sabha)', 'https://www.youtube.com/watch?v=B4AtR8rOQ7Q&t=0s&end=2551s', true, 1),

-- Topic 2: 42:31 to 01:13:14 (2551s to 4394s)
('65d29b56-0028-3105-0000-000000000002', '65d29b56-0028-2105-0000-000000000002', 'VIDEO', 'Functions of Parliament & Comparison of Powers Between Lok Sabha and Rajya Sabha (Legislative, Control of Executive, Financial, Representation, Debating, Constituent & Electoral Functions, Special Powers of Rajya Sabha under Article 249/312)', 'https://www.youtube.com/watch?v=B4AtR8rOQ7Q&t=2551s&end=4394s', true, 1),

-- Topic 3: 01:13:14 to 01:29:09 (4394s to 5349s)
('65d29b56-0028-3105-0000-000000000003', '65d29b56-0028-2105-0000-000000000003', 'VIDEO', 'Legislative Procedure: How Does the Parliament Make Laws? (Introduction of Bill, First, Second & Third Readings, Committee Stage, Ordinary vs Money Bills under Article 110, Joint Sitting Mechanism under Article 108 & Presidential Assent)', 'https://www.youtube.com/watch?v=B4AtR8rOQ7Q&t=4394s&end=5349s', true, 1),

-- Topic 4: 01:29:09 to 01:48:08 (5349s to 6488s)
('65d29b56-0028-3105-0000-000000000004', '65d29b56-0028-2105-0000-000000000004', 'VIDEO', 'Parliamentary Control Instruments, Committees & Self-Regulation (Question Hour, Zero Hour, Calling Attention, No-Confidence Motion, Standing & Joint Parliamentary Committees, 52nd & 91st Anti-Defection Amendments 10th Schedule)', 'https://www.youtube.com/watch?v=B4AtR8rOQ7Q&t=5349s&end=6488s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
