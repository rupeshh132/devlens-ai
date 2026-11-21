-- V285__seed_class11_pol_ch14_social_justice_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 14: Social Justice
-- Masterclass Video: Next Toppers - 11th Humanities (psf6k6sKt-4)
-- 100% Zero-Gap Continuous Timeline: 0s to 3340s (55:40, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 14
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000014';

-- 2. Insert 4 Verified Master Subtopics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2114-0000-000000000001', '65d29b56-0028-1100-0000-000000000014', 'What is Justice? Ancient Wisdom, Giving Everyone Their Due & Three Principles of Justice', 1, true),
('65d29b56-0028-2114-0000-000000000002', '65d29b56-0028-1100-0000-000000000014', 'Just Distribution: Distribution of Resources, Social Minimum & Human Capabilities', 2, true),
('65d29b56-0028-2114-0000-000000000003', '65d29b56-0028-1100-0000-000000000014', 'John Rawls Theory of Justice: The Veil of Ignorance & Rational Fair Allocation', 3, true),
('65d29b56-0028-2114-0000-000000000004', '65d29b56-0028-1100-0000-000000000014', 'Pursuing Social Justice: Free Markets vs Democratic State Intervention', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 26:40 (0s to 1600s)
('65d29b56-0028-3114-0000-000000000001', '65d29b56-0028-2114-0000-000000000001', 'VIDEO', 'What is Justice? Ancient Wisdom, Giving Everyone Their Due & Three Principles (Plato Republic, Confucius Duty to the State, Immanuel Kant Equal Dignity, Three Principles of Justice: Equal Treatment for Equals, Proportionate Justice / Effort Reward & Recognition of Special Needs)', 'https://www.youtube.com/watch?v=psf6k6sKt-4&t=0s&end=1600s', true, 1),

-- Topic 2: 26:40 to 31:43 (1600s to 1903s)
('65d29b56-0028-3114-0000-000000000002', '65d29b56-0028-2114-0000-000000000002', 'VIDEO', 'Just Distribution: Distribution of Resources, Social Minimum & Human Capabilities (Redistribution of Goods and Services, Law and Order alone Inadequate, Elimination of Glaring Inequalities, Dr. Ambedkar on Casteless Society, Provision of Basic Needs: Healthcare, Nutrition & Education)', 'https://www.youtube.com/watch?v=psf6k6sKt-4&t=1600s&end=1903s', true, 1),

-- Topic 3: 31:43 to 42:54 (1903s to 2574s)
('65d29b56-0028-3114-0000-000000000003', '65d29b56-0028-2114-0000-000000000003', 'VIDEO', 'John Rawls Theory of Justice: The Veil of Ignorance & Rational Fair Allocation (Rawls Thought Experiment: Veil of Ignorance, Rational Self-Interest under Complete Ignorance of Personal Identity/Status, Maximin Rule: Maximizing the Minimum Position, Fair Principles of Cooperation)', 'https://www.youtube.com/watch?v=psf6k6sKt-4&t=1903s&end=2574s', true, 1),

-- Topic 4: 42:54 to 55:40 (2574s to 3340s)
('65d29b56-0028-3114-0000-000000000004', '65d29b56-0028-2114-0000-000000000004', 'VIDEO', 'Pursuing Social Justice: Free Markets vs Democratic State Intervention (Debate between Market Efficiency and Social Welfare, Arguments for Free Markets: Merit, Choice & Talent Reward vs Market Failures: Disregard for Impoverished, Need for Government Welfare, Food Security & Price Ceilings)', 'https://www.youtube.com/watch?v=psf6k6sKt-4&t=2574s&end=3340s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
