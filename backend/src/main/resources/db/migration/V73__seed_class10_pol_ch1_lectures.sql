-- V73__seed_class10_pol_ch1_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 10 Political Science Chapter 1 / Overall SST Chapter 13 (Power-sharing)
-- Video: Digraj Singh Rajput (Power Sharing | New One Shot Full Chapter | Civics Chapter 1 Class 10th CBSE 2026-27 | FngG6lgrNrk)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3236s / 53m 56s)

-- 1. Remove old placeholder topics & content items for Political Science Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000013';

-- 2. Insert 3 NCERT-Aligned Master Topics for Political Science Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2013-0000-000000000001', '65d29b56-3333-1000-0000-000000000013', 'Belgium and Sri Lanka: Ethnic Diversity, Majoritarianism & Accommodation', 1, true),
('65d29b56-3333-2013-0000-000000000002', '65d29b56-3333-1000-0000-000000000013', 'Why Power Sharing is Desirable: Prudential vs Moral Reasons', 2, true),
('65d29b56-3333-2013-0000-000000000003', '65d29b56-3333-1000-0000-000000000013', 'Forms of Power Sharing: Horizontal, Vertical, Social Groups & Coalitions', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 3236s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3013-0000-000000000001', '65d29b56-3333-2013-0000-000000000001', 'VIDEO', 'Belgium and Sri Lanka: Ethnic Diversity, Majoritarianism & Accommodation', 'https://www.youtube.com/watch?v=FngG6lgrNrk&end=1760s', true, 1),
('65d29b56-3333-3013-0000-000000000002', '65d29b56-3333-2013-0000-000000000002', 'VIDEO', 'Why Power Sharing is Desirable: Prudential vs Moral Reasons', 'https://www.youtube.com/watch?v=FngG6lgrNrk&t=1760s&end=2210s', true, 1),
('65d29b56-3333-3013-0000-000000000003', '65d29b56-3333-2013-0000-000000000003', 'VIDEO', 'Forms of Power Sharing: Horizontal, Vertical, Social Groups & Coalitions', 'https://www.youtube.com/watch?v=FngG6lgrNrk&t=2210s&end=3236s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
