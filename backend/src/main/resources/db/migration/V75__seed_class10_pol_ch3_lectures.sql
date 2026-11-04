-- V75__seed_class10_pol_ch3_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 10 Political Science Chapter 3 / Overall SST Chapter 15 (Gender, Religion and Caste)
-- Video: Ujjvala Ma'am / Physics Wallah (Gender, Religion and Caste ONE SHOT | rq8QIxQMVn4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4545s / 01h 15m 45s)

-- 1. Remove old placeholder topics & content items for Political Science Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000015';

-- 2. Insert 3 NCERT-Aligned Master Topics for Political Science Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2015-0000-000000000001', '65d29b56-3333-1000-0000-000000000015', 'Gender and Politics: Sexual Division of Labour, Feminist Movements & Political Representation', 1, true),
('65d29b56-3333-2015-0000-000000000002', '65d29b56-3333-1000-0000-000000000015', 'Religion, Communalism and Politics & The Constitutional Framework of a Secular State', 2, true),
('65d29b56-3333-2015-0000-000000000003', '65d29b56-3333-1000-0000-000000000015', 'Caste and Politics: Caste Inequalities, Caste in Politics & Politics in Caste', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 4545s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3015-0000-000000000001', '65d29b56-3333-2015-0000-000000000001', 'VIDEO', 'Gender and Politics: Sexual Division of Labour, Feminist Movements & Political Representation', 'https://www.youtube.com/watch?v=rq8QIxQMVn4&end=2231s', true, 1),
('65d29b56-3333-3015-0000-000000000002', '65d29b56-3333-2015-0000-000000000002', 'VIDEO', 'Religion, Communalism and Politics & The Constitutional Framework of a Secular State', 'https://www.youtube.com/watch?v=rq8QIxQMVn4&t=2231s&end=3535s', true, 1),
('65d29b56-3333-3015-0000-000000000003', '65d29b56-3333-2015-0000-000000000003', 'VIDEO', 'Caste and Politics: Caste Inequalities, Caste in Politics & Politics in Caste', 'https://www.youtube.com/watch?v=rq8QIxQMVn4&t=3535s&end=4545s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
