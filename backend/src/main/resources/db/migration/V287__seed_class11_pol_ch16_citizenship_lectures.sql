-- V287__seed_class11_pol_ch16_citizenship_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 16: Citizenship
-- Masterclass Video: Next Toppers - 11th Humanities (LjSBhXVT5fY)
-- 100% Zero-Gap Continuous Timeline: 0s to 5860s (01:37:40, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 16
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000016'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000016';

-- 2. Insert 4 Verified Master Subtopics for Chapter 16
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2116-0000-000000000001', '65d29b56-0028-1100-0000-000000000016', 'Introduction to Citizenship: Full and Equal Membership in a Political Community', 1, true),
('65d29b56-0028-2116-0000-000000000002', '65d29b56-0028-1100-0000-000000000016', 'Equal Rights in Practice: Rights of Migrants, Urban Poor, Slum Dwellers & Protest', 2, true),
('65d29b56-0028-2116-0000-000000000003', '65d29b56-0028-1100-0000-000000000016', 'Citizen and Nation: National Identity, Cultural Criteria vs Democratic Inclusiveness', 3, true),
('65d29b56-0028-2116-0000-000000000004', '65d29b56-0028-1100-0000-000000000016', 'Universal Citizenship, Problem of Refugees/Stateless People & Global Citizenship', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 38:00 (0s to 2280s)
('65d29b56-0028-3116-0000-000000000001', '65d29b56-0028-2116-0000-000000000001', 'VIDEO', 'Introduction to Citizenship: Full and Equal Membership in a Political Community (Legal Status of Citizen vs Alien, T.H. Marshall Theory: Civil, Political and Social Rights, Reciprocal Obligations between State and Citizen, Equality of Rights)', 'https://www.youtube.com/watch?v=LjSBhXVT5fY&t=0s&end=2280s', true, 1),

-- Topic 2: 38:00 to 01:01:23 (2280s to 3683s)
('65d29b56-0028-3116-0000-000000000002', '65d29b56-0028-2116-0000-000000000002', 'VIDEO', 'Equal Rights in Practice: Rights of Migrants, Urban Poor, Slum Dwellers & Protest (Internal Migration in India, Nativist Resistance vs Constitutional Freedom of Movement Art 19(1)(d), Condition of Urban Slum Dwellers, Pavement Dwellers Bombay Case & Right to Peaceful Protest)', 'https://www.youtube.com/watch?v=LjSBhXVT5fY&t=2280s&end=3683s', true, 1),

-- Topic 3: 01:01:23 to 01:17:20 (3683s to 4640s)
('65d29b56-0028-3116-0000-000000000003', '65d29b56-0028-2116-0000-000000000003', 'VIDEO', 'Citizen and Nation: National Identity, Cultural Criteria vs Democratic Inclusiveness (Nation-State Framework, Criteria for Granting Citizenship: Ethno-Cultural vs Civic-Democratic Models, Indian Constitutional Secular Model: Birth, Descent, Registration, Naturalization, Citizenship Act 1955)', 'https://www.youtube.com/watch?v=LjSBhXVT5fY&t=3683s&end=4640s', true, 1),

-- Topic 4: 01:17:20 to 01:37:40 (4640s to 5860s)
('65d29b56-0028-3116-0000-000000000004', '65d29b56-0028-2116-0000-000000000004', 'VIDEO', 'Universal Citizenship, Problem of Refugees/Stateless People & Global Citizenship (Limits of National Citizenship, Millions of Stateless People & War Refugees Worldwide, Concept of Differentiated Citizenship for Disadvantaged Groups & Emergence of Global Citizenship Ideas)', 'https://www.youtube.com/watch?v=LjSBhXVT5fY&t=4640s&end=5860s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
