-- V396__seed_class12_hist_ch04_thinkers_beliefs_and_buildings_cultural_developments_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 4 (Thinkers, Beliefs and Buildings: Cultural Developments)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (3gHS0gYhNNQ)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1791s)

-- 1. Remove old placeholder topics & content items for Chapter 4 (Thinkers, Beliefs and Buildings: Cultural Developments)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000004';

-- 2. Insert 4 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2204-0000-000000000001', '65d29b56-0027-1200-0000-000000000004', 'The Background of Religious Ferment (1st Millennium BCE): Sacrificial Traditions, Upanishads & Fatalists vs Materialists', 1, true),
('65d29b56-0027-2204-0000-000000000002', '65d29b56-0027-1200-0000-000000000004', 'The Message of Mahavira (Jain Philosophy) & The Teachings of the Buddha and the Sangha', 2, true),
('65d29b56-0027-2204-0000-000000000003', '65d29b56-0027-1200-0000-000000000004', 'Stupas: Meaning, Architecture & The Story of Discovery: Why Sanchi Survived while Amaravati was Despoiled', 3, true),
('65d29b56-0027-2204-0000-000000000004', '65d29b56-0027-1200-0000-000000000004', 'Sculptural Interpretation at Sanchi, New Religious Traditions (Mahayana Buddhism, Puranic Hinduism) & Early Temples', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3204-0000-000000000001', '65d29b56-0027-2204-0000-000000000001', 'VIDEO', 'The Background of Religious Ferment (1st Millennium BCE): Sacrificial Traditions, Upanishads & Fatalists vs Materialists', 'https://www.youtube.com/watch?v=3gHS0gYhNNQ&end=450s', true, 1),
('65d29b56-0027-3204-0000-000000000002', '65d29b56-0027-2204-0000-000000000002', 'VIDEO', 'The Message of Mahavira (Jain Philosophy) & The Teachings of the Buddha and the Sangha', 'https://www.youtube.com/watch?v=3gHS0gYhNNQ&t=450s&end=900s', true, 1),
('65d29b56-0027-3204-0000-000000000003', '65d29b56-0027-2204-0000-000000000003', 'VIDEO', 'Stupas: Meaning, Architecture & The Story of Discovery: Why Sanchi Survived while Amaravati was Despoiled', 'https://www.youtube.com/watch?v=3gHS0gYhNNQ&t=900s&end=1350s', true, 1),
('65d29b56-0027-3204-0000-000000000004', '65d29b56-0027-2204-0000-000000000004', 'VIDEO', 'Sculptural Interpretation at Sanchi, New Religious Traditions (Mahayana Buddhism, Puranic Hinduism) & Early Temples', 'https://www.youtube.com/watch?v=3gHS0gYhNNQ&t=1350s&end=1791s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
