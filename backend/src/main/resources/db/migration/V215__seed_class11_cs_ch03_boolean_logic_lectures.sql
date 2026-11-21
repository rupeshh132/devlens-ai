-- V215__seed_class11_cs_ch03_boolean_logic_lectures.sql
-- Seeds verified 5 Continuous Master Subtopics for Class 11 Computer Science Chapter 3: Boolean Logic & Logic Circuits
-- Masterclass Video: Youth Af - Ayush Poddar (L-rZxPu30cE)
-- 100% Zero-Gap Continuous Timeline: 0s to 1570s (26m 10s, Outro promotional website card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 3
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000003';

-- 2. Insert 5 Verified Master Subtopics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2103-0000-000000000001', '65d29b56-0083-1100-0000-000000000003', 'Fundamentals of Boolean Logic, Binary Variables & Digital Switching', 1, true),
('65d29b56-0083-2103-0000-000000000002', '65d29b56-0083-1100-0000-000000000003', 'Basic Logic Gates: NOT, OR & AND (Symbols & Truth Tables)', 2, true),
('65d29b56-0083-2103-0000-000000000003', '65d29b56-0083-1100-0000-000000000003', 'Universal Gates (NAND, NOR) & Special Gates (XOR, XNOR)', 3, true),
('65d29b56-0083-2103-0000-000000000004', '65d29b56-0083-1100-0000-000000000003', 'De Morgan''s Laws & Boolean Algebraic Postulates', 4, true),
('65d29b56-0083-2103-0000-000000000005', '65d29b56-0083-1100-0000-000000000003', 'Logic Circuits Analysis, Truth Table Derivations & Board Numerical Problems', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 05:30 (0s to 330s)
('65d29b56-0083-3103-0000-000000000001', '65d29b56-0083-2103-0000-000000000001', 'VIDEO', 'Fundamentals of Boolean Logic, Binary Variables & Digital Switching (Binary States 0 and 1, Transistors as Switches & CPU Logic Architecture)', 'https://www.youtube.com/watch?v=L-rZxPu30cE&t=0s&end=330s', true, 1),

-- Topic 2: 05:30 to 12:52 (330s to 772s)
('65d29b56-0083-3103-0000-000000000002', '65d29b56-0083-2103-0000-000000000002', 'VIDEO', 'Basic Logic Gates: NOT, OR & AND (Gate Schematics, Circuit Diagrams, Mathematical Functions & Truth Table Proofs)', 'https://www.youtube.com/watch?v=L-rZxPu30cE&t=330s&end=772s', true, 1),

-- Topic 3: 12:52 to 17:56 (772s to 1076s)
('65d29b56-0083-3103-0000-000000000003', '65d29b56-0083-2103-0000-000000000003', 'VIDEO', 'Universal Gates (NAND, NOR) & Special Gates (XOR, XNOR) (Universality Demonstration, Inverted Outputs & Exclusive Logic Applications)', 'https://www.youtube.com/watch?v=L-rZxPu30cE&t=772s&end=1076s', true, 1),

-- Topic 4: 17:56 to 19:21 (1076s to 1161s)
('65d29b56-0083-3103-0000-000000000004', '65d29b56-0083-2103-0000-000000000004', 'VIDEO', 'De Morgan''s Laws & Boolean Algebraic Postulates (First Law, Second Law & Algebraic Simplification of Boolean Expressions)', 'https://www.youtube.com/watch?v=L-rZxPu30cE&t=1076s&end=1161s', true, 1),

-- Topic 5: 19:21 to 26:10 (1161s to 1570s)
('65d29b56-0083-3103-0000-000000000005', '65d29b56-0083-2103-0000-000000000005', 'VIDEO', 'Logic Circuits Analysis, Truth Table Derivations & Board Numerical Problems (Designing Combinational Logic Diagrams & Step-by-Step Truth Table Verification)', 'https://www.youtube.com/watch?v=L-rZxPu30cE&t=1161s&end=1570s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
