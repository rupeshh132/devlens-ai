-- V178__seed_class11_english_ch08_the_voice_of_the_rain_lectures.sql
-- Seeds verified 1 Master Topic and Video Lecture Timestamp for Class 11 English Core Chapter 8 (Hornbill Poem: The Voice of the Rain)
-- Video: Educational Bhaiya (The voice of the Rain Class 11 Full Animated Explained | qUb3iYpYafc)
-- 100% Zero-Gap Single Master Lecture (0s to 350s / 5m 50s, Outro promo trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 8
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1100-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1100-0000-000000000008';

-- 2. Insert 1 Verified Master Topic for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2108-0000-000000000001', '65d29b56-0301-1100-0000-000000000008', 'The Voice of the Rain (Complete Poem Analysis, Cyclic Nature of Rain, Parallel with Song & Poetic Devices)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Item with Clean Outro Trimming (350s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3108-0000-000000000001', '65d29b56-0301-2108-0000-000000000001', 'VIDEO', 'The Voice of the Rain (Complete Poem Analysis, Cyclic Nature of Rain, Parallel with Song & Poetic Devices)', 'https://www.youtube.com/watch?v=qUb3iYpYafc&end=350s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
