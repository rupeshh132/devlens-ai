-- V372__seed_class12_geo_ch03_human_development_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 3 (Human Development)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (BtPo8Mu5O4g)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 887s)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Human Development)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000003';

-- 2. Insert 4 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2203-0000-000000000001', '65d29b56-0029-1200-0000-000000000003', 'Concept of Human Development: Growth vs Development & Key Dimensions (Mahbub-ul-Haq & Amartya Sen)', 1, true),
('65d29b56-0029-2203-0000-000000000002', '65d29b56-0029-1200-0000-000000000003', 'The Four Pillars of Human Development: Equity, Sustainability, Productivity and Empowerment', 2, true),
('65d29b56-0029-2203-0000-000000000003', '65d29b56-0029-1200-0000-000000000003', 'Approaches to Human Development: Income, Welfare, Basic Needs & Capability Approaches', 3, true),
('65d29b56-0029-2203-0000-000000000004', '65d29b56-0029-1200-0000-000000000003', 'Measuring Human Development: HDI vs HPI, Gross National Happiness (GNH) & International Comparisons', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3203-0000-000000000001', '65d29b56-0029-2203-0000-000000000001', 'VIDEO', 'Concept of Human Development: Growth vs Development & Key Dimensions (Mahbub-ul-Haq & Amartya Sen)', 'https://www.youtube.com/watch?v=BtPo8Mu5O4g&end=220s', true, 1),
('65d29b56-0029-3203-0000-000000000002', '65d29b56-0029-2203-0000-000000000002', 'VIDEO', 'The Four Pillars of Human Development: Equity, Sustainability, Productivity and Empowerment', 'https://www.youtube.com/watch?v=BtPo8Mu5O4g&t=220s&end=440s', true, 1),
('65d29b56-0029-3203-0000-000000000003', '65d29b56-0029-2203-0000-000000000003', 'VIDEO', 'Approaches to Human Development: Income, Welfare, Basic Needs & Capability Approaches', 'https://www.youtube.com/watch?v=BtPo8Mu5O4g&t=440s&end=650s', true, 1),
('65d29b56-0029-3203-0000-000000000004', '65d29b56-0029-2203-0000-000000000004', 'VIDEO', 'Measuring Human Development: HDI vs HPI, Gross National Happiness (GNH) & International Comparisons', 'https://www.youtube.com/watch?v=BtPo8Mu5O4g&t=650s&end=887s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
