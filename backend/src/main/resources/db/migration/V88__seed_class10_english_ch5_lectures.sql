-- V88__seed_class10_english_ch5_lectures.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for Class 10 English Chapter 5 (Glimpses of India)
-- Video: Kriti Di / Kriti Sharma (_EIF5nPScc0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2914s / 48m 34s)
-- Covers all 3 parts of NCERT: A Baker from Goa, Coorg, Tea from Assam

-- 1. Remove old placeholder topics & content items for English Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000005';

-- 2. Insert 3 NCERT-Aligned Master Topics for English Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2005-0000-000000000001', '65d29b56-4444-1000-0000-000000000005', 'Part 1: A Baker from Goa — Traditional Goan Pader, Bread-Making Heritage & Kabai', 1, true),
('65d29b56-4444-2005-0000-000000000002', '65d29b56-4444-1000-0000-000000000005', 'Part 2: Coorg — The Land of Rolling Hills, Kodavu Martial Heritage, Wildlife & Brahmagiri', 2, true),
('65d29b56-4444-2005-0000-000000000003', '65d29b56-4444-1000-0000-000000000005', 'Part 3: Tea from Assam — Rajvir & Pranjol''s Journey, Legends of Tea & Dhekiabari Tea Estate', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 2914s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3005-0000-000000000001', '65d29b56-4444-2005-0000-000000000001', 'VIDEO', 'Part 1: A Baker from Goa — Traditional Goan Pader, Bread-Making Heritage & Kabai', 'https://www.youtube.com/watch?v=_EIF5nPScc0&end=1040s', true, 1),
('65d29b56-4444-3005-0000-000000000002', '65d29b56-4444-2005-0000-000000000002', 'VIDEO', 'Part 2: Coorg — The Land of Rolling Hills, Kodavu Martial Heritage, Wildlife & Brahmagiri', 'https://www.youtube.com/watch?v=_EIF5nPScc0&t=1040s&end=2120s', true, 1),
('65d29b56-4444-3005-0000-000000000003', '65d29b56-4444-2005-0000-000000000003', 'VIDEO', 'Part 3: Tea from Assam — Rajvir & Pranjol''s Journey, Legends of Tea & Dhekiabari Tea Estate', 'https://www.youtube.com/watch?v=_EIF5nPScc0&t=2120s&end=2914s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
