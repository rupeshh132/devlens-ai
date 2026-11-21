-- V228__seed_class11_econ_ch04_presentation_of_data_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 4: Presentation of Data (Tabular & Diagrammatic)
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (NjgbHPToySU)
-- 100% Zero-Gap Continuous Timeline: 0s to 3760s (01:02:40, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000004';

-- 2. Insert 4 Verified Master Subtopics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2104-0000-000000000001', '65d29b56-0030-1100-0000-000000000004', 'Textual and Tabular Presentation of Data & Parts of a Table', 1, true),
('65d29b56-0030-2104-0000-000000000002', '65d29b56-0030-1100-0000-000000000004', 'Geometric Diagrams: Bar Diagrams and Pie Charts', 2, true),
('65d29b56-0030-2104-0000-000000000003', '65d29b56-0030-1100-0000-000000000004', 'Frequency Diagrams: Histogram, Polygon and Ogives', 3, true),
('65d29b56-0030-2104-0000-000000000004', '65d29b56-0030-1100-0000-000000000004', 'Arithmetic Line Graphs (Time Series Graphs)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 15:40 (0s to 940s)
('65d29b56-0030-3104-0000-000000000001', '65d29b56-0030-2104-0000-000000000001', 'VIDEO', 'Textual and Tabular Presentation of Data & Parts of a Table (Table Number, Title, Head Note, Stubs, Captions, Body, Source Note & Classification Types)', 'https://www.youtube.com/watch?v=NjgbHPToySU&t=0s&end=940s', true, 1),

-- Topic 2: 15:40 to 33:00 (940s to 1980s)
('65d29b56-0030-3104-0000-000000000002', '65d29b56-0030-2104-0000-000000000002', 'VIDEO', 'Geometric Diagrams: Bar Diagrams and Pie Charts (Simple, Multiple, Subdivided, Percentage Bar Diagrams & Circular/Angular Sector Charts)', 'https://www.youtube.com/watch?v=NjgbHPToySU&t=940s&end=1980s', true, 1),

-- Topic 3: 33:00 to 49:10 (1980s to 2950s)
('65d29b56-0030-3104-0000-000000000003', '65d29b56-0030-2104-0000-000000000003', 'VIDEO', 'Frequency Diagrams: Histogram, Polygon and Ogives (Equal & Unequal Class Width Histograms, Frequency Curve, Less-Than & More-Than Cumulative Ogives)', 'https://www.youtube.com/watch?v=NjgbHPToySU&t=1980s&end=2950s', true, 1),

-- Topic 4: 49:10 to 01:02:40 (2950s to 3760s)
('65d29b56-0030-3104-0000-000000000004', '65d29b56-0030-2104-0000-000000000004', 'VIDEO', 'Arithmetic Line Graphs (Time Series Graphs - One Variable, Two or More Variables Graphs, False Base Line & Visual Trend Interpretation)', 'https://www.youtube.com/watch?v=NjgbHPToySU&t=2950s&end=3760s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
