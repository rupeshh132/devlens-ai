-- V62__seed_class10_hist_ch2_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 10 History Chapter 2 (Nationalism in India)
-- Video: Warrior 2026 (Nationalism In India One Shot: FULL CHAPTER | t3DuTsx8Rmw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5265s)

-- 1. Remove old placeholder topics & content items for History Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000002';

-- 2. Insert 6 Student-Friendly Master Topics for History Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2002-0000-000000000001', '65d29b56-3333-1000-0000-000000000002', 'The First World War, Early Satyagraha Movements & The Rowlatt Act Crisis', 1, true),
('65d29b56-3333-2002-0000-000000000002', '65d29b56-3333-1000-0000-000000000002', 'The Khilafat Alliance & Launch of the Non-Cooperation Movement in Towns', 2, true),
('65d29b56-3333-2002-0000-000000000003', '65d29b56-3333-1000-0000-000000000002', 'Rebellion in Countryside, Swaraj in Plantations, Chauri Chaura & Bardoli Satyagraha', 3, true),
('65d29b56-3333-2002-0000-000000000004', '65d29b56-3333-1000-0000-000000000002', 'Towards Civil Disobedience: Swaraj Party, Simon Commission, Lahore Session & The Salt March', 4, true),
('65d29b56-3333-2002-0000-000000000005', '65d29b56-3333-1000-0000-000000000002', 'Social Dynamics, Participant Perspectives & The Limits of Civil Disobedience (Poona Pact)', 5, true),
('65d29b56-3333-2002-0000-000000000006', '65d29b56-3333-1000-0000-000000000002', 'The Sense of Collective Belonging, Quit India Movement (1942) & Final Board Exam Mastery', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3002-0000-000000000001', '65d29b56-3333-2002-0000-000000000001', 'VIDEO', 'The First World War, Early Satyagraha Movements & The Rowlatt Act Crisis', 'https://www.youtube.com/watch?v=t3DuTsx8Rmw&end=1110s', true, 1),
('65d29b56-3333-3002-0000-000000000002', '65d29b56-3333-2002-0000-000000000002', 'VIDEO', 'The Khilafat Alliance & Launch of the Non-Cooperation Movement in Towns', 'https://www.youtube.com/watch?v=t3DuTsx8Rmw&t=1110s&end=1558s', true, 1),
('65d29b56-3333-3002-0000-000000000003', '65d29b56-3333-2002-0000-000000000003', 'VIDEO', 'Rebellion in Countryside, Swaraj in Plantations, Chauri Chaura & Bardoli Satyagraha', 'https://www.youtube.com/watch?v=t3DuTsx8Rmw&t=1558s&end=2702s', true, 1),
('65d29b56-3333-3002-0000-000000000004', '65d29b56-3333-2002-0000-000000000004', 'VIDEO', 'Towards Civil Disobedience: Swaraj Party, Simon Commission, Lahore Session & The Salt March', 'https://www.youtube.com/watch?v=t3DuTsx8Rmw&t=2702s&end=4013s', true, 1),
('65d29b56-3333-3002-0000-000000000005', '65d29b56-3333-2002-0000-000000000005', 'VIDEO', 'Social Dynamics, Participant Perspectives & The Limits of Civil Disobedience (Poona Pact)', 'https://www.youtube.com/watch?v=t3DuTsx8Rmw&t=4013s&end=4490s', true, 1),
('65d29b56-3333-3002-0000-000000000006', '65d29b56-3333-2002-0000-000000000006', 'VIDEO', 'The Sense of Collective Belonging, Quit India Movement (1942) & Final Board Exam Mastery', 'https://www.youtube.com/watch?v=t3DuTsx8Rmw&t=4490s&end=5265s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
