-- V191__seed_class11_english_ch21_speech_writing_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 21 (Creative Writing: Speech Writing)
-- Video: Dear Sir (Speech Writing | Class 12th/11th/10th | Format, Ways & Tricks | 6jnbiukoKVo)
-- 100% Zero-Gap Single Master Lecture (0s to 1281s / 21m 21s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 21
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000021'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000021';

-- 2. Insert 1 Verified Master Topic for Chapter 21
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2121-0000-000000000001', '65d29b56-0301-1100-0000-000000000021', 'Writing Skills: Speech Writing (Marking Scheme, Formal Address, Layout, Fixed Lines & Model Practice)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (1281s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3121-0000-000000000001', '65d29b56-0301-2121-0000-000000000001', 'VIDEO', 'Writing Skills: Speech Writing (Marking Scheme, Formal Address, Layout, Fixed Lines & Model Practice)', 'https://www.youtube.com/watch?v=6jnbiukoKVo&end=1281s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
