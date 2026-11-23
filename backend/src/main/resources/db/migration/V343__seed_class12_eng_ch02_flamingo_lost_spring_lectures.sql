-- V343__seed_class12_eng_ch02_flamingo_lost_spring_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 2 (Flamingo: Lost Spring)
-- Video: Simran Sahni (Board Exam Masterclass) (l0hXzk5v7aE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1580s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Flamingo: Lost Spring)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000002';

-- 2. Insert 3 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2202-0000-000000000001', '65d29b56-0301-1200-0000-000000000002', 'Part 1: "Sometimes I Find a Rupee in the Garbage" – Saheb-e-Alam & The Life of Seemapuri Ragpickers', 1, true),
('65d29b56-0301-2202-0000-000000000002', '65d29b56-0301-1200-0000-000000000002', 'Part 2: "I Want to Drive a Car" – Mukesh''s Ambition & Firozabad Bangle Makers in Perpetual Poverty', 2, true),
('65d29b56-0301-2202-0000-000000000003', '65d29b56-0301-1200-0000-000000000002', 'Sahukars, Middlemen, Bureaucrats Nexus, Themes of Child Labour, NCERT Solutions & Board PYQs', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3202-0000-000000000001', '65d29b56-0301-2202-0000-000000000001', 'VIDEO', 'Part 1: "Sometimes I Find a Rupee in the Garbage" – Saheb-e-Alam & The Life of Seemapuri Ragpickers', 'https://www.youtube.com/watch?v=l0hXzk5v7aE&end=520s', true, 1),
('65d29b56-0301-3202-0000-000000000002', '65d29b56-0301-2202-0000-000000000002', 'VIDEO', 'Part 2: "I Want to Drive a Car" – Mukesh''s Ambition & Firozabad Bangle Makers in Perpetual Poverty', 'https://www.youtube.com/watch?v=l0hXzk5v7aE&t=520s&end=1080s', true, 1),
('65d29b56-0301-3202-0000-000000000003', '65d29b56-0301-2202-0000-000000000003', 'VIDEO', 'Sahukars, Middlemen, Bureaucrats Nexus, Themes of Child Labour, NCERT Solutions & Board PYQs', 'https://www.youtube.com/watch?v=l0hXzk5v7aE&t=1080s&end=1580s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
