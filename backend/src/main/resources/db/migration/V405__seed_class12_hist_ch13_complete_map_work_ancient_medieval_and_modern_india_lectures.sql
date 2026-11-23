-- V405__seed_class12_hist_ch13_complete_map_work_ancient_medieval_and_modern_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 13 (Complete Map Work (Ancient, Medieval & Modern India - 5 Marks Board Evaluation))
-- Video: Humanities Wallah - Class 12th (Board Map Masterclass) (q9bjSwuJPpc)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 698s)

-- 1. Remove old placeholder topics & content items for Chapter 13 (Complete Map Work (Ancient, Medieval & Modern India - 5 Marks Board Evaluation))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000013';

-- 2. Insert 4 Verified Master Topics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2213-0000-000000000001', '65d29b56-0027-1200-0000-000000000013', 'Board Map Work Strategic Framework & Book 1 Ancient India: Major Harappan Sites and Key Excavations', 1, true),
('65d29b56-0027-2213-0000-000000000002', '65d29b56-0027-1200-0000-000000000013', 'Book 1 Ancient India: Sixteen Mahajanapadas, Ashokan Pillar and Rock Inscriptions & Major Buddhist Sites', 2, true),
('65d29b56-0027-2213-0000-000000000003', '65d29b56-0027-1200-0000-000000000013', 'Book 2 Medieval India: Key Mughal Administrative Centers, Vijayanagara (Hampi) & South Indian Dynasties', 3, true),
('65d29b56-0027-2213-0000-000000000004', '65d29b56-0027-1200-0000-000000000013', 'Book 3 Modern India: Outbreak Centers of 1857 Revolt & Major Centers of the Indian National Movement', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3213-0000-000000000001', '65d29b56-0027-2213-0000-000000000001', 'VIDEO', 'Board Map Work Strategic Framework & Book 1 Ancient India: Major Harappan Sites and Key Excavations', 'https://www.youtube.com/watch?v=q9bjSwuJPpc&end=170s', true, 1),
('65d29b56-0027-3213-0000-000000000002', '65d29b56-0027-2213-0000-000000000002', 'VIDEO', 'Book 1 Ancient India: Sixteen Mahajanapadas, Ashokan Pillar and Rock Inscriptions & Major Buddhist Sites', 'https://www.youtube.com/watch?v=q9bjSwuJPpc&t=170s&end=350s', true, 1),
('65d29b56-0027-3213-0000-000000000003', '65d29b56-0027-2213-0000-000000000003', 'VIDEO', 'Book 2 Medieval India: Key Mughal Administrative Centers, Vijayanagara (Hampi) & South Indian Dynasties', 'https://www.youtube.com/watch?v=q9bjSwuJPpc&t=350s&end=520s', true, 1),
('65d29b56-0027-3213-0000-000000000004', '65d29b56-0027-2213-0000-000000000004', 'VIDEO', 'Book 3 Modern India: Outbreak Centers of 1857 Revolt & Major Centers of the Indian National Movement', 'https://www.youtube.com/watch?v=q9bjSwuJPpc&t=520s&end=698s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
