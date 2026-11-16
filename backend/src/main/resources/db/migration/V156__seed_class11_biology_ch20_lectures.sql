-- V156__seed_class11_biology_ch20_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 20 (Digestion and Absorption - Formative & Bridge Module)
-- Video: Competition Wallah / PW NEET (DIGESTION AND ABSORPTION in 2 Hours | All Theory + Expected Questions for NEET | Akanksha Ma'am | 5T1tKsdRSs8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5140s / 1h 25m 40s)

-- 1. Remove old placeholder topics & content items for Chapter 20 (Digestion and Absorption)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000020'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000020';

-- 2. Insert 4 Verified Master Topics for Chapter 20 (Digestion and Absorption)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2120-0000-000000000001', '65d29b56-0440-1100-0000-000000000020', '[Formative Module] Anatomy of Human Digestive System (Alimentary Canal Histology & Digestive Glands)', 1, true),
('65d29b56-0440-2120-0000-000000000002', '65d29b56-0440-1100-0000-000000000020', '[Formative Module] Digestion of Food: Enzymes, Gastrointestinal Hormones & Peristalsis', 2, true),
('65d29b56-0440-2120-0000-000000000003', '65d29b56-0440-1100-0000-000000000020', '[Formative Module] Absorption, Assimilation, Egestion & Calorific Values of Nutrients', 3, true),
('65d29b56-0440-2120-0000-000000000004', '65d29b56-0440-1100-0000-000000000020', '[Formative Module] Nutritional & Digestive Disorders (PEM - Kwashiorkor & Marasmus, Jaundice, Indigestion, Constipation, Vomiting, Diarrhea)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3120-0000-000000000001', '65d29b56-0440-2120-0000-000000000001', 'VIDEO', '[Formative Module] Anatomy of Human Digestive System (Alimentary Canal Histology & Digestive Glands)', 'https://www.youtube.com/watch?v=5T1tKsdRSs8&end=1420s', true, 1),
('65d29b56-0440-3120-0000-000000000002', '65d29b56-0440-2120-0000-000000000002', 'VIDEO', '[Formative Module] Digestion of Food: Enzymes, Gastrointestinal Hormones & Peristalsis', 'https://www.youtube.com/watch?v=5T1tKsdRSs8&t=1420s&end=3000s', true, 1),
('65d29b56-0440-3120-0000-000000000003', '65d29b56-0440-2120-0000-000000000003', 'VIDEO', '[Formative Module] Absorption, Assimilation, Egestion & Calorific Values of Nutrients', 'https://www.youtube.com/watch?v=5T1tKsdRSs8&t=3000s&end=4150s', true, 1),
('65d29b56-0440-3120-0000-000000000004', '65d29b56-0440-2120-0000-000000000004', 'VIDEO', '[Formative Module] Nutritional & Digestive Disorders (PEM - Kwashiorkor & Marasmus, Jaundice, Indigestion, Constipation, Vomiting, Diarrhea)', 'https://www.youtube.com/watch?v=5T1tKsdRSs8&t=4150s&end=5140s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
