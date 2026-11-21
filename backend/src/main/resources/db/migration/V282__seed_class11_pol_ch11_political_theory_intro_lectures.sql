-- V282__seed_class11_pol_ch11_political_theory_intro_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 11: Political Theory: An Introduction
-- Masterclass Video: Next Toppers - 11th Humanities (8LHEemnRLMc)
-- 100% Zero-Gap Continuous Timeline: 0s to 3690s (01:01:30, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 11
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000011';

-- 2. Insert 4 Verified Master Subtopics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2111-0000-000000000001', '65d29b56-0028-1100-0000-000000000011', 'What is Politics? Political Activity, Public Affairs & Negotiation in Society', 1, true),
('65d29b56-0028-2111-0000-000000000002', '65d29b56-0028-1100-0000-000000000011', 'What Do We Study in Political Theory: Core Values, Concepts & Thinkers', 2, true),
('65d29b56-0028-2111-0000-000000000003', '65d29b56-0028-1100-0000-000000000011', 'Putting Political Theory into Practice: Dynamic Meaning of Freedom, Equality & Cyber Challenges', 3, true),
('65d29b56-0028-2111-0000-000000000004', '65d29b56-0028-1100-0000-000000000011', 'Why Should We Study Political Theory? Democratic Citizenship, Critical Reason & Debate', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 16:52 (0s to 1012s)
('65d29b56-0028-3111-0000-000000000001', '65d29b56-0028-2111-0000-000000000001', 'VIDEO', 'What is Politics? Political Activity, Public Affairs & Negotiation in Society (Everyday Misconceptions about Politics, Politics as Collective Action, Government Actions & Impact on Citizens, Citizen Mobilization & Public Debate)', 'https://www.youtube.com/watch?v=8LHEemnRLMc&t=0s&end=1012s', true, 1),

-- Topic 2: 16:52 to 23:06 (1012s to 1386s)
('65d29b56-0028-3111-0000-000000000002', '65d29b56-0028-2111-0000-000000000002', 'VIDEO', 'What Do We Study in Political Theory: Core Values, Concepts & Thinkers (Systematic Thinking on Freedom, Equality, Justice & Democracy, Classical Thinkers: Plato, Aristotle, Rousseau, Marx, Gandhi & Ambedkar Insights)', 'https://www.youtube.com/watch?v=8LHEemnRLMc&t=1012s&end=1386s', true, 1),

-- Topic 3: 23:06 to 44:26 (1386s to 2666s)
('65d29b56-0028-3111-0000-000000000003', '65d29b56-0028-2111-0000-000000000003', 'VIDEO', 'Putting Political Theory into Practice: Dynamic Meaning of Freedom, Equality & Cyber Challenges (Abstract Ideals vs Daily Realities, Constitutional Rights in Action, Subtle Discriminations in Society, Right to Livelihood, Internet & Cyber-Citizenship Frontiers)', 'https://www.youtube.com/watch?v=8LHEemnRLMc&t=1386s&end=2666s', true, 1),

-- Topic 4: 44:26 to 01:01:30 (2666s to 3690s)
('65d29b56-0028-3111-0000-000000000004', '65d29b56-0028-2111-0000-000000000004', 'VIDEO', 'Why Should We Study Political Theory? Democratic Citizenship, Critical Reason & Debate (Value for Future Bureaucrats, Lawyers, Journalists & Citizens, Sharpening Opinions and Arguments, Distinguishing Prejudices from Principles & Promoting Civil Dialogue)', 'https://www.youtube.com/watch?v=8LHEemnRLMc&t=2666s&end=3690s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
