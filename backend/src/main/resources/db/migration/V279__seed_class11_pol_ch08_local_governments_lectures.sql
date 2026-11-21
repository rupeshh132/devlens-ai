-- V279__seed_class11_pol_ch08_local_governments_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 8: Local Governments
-- Masterclass Video: Next Toppers - 11th Humanities (bf9Td_-1Osk)
-- 100% Zero-Gap Continuous Timeline: 0s to 5160s (01:26:00, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 8
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000008';

-- 2. Insert 4 Verified Master Subtopics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2108-0000-000000000001', '65d29b56-0028-1100-0000-000000000008', 'Why Local Governments? Grassroots Democracy, Efficiency & Direct Citizen Participation', 1, true),
('65d29b56-0028-2108-0000-000000000002', '65d29b56-0028-1100-0000-000000000008', 'Historical Growth of Local Government in India: From Ancient Sabhas to Post-Independence', 2, true),
('65d29b56-0028-2108-0000-000000000003', '65d29b56-0028-1100-0000-000000000008', 'The 73rd and 74th Constitutional Amendment Acts: Panchayati Raj & Urban Municipalities', 3, true),
('65d29b56-0028-2108-0000-000000000004', '65d29b56-0028-1100-0000-000000000008', 'Implementation, Devolution of 29/18 Subjects, Financial Autonomy & Ongoing Challenges', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 17:24 (0s to 1044s)
('65d29b56-0028-3108-0000-000000000001', '65d29b56-0028-2108-0000-000000000001', 'VIDEO', 'Why Local Governments? Grassroots Democracy, Efficiency & Direct Citizen Participation (Concept of Local Government, Proximity to Citizens, Quick Problem Solving, Decentralized Decision Making & Accountability at the Grassroots)', 'https://www.youtube.com/watch?v=bf9Td_-1Osk&t=0s&end=1044s', true, 1),

-- Topic 2: 17:24 to 42:42 (1044s to 2562s)
('65d29b56-0028-3108-0000-000000000002', '65d29b56-0028-2108-0000-000000000002', 'VIDEO', 'Historical Growth of Local Government in India: From Ancient Sabhas to Post-Independence (Lord Ripon Resolution 1882, Government of India Act 1919/1935, Village Panchayats under Article 40 DPSP, Community Development Programme 1952 & Balwant Rai Mehta Committee)', 'https://www.youtube.com/watch?v=bf9Td_-1Osk&t=1044s&end=2562s', true, 1),

-- Topic 3: 42:42 to 01:11:17 (2562s to 4277s)
('65d29b56-0028-3108-0000-000000000003', '65d29b56-0028-2108-0000-000000000003', 'VIDEO', 'The 73rd and 74th Constitutional Amendment Acts: Panchayati Raj & Urban Municipalities (Three-Tier PRI Structure: Gram Panchayat, Panchayat Samiti, Zilla Parishad, Gram Sabha Mandate, Mandatory Elections every 5 Years, 33% Women Reservation, State Election Commission)', 'https://www.youtube.com/watch?v=bf9Td_-1Osk&t=2562s&end=4277s', true, 1),

-- Topic 4: 01:11:17 to 01:26:00 (4277s to 5160s)
('65d29b56-0028-3108-0000-000000000004', '65d29b56-0028-2108-0000-000000000004', 'VIDEO', 'Implementation, Devolution of 29/18 Subjects, Financial Autonomy & Ongoing Challenges (11th Schedule 29 Subjects & 12th Schedule 18 Subjects, State Finance Commission SFC, Dependence on State Grants, Empowerment of Women Leaders & Future Outlook)', 'https://www.youtube.com/watch?v=bf9Td_-1Osk&t=4277s&end=5160s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
