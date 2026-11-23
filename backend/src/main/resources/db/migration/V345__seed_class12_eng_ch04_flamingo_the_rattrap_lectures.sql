-- V345__seed_class12_eng_ch04_flamingo_the_rattrap_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 4 (Flamingo: The Rattrap)
-- Video: Simran Sahni (Board Exam Masterclass) (EWFdhhPL0FM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1480s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 4 (Flamingo: The Rattrap)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000004';

-- 2. Insert 4 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2204-0000-000000000001', '65d29b56-0301-1200-0000-000000000004', 'The Peddler''s Philosophy of the World as a Rattrap & The Old Crofter''s Hospitality and 30 Kronor Theft', 1, true),
('65d29b56-0301-2204-0000-000000000002', '65d29b56-0301-1200-0000-000000000004', 'Trapped in the Forest Maze, Reaching Ramsjo Ironworks & The Ironmaster''s Mistaken Identity', 2, true),
('65d29b56-0301-2204-0000-000000000003', '65d29b56-0301-1200-0000-000000000004', 'Edla Willmansson''s Pure Empathy, Christmas Eve & The Revelation of the Peddler''s True Identity', 3, true),
('65d29b56-0301-2204-0000-000000000004', '65d29b56-0301-1200-0000-000000000004', 'The Christmas Gift, The Letter Signed as Captain von Stahle, Redemption through Kindness & NCERT Q&A', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3204-0000-000000000001', '65d29b56-0301-2204-0000-000000000001', 'VIDEO', 'The Peddler''s Philosophy of the World as a Rattrap & The Old Crofter''s Hospitality and 30 Kronor Theft', 'https://www.youtube.com/watch?v=EWFdhhPL0FM&end=380s', true, 1),
('65d29b56-0301-3204-0000-000000000002', '65d29b56-0301-2204-0000-000000000002', 'VIDEO', 'Trapped in the Forest Maze, Reaching Ramsjo Ironworks & The Ironmaster''s Mistaken Identity', 'https://www.youtube.com/watch?v=EWFdhhPL0FM&t=380s&end=760s', true, 1),
('65d29b56-0301-3204-0000-000000000003', '65d29b56-0301-2204-0000-000000000003', 'VIDEO', 'Edla Willmansson''s Pure Empathy, Christmas Eve & The Revelation of the Peddler''s True Identity', 'https://www.youtube.com/watch?v=EWFdhhPL0FM&t=760s&end=1140s', true, 1),
('65d29b56-0301-3204-0000-000000000004', '65d29b56-0301-2204-0000-000000000004', 'VIDEO', 'The Christmas Gift, The Letter Signed as Captain von Stahle, Redemption through Kindness & NCERT Q&A', 'https://www.youtube.com/watch?v=EWFdhhPL0FM&t=1140s&end=1480s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
