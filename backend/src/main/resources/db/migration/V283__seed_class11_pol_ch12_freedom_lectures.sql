-- V283__seed_class11_pol_ch12_freedom_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 12: Freedom
-- Masterclass Video: Next Toppers - 11th Humanities (_CZ77VH0rC4)
-- 100% Zero-Gap Continuous Timeline: 0s to 5220s (01:27:00, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 12
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000012';

-- 2. Insert 4 Verified Master Subtopics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2112-0000-000000000001', '65d29b56-0028-1100-0000-000000000012', 'The Ideal of Freedom & What is Freedom? Swaraj (Nelson Mandela, Aung San Suu Kyi & Gandhi)', 1, true),
('65d29b56-0028-2112-0000-000000000002', '65d29b56-0028-1100-0000-000000000012', 'Sources of Constraints & The Harm Principle (John Stuart Mill & Liberalism)', 2, true),
('65d29b56-0028-2112-0000-000000000003', '65d29b56-0028-1100-0000-000000000012', 'Negative and Positive Liberty: Two Dimensions of Human Freedom', 3, true),
('65d29b56-0028-2112-0000-000000000004', '65d29b56-0028-1100-0000-000000000012', 'Freedom of Expression, Censorship & Reasonable Restrictions in a Democracy', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 24:20 (0s to 1460s)
('65d29b56-0028-3112-0000-000000000001', '65d29b56-0028-2112-0000-000000000001', 'VIDEO', 'The Ideal of Freedom & What is Freedom? Swaraj (Nelson Mandela Long Walk to Freedom, Aung San Suu Kyi Freedom from Fear, Absence of External Constraints vs Ability to Develop Capabilities & Mahatma Gandhi Concept of Swaraj)', 'https://www.youtube.com/watch?v=_CZ77VH0rC4&t=0s&end=1460s', true, 1),

-- Topic 2: 24:20 to 53:39 (1460s to 3219s)
('65d29b56-0028-3112-0000-000000000002', '65d29b56-0028-2112-0000-000000000002', 'VIDEO', 'Sources of Constraints & The Harm Principle (External Constraints: Laws, Social Hierarchies & Economic Inequalities, Why Do We Need Constraints? Avoiding Chaos, John Stuart Mill On Liberty: Self-Regarding vs Other-Regarding Actions & Harm Principle)', 'https://www.youtube.com/watch?v=_CZ77VH0rC4&t=1460s&end=3219s', true, 1),

-- Topic 3: 53:39 to 59:36 (3219s to 3576s)
('65d29b56-0028-3112-0000-000000000003', '65d29b56-0028-2112-0000-000000000003', 'VIDEO', 'Negative and Positive Liberty: Two Dimensions of Human Freedom (Isaiah Berlin Distinction: Negative Liberty as Freedom from Interference / Inviolable Personal Sphere vs Positive Liberty as Enabling Conditions / Freedom to Flourish and Participate)', 'https://www.youtube.com/watch?v=_CZ77VH0rC4&t=3219s&end=3576s', true, 1),

-- Topic 4: 59:36 to 01:27:00 (3576s to 5220s)
('65d29b56-0028-3112-0000-000000000004', '65d29b56-0028-2112-0000-000000000004', 'VIDEO', 'Freedom of Expression, Censorship & Reasonable Restrictions in a Democracy (Voltaire Ideal, J.S. Mill 4 Defences of Free Speech: Truth through Discussion, Dangers of Censorship, Ban on Books/Films Case Studies & Constitutional Reasonable Restrictions)', 'https://www.youtube.com/watch?v=_CZ77VH0rC4&t=3576s&end=5220s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
