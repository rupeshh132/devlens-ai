-- V132__seed_class11_maths_ch11_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 11 (Introduction to Three-Dimensional Geometry)
-- Video: PW Class 11 Science (Introduction to 3D Geometry | Full Chapter in ONE SHOT | Chapter 11 | Class 11 Maths | iTV5LP5j17s)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4345s / 1h 12m 25s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 11 (Introduction to Three-Dimensional Geometry)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000011';

-- 2. Insert 4 Verified Master Topics for Chapter 11 (Introduction to Three-Dimensional Geometry)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2111-0000-000000000001', '65d29b56-2222-1100-0000-000000000011', 'Coordinate Axes, Coordinate Planes, Octants & Coordinates of a Point in 3D Space', 1, true),
('65d29b56-2222-2111-0000-000000000002', '65d29b56-2222-1100-0000-000000000011', 'Distance Formula between Two Points in 3D Space & Collinearity Applications', 2, true),
('65d29b56-2222-2111-0000-000000000003', '65d29b56-2222-1100-0000-000000000011', 'Section Formula in Three Dimensions: Internal and External Division', 3, true),
('65d29b56-2222-2111-0000-000000000004', '65d29b56-2222-1100-0000-000000000011', '[Enrichment / Formative] Centroid of a Triangle in 3D Space & Coordinate Applications', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3111-0000-000000000001', '65d29b56-2222-2111-0000-000000000001', 'VIDEO', 'Coordinate Axes, Coordinate Planes, Octants & Coordinates of a Point in 3D Space', 'https://www.youtube.com/watch?v=iTV5LP5j17s&end=1536s', true, 1),
('65d29b56-2222-3111-0000-000000000002', '65d29b56-2222-2111-0000-000000000002', 'VIDEO', 'Distance Formula between Two Points in 3D Space & Collinearity Applications', 'https://www.youtube.com/watch?v=iTV5LP5j17s&t=1536s&end=2491s', true, 1),
('65d29b56-2222-3111-0000-000000000003', '65d29b56-2222-2111-0000-000000000003', 'VIDEO', 'Section Formula in Three Dimensions: Internal and External Division', 'https://www.youtube.com/watch?v=iTV5LP5j17s&t=2491s&end=4120s', true, 1),
('65d29b56-2222-3111-0000-000000000004', '65d29b56-2222-2111-0000-000000000004', 'VIDEO', '[Enrichment / Formative] Centroid of a Triangle in 3D Space & Coordinate Applications', 'https://www.youtube.com/watch?v=iTV5LP5j17s&t=4120s&end=4345s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
