-- V441__seed_class12_political_science_ch03_contemporary_south_asia_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 3 (Contemporary South Asia)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (XHrnMLKEx-Q)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3394s)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Contemporary South Asia)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000003';

-- 2. Insert 4 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2203-0000-000000000001', '65d29b56-0028-1200-0000-000000000003', 'Geopolitical Dimensions of South Asia & The Struggle Between Military Rule and Democracy in Pakistan', 1, true),
('65d29b56-0028-2203-0000-000000000002', '65d29b56-0028-1200-0000-000000000003', 'Democratic Evolution in Bangladesh & Democratic Transition from Monarchy in Nepal and Bhutan', 2, true),
('65d29b56-0028-2203-0000-000000000003', '65d29b56-0028-1200-0000-000000000003', 'Ethnic Conflict in Sri Lanka (Sinhalese vs Tamils / LTTE) & Democratic Resilience in Island Nations', 3, true),
('65d29b56-0028-2203-0000-000000000004', '65d29b56-0028-1200-0000-000000000003', 'India-Pakistan Conflicts, Kashmir Issue & Regional Peace Initiatives (SAARC, BIMSTEC & SAFTA)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3203-0000-000000000001', '65d29b56-0028-2203-0000-000000000001', 'VIDEO', 'Geopolitical Dimensions of South Asia & The Struggle Between Military Rule and Democracy in Pakistan', 'https://www.youtube.com/watch?v=XHrnMLKEx-Q&end=840s', true, 1),
('65d29b56-0028-3203-0000-000000000002', '65d29b56-0028-2203-0000-000000000002', 'VIDEO', 'Democratic Evolution in Bangladesh & Democratic Transition from Monarchy in Nepal and Bhutan', 'https://www.youtube.com/watch?v=XHrnMLKEx-Q&t=840s&end=1690s', true, 1),
('65d29b56-0028-3203-0000-000000000003', '65d29b56-0028-2203-0000-000000000003', 'VIDEO', 'Ethnic Conflict in Sri Lanka (Sinhalese vs Tamils / LTTE) & Democratic Resilience in Island Nations', 'https://www.youtube.com/watch?v=XHrnMLKEx-Q&t=1690s&end=2540s', true, 1),
('65d29b56-0028-3203-0000-000000000004', '65d29b56-0028-2203-0000-000000000004', 'VIDEO', 'India-Pakistan Conflicts, Kashmir Issue & Regional Peace Initiatives (SAARC, BIMSTEC & SAFTA)', 'https://www.youtube.com/watch?v=XHrnMLKEx-Q&t=2540s&end=3394s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
