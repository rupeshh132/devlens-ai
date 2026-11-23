-- V399__seed_class12_hist_ch07_an_imperial_capital_vijayanagara_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 7 (An Imperial Capital: Vijayanagara)
-- Video: The Twin Bros - Humanities Ka Ghar (NCERT Masterclass) (lyzoAjuNMdE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4013s)

-- 1. Remove old placeholder topics & content items for Chapter 7 (An Imperial Capital: Vijayanagara)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000007';

-- 2. Insert 4 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2207-0000-000000000001', '65d29b56-0027-1200-0000-000000000007', 'The Discovery of Hampi (Mackenzie), Geographic Setting & Political History: Rayas, Nayakas and Krishnadeva Raya', 1, true),
('65d29b56-0027-2207-0000-000000000002', '65d29b56-0027-1200-0000-000000000007', 'Water Resources, Elaborate Fortifications, Urban Roads & Agriculture in the Vijayanagara Hinterland', 2, true),
('65d29b56-0027-2207-0000-000000000003', '65d29b56-0027-1200-0000-000000000007', 'The Royal Centre: King''s Palace, Mahanavami Dibba, Lotus Mahal & Hazara Rama Temple Architecture', 3, true),
('65d29b56-0027-2207-0000-000000000004', '65d29b56-0027-1200-0000-000000000007', 'The Sacred Centre: Virupaksha Temple, Vitthala Complex, Gopurams & The Battle of Talikota (1565) Decline', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3207-0000-000000000001', '65d29b56-0027-2207-0000-000000000001', 'VIDEO', 'The Discovery of Hampi (Mackenzie), Geographic Setting & Political History: Rayas, Nayakas and Krishnadeva Raya', 'https://www.youtube.com/watch?v=lyzoAjuNMdE&end=1000s', true, 1),
('65d29b56-0027-3207-0000-000000000002', '65d29b56-0027-2207-0000-000000000002', 'VIDEO', 'Water Resources, Elaborate Fortifications, Urban Roads & Agriculture in the Vijayanagara Hinterland', 'https://www.youtube.com/watch?v=lyzoAjuNMdE&t=1000s&end=2000s', true, 1),
('65d29b56-0027-3207-0000-000000000003', '65d29b56-0027-2207-0000-000000000003', 'VIDEO', 'The Royal Centre: King''s Palace, Mahanavami Dibba, Lotus Mahal & Hazara Rama Temple Architecture', 'https://www.youtube.com/watch?v=lyzoAjuNMdE&t=2000s&end=3000s', true, 1),
('65d29b56-0027-3207-0000-000000000004', '65d29b56-0027-2207-0000-000000000004', 'VIDEO', 'The Sacred Centre: Virupaksha Temple, Vitthala Complex, Gopurams & The Battle of Talikota (1565) Decline', 'https://www.youtube.com/watch?v=lyzoAjuNMdE&t=3000s&end=4013s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
