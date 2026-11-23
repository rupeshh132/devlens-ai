-- V357__seed_class12_eng_ch16_vistas_journey_to_the_end_of_the_earth_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 16 (Vistas: Journey to the End of the Earth)
-- Video: Simran Sahni (Board Exam Masterclass) (0dG_i5QRYGw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1160s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 16 (Vistas: Journey to the End of the Earth)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000016'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000016';

-- 2. Insert 3 Verified Master Topics for Chapter 16
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2216-0000-000000000001', '65d29b56-0301-1200-0000-000000000016', 'Expedition on Akademik Shokalskiy, Reaching Pristine Antarctica & Geological Past (Gondwana Continent)', 1, true),
('65d29b56-0301-2216-0000-000000000002', '65d29b56-0301-1200-0000-000000000016', 'Human Disruption on Nature, Phytoplankton and the Carbon Cycle & Rapid Glacial Retreat Warnings', 2, true),
('65d29b56-0301-2216-0000-000000000003', '65d29b56-0301-1200-0000-000000000016', 'Geoff Green''s "Students on Ice" Mission, Walking upon Frozen Oceans & A Global Ecological Wake-Up Call', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3216-0000-000000000001', '65d29b56-0301-2216-0000-000000000001', 'VIDEO', 'Expedition on Akademik Shokalskiy, Reaching Pristine Antarctica & Geological Past (Gondwana Continent)', 'https://www.youtube.com/watch?v=0dG_i5QRYGw&end=380s', true, 1),
('65d29b56-0301-3216-0000-000000000002', '65d29b56-0301-2216-0000-000000000002', 'VIDEO', 'Human Disruption on Nature, Phytoplankton and the Carbon Cycle & Rapid Glacial Retreat Warnings', 'https://www.youtube.com/watch?v=0dG_i5QRYGw&t=380s&end=780s', true, 1),
('65d29b56-0301-3216-0000-000000000003', '65d29b56-0301-2216-0000-000000000003', 'VIDEO', 'Geoff Green''s "Students on Ice" Mission, Walking upon Frozen Oceans & A Global Ecological Wake-Up Call', 'https://www.youtube.com/watch?v=0dG_i5QRYGw&t=780s&end=1160s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
