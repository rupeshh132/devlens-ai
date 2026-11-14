-- V131__seed_class11_maths_ch10_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 10 (Conic Sections)
-- Video: PW Class 11 Science (Conic Sections | Full Chapter in ONE SHOT | Chapter 10 | Class 11 Maths | 5w2tWzcsiy4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 13600s / 3h 46m 40s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Conic Sections)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000010';

-- 2. Insert 5 Verified Master Topics for Chapter 10 (Conic Sections)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2110-0000-000000000001', '65d29b56-2222-1100-0000-000000000010', 'Circle: Definition, Standard Equation (x-h)² + (y-k)² = r², General Form & Problem Solving', 1, true),
('65d29b56-2222-2110-0000-000000000002', '65d29b56-2222-1100-0000-000000000010', 'Introduction to Conic Sections: Focus-Directrix Property, Eccentricity & Standard Parabola (y² = 4ax)', 2, true),
('65d29b56-2222-2110-0000-000000000003', '65d29b56-2222-1100-0000-000000000010', 'Parabola: Alternative Standard Forms (x² = 4ay, y² = -4ax, x² = -4ay), Latus Rectum & Problem Solving', 3, true),
('65d29b56-2222-2110-0000-000000000004', '65d29b56-2222-1100-0000-000000000010', 'Ellipse: Definition, Standard Equations (x²/a² + y²/b² = 1), Major/Minor Axes, Foci, Eccentricity & Problem Solving', 4, true),
('65d29b56-2222-2110-0000-000000000005', '65d29b56-2222-1100-0000-000000000010', 'Hyperbola: Definition, Standard Equations (x²/a² - y²/b² = 1), Transverse/Conjugate Axes, Foci, Eccentricity & Problem Solving', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3110-0000-000000000001', '65d29b56-2222-2110-0000-000000000001', 'VIDEO', 'Circle: Definition, Standard Equation (x-h)² + (y-k)² = r², General Form & Problem Solving', 'https://www.youtube.com/watch?v=5w2tWzcsiy4&end=3903s', true, 1),
('65d29b56-2222-3110-0000-000000000002', '65d29b56-2222-2110-0000-000000000002', 'VIDEO', 'Introduction to Conic Sections: Focus-Directrix Property, Eccentricity & Standard Parabola (y² = 4ax)', 'https://www.youtube.com/watch?v=5w2tWzcsiy4&t=3903s&end=5333s', true, 1),
('65d29b56-2222-3110-0000-000000000003', '65d29b56-2222-2110-0000-000000000003', 'VIDEO', 'Parabola: Alternative Standard Forms (x² = 4ay, y² = -4ax, x² = -4ay), Latus Rectum & Problem Solving', 'https://www.youtube.com/watch?v=5w2tWzcsiy4&t=5333s&end=7056s', true, 1),
('65d29b56-2222-3110-0000-000000000004', '65d29b56-2222-2110-0000-000000000004', 'VIDEO', 'Ellipse: Definition, Standard Equations (x²/a² + y²/b² = 1), Major/Minor Axes, Foci, Eccentricity & Problem Solving', 'https://www.youtube.com/watch?v=5w2tWzcsiy4&t=7056s&end=10332s', true, 1),
('65d29b56-2222-3110-0000-000000000005', '65d29b56-2222-2110-0000-000000000005', 'VIDEO', 'Hyperbola: Definition, Standard Equations (x²/a² - y²/b² = 1), Transverse/Conjugate Axes, Foci, Eccentricity & Problem Solving', 'https://www.youtube.com/watch?v=5w2tWzcsiy4&t=10332s&end=13600s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
