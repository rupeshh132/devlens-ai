-- V117__seed_class10_english_ch34_formal_letter_writing.sql
-- Seeds dedicated full video lecture for Class 10 English Writing Skills Chapter 1 (Formal Letter Writing - Overall Ch 34)
-- Video: Educational Bhaiya (esZDtBDSpZU)
-- Single unified lecture covering complete pedagogical content (60s to 1327s / 21m 07s)
-- Trimmed from original 0s to 60s to cleanly eliminate the intro app advertisement & course promotion (0s to 60s) per user instruction
-- Covers official CBSE format, 5-mark distribution, Letter to Editor, Inquiry Letters, Complaint Letters & solved examples

-- 1. Remove previous topics & content items for English Chapter 34
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000034'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000034';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2034-0000-000000000001', '65d29b56-4444-1000-0000-000000000034', 'Formal Letter Writing: CBSE Format, Marking Scheme, Editor, Inquiry & Complaint Letters (One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3034-0000-000000000001', '65d29b56-4444-2034-0000-000000000001', 'VIDEO', 'Formal Letter Writing: CBSE Format, Marking Scheme, Editor, Inquiry & Complaint Letters (One-Shot)', 'https://www.youtube.com/watch?v=esZDtBDSpZU&t=60s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
