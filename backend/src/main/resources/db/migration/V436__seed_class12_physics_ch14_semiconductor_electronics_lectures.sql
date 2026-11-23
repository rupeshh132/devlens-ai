-- V436__seed_class12_physics_ch14_semiconductor_electronics_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 14 (Semiconductor Electronics: Materials, Devices and Simple Circuits)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (g1eOG985-kY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4664s)

-- 1. Remove old placeholder topics & content items for Chapter 14 (Semiconductor Electronics: Materials, Devices and Simple Circuits)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000014';

-- 2. Insert 4 Verified Master Topics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2214-0000-000000000001', '65d29b56-0042-1200-0000-000000000014', 'Energy Band Theory: Valence Band, Conduction Band & Energy Gap in Conductors, Insulators and Semiconductors', 1, true),
('65d29b56-0042-2214-0000-000000000002', '65d29b56-0042-1200-0000-000000000014', 'Intrinsic and Extrinsic Semiconductors: Doping Mechanism, n-type and p-type Semiconductors & Carrier Concentrations', 2, true),
('65d29b56-0042-2214-0000-000000000003', '65d29b56-0042-1200-0000-000000000014', 'p-n Junction Diode: Formation of Depletion Layer & Potential Barrier, Forward and Reverse Bias V-I Characteristics', 3, true),
('65d29b56-0042-2214-0000-000000000004', '65d29b56-0042-1200-0000-000000000014', 'Applications of p-n Junction Diode: Half-Wave and Full-Wave Rectification Circuits & Filter Concepts', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3214-0000-000000000001', '65d29b56-0042-2214-0000-000000000001', 'VIDEO', 'Energy Band Theory: Valence Band, Conduction Band & Energy Gap in Conductors, Insulators and Semiconductors', 'https://www.youtube.com/watch?v=g1eOG985-kY&end=1160s', true, 1),
('65d29b56-0042-3214-0000-000000000002', '65d29b56-0042-2214-0000-000000000002', 'VIDEO', 'Intrinsic and Extrinsic Semiconductors: Doping Mechanism, n-type and p-type Semiconductors & Carrier Concentrations', 'https://www.youtube.com/watch?v=g1eOG985-kY&t=1160s&end=2330s', true, 1),
('65d29b56-0042-3214-0000-000000000003', '65d29b56-0042-2214-0000-000000000003', 'VIDEO', 'p-n Junction Diode: Formation of Depletion Layer & Potential Barrier, Forward and Reverse Bias V-I Characteristics', 'https://www.youtube.com/watch?v=g1eOG985-kY&t=2330s&end=3490s', true, 1),
('65d29b56-0042-3214-0000-000000000004', '65d29b56-0042-2214-0000-000000000004', 'VIDEO', 'Applications of p-n Junction Diode: Half-Wave and Full-Wave Rectification Circuits & Filter Concepts', 'https://www.youtube.com/watch?v=g1eOG985-kY&t=3490s&end=4664s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
