-- V74__seed_class10_pol_ch2_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 10 Political Science Chapter 2 / Overall SST Chapter 14 (Federalism)
-- Video: Siddharth Sir / Physics Wallah (Federalism One Shot: FULL CHAPTER | Warrior 2026 | B_Gs1wyg6zw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4507s / 01h 15m 07s)

-- 1. Remove old placeholder topics & content items for Political Science Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000014';

-- 2. Insert 4 NCERT-Aligned Master Topics for Political Science Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2014-0000-000000000001', '65d29b56-3333-1000-0000-000000000014', 'What is Federalism? Key Features, Dual Objectives & Formation of Federations', 1, true),
('65d29b56-3333-2014-0000-000000000002', '65d29b56-3333-1000-0000-000000000014', 'What Makes India a Federal Country? Three Lists, Special Provisions & Role of Judiciary', 2, true),
('65d29b56-3333-2014-0000-000000000003', '65d29b56-3333-1000-0000-000000000014', 'How is Federalism Practised? Linguistic States, Language Policy & Centre-State Relations', 3, true),
('65d29b56-3333-2014-0000-000000000004', '65d29b56-3333-1000-0000-000000000014', 'Decentralisation in India: Panchayati Raj, Urban Local Bodies & Board Exam Questions', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 4507s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3014-0000-000000000001', '65d29b56-3333-2014-0000-000000000001', 'VIDEO', 'What is Federalism? Key Features, Dual Objectives & Formation of Federations', 'https://www.youtube.com/watch?v=B_Gs1wyg6zw&end=1505s', true, 1),
('65d29b56-3333-3014-0000-000000000002', '65d29b56-3333-2014-0000-000000000002', 'VIDEO', 'What Makes India a Federal Country? Three Lists, Special Provisions & Role of Judiciary', 'https://www.youtube.com/watch?v=B_Gs1wyg6zw&t=1505s&end=2836s', true, 1),
('65d29b56-3333-3014-0000-000000000003', '65d29b56-3333-2014-0000-000000000003', 'VIDEO', 'How is Federalism Practised? Linguistic States, Language Policy & Centre-State Relations', 'https://www.youtube.com/watch?v=B_Gs1wyg6zw&t=2836s&end=3589s', true, 1),
('65d29b56-3333-3014-0000-000000000004', '65d29b56-3333-2014-0000-000000000004', 'VIDEO', 'Decentralisation in India: Panchayati Raj, Urban Local Bodies & Board Exam Questions', 'https://www.youtube.com/watch?v=B_Gs1wyg6zw&t=3589s&end=4507s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
