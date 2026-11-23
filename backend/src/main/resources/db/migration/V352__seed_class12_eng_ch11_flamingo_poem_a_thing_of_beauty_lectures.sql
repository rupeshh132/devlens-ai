-- V352__seed_class12_eng_ch11_flamingo_poem_a_thing_of_beauty_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 11 (Flamingo Poem: A Thing of Beauty)
-- Video: Simran Sahni (Board Exam Masterclass) (xysZ0U5cnNk)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 840s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 11 (Flamingo Poem: A Thing of Beauty)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000011';

-- 2. Insert 3 Verified Master Topics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2211-0000-000000000001', '65d29b56-0301-1200-0000-000000000011', '"A Thing of Beauty is a Joy Forever": Everlasting Loveliness, Quiet Bower, Health & Quiet Breathing', 1, true),
('65d29b56-0301-2211-0000-000000000002', '65d29b56-0301-1200-0000-000000000011', 'Dispelling Despondence & Dark Spirits: Keats'' Catalog of Natural Wonders (Sun, Moon, Trees, Daffodils)', 2, true),
('65d29b56-0301-2211-0000-000000000003', '65d29b56-0301-1200-0000-000000000011', 'Grandeur of the Mighty Dead, Endless Fountain of Immortal Drink, Literary Devices & RTC Practice', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3211-0000-000000000001', '65d29b56-0301-2211-0000-000000000001', 'VIDEO', '"A Thing of Beauty is a Joy Forever": Everlasting Loveliness, Quiet Bower, Health & Quiet Breathing', 'https://www.youtube.com/watch?v=xysZ0U5cnNk&end=280s', true, 1),
('65d29b56-0301-3211-0000-000000000002', '65d29b56-0301-2211-0000-000000000002', 'VIDEO', 'Dispelling Despondence & Dark Spirits: Keats'' Catalog of Natural Wonders (Sun, Moon, Trees, Daffodils)', 'https://www.youtube.com/watch?v=xysZ0U5cnNk&t=280s&end=580s', true, 1),
('65d29b56-0301-3211-0000-000000000003', '65d29b56-0301-2211-0000-000000000003', 'VIDEO', 'Grandeur of the Mighty Dead, Endless Fountain of Immortal Drink, Literary Devices & RTC Practice', 'https://www.youtube.com/watch?v=xysZ0U5cnNk&t=580s&end=840s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
