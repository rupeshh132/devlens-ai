-- V77__seed_class10_pol_ch5_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Political Science Chapter 5 / Overall SST Chapter 17 (Outcomes of Democracy)
-- Video: Digraj Singh Rajput (Outcomes of Democracy | New One Shot | JVBWKBYsvH4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3381s / 56m 21s)

-- 1. Remove old placeholder topics & content items for Political Science Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000017'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000017';

-- 2. Insert 5 NCERT-Aligned Master Topics for Political Science Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2017-0000-000000000001', '65d29b56-3333-1000-0000-000000000017', 'How Do We Assess Democracy''s Outcomes? Democratic vs Dictatorship Regimes & Expectations', 1, true),
('65d29b56-3333-2017-0000-000000000002', '65d29b56-3333-1000-0000-000000000017', 'Political Outcomes: Accountable, Responsive and Legitimate Government', 2, true),
('65d29b56-3333-2017-0000-000000000003', '65d29b56-3333-1000-0000-000000000017', 'Economic Outcomes: Economic Growth, Development & Reduction of Inequality and Poverty', 3, true),
('65d29b56-3333-2017-0000-000000000004', '65d29b56-3333-1000-0000-000000000017', 'Social Outcomes: Accommodation of Social Diversity & Negotiation of Differences', 4, true),
('65d29b56-3333-2017-0000-000000000005', '65d29b56-3333-1000-0000-000000000017', 'Dignity and Freedom of Citizens: Women''s Rights, Caste Equality & Test of Democracy', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 3381s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3017-0000-000000000001', '65d29b56-3333-2017-0000-000000000001', 'VIDEO', 'How Do We Assess Democracy''s Outcomes? Democratic vs Dictatorship Regimes & Expectations', 'https://www.youtube.com/watch?v=JVBWKBYsvH4&end=919s', true, 1),
('65d29b56-3333-3017-0000-000000000002', '65d29b56-3333-2017-0000-000000000002', 'VIDEO', 'Political Outcomes: Accountable, Responsive and Legitimate Government', 'https://www.youtube.com/watch?v=JVBWKBYsvH4&t=919s&end=1598s', true, 1),
('65d29b56-3333-3017-0000-000000000003', '65d29b56-3333-2017-0000-000000000003', 'VIDEO', 'Economic Outcomes: Economic Growth, Development & Reduction of Inequality and Poverty', 'https://www.youtube.com/watch?v=JVBWKBYsvH4&t=1598s&end=2297s', true, 1),
('65d29b56-3333-3017-0000-000000000004', '65d29b56-3333-2017-0000-000000000004', 'VIDEO', 'Social Outcomes: Accommodation of Social Diversity & Negotiation of Differences', 'https://www.youtube.com/watch?v=JVBWKBYsvH4&t=2297s&end=2842s', true, 1),
('65d29b56-3333-3017-0000-000000000005', '65d29b56-3333-2017-0000-000000000005', 'VIDEO', 'Dignity and Freedom of Citizens: Women''s Rights, Caste Equality & Test of Democracy', 'https://www.youtube.com/watch?v=JVBWKBYsvH4&t=2842s&end=3381s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
