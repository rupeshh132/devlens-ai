-- V168__seed_class11_chemistry_ch10_sblock_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 10 (s-Block and p-Block Elements: s-Block Alkali Metals)
-- Video: Magnet Brains (Chemical Properties of s Block Elements | Bharat Panchal Sir | Q2pJ8XH3R2E)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3685s / 1h 01m 25s)

-- 1. Remove old placeholder topics & content items for Chapter 10 (s-Block and p-Block Elements)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1100-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1100-0000-000000000010';

-- 2. Insert 4 Verified Master Topics for Chapter 10 (s-Block Elements: Alkali Metals)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2110-0000-000000000001', '65d29b56-0430-1100-0000-000000000010', 's-Block Alkali Metals: Reactivity towards Air, Oxide & Superoxide Formation (Normal Oxides, Peroxides, Superoxides)', 1, true),
('65d29b56-0430-2110-0000-000000000002', '65d29b56-0430-1100-0000-000000000010', 's-Block Alkali Metals: Hydroxide Formation, Basicity Trends, Reducing Nature (E°) & Ionic Hydrides', 2, true),
('65d29b56-0430-2110-0000-000000000003', '65d29b56-0430-1100-0000-000000000010', 's-Block Alkali Metals: Solutions in Liquid Ammonia (Ammoniated Electrons & Bronze Phase) & Halide Formation', 3, true),
('65d29b56-0430-2110-0000-000000000004', '65d29b56-0430-1100-0000-000000000010', 's-Block Alkali Metals: Salts of Oxo-Acids (Carbonates, Bicarbonates) & Thermal Decomposition of Nitrates', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (Outro cleanly trimmed at 3685s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3110-0000-000000000001', '65d29b56-0430-2110-0000-000000000001', 'VIDEO', 's-Block Alkali Metals: Reactivity towards Air, Oxide & Superoxide Formation (Normal Oxides, Peroxides, Superoxides)', 'https://www.youtube.com/watch?v=Q2pJ8XH3R2E&end=1002s', true, 1),
('65d29b56-0430-3110-0000-000000000002', '65d29b56-0430-2110-0000-000000000002', 'VIDEO', 's-Block Alkali Metals: Hydroxide Formation, Basicity Trends, Reducing Nature (E°) & Ionic Hydrides', 'https://www.youtube.com/watch?v=Q2pJ8XH3R2E&t=1002s&end=2184s', true, 1),
('65d29b56-0430-3110-0000-000000000003', '65d29b56-0430-2110-0000-000000000003', 'VIDEO', 's-Block Alkali Metals: Solutions in Liquid Ammonia (Ammoniated Electrons & Bronze Phase) & Halide Formation', 'https://www.youtube.com/watch?v=Q2pJ8XH3R2E&t=2184s&end=3374s', true, 1),
('65d29b56-0430-3110-0000-000000000004', '65d29b56-0430-2110-0000-000000000004', 'VIDEO', 's-Block Alkali Metals: Salts of Oxo-Acids (Carbonates, Bicarbonates) & Thermal Decomposition of Nitrates', 'https://www.youtube.com/watch?v=Q2pJ8XH3R2E&t=3374s&end=3685s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
