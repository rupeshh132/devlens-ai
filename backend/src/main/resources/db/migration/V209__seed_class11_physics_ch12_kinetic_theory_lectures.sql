-- V209__seed_class11_physics_ch12_kinetic_theory_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 12: Kinetic Theory
-- Masterclass Video: Next Toppers CBSE (QokEth-VtKc)
-- 100% Zero-Gap Continuous Timeline: 0s to 7260s (02:01:00, Outro promos trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 12
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000012';

-- 2. Insert 4 Verified Master Subtopics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2112-0000-000000000001', '65d29b56-0420-1100-0000-000000000012', 'Equation of State of Ideal Gas & Assumptions of Kinetic Theory', 1, true),
('65d29b56-0420-2112-0000-000000000002', '65d29b56-0420-1100-0000-000000000012', 'Pressure of an Ideal Gas, Kinetic Temperature & RMS Molecular Speed', 2, true),
('65d29b56-0420-2112-0000-000000000003', '65d29b56-0420-1100-0000-000000000012', 'Degrees of Freedom, Law of Equipartition of Energy & Specific Heats of Gases', 3, true),
('65d29b56-0420-2112-0000-000000000004', '65d29b56-0420-1100-0000-000000000012', 'Mean Free Path, Avogadro''s Number & NCERT Board Numerical Practice', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 39:19 (0s to 2359s)
('65d29b56-0420-3112-0000-000000000001', '65d29b56-0420-2112-0000-000000000001', 'VIDEO', 'Equation of State of Ideal Gas & Assumptions of Kinetic Theory (Gas Laws of Boyle, Charles & Avogadro, Ideal Gas Equation PV = nRT, Microscopic Postulates of KTG & Dalton''s Law of Partial Pressure)', 'https://www.youtube.com/watch?v=QokEth-VtKc&t=0s&end=2359s', true, 1),

-- Topic 2: 39:19 to 1:16:57 (2359s to 4617s)
('65d29b56-0420-3112-0000-000000000002', '65d29b56-0420-2112-0000-000000000002', 'VIDEO', 'Pressure of an Ideal Gas, Kinetic Temperature & RMS Molecular Speed (Derivation of Pressure P = 1/3*rho*v_rms^2, Kinetic Interpretation of Temperature, Kinetic Energy per Molecule (3/2*k_B*T) & Root Mean Square Velocity)', 'https://www.youtube.com/watch?v=QokEth-VtKc&t=2359s&end=4617s', true, 1),

-- Topic 3: 1:16:57 to 1:41:43 (4617s to 6103s)
('65d29b56-0420-3112-0000-000000000003', '65d29b56-0420-2112-0000-000000000003', 'VIDEO', 'Degrees of Freedom, Law of Equipartition of Energy & Specific Heats of Gases (Translational, Rotational & Vibrational Degrees of Freedom for Monoatomic/Diatomic/Polyatomic Gases, Equipartition Theorem & Specific Heat Ratios)', 'https://www.youtube.com/watch?v=QokEth-VtKc&t=4617s&end=6103s', true, 1),

-- Topic 4: 1:41:43 to 2:01:00 (6103s to 7260s)
('65d29b56-0420-3112-0000-000000000004', '65d29b56-0420-2112-0000-000000000004', 'VIDEO', 'Mean Free Path, Avogadro''s Number & NCERT Board Numerical Practice (Concept of Molecular Collisions, Expression for Mean Free Path lambda = 1/(sqrt(2)*n*pi*d^2), Avogadro''s Constant & High-Yield CBSE Board Problems)', 'https://www.youtube.com/watch?v=QokEth-VtKc&t=6103s&end=7260s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
