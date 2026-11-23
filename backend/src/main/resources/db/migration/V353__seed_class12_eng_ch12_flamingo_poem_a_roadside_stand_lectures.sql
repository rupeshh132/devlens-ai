-- V353__seed_class12_eng_ch12_flamingo_poem_a_roadside_stand_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 12 (Flamingo Poem: A Roadside Stand)
-- Video: Simran Sahni (Board Exam Masterclass) (_4lyX8YkGug)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1210s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Flamingo Poem: A Roadside Stand)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000012';

-- 2. Insert 3 Verified Master Topics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2212-0000-000000000001', '65d29b56-0301-1200-0000-000000000012', 'The Roadside Stand by the Highway, Rural Sellers'' Humble Plea for City Cash & Lack of Patrons', 1, true),
('65d29b56-0301-2212-0000-000000000002', '65d29b56-0301-1200-0000-000000000012', 'Cruel Indifference of Passing Motorists, "Polished Traffic" & Satire on "Greedy Good-Doers"', 2, true),
('65d29b56-0301-2212-0000-000000000003', '65d29b56-0301-1200-0000-000000000012', 'The Poet''s Deep Anguish, "Childish Longing in Vain", Critique of Selfish Urban Economy & Board RTCs', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3212-0000-000000000001', '65d29b56-0301-2212-0000-000000000001', 'VIDEO', 'The Roadside Stand by the Highway, Rural Sellers'' Humble Plea for City Cash & Lack of Patrons', 'https://www.youtube.com/watch?v=_4lyX8YkGug&end=400s', true, 1),
('65d29b56-0301-3212-0000-000000000002', '65d29b56-0301-2212-0000-000000000002', 'VIDEO', 'Cruel Indifference of Passing Motorists, "Polished Traffic" & Satire on "Greedy Good-Doers"', 'https://www.youtube.com/watch?v=_4lyX8YkGug&t=400s&end=820s', true, 1),
('65d29b56-0301-3212-0000-000000000003', '65d29b56-0301-2212-0000-000000000003', 'VIDEO', 'The Poet''s Deep Anguish, "Childish Longing in Vain", Critique of Selfish Urban Economy & Board RTCs', 'https://www.youtube.com/watch?v=_4lyX8YkGug&t=820s&end=1210s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
