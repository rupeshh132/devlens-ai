-- V288__seed_class11_pol_ch17_nationalism_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 17: Nationalism
-- Masterclass Video: Next Toppers - 11th Humanities (7IaMW9QJd7Q)
-- 100% Zero-Gap Continuous Timeline: 0s to 4935s (01:22:15, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 17
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000017'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000017';

-- 2. Insert 4 Verified Master Subtopics for Chapter 17
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2117-0000-000000000001', '65d29b56-0028-1100-0000-000000000017', 'Nations and Nationalism: Unifying Power, Divisive Potential & Complexities', 1, true),
('65d29b56-0028-2117-0000-000000000002', '65d29b56-0028-1100-0000-000000000017', 'Constituent Elements of Nationhood: Shared Beliefs, History, Territory & Political Ideals', 2, true),
('65d29b56-0028-2117-0000-000000000003', '65d29b56-0028-1100-0000-000000000017', 'National Self-Determination: Quest for Sovereign Statehood & Paradox of Minorities', 3, true),
('65d29b56-0028-2117-0000-000000000004', '65d29b56-0028-1100-0000-000000000017', 'Nationalism and Pluralism: Democratic Inclusion, Minority Rights vs Exclusive Homogenization', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 26:17 (0s to 1577s)
('65d29b56-0028-3117-0000-000000000001', '65d29b56-0028-2117-0000-000000000001', 'VIDEO', 'Nations and Nationalism: Unifying Power, Divisive Potential & Complexities (Dual Nature of Nationalism: Anti-Colonial Liberation vs Aggressive Expansionism, 19th Century European Unifications Germany & Italy, Fall of Empires, Distinction between Nation, State & Government)', 'https://www.youtube.com/watch?v=7IaMW9QJd7Q&t=0s&end=1577s', true, 1),

-- Topic 2: 26:17 to 45:55 (1577s to 2755s)
('65d29b56-0028-3117-0000-000000000002', '65d29b56-0028-2117-0000-000000000002', 'VIDEO', 'Constituent Elements of Nationhood: Shared Beliefs, History, Territory & Political Ideals (Not Purely Language or Religion: Shared Belief in Belonging, Sense of Historical Continuity, Emotional Attachment to Homeland/Territory, Shared Political Vision: Democracy & Republicanism)', 'https://www.youtube.com/watch?v=7IaMW9QJd7Q&t=1577s&end=2755s', true, 1),

-- Topic 3: 45:55 to 57:24 (2755s to 3444s)
('65d29b56-0028-3117-0000-000000000003', '65d29b56-0028-2117-0000-000000000003', 'VIDEO', 'National Self-Determination: Quest for Sovereign Statehood & Paradox of Minorities (Woodrow Wilson 14 Points, Principle of One Nation One State, Reorganization of Post-WWI Europe, Why Every Cultural Group Cannot Have an Independent State, Forced Migrations & Wars)', 'https://www.youtube.com/watch?v=7IaMW9QJd7Q&t=2755s&end=3444s', true, 1),

-- Topic 4: 57:24 to 01:22:15 (3444s to 4935s)
('65d29b56-0028-3117-0000-000000000004', '65d29b56-0028-2117-0000-000000000004', 'VIDEO', 'Nationalism and Pluralism: Democratic Inclusion, Minority Rights vs Exclusive Homogenization (Re-envisioning Democratic Nation-States, Accommodating Plural Identities, Granting Autonomy and Cultural Rights without Secession, Rabindranath Tagore Warning against Narrow Patriotism)', 'https://www.youtube.com/watch?v=7IaMW9QJd7Q&t=3444s&end=4935s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
