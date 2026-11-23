-- V336__seed_class12_eco_ch10_human_capital_formation_in_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 10 (Human Capital Formation in India)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (snB_m_IKBp0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1950s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Human Capital Formation in India)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000010';

-- 2. Insert 4 Verified Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2210-0000-000000000001', '65d29b56-0030-1200-0000-000000000010', 'Human Capital vs Physical Capital & Sources of Human Capital (Education, Health, On-the-Job Training, Migration, Information)', 1, true),
('65d29b56-0030-2210-0000-000000000002', '65d29b56-0030-1200-0000-000000000010', 'Human Capital and Economic Growth & Distinction Between Human Capital and Human Development', 2, true),
('65d29b56-0030-2210-0000-000000000003', '65d29b56-0030-1200-0000-000000000010', 'State of Human Capital Formation in India & Need for Government Intervention in Education and Health Sectors', 3, true),
('65d29b56-0030-2210-0000-000000000004', '65d29b56-0030-1200-0000-000000000010', 'Growth of Education Sector in India: Elementary/Secondary Education, Literacy Rates, Gender Equity & Future Prospects', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3210-0000-000000000001', '65d29b56-0030-2210-0000-000000000001', 'VIDEO', 'Human Capital vs Physical Capital & Sources of Human Capital (Education, Health, On-the-Job Training, Migration, Information)', 'https://www.youtube.com/watch?v=snB_m_IKBp0&end=480s', true, 1),
('65d29b56-0030-3210-0000-000000000002', '65d29b56-0030-2210-0000-000000000002', 'VIDEO', 'Human Capital and Economic Growth & Distinction Between Human Capital and Human Development', 'https://www.youtube.com/watch?v=snB_m_IKBp0&t=480s&end=980s', true, 1),
('65d29b56-0030-3210-0000-000000000003', '65d29b56-0030-2210-0000-000000000003', 'VIDEO', 'State of Human Capital Formation in India & Need for Government Intervention in Education and Health Sectors', 'https://www.youtube.com/watch?v=snB_m_IKBp0&t=980s&end=1450s', true, 1),
('65d29b56-0030-3210-0000-000000000004', '65d29b56-0030-2210-0000-000000000004', 'VIDEO', 'Growth of Education Sector in India: Elementary/Secondary Education, Literacy Rates, Gender Equity & Future Prospects', 'https://www.youtube.com/watch?v=snB_m_IKBp0&t=1450s&end=1950s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
