-- V214__seed_class11_cs_ch02_data_representation_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Computer Science Chapter 2: Data Representation & Number Systems
-- Masterclass Video: Magnet Brains - Shraddha Ma'am (qlUWQpAjSWU)
-- 100% Zero-Gap Continuous Timeline: 0s to 2420s (40m 20s, Outro promotional course card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000002';

-- 2. Insert 4 Verified Master Subtopics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2102-0000-000000000001', '65d29b56-0083-1100-0000-000000000002', 'Data Representation & Encoding Schemes (ASCII, ISCII & Unicode)', 1, true),
('65d29b56-0083-2102-0000-000000000002', '65d29b56-0083-1100-0000-000000000002', 'Number Systems: Binary, Octal, Decimal & Hexadecimal Bases', 2, true),
('65d29b56-0083-2102-0000-000000000003', '65d29b56-0083-1100-0000-000000000002', 'Decimal to Other Bases Conversions (Binary, Octal, Hexadecimal via Successive Division)', 3, true),
('65d29b56-0083-2102-0000-000000000004', '65d29b56-0083-1100-0000-000000000002', 'Inter-Conversions & Short-Cut Grouping Methods (Binary, Octal & Hexadecimal)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 11:50 (0s to 710s)
('65d29b56-0083-3102-0000-000000000001', '65d29b56-0083-2102-0000-000000000001', 'VIDEO', 'Data Representation & Encoding Schemes (ASCII 7-bit/8-bit, ISCII Indian Scripts & Unicode UTF-8/UTF-32 Standardization)', 'https://www.youtube.com/watch?v=qlUWQpAjSWU&t=0s&end=710s', true, 1),

-- Topic 2: 11:50 to 20:50 (710s to 1250s)
('65d29b56-0083-3102-0000-000000000002', '65d29b56-0083-2102-0000-000000000002', 'VIDEO', 'Number Systems: Binary, Octal, Decimal & Hexadecimal Bases (Bases 2, 8, 10, 16, Positional Value, Weights & Digits Representation)', 'https://www.youtube.com/watch?v=qlUWQpAjSWU&t=710s&end=1250s', true, 1),

-- Topic 3: 20:50 to 31:20 (1250s to 1880s)
('65d29b56-0083-3102-0000-000000000003', '65d29b56-0083-2102-0000-000000000003', 'VIDEO', 'Decimal to Other Bases Conversions (Successive Division Method for Integer Parts & Multiplication for Fractional Numbers)', 'https://www.youtube.com/watch?v=qlUWQpAjSWU&t=1250s&end=1880s', true, 1),

-- Topic 4: 31:20 to 40:20 (1880s to 2420s)
('65d29b56-0083-3102-0000-000000000004', '65d29b56-0083-2102-0000-000000000004', 'VIDEO', 'Inter-Conversions & Short-Cut Grouping Methods (Binary to Decimal Polynomial Expansion, 3-Bit Octal Grouping & 4-Bit Hexadecimal Grouping)', 'https://www.youtube.com/watch?v=qlUWQpAjSWU&t=1880s&end=2420s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
