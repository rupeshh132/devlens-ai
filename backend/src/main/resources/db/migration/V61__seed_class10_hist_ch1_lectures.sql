-- V61__seed_class10_hist_ch1_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 10 History Chapter 1 (The Rise of Nationalism in Europe)
-- Video: Warrior 2026 (The Rise of Nationalism in Europe One Shot: FULL CHAPTER | ySNeX4av-uA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6238s)

-- 1. Remove old placeholder topics & content items for History Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000001';

-- 2. Insert 6 Student-Friendly Master Topics for History Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2001-0000-000000000001', '65d29b56-3333-1000-0000-000000000001', 'The French Revolution, Collective Identity & The Napoleonic Era', 1, true),
('65d29b56-3333-2001-0000-000000000002', '65d29b56-3333-1000-0000-000000000001', 'Post-1815 Conservative Order & The Age of Revolutions (1830–1848)', 2, true),
('65d29b56-3333-2001-0000-000000000003', '65d29b56-3333-1000-0000-000000000001', 'Social Classes, Liberal Ideology, Zollverein & Mid-Chapter Check', 3, true),
('65d29b56-3333-2001-0000-000000000004', '65d29b56-3333-1000-0000-000000000001', 'Romantic Nationalism, Cultural Resistance & The 1848 Liberal Revolution', 4, true),
('65d29b56-3333-2001-0000-000000000005', '65d29b56-3333-1000-0000-000000000001', 'The Making of Nation-States: Unification of Germany, Italy & Britain', 5, true),
('65d29b56-3333-2001-0000-000000000006', '65d29b56-3333-1000-0000-000000000001', 'Visualising the Nation, Imperialism, Balkan Crisis & Board Practice', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3001-0000-000000000001', '65d29b56-3333-2001-0000-000000000001', 'VIDEO', 'The French Revolution, Collective Identity & The Napoleonic Era', 'https://www.youtube.com/watch?v=ySNeX4av-uA&end=2042s', true, 1),
('65d29b56-3333-3001-0000-000000000002', '65d29b56-3333-2001-0000-000000000002', 'VIDEO', 'Post-1815 Conservative Order & The Age of Revolutions (1830–1848)', 'https://www.youtube.com/watch?v=ySNeX4av-uA&t=2042s&end=3507s', true, 1),
('65d29b56-3333-3001-0000-000000000003', '65d29b56-3333-2001-0000-000000000003', 'VIDEO', 'Social Classes, Liberal Ideology, Zollverein & Mid-Chapter Check', 'https://www.youtube.com/watch?v=ySNeX4av-uA&t=3507s&end=4122s', true, 1),
('65d29b56-3333-3001-0000-000000000004', '65d29b56-3333-2001-0000-000000000004', 'VIDEO', 'Romantic Nationalism, Cultural Resistance & The 1848 Liberal Revolution', 'https://www.youtube.com/watch?v=ySNeX4av-uA&t=4122s&end=4845s', true, 1),
('65d29b56-3333-3001-0000-000000000005', '65d29b56-3333-2001-0000-000000000005', 'VIDEO', 'The Making of Nation-States: Unification of Germany, Italy & Britain', 'https://www.youtube.com/watch?v=ySNeX4av-uA&t=4845s&end=5572s', true, 1),
('65d29b56-3333-3001-0000-000000000006', '65d29b56-3333-2001-0000-000000000006', 'VIDEO', 'Visualising the Nation, Imperialism, Balkan Crisis & Board Practice', 'https://www.youtube.com/watch?v=ySNeX4av-uA&t=5572s&end=6238s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
