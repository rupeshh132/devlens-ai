-- V230__seed_class11_econ_ch06_correlation_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 6: Measures of Correlation
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (7T8tf3yjOfs)
-- 100% Zero-Gap Continuous Timeline: 0s to 4570s (01:16:10, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000006';

-- 2. Insert 4 Verified Master Subtopics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2106-0000-000000000001', '65d29b56-0030-1100-0000-000000000006', 'Correlation: Meaning, Types, Degree & Scatter Diagram', 1, true),
('65d29b56-0030-2106-0000-000000000002', '65d29b56-0030-1100-0000-000000000006', 'Karl Pearson''s Coefficient of Correlation (Direct & Assumed Mean)', 2, true),
('65d29b56-0030-2106-0000-000000000003', '65d29b56-0030-1100-0000-000000000006', 'Properties of Correlation Coefficient & Interpretation', 3, true),
('65d29b56-0030-2106-0000-000000000004', '65d29b56-0030-1100-0000-000000000006', 'Spearman''s Rank Correlation (Non-Repeated & Repeated Ranks)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 19:10 (0s to 1150s)
('65d29b56-0030-3106-0000-000000000001', '65d29b56-0030-2106-0000-000000000001', 'VIDEO', 'Correlation: Meaning, Types, Degree & Scatter Diagram (Positive vs Negative, Linear vs Non-Linear, Perfect, High, Moderate & Low Degree Correlation)', 'https://www.youtube.com/watch?v=7T8tf3yjOfs&t=0s&end=1150s', true, 1),

-- Topic 2: 19:10 to 40:20 (1150s to 2420s)
('65d29b56-0030-3106-0000-000000000002', '65d29b56-0030-2106-0000-000000000002', 'VIDEO', 'Karl Pearson''s Coefficient of Correlation (Direct & Assumed Mean - Actual Mean Method, Assumed Mean Method, Step-Deviation Method & Standard Deviation Formulas)', 'https://www.youtube.com/watch?v=7T8tf3yjOfs&t=1150s&end=2420s', true, 1),

-- Topic 3: 40:20 to 57:30 (2420s to 3450s)
('65d29b56-0030-3106-0000-000000000003', '65d29b56-0030-2106-0000-000000000003', 'VIDEO', 'Properties of Correlation Coefficient & Interpretation (Independent of Origin and Scale, Limits -1 to +1, Direction & Economic Relevance)', 'https://www.youtube.com/watch?v=7T8tf3yjOfs&t=2420s&end=3450s', true, 1),

-- Topic 4: 57:30 to 01:16:10 (3450s to 4570s)
('65d29b56-0030-3106-0000-000000000004', '65d29b56-0030-2106-0000-000000000004', 'VIDEO', 'Spearman''s Rank Correlation (Non-Repeated & Repeated Ranks - Difference of Ranks d^2 Formula, Tie Ranks Correction Factor & Qualitative Assessment)', 'https://www.youtube.com/watch?v=7T8tf3yjOfs&t=3450s&end=4570s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
