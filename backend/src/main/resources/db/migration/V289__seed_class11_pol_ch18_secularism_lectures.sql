-- V289__seed_class11_pol_ch18_secularism_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 18: Secularism
-- Masterclass Video: Next Toppers - 11th Humanities (eYQvW6G-gGA)
-- 100% Zero-Gap Continuous Timeline: 0s to 5455s (01:30:55, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 18
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000018'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000018';

-- 2. Insert 4 Verified Master Subtopics for Chapter 18
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2118-0000-000000000001', '65d29b56-0028-1100-0000-000000000018', 'What is Secularism? Inter-Religious & Intra-Religious Domination & The Secular State', 1, true),
('65d29b56-0028-2118-0000-000000000002', '65d29b56-0028-1100-0000-000000000018', 'Western Model of Secularism: Strict Separation, Mutual Exclusion & Non-Intervention', 2, true),
('65d29b56-0028-2118-0000-000000000003', '65d29b56-0028-1100-0000-000000000018', 'Indian Model of Secularism: Principled Distance, Equality & State-Supported Reform', 3, true),
('65d29b56-0028-2118-0000-000000000004', '65d29b56-0028-1100-0000-000000000018', 'Criticisms of Indian Secularism: Anti-Religious, Western Import, Minoritism & Vote Bank Politics', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 32:52 (0s to 1972s)
('65d29b56-0028-3118-0000-000000000001', '65d29b56-0028-2118-0000-000000000001', 'VIDEO', 'What is Secularism? Inter-Religious & Intra-Religious Domination & The Secular State (Opposing Inter-Religious Oppression: 1984 Anti-Sikh Violence, Kashmiri Pandits, Gujarat 2002, Intra-Religious Domination: Caste Oppression, Gender Injustice, Characteristics of a Secular State vs Theocratic State)', 'https://www.youtube.com/watch?v=eYQvW6G-gGA&t=0s&end=1972s', true, 1),

-- Topic 2: 32:52 to 41:40 (1972s to 2500s)
('65d29b56-0028-3118-0000-000000000002', '65d29b56-0028-2118-0000-000000000002', 'VIDEO', 'Western Model of Secularism: Strict Separation, Mutual Exclusion & Non-Intervention (American & European Experience: Wall of Separation between Church and State, Religion as Purely Private Affair, State Cannot Aid or Reform Religion, French Laïcité Model Ban on Religious Symbols)', 'https://www.youtube.com/watch?v=eYQvW6G-gGA&t=1972s&end=2500s', true, 1),

-- Topic 3: 41:40 to 01:07:26 (2500s to 4046s)
('65d29b56-0028-3118-0000-000000000003', '65d29b56-0028-2118-0000-000000000003', 'VIDEO', 'Indian Model of Secularism: Principled Distance, Equality & State-Supported Reform (Multireligious Reality, Protecting Rights of Religious Minorities Articles 29-30, Principled Distance Concept by Rajeev Bhargava, State Intervention to Abolish Untouchability, Sati & Enact Hindu Code Bills)', 'https://www.youtube.com/watch?v=eYQvW6G-gGA&t=2500s&end=4046s', true, 1),

-- Topic 4: 01:07:26 to 01:30:55 (4046s to 5455s)
('65d29b56-0028-3118-0000-000000000004', '65d29b56-0028-2118-0000-000000000004', 'VIDEO', 'Criticisms of Indian Secularism: Anti-Religious, Western Import, Minoritism & Vote Bank Politics (Critique 1: Anti-Religious Counter-Arguments, Critique 2: Western Import vs Indigenous Roots, Critique 3: Minoritism / Appeasement vs Genuine Equality, Critique 4: Interventionist Overreach, Defending Democratic Secularism in Globalized World)', 'https://www.youtube.com/watch?v=eYQvW6G-gGA&t=4046s&end=5455s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
