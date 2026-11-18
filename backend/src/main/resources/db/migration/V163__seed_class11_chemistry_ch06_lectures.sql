-- V163__seed_class11_chemistry_ch06_lectures.sql
-- Seeds verified 7 Master Topics and Video Lecture Timestamps for Class 11 Chemistry Chapter 6 (Equilibrium)
-- Video: Next Toppers - 11th Science (Equilibrium One Shot | Tapur Ma'am | A4Ab8xZmTU4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 9454s / 2h 37m 34s)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Equilibrium)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1100-0000-000000000006';

-- 2. Insert 7 Verified Master Topics for Chapter 6 (Equilibrium)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2106-0000-000000000001', '65d29b56-0430-1100-0000-000000000006', 'Equilibrium in Physical Processes: Solid-Liquid, Liquid-Gas, Solid-Gas & Solutions (Henry''s Law)', 1, true),
('65d29b56-0430-2106-0000-000000000002', '65d29b56-0430-1100-0000-000000000006', 'Equilibrium in Chemical Processes: Dynamic Nature, Law of Mass Action & Equilibrium Constant (Kc)', 2, true),
('65d29b56-0430-2106-0000-000000000003', '65d29b56-0430-1100-0000-000000000006', 'Gaseous Equilibria (Kp = Kc(RT)^dn), Reaction Quotient (Q), Homogeneous/Heterogeneous & dG° = -RT ln K', 3, true),
('65d29b56-0430-2106-0000-000000000004', '65d29b56-0430-1100-0000-000000000006', 'Le Chatelier''s Principle: Effect of Concentration, Pressure, Temperature, Catalyst & Inert Gas', 4, true),
('65d29b56-0430-2106-0000-000000000005', '65d29b56-0430-1100-0000-000000000006', 'Ionic Equilibrium: Electrolytes, Arrhenius, Bronsted-Lowry, Lewis Acid-Base Concepts, Ionization of Water (Kw) & pH Scale', 5, true),
('65d29b56-0430-2106-0000-000000000006', '65d29b56-0430-1100-0000-000000000006', 'Ionization of Weak Acids and Bases (Ka, Kb), Polyprotic Acids, Common Ion Effect & Buffer Solutions', 6, true),
('65d29b56-0430-2106-0000-000000000007', '65d29b56-0430-1100-0000-000000000006', 'Hydrolysis of Salts & Solubility Equilibria of Sparingly Soluble Salts (Solubility Product Ksp & Common Ion Effect)', 7, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (Outro cleanly trimmed at 9454s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3106-0000-000000000001', '65d29b56-0430-2106-0000-000000000001', 'VIDEO', 'Equilibrium in Physical Processes: Solid-Liquid, Liquid-Gas, Solid-Gas & Solutions (Henry''s Law)', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4&end=1151s', true, 1),
('65d29b56-0430-3106-0000-000000000002', '65d29b56-0430-2106-0000-000000000002', 'VIDEO', 'Equilibrium in Chemical Processes: Dynamic Nature, Law of Mass Action & Equilibrium Constant (Kc)', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4&t=1151s&end=2515s', true, 1),
('65d29b56-0430-3106-0000-000000000003', '65d29b56-0430-2106-0000-000000000003', 'VIDEO', 'Gaseous Equilibria (Kp = Kc(RT)^dn), Reaction Quotient (Q), Homogeneous/Heterogeneous & dG° = -RT ln K', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4&t=2515s&end=3863s', true, 1),
('65d29b56-0430-3106-0000-000000000004', '65d29b56-0430-2106-0000-000000000004', 'VIDEO', 'Le Chatelier''s Principle: Effect of Concentration, Pressure, Temperature, Catalyst & Inert Gas', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4&t=3863s&end=4400s', true, 1),
('65d29b56-0430-3106-0000-000000000005', '65d29b56-0430-2106-0000-000000000005', 'VIDEO', 'Ionic Equilibrium: Electrolytes, Arrhenius, Bronsted-Lowry, Lewis Acid-Base Concepts, Ionization of Water (Kw) & pH Scale', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4&t=4400s&end=6971s', true, 1),
('65d29b56-0430-3106-0000-000000000006', '65d29b56-0430-2106-0000-000000000006', 'VIDEO', 'Ionization of Weak Acids and Bases (Ka, Kb), Polyprotic Acids, Common Ion Effect & Buffer Solutions', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4&t=6971s&end=7937s', true, 1),
('65d29b56-0430-3106-0000-000000000007', '65d29b56-0430-2106-0000-000000000007', 'VIDEO', 'Hydrolysis of Salts & Solubility Equilibria of Sparingly Soluble Salts (Solubility Product Ksp & Common Ion Effect)', 'https://www.youtube.com/watch?v=A4Ab8xZmTU4&t=7937s&end=9454s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
