-- V137__seed_class11_biology_ch1_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 1 (The Living World)
-- Video: PW NEET / Competition Wallah (The Living World - Full Chapter One Shot | NEET 2026 | Vipin Sir | FNLxE6vrWzs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8255s / 2h 17m 35s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 1 (The Living World)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000001';

-- 2. Insert 5 Verified Master Topics for Chapter 1 (The Living World)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2101-0000-000000000001', '65d29b56-0440-1100-0000-000000000001', 'What is Living: Characteristics vs Defining Features, Growth & Reproduction', 1, true),
('65d29b56-0440-2101-0000-000000000002', '65d29b56-0440-1100-0000-000000000001', 'Defining Properties of Life: Metabolism, Cellular Organisation & Consciousness', 2, true),
('65d29b56-0440-2101-0000-000000000003', '65d29b56-0440-1100-0000-000000000001', 'Biodiversity, Need for Classification & Binomial Nomenclature (Universal Rules)', 3, true),
('65d29b56-0440-2101-0000-000000000004', '65d29b56-0440-1100-0000-000000000001', 'Taxonomy, Systematics & Taxonomic Categories (Concept of Species to Kingdom)', 4, true),
('65d29b56-0440-2101-0000-000000000005', '65d29b56-0440-1100-0000-000000000001', 'Taxonomic Hierarchy, Organisms in Categories & High-Yield Exam Practice', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3101-0000-000000000001', '65d29b56-0440-2101-0000-000000000001', 'VIDEO', 'What is Living: Characteristics vs Defining Features, Growth & Reproduction', 'https://www.youtube.com/watch?v=FNLxE6vrWzs&end=2800s', true, 1),
('65d29b56-0440-3101-0000-000000000002', '65d29b56-0440-2101-0000-000000000002', 'VIDEO', 'Defining Properties of Life: Metabolism, Cellular Organisation & Consciousness', 'https://www.youtube.com/watch?v=FNLxE6vrWzs&t=2800s&end=4115s', true, 1),
('65d29b56-0440-3101-0000-000000000003', '65d29b56-0440-2101-0000-000000000003', 'VIDEO', 'Biodiversity, Need for Classification & Binomial Nomenclature (Universal Rules)', 'https://www.youtube.com/watch?v=FNLxE6vrWzs&t=4115s&end=5255s', true, 1),
('65d29b56-0440-3101-0000-000000000004', '65d29b56-0440-2101-0000-000000000004', 'VIDEO', 'Taxonomy, Systematics & Taxonomic Categories (Concept of Species to Kingdom)', 'https://www.youtube.com/watch?v=FNLxE6vrWzs&t=5255s&end=6663s', true, 1),
('65d29b56-0440-3101-0000-000000000005', '65d29b56-0440-2101-0000-000000000005', 'VIDEO', 'Taxonomic Hierarchy, Organisms in Categories & High-Yield Exam Practice', 'https://www.youtube.com/watch?v=FNLxE6vrWzs&t=6663s&end=8255s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
