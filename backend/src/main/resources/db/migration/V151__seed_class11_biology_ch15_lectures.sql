-- V151__seed_class11_biology_ch15_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 15 (Body Fluids and Circulation)
-- Video: PW Class 11 Science (Body Fluids and Circulation | Full Chapter in ONE SHOT | Chapter 15 | Class 11 Biology | Y6BuLZ5-FDs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8280s / 2h 18m 00s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 15 (Body Fluids and Circulation)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000015';

-- 2. Insert 6 Verified Master Topics for Chapter 15 (Body Fluids and Circulation)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2115-0000-000000000001', '65d29b56-0440-1100-0000-000000000015', 'Composition of Blood: Plasma & Formed Elements (RBCs, WBCs, Platelets)', 1, true),
('65d29b56-0440-2115-0000-000000000002', '65d29b56-0440-1100-0000-000000000015', 'Blood Coagulation, ABO & Rh Blood Groups & Erythroblastosis Fetalis', 2, true),
('65d29b56-0440-2115-0000-000000000003', '65d29b56-0440-1100-0000-000000000015', 'Lymph (Tissue Fluid), Circulatory Pathways & Human Heart Anatomy & Conducting System', 3, true),
('65d29b56-0440-2115-0000-000000000004', '65d29b56-0440-1100-0000-000000000015', 'Cardiac Cycle, Heart Sounds, Cardiac Output & Electrocardiogram (ECG)', 4, true),
('65d29b56-0440-2115-0000-000000000005', '65d29b56-0440-1100-0000-000000000015', 'Double Circulation, Hepatic Portal & Coronary Systems & Blood Vessels Anatomy', 5, true),
('65d29b56-0440-2115-0000-000000000006', '65d29b56-0440-1100-0000-000000000015', 'Regulation of Cardiac Activity & Circulatory Disorders (Hypertension, CAD, Angina, Heart Failure)', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3115-0000-000000000001', '65d29b56-0440-2115-0000-000000000001', 'VIDEO', 'Composition of Blood: Plasma & Formed Elements (RBCs, WBCs, Platelets)', 'https://www.youtube.com/watch?v=Y6BuLZ5-FDs&end=1507s', true, 1),
('65d29b56-0440-3115-0000-000000000002', '65d29b56-0440-2115-0000-000000000002', 'VIDEO', 'Blood Coagulation, ABO & Rh Blood Groups & Erythroblastosis Fetalis', 'https://www.youtube.com/watch?v=Y6BuLZ5-FDs&t=1507s&end=2797s', true, 1),
('65d29b56-0440-3115-0000-000000000003', '65d29b56-0440-2115-0000-000000000003', 'VIDEO', 'Lymph (Tissue Fluid), Circulatory Pathways & Human Heart Anatomy & Conducting System', 'https://www.youtube.com/watch?v=Y6BuLZ5-FDs&t=2797s&end=5451s', true, 1),
('65d29b56-0440-3115-0000-000000000004', '65d29b56-0440-2115-0000-000000000004', 'VIDEO', 'Cardiac Cycle, Heart Sounds, Cardiac Output & Electrocardiogram (ECG)', 'https://www.youtube.com/watch?v=Y6BuLZ5-FDs&t=5451s&end=6649s', true, 1),
('65d29b56-0440-3115-0000-000000000005', '65d29b56-0440-2115-0000-000000000005', 'VIDEO', 'Double Circulation, Hepatic Portal & Coronary Systems & Blood Vessels Anatomy', 'https://www.youtube.com/watch?v=Y6BuLZ5-FDs&t=6649s&end=7739s', true, 1),
('65d29b56-0440-3115-0000-000000000006', '65d29b56-0440-2115-0000-000000000006', 'VIDEO', 'Regulation of Cardiac Activity & Circulatory Disorders (Hypertension, CAD, Angina, Heart Failure)', 'https://www.youtube.com/watch?v=Y6BuLZ5-FDs&t=7739s&end=8280s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
