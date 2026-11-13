-- V124__seed_class11_maths_ch3_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 3 (Trigonometric Functions)
-- Video: PW Class 11 Science (Trigonometric Functions | Full Chapter in ONE SHOT | Chapter 3 | Class 11 Maths | kcSMOgFRp6w)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 17668s / 4h 54m 28s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Trigonometric Functions)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000003';

-- 2. Insert 5 Verified Master Topics for Chapter 3 (Trigonometric Functions)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2103-0000-000000000001', '65d29b56-2222-1100-0000-000000000003', 'Angles & Measurement: Degree & Radian Measures, Circular System, Interconversions & Visualisation', 1, true),
('65d29b56-2222-2103-0000-000000000002', '65d29b56-2222-1100-0000-000000000003', 'Signs of Trigonometric Functions, ASTC Rule, Allied Angles & Graphical Representation', 2, true),
('65d29b56-2222-2103-0000-000000000003', '65d29b56-2222-1100-0000-000000000003', 'Compound Angle Identities & Evaluation of Trigonometric Values', 3, true),
('65d29b56-2222-2103-0000-000000000004', '65d29b56-2222-1100-0000-000000000003', 'Transformation Formulas: Product-to-Sum and Sum-to-Product (C & D Formulas)', 4, true),
('65d29b56-2222-2103-0000-000000000005', '65d29b56-2222-1100-0000-000000000003', 'Multiple & Submultiple Angles (2x, 3x, x/2), Advanced Identities & Board Problem Solving', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3103-0000-000000000001', '65d29b56-2222-2103-0000-000000000001', 'VIDEO', 'Angles & Measurement: Degree & Radian Measures, Circular System, Interconversions & Visualisation', 'https://www.youtube.com/watch?v=kcSMOgFRp6w&end=3980s', true, 1),
('65d29b56-2222-3103-0000-000000000002', '65d29b56-2222-2103-0000-000000000002', 'VIDEO', 'Signs of Trigonometric Functions, ASTC Rule, Allied Angles & Graphical Representation', 'https://www.youtube.com/watch?v=kcSMOgFRp6w&t=3980s&end=9391s', true, 1),
('65d29b56-2222-3103-0000-000000000003', '65d29b56-2222-2103-0000-000000000003', 'VIDEO', 'Compound Angle Identities & Evaluation of Trigonometric Values', 'https://www.youtube.com/watch?v=kcSMOgFRp6w&t=9391s&end=11910s', true, 1),
('65d29b56-2222-3103-0000-000000000004', '65d29b56-2222-2103-0000-000000000004', 'VIDEO', 'Transformation Formulas: Product-to-Sum and Sum-to-Product (C & D Formulas)', 'https://www.youtube.com/watch?v=kcSMOgFRp6w&t=11910s&end=14315s', true, 1),
('65d29b56-2222-3103-0000-000000000005', '65d29b56-2222-2103-0000-000000000005', 'VIDEO', 'Multiple & Submultiple Angles (2x, 3x, x/2), Advanced Identities & Board Problem Solving', 'https://www.youtube.com/watch?v=kcSMOgFRp6w&t=14315s&end=17668s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
