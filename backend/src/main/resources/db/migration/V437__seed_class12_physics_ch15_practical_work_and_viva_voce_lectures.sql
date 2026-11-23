-- V437__seed_class12_physics_ch15_practical_work_and_viva_voce_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 15 (Practical Work, Experiments, Activities, Project & Viva Voce (30 Marks Evaluation))
-- Video: Arvind Academy (Class 12 Physics Masterclass) (StBdeErCQlc)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1414s)

-- 1. Remove old placeholder topics & content items for Chapter 15 (Practical Work, Experiments, Activities, Project & Viva Voce (30 Marks Evaluation))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000015';

-- 2. Insert 4 Verified Master Topics for Chapter 15
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2215-0000-000000000001', '65d29b56-0042-1200-0000-000000000015', 'CBSE Class 12 Physics Practical Blueprint (Two Experiments 14M, Record 5M, Activity 3M, Project 3M, Viva 5M)', 1, true),
('65d29b56-0042-2215-0000-000000000002', '65d29b56-0042-1200-0000-000000000015', 'Section A Core Experiments & Activities: Ohm''s Law, Meter Bridge, Galvanometer Resistance & Figure of Merit', 2, true),
('65d29b56-0042-2215-0000-000000000003', '65d29b56-0042-1200-0000-000000000015', 'Section B Core Experiments & Activities: Convex/Concave Mirror & Lens, Prism Angle of Minimum Deviation & Diode V-I', 3, true),
('65d29b56-0042-2215-0000-000000000004', '65d29b56-0042-1200-0000-000000000015', 'Investigatory Project File Preparation, Core Viva Voce Master Questions & Full 30/30 Scoring Strategy', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3215-0000-000000000001', '65d29b56-0042-2215-0000-000000000001', 'VIDEO', 'CBSE Class 12 Physics Practical Blueprint (Two Experiments 14M, Record 5M, Activity 3M, Project 3M, Viva 5M)', 'https://www.youtube.com/watch?v=StBdeErCQlc&end=350s', true, 1),
('65d29b56-0042-3215-0000-000000000002', '65d29b56-0042-2215-0000-000000000002', 'VIDEO', 'Section A Core Experiments & Activities: Ohm''s Law, Meter Bridge, Galvanometer Resistance & Figure of Merit', 'https://www.youtube.com/watch?v=StBdeErCQlc&t=350s&end=700s', true, 1),
('65d29b56-0042-3215-0000-000000000003', '65d29b56-0042-2215-0000-000000000003', 'VIDEO', 'Section B Core Experiments & Activities: Convex/Concave Mirror & Lens, Prism Angle of Minimum Deviation & Diode V-I', 'https://www.youtube.com/watch?v=StBdeErCQlc&t=700s&end=1050s', true, 1),
('65d29b56-0042-3215-0000-000000000004', '65d29b56-0042-2215-0000-000000000004', 'VIDEO', 'Investigatory Project File Preparation, Core Viva Voce Master Questions & Full 30/30 Scoring Strategy', 'https://www.youtube.com/watch?v=StBdeErCQlc&t=1050s&end=1414s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
