-- V189__seed_class11_english_ch19_classified_ads_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 19 (Creative Writing: Classified Advertisements)
-- Video: Dear Sir (Advertisement Writing | Advertisement Writing Format | Class 9/10/11/12 | CbRHAX_MvnM)
-- 100% Zero-Gap Single Master Lecture (0s to 1313s / 21m 53s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 19
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000019'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000019';

-- 2. Insert 1 Verified Master Topic for Chapter 19
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2119-0000-000000000001', '65d29b56-0301-1100-0000-000000000019', 'Writing Skills: Classified Advertisements (Format, Types: Situation Vacant/Wanted, For Sale, To Let & Solved Questions)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (1313s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3119-0000-000000000001', '65d29b56-0301-2119-0000-000000000001', 'VIDEO', 'Writing Skills: Classified Advertisements (Format, Types: Situation Vacant/Wanted, For Sale, To Let & Solved Questions)', 'https://www.youtube.com/watch?v=CbRHAX_MvnM&end=1313s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
