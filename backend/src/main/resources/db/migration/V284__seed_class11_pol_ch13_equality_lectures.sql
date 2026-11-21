-- V284__seed_class11_pol_ch13_equality_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 13: Equality
-- Masterclass Video: Next Toppers - 11th Humanities (D426OhxvB1g)
-- 100% Zero-Gap Continuous Timeline: 0s to 4200s (01:10:00, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 13
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000013';

-- 2. Insert 4 Verified Master Subtopics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2113-0000-000000000001', '65d29b56-0028-1100-0000-000000000013', 'Why Does Equality Matter & Meaning of Equality: Equality of Opportunities', 1, true),
('65d29b56-0028-2113-0000-000000000002', '65d29b56-0028-1100-0000-000000000013', 'Natural Inequalities vs Social Inequalities & Three Dimensions of Equality', 2, true),
('65d29b56-0028-2113-0000-000000000003', '65d29b56-0028-1100-0000-000000000013', 'Political Ideologies on Equality: Liberalism, Socialism, Marxism & Feminism', 3, true),
('65d29b56-0028-2113-0000-000000000004', '65d29b56-0028-1100-0000-000000000013', 'How Can We Promote Equality? Formal Equality, Differential Treatment & Affirmative Action', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 14:05 (0s to 845s)
('65d29b56-0028-3113-0000-000000000001', '65d29b56-0028-2113-0000-000000000001', 'VIDEO', 'Why Does Equality Matter & Meaning of Equality (Moral Equality as Possessing Equal Dignity, Rejection of Divine Right & Feudal Privileges, Equality of Opportunities, Fair Start vs Equal End Results)', 'https://www.youtube.com/watch?v=D426OhxvB1g&t=0s&end=845s', true, 1),

-- Topic 2: 14:05 to 36:42 (845s to 2202s)
('65d29b56-0028-3113-0000-000000000002', '65d29b56-0028-2113-0000-000000000002', 'VIDEO', 'Natural Inequalities vs Social Inequalities & Three Dimensions of Equality (Inherent Talent vs Socially Created Disadvantages, Problem with Biological Determinism, Political Equality: Universal Franchise & Civil Rights, Social Equality: Dignity & Non-Discrimination, Economic Equality: Wealth Distribution & Minimum Needs)', 'https://www.youtube.com/watch?v=D426OhxvB1g&t=845s&end=2202s', true, 1),

-- Topic 3: 36:42 to 53:01 (2202s to 3181s)
('65d29b56-0028-3113-0000-000000000003', '65d29b56-0028-2113-0000-000000000003', 'VIDEO', 'Political Ideologies on Equality: Liberalism, Socialism, Marxism & Feminism (Liberal Model of Open Competition & Meritocracy, Socialist/Marxist Critique of Private Ownership and Class Exploitation, Feminist Movement: Patriarchal Inequality, Public vs Private Realm Divide)', 'https://www.youtube.com/watch?v=D426OhxvB1g&t=2202s&end=3181s', true, 1),

-- Topic 4: 53:01 to 01:10:00 (3181s to 4200s)
('65d29b56-0028-3113-0000-000000000004', '65d29b56-0028-2113-0000-000000000004', 'VIDEO', 'How Can We Promote Equality? Formal Equality, Differential Treatment & Affirmative Action (Establishing Formal Legal Equality, Treating Equals Equally vs Treating Unequals Differently, Affirmative Action / Quotas, Enabling Equal Participation & Reverse Discrimination Debates)', 'https://www.youtube.com/watch?v=D426OhxvB1g&t=3181s&end=4200s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
