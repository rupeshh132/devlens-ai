-- V71__seed_class10_geo_ch6_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Geography Chapter 6 / Overall SST Chapter 11 (Manufacturing Industries)
-- Video: PW Warrior 2026 (Manufacturing Industries One Shot: FULL CHAPTER | Class 10 Geography Chapter 6 | V5b-581ESFI)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5456s / 01h 30m 56s)

-- 1. Remove old placeholder topics & content items for Geography Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000011';

-- 2. Insert 5 NCERT-Aligned Master Topics for Geography Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2011-0000-000000000001', '65d29b56-3333-1000-0000-000000000011', 'Foundations of Manufacturing: Importance, Industrial Location & Classification of Industries', 1, true),
('65d29b56-3333-2011-0000-000000000002', '65d29b56-3333-1000-0000-000000000011', 'Agro-Based Industries: Textile Value Chain, Cotton, Jute & Sugar Sectors', 2, true),
('65d29b56-3333-2011-0000-000000000003', '65d29b56-3333-1000-0000-000000000011', 'Mineral-Based Heavy Industries: Aluminium Smelting, Chemical & Fertilizer Industries', 3, true),
('65d29b56-3333-2011-0000-000000000004', '65d29b56-3333-1000-0000-000000000011', 'Core Manufacturing & Modern Technology: Cement, Automobile, IT & Electronics Industries', 4, true),
('65d29b56-3333-2011-0000-000000000005', '65d29b56-3333-1000-0000-000000000011', 'Environmental Degradation, Industrial Pollution Control & Sustainable Development (NTPC)', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 5456s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3011-0000-000000000001', '65d29b56-3333-2011-0000-000000000001', 'VIDEO', 'Foundations of Manufacturing: Importance, Industrial Location & Classification of Industries', 'https://www.youtube.com/watch?v=V5b-581ESFI&end=1937s', true, 1),
('65d29b56-3333-3011-0000-000000000002', '65d29b56-3333-2011-0000-000000000002', 'VIDEO', 'Agro-Based Industries: Textile Value Chain, Cotton, Jute & Sugar Sectors', 'https://www.youtube.com/watch?v=V5b-581ESFI&t=1937s&end=3921s', true, 1),
('65d29b56-3333-3011-0000-000000000003', '65d29b56-3333-2011-0000-000000000003', 'VIDEO', 'Mineral-Based Heavy Industries: Aluminium Smelting, Chemical & Fertilizer Industries', 'https://www.youtube.com/watch?v=V5b-581ESFI&t=3921s&end=4550s', true, 1),
('65d29b56-3333-3011-0000-000000000004', '65d29b56-3333-2011-0000-000000000004', 'VIDEO', 'Core Manufacturing & Modern Technology: Cement, Automobile, IT & Electronics Industries', 'https://www.youtube.com/watch?v=V5b-581ESFI&t=4550s&end=4848s', true, 1),
('65d29b56-3333-3011-0000-000000000005', '65d29b56-3333-2011-0000-000000000005', 'VIDEO', 'Environmental Degradation, Industrial Pollution Control & Sustainable Development (NTPC)', 'https://www.youtube.com/watch?v=V5b-581ESFI&t=4848s&end=5456s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
