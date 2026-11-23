-- V394__seed_class12_hist_ch02_kings_farmers_and_towns_early_states_and_economies_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 2 (Kings, Farmers and Towns: Early States and Economies)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (JQylUVgh6MY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 832s)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Kings, Farmers and Towns: Early States and Economies)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000002';

-- 2. Insert 4 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2202-0000-000000000001', '65d29b56-0027-1200-0000-000000000002', 'Decipherment of Inscriptions (Prinsep), The Sixteen Mahajanapadas & Rise of Magadha to Imperial Prominence', 1, true),
('65d29b56-0027-2202-0000-000000000002', '65d29b56-0027-1200-0000-000000000002', 'The Mauryan Empire: Sources (Arthashastra, Megasthenes, Ashokan Edicts), Administration & Ashoka''s Dhamma', 2, true),
('65d29b56-0027-2202-0000-000000000003', '65d29b56-0027-1200-0000-000000000002', 'New Notions of Kingship: Kushanas, Divine Kings, South Indian Chiefdoms (Cholas, Cheras, Pandyas) & Guptas and Samantas', 3, true),
('65d29b56-0027-2202-0000-000000000004', '65d29b56-0027-1200-0000-000000000002', 'Changing Countryside: Agrarian Expansion, Land Grants (Prabhavati Gupta), Coinage & Inscriptional Limitations', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3202-0000-000000000001', '65d29b56-0027-2202-0000-000000000001', 'VIDEO', 'Decipherment of Inscriptions (Prinsep), The Sixteen Mahajanapadas & Rise of Magadha to Imperial Prominence', 'https://www.youtube.com/watch?v=JQylUVgh6MY&end=210s', true, 1),
('65d29b56-0027-3202-0000-000000000002', '65d29b56-0027-2202-0000-000000000002', 'VIDEO', 'The Mauryan Empire: Sources (Arthashastra, Megasthenes, Ashokan Edicts), Administration & Ashoka''s Dhamma', 'https://www.youtube.com/watch?v=JQylUVgh6MY&t=210s&end=420s', true, 1),
('65d29b56-0027-3202-0000-000000000003', '65d29b56-0027-2202-0000-000000000003', 'VIDEO', 'New Notions of Kingship: Kushanas, Divine Kings, South Indian Chiefdoms (Cholas, Cheras, Pandyas) & Guptas and Samantas', 'https://www.youtube.com/watch?v=JQylUVgh6MY&t=420s&end=620s', true, 1),
('65d29b56-0027-3202-0000-000000000004', '65d29b56-0027-2202-0000-000000000004', 'VIDEO', 'Changing Countryside: Agrarian Expansion, Land Grants (Prabhavati Gupta), Coinage & Inscriptional Limitations', 'https://www.youtube.com/watch?v=JQylUVgh6MY&t=620s&end=832s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
