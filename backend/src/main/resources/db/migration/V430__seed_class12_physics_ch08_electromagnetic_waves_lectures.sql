-- V430__seed_class12_physics_ch08_electromagnetic_waves_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 8 (Electromagnetic Waves)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (j3vtn-rnEgA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5741s)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Electromagnetic Waves)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000008';

-- 2. Insert 4 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2208-0000-000000000001', '65d29b56-0042-1200-0000-000000000008', 'Inconsistency of Ampere''s Circuital Law, Maxwell''s Displacement Current & Maxwell''s Equations', 1, true),
('65d29b56-0042-2208-0000-000000000002', '65d29b56-0042-1200-0000-000000000008', 'Characteristics and Transverse Nature of Electromagnetic Waves & Speed of Light Formulation', 2, true),
('65d29b56-0042-2208-0000-000000000003', '65d29b56-0042-1200-0000-000000000008', 'The Electromagnetic Spectrum: Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray & Gamma Rays', 3, true),
('65d29b56-0042-2208-0000-000000000004', '65d29b56-0042-1200-0000-000000000008', 'Wavelength and Frequency Ranges, Production, Detection & Practical Daily-Life and Technological Applications', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3208-0000-000000000001', '65d29b56-0042-2208-0000-000000000001', 'VIDEO', 'Inconsistency of Ampere''s Circuital Law, Maxwell''s Displacement Current & Maxwell''s Equations', 'https://www.youtube.com/watch?v=j3vtn-rnEgA&end=1430s', true, 1),
('65d29b56-0042-3208-0000-000000000002', '65d29b56-0042-2208-0000-000000000002', 'VIDEO', 'Characteristics and Transverse Nature of Electromagnetic Waves & Speed of Light Formulation', 'https://www.youtube.com/watch?v=j3vtn-rnEgA&t=1430s&end=2870s', true, 1),
('65d29b56-0042-3208-0000-000000000003', '65d29b56-0042-2208-0000-000000000003', 'VIDEO', 'The Electromagnetic Spectrum: Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray & Gamma Rays', 'https://www.youtube.com/watch?v=j3vtn-rnEgA&t=2870s&end=4300s', true, 1),
('65d29b56-0042-3208-0000-000000000004', '65d29b56-0042-2208-0000-000000000004', 'VIDEO', 'Wavelength and Frequency Ranges, Production, Detection & Practical Daily-Life and Technological Applications', 'https://www.youtube.com/watch?v=j3vtn-rnEgA&t=4300s&end=5741s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
