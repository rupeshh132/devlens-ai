-- V116__seed_class10_english_ch33_reported_speech.sql
-- Seeds dedicated full video lecture for Class 10 English Grammar Chapter 5 (Reported Speech - Overall Ch 33)
-- Video: Educational Bhaiya (yfP8EByXrKU)
-- Single unified lecture covering complete pedagogical content (0s to 788s / 13m 08s)
-- Trimmed from original 800s to 788s to cleanly eliminate the outro social media card (788s to 800s) per user instruction
-- Covers Direct to Indirect speech, tense shifts, pronoun changes, commands, requests, questions, time expressions & practice

-- 1. Remove previous topics & content items for English Chapter 33
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000033'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000033';

-- 2. Insert single unified Master Topic
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2033-0000-000000000001', '65d29b56-4444-1000-0000-000000000033', 'Reported Speech: Direct to Indirect, Tense/Pronoun Shifts, Commands, Questions & Practice (One-Shot)', 1, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert single Video Content Item
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3033-0000-000000000001', '65d29b56-4444-2033-0000-000000000001', 'VIDEO', 'Reported Speech: Direct to Indirect, Tense/Pronoun Shifts, Commands, Questions & Practice (One-Shot)', 'https://www.youtube.com/watch?v=yfP8EByXrKU&end=788s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
