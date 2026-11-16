-- V150__seed_class11_biology_ch14_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 14 (Breathing and Exchange of Gases)
-- Video: PW Class 11 Science (Breathing and Exchange of Gases | Full Chapter in ONE SHOT | Chapter 14 | Class 11 Biology | u5wOicCsERg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6630s / 1h 50m 30s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 14 (Breathing and Exchange of Gases)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000014';

-- 2. Insert 5 Verified Master Topics for Chapter 14 (Breathing and Exchange of Gases)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2114-0000-000000000001', '65d29b56-0440-1100-0000-000000000014', 'Respiratory Organs Across Animals & Human Respiratory System Anatomy', 1, true),
('65d29b56-0440-2114-0000-000000000002', '65d29b56-0440-1100-0000-000000000014', 'Mechanism of Breathing & Respiratory Volumes and Capacities', 2, true),
('65d29b56-0440-2114-0000-000000000003', '65d29b56-0440-1100-0000-000000000014', 'Exchange of Gases: Partial Pressures, Alveolar Diffusion & Factors Affecting Exchange', 3, true),
('65d29b56-0440-2114-0000-000000000004', '65d29b56-0440-1100-0000-000000000014', 'Transport of Gases: Oxygen-Hemoglobin Dissociation Curve & Carbon Dioxide Transport', 4, true),
('65d29b56-0440-2114-0000-000000000005', '65d29b56-0440-1100-0000-000000000014', 'Regulation of Respiration & Disorders of Respiratory System (Asthma, Emphysema, Occupational)', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3114-0000-000000000001', '65d29b56-0440-2114-0000-000000000001', 'VIDEO', 'Respiratory Organs Across Animals & Human Respiratory System Anatomy', 'https://www.youtube.com/watch?v=u5wOicCsERg&end=2533s', true, 1),
('65d29b56-0440-3114-0000-000000000002', '65d29b56-0440-2114-0000-000000000002', 'VIDEO', 'Mechanism of Breathing & Respiratory Volumes and Capacities', 'https://www.youtube.com/watch?v=u5wOicCsERg&t=2533s&end=4105s', true, 1),
('65d29b56-0440-3114-0000-000000000003', '65d29b56-0440-2114-0000-000000000003', 'VIDEO', 'Exchange of Gases: Partial Pressures, Alveolar Diffusion & Factors Affecting Exchange', 'https://www.youtube.com/watch?v=u5wOicCsERg&t=4105s&end=5001s', true, 1),
('65d29b56-0440-3114-0000-000000000004', '65d29b56-0440-2114-0000-000000000004', 'VIDEO', 'Transport of Gases: Oxygen-Hemoglobin Dissociation Curve & Carbon Dioxide Transport', 'https://www.youtube.com/watch?v=u5wOicCsERg&t=5001s&end=6119s', true, 1),
('65d29b56-0440-3114-0000-000000000005', '65d29b56-0440-2114-0000-000000000005', 'VIDEO', 'Regulation of Respiration & Disorders of Respiratory System (Asthma, Emphysema, Occupational)', 'https://www.youtube.com/watch?v=u5wOicCsERg&t=6119s&end=6630s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
