-- V309__seed_class12_chem_ch03_chemical_kinetics_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 3 (Chemical Kinetics)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards One Shot) (Chemical Kinetics | rlsq4cJn2DM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 19501s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Chemical Kinetics)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000003';

-- 2. Insert 6 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2203-0000-000000000001', '65d29b56-0430-1200-0000-000000000003', 'Rate of Chemical Reaction: Average & Instantaneous Rates, Stoichiometric Relations', 1, true),
('65d29b56-0430-2203-0000-000000000002', '65d29b56-0430-1200-0000-000000000003', 'Molecularity of Reactions, Order of Reaction & Differential Rate Law Expressions', 2, true),
('65d29b56-0430-2203-0000-000000000003', '65d29b56-0430-1200-0000-000000000003', 'Integrated Rate Equations: Zero-Order Reactions, Half-Life & Graphical Representations', 3, true),
('65d29b56-0430-2203-0000-000000000004', '65d29b56-0430-1200-0000-000000000003', 'First-Order Kinetics, Half-Life Period, Gaseous Phase Reactions & Pseudo First-Order Reactions', 4, true),
('65d29b56-0430-2203-0000-000000000005', '65d29b56-0430-1200-0000-000000000003', 'Temperature Dependence of Reaction Rates, Arrhenius Equation & Activation Energy', 5, true),
('65d29b56-0430-2203-0000-000000000006', '65d29b56-0430-1200-0000-000000000003', 'Collision Theory of Chemical Reactions, Catalysis & Comprehensive Board Exam PYQs', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3203-0000-000000000001', '65d29b56-0430-2203-0000-000000000001', 'VIDEO', 'Rate of Chemical Reaction: Average & Instantaneous Rates, Stoichiometric Relations', 'https://www.youtube.com/watch?v=rlsq4cJn2DM&end=5089s', true, 1),
('65d29b56-0430-3203-0000-000000000002', '65d29b56-0430-2203-0000-000000000002', 'VIDEO', 'Molecularity of Reactions, Order of Reaction & Differential Rate Law Expressions', 'https://www.youtube.com/watch?v=rlsq4cJn2DM&t=5089s&end=7486s', true, 1),
('65d29b56-0430-3203-0000-000000000003', '65d29b56-0430-2203-0000-000000000003', 'VIDEO', 'Integrated Rate Equations: Zero-Order Reactions, Half-Life & Graphical Representations', 'https://www.youtube.com/watch?v=rlsq4cJn2DM&t=7486s&end=8959s', true, 1),
('65d29b56-0430-3203-0000-000000000004', '65d29b56-0430-2203-0000-000000000004', 'VIDEO', 'First-Order Kinetics, Half-Life Period, Gaseous Phase Reactions & Pseudo First-Order Reactions', 'https://www.youtube.com/watch?v=rlsq4cJn2DM&t=8959s&end=12361s', true, 1),
('65d29b56-0430-3203-0000-000000000005', '65d29b56-0430-2203-0000-000000000005', 'VIDEO', 'Temperature Dependence of Reaction Rates, Arrhenius Equation & Activation Energy', 'https://www.youtube.com/watch?v=rlsq4cJn2DM&t=12361s&end=14879s', true, 1),
('65d29b56-0430-3203-0000-000000000006', '65d29b56-0430-2203-0000-000000000006', 'VIDEO', 'Collision Theory of Chemical Reactions, Catalysis & Comprehensive Board Exam PYQs', 'https://www.youtube.com/watch?v=rlsq4cJn2DM&t=14879s&end=19501s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
