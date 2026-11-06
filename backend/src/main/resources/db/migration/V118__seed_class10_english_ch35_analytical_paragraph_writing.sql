-- V118__seed_class10_english_ch35_analytical_paragraph_writing.sql
-- Seeds dedicated full video lecture for Class 10 English Writing Skills Chapter 2 (Analytical Paragraph Writing - Overall Ch 35)
-- Video: Educational Bhaiya (l3WfCIW7ovI)
-- Single unified lecture covering complete pedagogical content (0s to 843s / 14m 03s)
-- Covers CBSE 5-mark distribution, Introduction/Body/Conclusion format, Line Graphs, Bar Charts, Pie Charts, Tables & sample introduction lines

-- 1. Remove previous topics & content items for English Chapter 35
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000035'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000035';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2035-0000-000000000001', '65d29b56-4444-1000-0000-000000000035', 'Analytical Paragraph: Complete Format, Line Graphs, Bar Charts, Pie Charts, Tables & Magic Lines (One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3035-0000-000000000001', '65d29b56-4444-2035-0000-000000000001', 'VIDEO', 'Analytical Paragraph: Complete Format, Line Graphs, Bar Charts, Pie Charts, Tables & Magic Lines (One-Shot)', 'https://www.youtube.com/watch?v=l3WfCIW7ovI', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
