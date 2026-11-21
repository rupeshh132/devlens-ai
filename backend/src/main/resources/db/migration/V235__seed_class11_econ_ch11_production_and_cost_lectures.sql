-- V235__seed_class11_econ_ch11_production_and_cost_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Economics Chapter 11: Production Function & Cost Analysis
-- Masterclass Video: Next Toppers - CA CS Shantam Gupta (DYQfjXfPrRo)
-- 100% Zero-Gap Continuous Timeline: 0s to 2780s (46m 20s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 11
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1100-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1100-0000-000000000011';

-- 2. Insert 4 Verified Master Subtopics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2111-0000-000000000001', '65d29b56-0030-1100-0000-000000000011', 'Production Function: Short-Run and Long-Run Concepts', 1, true),
('65d29b56-0030-2111-0000-000000000002', '65d29b56-0030-1100-0000-000000000011', 'Fixed vs Variable Factors & Concepts of TP, AP and MP', 2, true),
('65d29b56-0030-2111-0000-000000000003', '65d29b56-0030-1100-0000-000000000011', 'Law of Variable Proportions (Returns to a Factor)', 3, true),
('65d29b56-0030-2111-0000-000000000004', '65d29b56-0030-1100-0000-000000000011', 'Interrelationships between TP, MP, AP & Cost Analysis', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 09:19 (0s to 559s)
('65d29b56-0030-3111-0000-000000000001', '65d29b56-0030-2111-0000-000000000001', 'VIDEO', 'Production Function: Short-Run and Long-Run Concepts (Physical Inputs to Output Relationship, Time Horizions, Variable Proportions vs Scale)', 'https://www.youtube.com/watch?v=DYQfjXfPrRo&t=0s&end=559s', true, 1),

-- Topic 2: 09:19 to 24:25 (559s to 1465s)
('65d29b56-0030-3111-0000-000000000002', '65d29b56-0030-2111-0000-000000000002', 'VIDEO', 'Fixed vs Variable Factors & Concepts of TP, AP and MP (Total Physical Product, Average Product, Marginal Product & Tabular Behavior)', 'https://www.youtube.com/watch?v=DYQfjXfPrRo&t=559s&end=1465s', true, 1),

-- Topic 3: 24:25 to 41:04 (1465s to 2464s)
('65d29b56-0030-3111-0000-000000000003', '65d29b56-0030-2111-0000-000000000003', 'VIDEO', 'Law of Variable Proportions (Returns to a Factor - Stage 1 Increasing Returns, Stage 2 Diminishing Returns, Stage 3 Negative Returns & Reasons)', 'https://www.youtube.com/watch?v=DYQfjXfPrRo&t=1465s&end=2464s', true, 1),

-- Topic 4: 41:04 to 46:20 (2464s to 2780s)
('65d29b56-0030-3111-0000-000000000004', '65d29b56-0030-2111-0000-000000000004', 'VIDEO', 'Interrelationships between TP, MP, AP & Cost Analysis (When MP > AP, MP = AP Maximum, MP < AP, Negative MP & Short-Run Cost Components TC, TFC, TVC, AC, MC)', 'https://www.youtube.com/watch?v=DYQfjXfPrRo&t=2464s&end=2780s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
