-- V162__seed_class11_chemistry_ch05_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 5 (Thermodynamics)
-- Video: Next Toppers - 11th Science (Thermodynamics Chemistry Class 11 One Shot | Tapur Ma'am | NzB2YwNndZw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6678s / 1h 51m 18s)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Thermodynamics)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1100-0000-000000000005';

-- 2. Insert 6 Verified Master Topics for Chapter 5 (Thermodynamics)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2105-0000-000000000001', '65d29b56-0430-1100-0000-000000000005', 'Thermodynamic Systems & State Functions: System vs Surroundings, State Variables, Internal Energy (U), Heat (q) and Work (w)', 1, true),
('65d29b56-0430-2105-0000-000000000002', '65d29b56-0430-1100-0000-000000000005', 'First Law of Thermodynamics, Enthalpy (H), Heat Capacity (Cp, Cv), Cp - Cv = R & dH = dU + dnRT', 2, true),
('65d29b56-0430-2105-0000-000000000003', '65d29b56-0430-1100-0000-000000000005', 'Enthalpies of Reactions: Standard Formation, Combustion, Atomization, Phase Transitions & Bond Dissociation', 3, true),
('65d29b56-0430-2105-0000-000000000004', '65d29b56-0430-1100-0000-000000000005', 'Hess''s Law of Constant Heat Summation, Born-Haber Cycle & Lattice Enthalpy Calculations', 4, true),
('65d29b56-0430-2105-0000-000000000005', '65d29b56-0430-1100-0000-000000000005', 'Spontaneity, Entropy (S), Microstates, dS = q_rev/T & Second Law of Thermodynamics', 5, true),
('65d29b56-0430-2105-0000-000000000006', '65d29b56-0430-1100-0000-000000000005', 'Gibbs Free Energy (G), Gibbs-Helmholtz Equation, Spontaneity Criterion, dG° = -RT ln K & Third Law', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (Outro cleanly trimmed at 6678s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3105-0000-000000000001', '65d29b56-0430-2105-0000-000000000001', 'VIDEO', 'Thermodynamic Systems & State Functions: System vs Surroundings, State Variables, Internal Energy (U), Heat (q) and Work (w)', 'https://www.youtube.com/watch?v=NzB2YwNndZw&end=3342s', true, 1),
('65d29b56-0430-3105-0000-000000000002', '65d29b56-0430-2105-0000-000000000002', 'VIDEO', 'First Law of Thermodynamics, Enthalpy (H), Heat Capacity (Cp, Cv), Cp - Cv = R & dH = dU + dnRT', 'https://www.youtube.com/watch?v=NzB2YwNndZw&t=3342s&end=4199s', true, 1),
('65d29b56-0430-3105-0000-000000000003', '65d29b56-0430-2105-0000-000000000003', 'VIDEO', 'Enthalpies of Reactions: Standard Formation, Combustion, Atomization, Phase Transitions & Bond Dissociation', 'https://www.youtube.com/watch?v=NzB2YwNndZw&t=4199s&end=4945s', true, 1),
('65d29b56-0430-3105-0000-000000000004', '65d29b56-0430-2105-0000-000000000004', 'VIDEO', 'Hess''s Law of Constant Heat Summation, Born-Haber Cycle & Lattice Enthalpy Calculations', 'https://www.youtube.com/watch?v=NzB2YwNndZw&t=4945s&end=5487s', true, 1),
('65d29b56-0430-3105-0000-000000000005', '65d29b56-0430-2105-0000-000000000005', 'VIDEO', 'Spontaneity, Entropy (S), Microstates, dS = q_rev/T & Second Law of Thermodynamics', 'https://www.youtube.com/watch?v=NzB2YwNndZw&t=5487s&end=6103s', true, 1),
('65d29b56-0430-3105-0000-000000000006', '65d29b56-0430-2105-0000-000000000006', 'VIDEO', 'Gibbs Free Energy (G), Gibbs-Helmholtz Equation, Spontaneity Criterion, dG° = -RT ln K & Third Law', 'https://www.youtube.com/watch?v=NzB2YwNndZw&t=6103s&end=6678s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
