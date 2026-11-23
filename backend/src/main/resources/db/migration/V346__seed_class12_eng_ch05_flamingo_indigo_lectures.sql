-- V346__seed_class12_eng_ch05_flamingo_indigo_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 5 (Flamingo: Indigo)
-- Video: Simran Sahni (Board Exam Masterclass) (3wP0m54miJg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1710s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Flamingo: Indigo)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000005';

-- 2. Insert 3 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2205-0000-000000000001', '65d29b56-0301-1200-0000-000000000005', 'Rajkumar Shukla''s Tenacity, Arrival in Champaran & The Plight of Sharecroppers under British Landlords', 1, true),
('65d29b56-0301-2205-0000-000000000002', '65d29b56-0301-1200-0000-000000000005', 'Motihari Court Scene, The Triumph of Civil Disobedience, Gandhi''s Inquiry & The 25% Refund Settlement', 2, true),
('65d29b56-0301-2205-0000-000000000003', '65d29b56-0301-1200-0000-000000000005', 'Social, Health and Educational Upliftment in Champaran, Lesson in Self-Reliance & Board PYQs', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3205-0000-000000000001', '65d29b56-0301-2205-0000-000000000001', 'VIDEO', 'Rajkumar Shukla''s Tenacity, Arrival in Champaran & The Plight of Sharecroppers under British Landlords', 'https://www.youtube.com/watch?v=3wP0m54miJg&end=580s', true, 1),
('65d29b56-0301-3205-0000-000000000002', '65d29b56-0301-2205-0000-000000000002', 'VIDEO', 'Motihari Court Scene, The Triumph of Civil Disobedience, Gandhi''s Inquiry & The 25% Refund Settlement', 'https://www.youtube.com/watch?v=3wP0m54miJg&t=580s&end=1180s', true, 1),
('65d29b56-0301-3205-0000-000000000003', '65d29b56-0301-2205-0000-000000000003', 'VIDEO', 'Social, Health and Educational Upliftment in Champaran, Lesson in Self-Reliance & Board PYQs', 'https://www.youtube.com/watch?v=3wP0m54miJg&t=1180s&end=1710s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
