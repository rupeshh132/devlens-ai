-- V225__seed_class11_econ_ch01_intro_statistics_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 1: Introduction to Statistics in Economics
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (UWEB8DclIk0)
-- 100% Zero-Gap Continuous Timeline: 0s to 2715s (45m 15s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000001';

-- 2. Insert 4 Verified Master Subtopics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2101-0000-000000000001', '65d29b56-0030-1100-0000-000000000001', 'Meaning, Scope and Nature of Economics', 1, true),
('65d29b56-0030-2101-0000-000000000002', '65d29b56-0030-1100-0000-000000000001', 'Concept and Definition of Statistics (Plural & Singular Sense)', 2, true),
('65d29b56-0030-2101-0000-000000000003', '65d29b56-0030-1100-0000-000000000001', 'Functions and Importance of Statistics in Economics', 3, true),
('65d29b56-0030-2101-0000-000000000004', '65d29b56-0030-1100-0000-000000000001', 'Limitations and Distrust of Statistics', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 09:40 (0s to 580s)
('65d29b56-0030-3101-0000-000000000001', '65d29b56-0030-2101-0000-000000000001', 'VIDEO', 'Meaning, Scope and Nature of Economics (Economic Activities, Scarcity, Consumer, Producer, Service Provider & Economic Problems)', 'https://www.youtube.com/watch?v=UWEB8DclIk0&t=0s&end=580s', true, 1),

-- Topic 2: 09:40 to 20:20 (580s to 1220s)
('65d29b56-0030-3101-0000-000000000002', '65d29b56-0030-2101-0000-000000000002', 'VIDEO', 'Concept and Definition of Statistics (Plural & Singular Sense - Aggregate of Facts, Numerically Expressed, Systematic Collection & 5 Stages)', 'https://www.youtube.com/watch?v=UWEB8DclIk0&t=580s&end=1220s', true, 1),

-- Topic 3: 20:20 to 32:30 (1220s to 1950s)
('65d29b56-0030-3101-0000-000000000003', '65d29b56-0030-2101-0000-000000000003', 'VIDEO', 'Functions and Importance of Statistics in Economics (Simplification of Complexities, Comparison of Facts, Formulation of Economic Policies & Forecasting)', 'https://www.youtube.com/watch?v=UWEB8DclIk0&t=1220s&end=1950s', true, 1),

-- Topic 4: 32:30 to 45:15 (1950s to 2715s)
('65d29b56-0030-3101-0000-000000000004', '65d29b56-0030-2101-0000-000000000004', 'VIDEO', 'Limitations and Distrust of Statistics (Qualitative Aspects Ignored, Misuse of Data, Prone to Biases & Contextual Necessity)', 'https://www.youtube.com/watch?v=UWEB8DclIk0&t=1950s&end=2715s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
