-- V55__seed_class10_maths_ch10_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 10 (Circles)
-- Video: Ritik Mishra (Circles ONE SHOT 🔥 | dazX40Ct7J0)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 13286s)

-- 1. Remove old placeholder topics & content items for Chapter 10
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000010';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2010-0000-000000000001', '65d29b56-2222-1000-0000-000000000010', 'Foundations & Core Circle Theorems (Theorems 1 to 4)', 1, true),
('65d29b56-2222-2010-0000-000000000002', '65d29b56-2222-1000-0000-000000000010', 'Direct Tangent Properties & Circumscribed Polygons (Q1 to Q14)', 2, true),
('65d29b56-2222-2010-0000-000000000003', '65d29b56-2222-1000-0000-000000000010', 'Angle Between Tangents, Concentric Circles & Parallel Tangents (Q15 to Q21)', 3, true),
('65d29b56-2222-2010-0000-000000000004', '65d29b56-2222-1000-0000-000000000010', 'Center Subtended Angles & Incircle Triangle 5-Markers (Q22 to Q27)', 4, true),
('65d29b56-2222-2010-0000-000000000005', '65d29b56-2222-1000-0000-000000000010', 'Incircle Formulas, Alternate Segment Theorem & Board PYQs (Q28 to Q37)', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3010-0000-000000000001', '65d29b56-2222-2010-0000-000000000001', 'VIDEO', 'Foundations & Core Circle Theorems (Theorems 1 to 4)', 'https://www.youtube.com/watch?v=dazX40Ct7J0&end=2830s', true, 1),
('65d29b56-2222-3010-0000-000000000002', '65d29b56-2222-2010-0000-000000000002', 'VIDEO', 'Direct Tangent Properties & Circumscribed Polygons (Q1 to Q14)', 'https://www.youtube.com/watch?v=dazX40Ct7J0&t=2830s&end=6655s', true, 1),
('65d29b56-2222-3010-0000-000000000003', '65d29b56-2222-2010-0000-000000000003', 'VIDEO', 'Angle Between Tangents, Concentric Circles & Parallel Tangents (Q15 to Q21)', 'https://www.youtube.com/watch?v=dazX40Ct7J0&t=6655s&end=9438s', true, 1),
('65d29b56-2222-3010-0000-000000000004', '65d29b56-2222-2010-0000-000000000004', 'VIDEO', 'Center Subtended Angles & Incircle Triangle 5-Markers (Q22 to Q27)', 'https://www.youtube.com/watch?v=dazX40Ct7J0&t=9438s&end=11430s', true, 1),
('65d29b56-2222-3010-0000-000000000005', '65d29b56-2222-2010-0000-000000000005', 'VIDEO', 'Incircle Formulas, Alternate Segment Theorem & Board PYQs (Q28 to Q37)', 'https://www.youtube.com/watch?v=dazX40Ct7J0&t=11430s&end=13286s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
