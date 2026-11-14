-- V135__seed_class11_maths_ch14_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Mathematics Chapter 14 (Probability)
-- Video: PW Class 11 Science (Probability | Full Chapter in ONE SHOT | Chapter 16 | Class 11 Maths | 5Ok1AkHBsnw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 9951s / 2h 45m 51s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 14 (Probability)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1100-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1100-0000-000000000014';

-- 2. Insert 5 Verified Master Topics for Chapter 14 (Probability)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2114-0000-000000000001', '65d29b56-2222-1100-0000-000000000014', '[Enrichment / Formative] Random Experiments, Outcomes and Sample Space (Set Representation)', 1, true),
('65d29b56-2222-2114-0000-000000000002', '65d29b56-2222-1100-0000-000000000014', 'Event Algebra: Types of Events (Sure, Impossible, Compound) & Negation of an Event (''Not A'')', 2, true),
('65d29b56-2222-2114-0000-000000000003', '65d29b56-2222-1100-0000-000000000014', 'Mutually Exclusive Events, Exhaustive Events & System of Events', 3, true),
('65d29b56-2222-2114-0000-000000000004', '65d29b56-2222-1100-0000-000000000014', 'Axiomatic Approach to Probability & Equally Likely Outcomes: Concept & Problem Solving', 4, true),
('65d29b56-2222-2114-0000-000000000005', '65d29b56-2222-1100-0000-000000000014', 'Addition Theorem of Probability, Probability of ''Not A'', ''A or B'', ''A and B'' & Exam Practice', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3114-0000-000000000001', '65d29b56-2222-2114-0000-000000000001', 'VIDEO', '[Enrichment / Formative] Random Experiments, Outcomes and Sample Space (Set Representation)', 'https://www.youtube.com/watch?v=5Ok1AkHBsnw&end=2210s', true, 1),
('65d29b56-2222-3114-0000-000000000002', '65d29b56-2222-2114-0000-000000000002', 'VIDEO', 'Event Algebra: Types of Events (Sure, Impossible, Compound) & Negation of an Event (''Not A'')', 'https://www.youtube.com/watch?v=5Ok1AkHBsnw&t=2210s&end=3278s', true, 1),
('65d29b56-2222-3114-0000-000000000003', '65d29b56-2222-2114-0000-000000000003', 'VIDEO', 'Mutually Exclusive Events, Exhaustive Events & System of Events', 'https://www.youtube.com/watch?v=5Ok1AkHBsnw&t=3278s&end=4414s', true, 1),
('65d29b56-2222-3114-0000-000000000004', '65d29b56-2222-2114-0000-000000000004', 'VIDEO', 'Axiomatic Approach to Probability & Equally Likely Outcomes: Concept & Problem Solving', 'https://www.youtube.com/watch?v=5Ok1AkHBsnw&t=4414s&end=8135s', true, 1),
('65d29b56-2222-3114-0000-000000000005', '65d29b56-2222-2114-0000-000000000005', 'VIDEO', 'Addition Theorem of Probability, Probability of ''Not A'', ''A or B'', ''A and B'' & Exam Practice', 'https://www.youtube.com/watch?v=5Ok1AkHBsnw&t=8135s&end=9951s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
