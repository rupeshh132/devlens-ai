-- V115__seed_class10_english_ch32_subject_verb_concord.sql
-- Seeds dedicated full video lecture for Class 10 English Grammar Chapter 4 (Subject-Verb Concord - Overall Ch 32)
-- Video: Educational Bhaiya (WQaAlbmQmUI)
-- Single unified lecture covering complete pedagogical content (0s to 585s / 9m 45s)
-- Fully ad-free educational lecture covering singular/plural subjects, compound subjects, connectors (as well as, neither nor, not only but also), indefinite pronouns & quantities

-- 1. Remove previous topics & content items for English Chapter 32
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000032'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000032';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2032-0000-000000000001', '65d29b56-4444-1000-0000-000000000032', 'Subject-Verb Concord: All Essential Rules, Compound Subjects, Exceptions & Tricks (One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3032-0000-000000000001', '65d29b56-4444-2032-0000-000000000001', 'VIDEO', 'Subject-Verb Concord: All Essential Rules, Compound Subjects, Exceptions & Tricks (One-Shot)', 'https://www.youtube.com/watch?v=WQaAlbmQmUI', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
