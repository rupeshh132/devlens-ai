-- V446__seed_class12_political_science_ch08_challenges_of_nation_building_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 8 (Challenges of Nation-Building)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (GwiXkkxAHWE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3954s)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Challenges of Nation-Building)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000008';

-- 2. Insert 4 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2208-0000-000000000001', '65d29b56-0028-1200-0000-000000000008', 'Three Grand Challenges for Independent India: Unity in Diversity, Democracy & Equitable Development', 1, true),
('65d29b56-0028-2208-0000-000000000002', '65d29b56-0028-1200-0000-000000000008', 'Partition of India: Two-Nation Theory, Process, Displacement, Communal Violence & Refugee Rehabilitation', 2, true),
('65d29b56-0028-2208-0000-000000000003', '65d29b56-0028-1200-0000-000000000008', 'Integration of Princely States: Patel''s Diplomacy, Instrument of Accession & Cases of Hyderabad and Manipur', 3, true),
('65d29b56-0028-2208-0000-000000000004', '65d29b56-0028-1200-0000-000000000008', 'Linguistic Reorganisation of States: Vishal Andhra Movement, States Reorganisation Commission (SRC) 1956', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3208-0000-000000000001', '65d29b56-0028-2208-0000-000000000001', 'VIDEO', 'Three Grand Challenges for Independent India: Unity in Diversity, Democracy & Equitable Development', 'https://www.youtube.com/watch?v=GwiXkkxAHWE&end=980s', true, 1),
('65d29b56-0028-3208-0000-000000000002', '65d29b56-0028-2208-0000-000000000002', 'VIDEO', 'Partition of India: Two-Nation Theory, Process, Displacement, Communal Violence & Refugee Rehabilitation', 'https://www.youtube.com/watch?v=GwiXkkxAHWE&t=980s&end=1970s', true, 1),
('65d29b56-0028-3208-0000-000000000003', '65d29b56-0028-2208-0000-000000000003', 'VIDEO', 'Integration of Princely States: Patel''s Diplomacy, Instrument of Accession & Cases of Hyderabad and Manipur', 'https://www.youtube.com/watch?v=GwiXkkxAHWE&t=1970s&end=2960s', true, 1),
('65d29b56-0028-3208-0000-000000000004', '65d29b56-0028-2208-0000-000000000004', 'VIDEO', 'Linguistic Reorganisation of States: Vishal Andhra Movement, States Reorganisation Commission (SRC) 1956', 'https://www.youtube.com/watch?v=GwiXkkxAHWE&t=2960s&end=3954s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
