-- V348__seed_class12_eng_ch07_flamingo_the_interview_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 7 (Flamingo: The Interview)
-- Video: Simran Sahni (Board Exam Masterclass) (_1oMsLjUuUc)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1200s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Flamingo: The Interview)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000007';

-- 2. Insert 3 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2207-0000-000000000001', '65d29b56-0301-1200-0000-000000000007', 'Part 1: History, Functions & Varied Views on Interviews (Celebrity Skepticism: Naipaul, Carroll, Wells)', 1, true),
('65d29b56-0301-2207-0000-000000000002', '65d29b56-0301-1200-0000-000000000007', 'Part 2: Mukund Padmanabhan''s Interview with Umberto Eco – Semiotics & Working in the "Interstices"', 2, true),
('65d29b56-0301-2207-0000-000000000003', '65d29b56-0301-1200-0000-000000000007', 'Huge Global Success of ''The Name of the Rose'', Scholarly vs Popular Fiction & RTC Questions', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3207-0000-000000000001', '65d29b56-0301-2207-0000-000000000001', 'VIDEO', 'Part 1: History, Functions & Varied Views on Interviews (Celebrity Skepticism: Naipaul, Carroll, Wells)', 'https://www.youtube.com/watch?v=_1oMsLjUuUc&end=420s', true, 1),
('65d29b56-0301-3207-0000-000000000002', '65d29b56-0301-2207-0000-000000000002', 'VIDEO', 'Part 2: Mukund Padmanabhan''s Interview with Umberto Eco – Semiotics & Working in the "Interstices"', 'https://www.youtube.com/watch?v=_1oMsLjUuUc&t=420s&end=840s', true, 1),
('65d29b56-0301-3207-0000-000000000003', '65d29b56-0301-2207-0000-000000000003', 'VIDEO', 'Huge Global Success of ''The Name of the Rose'', Scholarly vs Popular Fiction & RTC Questions', 'https://www.youtube.com/watch?v=_1oMsLjUuUc&t=840s&end=1200s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
