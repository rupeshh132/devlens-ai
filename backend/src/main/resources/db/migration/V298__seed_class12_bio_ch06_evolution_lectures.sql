-- V298__seed_class12_bio_ch06_evolution_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 6 (Evolution)
-- Video: PW NEET / Class 12 Boards (Evolution Masterclass) (Evolution | x3U83f9eFSo)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 13436s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Evolution)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000006';

-- 2. Insert 5 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2206-0000-000000000001', '65d29b56-0440-1200-0000-000000000006', 'Origin of Universe, Earth & Theories of Origin of Life (Oparin-Haldane & Miller''s Experiment)', 1, true),
('65d29b56-0440-2206-0000-000000000002', '65d29b56-0440-1200-0000-000000000006', 'Theories of Evolution: Lamarckism, Darwinian Natural Selection & Hugo de Vries Mutation Theory', 2, true),
('65d29b56-0440-2206-0000-000000000003', '65d29b56-0440-1200-0000-000000000006', 'Evidences for Evolution: Paleontological, Comparative Anatomy (Homology vs Analogy) & Embryology', 3, true),
('65d29b56-0440-2206-0000-000000000004', '65d29b56-0440-1200-0000-000000000006', 'Hardy-Weinberg Principle, Evolutionary Forces (Gene Flow, Genetic Drift) & Adaptive Radiation', 4, true),
('65d29b56-0440-2206-0000-000000000005', '65d29b56-0440-1200-0000-000000000006', 'Biological Evolution Timeline (Plants & Animals) & Detailed Stages of Human Evolution', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3206-0000-000000000001', '65d29b56-0440-2206-0000-000000000001', 'VIDEO', 'Origin of Universe, Earth & Theories of Origin of Life (Oparin-Haldane & Miller''s Experiment)', 'https://www.youtube.com/watch?v=x3U83f9eFSo&end=3097s', true, 1),
('65d29b56-0440-3206-0000-000000000002', '65d29b56-0440-2206-0000-000000000002', 'VIDEO', 'Theories of Evolution: Lamarckism, Darwinian Natural Selection & Hugo de Vries Mutation Theory', 'https://www.youtube.com/watch?v=x3U83f9eFSo&t=3097s&end=7023s', true, 1),
('65d29b56-0440-3206-0000-000000000003', '65d29b56-0440-2206-0000-000000000003', 'VIDEO', 'Evidences for Evolution: Paleontological, Comparative Anatomy (Homology vs Analogy) & Embryology', 'https://www.youtube.com/watch?v=x3U83f9eFSo&t=7023s&end=8795s', true, 1),
('65d29b56-0440-3206-0000-000000000004', '65d29b56-0440-2206-0000-000000000004', 'VIDEO', 'Hardy-Weinberg Principle, Evolutionary Forces (Gene Flow, Genetic Drift) & Adaptive Radiation', 'https://www.youtube.com/watch?v=x3U83f9eFSo&t=8795s&end=11988s', true, 1),
('65d29b56-0440-3206-0000-000000000005', '65d29b56-0440-2206-0000-000000000005', 'VIDEO', 'Biological Evolution Timeline (Plants & Animals) & Detailed Stages of Human Evolution', 'https://www.youtube.com/watch?v=x3U83f9eFSo&t=11988s&end=13436s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
