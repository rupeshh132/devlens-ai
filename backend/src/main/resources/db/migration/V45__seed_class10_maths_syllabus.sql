-- V45__seed_class10_maths_syllabus.sql
-- Seeds Class 10 Mathematics (041 / 241) Official CBSE / Delhi DoE 2026-27 Annual Syllabus
-- 14 Chapters & 61 Core Competency Topics

-- 1. Ensure Subject Mathematics exists under Class 10
INSERT INTO learn_subjects (id, exam_type_id, name, order_index)
VALUES ('65d29b56-2222-0000-0000-000000000010', '65d29b56-f973-43b6-9a6e-98a908c0940e', 'Mathematics', 2)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, order_index = EXCLUDED.order_index;

-- 2. Insert Class 10 Mathematics Chapters (14 Chapters)
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-2222-1000-0000-000000000001', '65d29b56-2222-0000-0000-000000000010', 'Real Numbers', 1, true),
('65d29b56-2222-1000-0000-000000000002', '65d29b56-2222-0000-0000-000000000010', 'Polynomials', 2, true),
('65d29b56-2222-1000-0000-000000000003', '65d29b56-2222-0000-0000-000000000010', 'Pair of Linear Equations in Two Variables', 3, true),
('65d29b56-2222-1000-0000-000000000004', '65d29b56-2222-0000-0000-000000000010', 'Quadratic Equations', 4, true),
('65d29b56-2222-1000-0000-000000000005', '65d29b56-2222-0000-0000-000000000010', 'Arithmetic Progressions', 5, true),
('65d29b56-2222-1000-0000-000000000006', '65d29b56-2222-0000-0000-000000000010', 'Triangles', 6, true),
('65d29b56-2222-1000-0000-000000000007', '65d29b56-2222-0000-0000-000000000010', 'Coordinate Geometry', 7, true),
('65d29b56-2222-1000-0000-000000000008', '65d29b56-2222-0000-0000-000000000010', 'Introduction to Trigonometry', 8, true),
('65d29b56-2222-1000-0000-000000000009', '65d29b56-2222-0000-0000-000000000010', 'Some Applications of Trigonometry (Heights and Distances)', 9, true),
('65d29b56-2222-1000-0000-000000000010', '65d29b56-2222-0000-0000-000000000010', 'Circles', 10, true),
('65d29b56-2222-1000-0000-000000000011', '65d29b56-2222-0000-0000-000000000010', 'Areas Related to Circles', 11, true),
('65d29b56-2222-1000-0000-000000000012', '65d29b56-2222-0000-0000-000000000010', 'Surface Areas and Volumes', 12, true),
('65d29b56-2222-1000-0000-000000000013', '65d29b56-2222-0000-0000-000000000010', 'Statistics', 13, true),
('65d29b56-2222-1000-0000-000000000014', '65d29b56-2222-0000-0000-000000000010', 'Probability', 14, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Class 10 Mathematics Topics (61 Topics)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2000-0000-000000000001', '65d29b56-2222-1000-0000-000000000001', 'The Fundamental Theorem of Arithmetic (Statements & Prime Factorisation)', 1, true),
('65d29b56-2222-2000-0000-000000000002', '65d29b56-2222-1000-0000-000000000001', 'Applications of Fundamental Theorem of Arithmetic (LCM and HCF)', 2, true),
('65d29b56-2222-2000-0000-000000000003', '65d29b56-2222-1000-0000-000000000001', 'Revisiting Irrational Numbers: Proof of Irrationality of √2, √3 and √5', 3, true),
('65d29b56-2222-2000-0000-000000000004', '65d29b56-2222-1000-0000-000000000001', 'Proofs of Irrationality of Composite Forms (3 + 2√5, 5 - √3, etc.)', 4, true),
('65d29b56-2222-2000-0000-000000000005', '65d29b56-2222-1000-0000-000000000002', 'Geometrical Meaning of the Zeroes of a Polynomial', 1, true),
('65d29b56-2222-2000-0000-000000000006', '65d29b56-2222-1000-0000-000000000002', 'Relationship between Zeroes and Coefficients of Quadratic Polynomials', 2, true),
('65d29b56-2222-2000-0000-000000000007', '65d29b56-2222-1000-0000-000000000002', 'Formation of Quadratic Polynomials given Sum and Product of Zeroes', 3, true),
('65d29b56-2222-2000-0000-000000000008', '65d29b56-2222-1000-0000-000000000003', 'Pair of Linear Equations & Graphical Method of Solution', 1, true),
('65d29b56-2222-2000-0000-000000000009', '65d29b56-2222-1000-0000-000000000003', 'Consistency and Inconsistency: Algebraic Conditions for Number of Solutions', 2, true),
('65d29b56-2222-2000-0000-000000000010', '65d29b56-2222-1000-0000-000000000003', 'Algebraic Solution: The Substitution Method', 3, true),
('65d29b56-2222-2000-0000-000000000011', '65d29b56-2222-1000-0000-000000000003', 'Algebraic Solution: The Elimination Method', 4, true),
('65d29b56-2222-2000-0000-000000000012', '65d29b56-2222-1000-0000-000000000003', 'Situational & Contextual Word Problems on Linear Equations', 5, true),
('65d29b56-2222-2000-0000-000000000013', '65d29b56-2222-1000-0000-000000000004', 'Standard Form of a Quadratic Equation (ax² + bx + c = 0)', 1, true),
('65d29b56-2222-2000-0000-000000000014', '65d29b56-2222-1000-0000-000000000004', 'Solution of Quadratic Equations by Factorisation Method', 2, true),
('65d29b56-2222-2000-0000-000000000015', '65d29b56-2222-1000-0000-000000000004', 'The Discriminant (D = b² - 4ac) and Nature of Roots', 3, true),
('65d29b56-2222-2000-0000-000000000016', '65d29b56-2222-1000-0000-000000000004', 'Solution of Quadratic Equations by Quadratic Formula Method', 4, true),
('65d29b56-2222-2000-0000-000000000017', '65d29b56-2222-1000-0000-000000000004', 'Situational & Word Problems on Quadratic Equations in Daily Life', 5, true),
('65d29b56-2222-2000-0000-000000000018', '65d29b56-2222-1000-0000-000000000005', 'Introduction to Arithmetic Progression (AP), First Term (a) & Common Difference (d)', 1, true),
('65d29b56-2222-2000-0000-000000000019', '65d29b56-2222-1000-0000-000000000005', 'Derivation and Application of the nth Term of an AP (aₙ = a + (n-1)d)', 2, true),
('65d29b56-2222-2000-0000-000000000020', '65d29b56-2222-1000-0000-000000000005', 'Sum of First n Terms of an AP (Sₙ = n/2[2a + (n-1)d] = n/2[a + l])', 3, true),
('65d29b56-2222-2000-0000-000000000021', '65d29b56-2222-1000-0000-000000000005', 'Application of Arithmetic Progressions in Solving Real-Life Problems', 4, true),
('65d29b56-2222-2000-0000-000000000022', '65d29b56-2222-1000-0000-000000000006', 'Definitions, Examples & Distinction between Congruent and Similar Figures', 1, true),
('65d29b56-2222-2000-0000-000000000023', '65d29b56-2222-1000-0000-000000000006', 'Basic Proportionality Theorem (BPT / Thales Theorem) Statement and Proof', 2, true),
('65d29b56-2222-2000-0000-000000000024', '65d29b56-2222-1000-0000-000000000006', 'Converse of Basic Proportionality Theorem (BPT)', 3, true),
('65d29b56-2222-2000-0000-000000000025', '65d29b56-2222-1000-0000-000000000006', 'Criteria for Similarity of Triangles: AAA / AA Similarity Criterion', 4, true),
('65d29b56-2222-2000-0000-000000000026', '65d29b56-2222-1000-0000-000000000006', 'Criteria for Similarity of Triangles: SSS & SAS Similarity Criteria', 5, true),
('65d29b56-2222-2000-0000-000000000027', '65d29b56-2222-1000-0000-000000000006', 'Geometric Proofs and Problem Solving using Similarity Criteria', 6, true),
('65d29b56-2222-2000-0000-000000000028', '65d29b56-2222-1000-0000-000000000007', 'Concepts of Coordinate Geometry & Cartesian Plane Review', 1, true),
('65d29b56-2222-2000-0000-000000000029', '65d29b56-2222-1000-0000-000000000007', 'The Distance Formula and Geometrical Applications (Triangles, Quadrilaterals, Collinearity)', 2, true),
('65d29b56-2222-2000-0000-000000000030', '65d29b56-2222-1000-0000-000000000007', 'The Section Formula for Internal Division and Mid-Point Formula', 3, true),
('65d29b56-2222-2000-0000-000000000031', '65d29b56-2222-1000-0000-000000000007', 'Applications of Section Formula (Finding Coordinates & Division Ratios)', 4, true),
('65d29b56-2222-2000-0000-000000000032', '65d29b56-2222-1000-0000-000000000008', 'Trigonometric Ratios of an Acute Angle of a Right-Angled Triangle', 1, true),
('65d29b56-2222-2000-0000-000000000033', '65d29b56-2222-1000-0000-000000000008', 'Values of Trigonometric Ratios of Standard Angles (0°, 30°, 45°, 60° and 90°)', 2, true),
('65d29b56-2222-2000-0000-000000000034', '65d29b56-2222-1000-0000-000000000008', 'Relationships between the Trigonometric Ratios', 3, true),
('65d29b56-2222-2000-0000-000000000035', '65d29b56-2222-1000-0000-000000000008', 'Fundamental Trigonometric Identity: sin²A + cos²A = 1 (Proof & Applications)', 4, true),
('65d29b56-2222-2000-0000-000000000036', '65d29b56-2222-1000-0000-000000000008', 'Proofs and Simplifications of Simple Trigonometric Identities', 5, true),
('65d29b56-2222-2000-0000-000000000037', '65d29b56-2222-1000-0000-000000000009', 'Line of Sight, Angle of Elevation and Angle of Depression', 1, true),
('65d29b56-2222-2000-0000-000000000038', '65d29b56-2222-1000-0000-000000000009', 'Simple Heights & Distances Problems Involving a Single Right Triangle', 2, true),
('65d29b56-2222-2000-0000-000000000039', '65d29b56-2222-1000-0000-000000000009', 'Heights & Distances Problems Involving Two Right Triangles (30°, 45°, 60°)', 3, true),
('65d29b56-2222-2000-0000-000000000040', '65d29b56-2222-1000-0000-000000000010', 'Tangent to a Circle & Point of Contact', 1, true),
('65d29b56-2222-2000-0000-000000000041', '65d29b56-2222-1000-0000-000000000010', 'Theorem 10.1: Tangent is Perpendicular to the Radius through Point of Contact (Proof)', 2, true),
('65d29b56-2222-2000-0000-000000000042', '65d29b56-2222-1000-0000-000000000010', 'Theorem 10.2: Lengths of Tangents from an External Point are Equal (Proof)', 3, true),
('65d29b56-2222-2000-0000-000000000043', '65d29b56-2222-1000-0000-000000000010', 'Applications and Geometric Proofs on Tangents to a Circle', 4, true),
('65d29b56-2222-2000-0000-000000000044', '65d29b56-2222-1000-0000-000000000011', 'Perimeter and Area of a Circle (Review)', 1, true),
('65d29b56-2222-2000-0000-000000000045', '65d29b56-2222-1000-0000-000000000011', 'Area of Sector of a Circle (Major & Minor Sectors, Central Angles 60°, 90°, 120°)', 2, true),
('65d29b56-2222-2000-0000-000000000046', '65d29b56-2222-1000-0000-000000000011', 'Length of an Arc of a Sector of a Circle', 3, true),
('65d29b56-2222-2000-0000-000000000047', '65d29b56-2222-1000-0000-000000000011', 'Area of Segment of a Circle (Major & Minor Segments)', 4, true),
('65d29b56-2222-2000-0000-000000000048', '65d29b56-2222-1000-0000-000000000011', 'Combination Problems on Areas of Plane Figures Involving Sectors & Segments', 5, true),
('65d29b56-2222-2000-0000-000000000049', '65d29b56-2222-1000-0000-000000000012', 'Surface Area of Combinations of Solids (Cubes, Cuboids, Cylinders, Cones, Spheres, Hemispheres)', 1, true),
('65d29b56-2222-2000-0000-000000000050', '65d29b56-2222-1000-0000-000000000012', 'Volume of Combinations of Solids', 2, true),
('65d29b56-2222-2000-0000-000000000051', '65d29b56-2222-1000-0000-000000000012', 'Contextual Real-Life Problems on Surface Areas & Volumes of Combined Solids', 3, true),
('65d29b56-2222-2000-0000-000000000052', '65d29b56-2222-1000-0000-000000000013', 'Mean of Grouped Data: Direct Method', 1, true),
('65d29b56-2222-2000-0000-000000000053', '65d29b56-2222-1000-0000-000000000013', 'Mean of Grouped Data: Assumed Mean Method', 2, true),
('65d29b56-2222-2000-0000-000000000054', '65d29b56-2222-1000-0000-000000000013', 'Mean of Grouped Data: Step Deviation Method', 3, true),
('65d29b56-2222-2000-0000-000000000055', '65d29b56-2222-1000-0000-000000000013', 'Mode of Grouped Data (Formula & Calculation)', 4, true),
('65d29b56-2222-2000-0000-000000000056', '65d29b56-2222-1000-0000-000000000013', 'Median of Grouped Data (Cumulative Frequency Table & Formula)', 5, true),
('65d29b56-2222-2000-0000-000000000057', '65d29b56-2222-1000-0000-000000000013', 'Empirical Relationship among Mean, Median and Mode', 6, true),
('65d29b56-2222-2000-0000-000000000058', '65d29b56-2222-1000-0000-000000000014', 'Classical (Theoretical) Definition of Probability (P(E) = n(E) / n(S))', 1, true),
('65d29b56-2222-2000-0000-000000000059', '65d29b56-2222-1000-0000-000000000014', 'Elementary, Impossible and Sure / Certain Events', 2, true),
('65d29b56-2222-2000-0000-000000000060', '65d29b56-2222-1000-0000-000000000014', 'Complementary Events (P(E) + P(not E) = 1)', 3, true),
('65d29b56-2222-2000-0000-000000000061', '65d29b56-2222-1000-0000-000000000014', 'Simple Real-Life Problems on Probability (Coins, Dice, Playing Cards, Bags)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
