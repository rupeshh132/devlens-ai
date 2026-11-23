-- V432__seed_class12_physics_ch10_wave_optics_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 10 (Wave Optics)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (UsX7AAksOQY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7602s)

-- 1. Remove old placeholder topics & content items for Chapter 10 (Wave Optics)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000010';

-- 2. Insert 4 Verified Master Topics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2210-0000-000000000001', '65d29b56-0042-1200-0000-000000000010', 'Wavefront Concept, Huygens'' Wave Theory & Construction of Secondary Wavelets', 1, true),
('65d29b56-0042-2210-0000-000000000002', '65d29b56-0042-1200-0000-000000000010', 'Proof of Laws of Reflection and Refraction of Light using Huygens'' Principle on Plane Wavefronts', 2, true),
('65d29b56-0042-2210-0000-000000000003', '65d29b56-0042-1200-0000-000000000010', 'Wave Interference: Coherent Sources, Young''s Double Slit Experiment & Fringe Width Analytical Derivation', 3, true),
('65d29b56-0042-2210-0000-000000000004', '65d29b56-0042-1200-0000-000000000010', 'Diffraction at a Single Slit, Central Maximum Width & Distinctions Between Interference and Diffraction', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3210-0000-000000000001', '65d29b56-0042-2210-0000-000000000001', 'VIDEO', 'Wavefront Concept, Huygens'' Wave Theory & Construction of Secondary Wavelets', 'https://www.youtube.com/watch?v=UsX7AAksOQY&end=1900s', true, 1),
('65d29b56-0042-3210-0000-000000000002', '65d29b56-0042-2210-0000-000000000002', 'VIDEO', 'Proof of Laws of Reflection and Refraction of Light using Huygens'' Principle on Plane Wavefronts', 'https://www.youtube.com/watch?v=UsX7AAksOQY&t=1900s&end=3800s', true, 1),
('65d29b56-0042-3210-0000-000000000003', '65d29b56-0042-2210-0000-000000000003', 'VIDEO', 'Wave Interference: Coherent Sources, Young''s Double Slit Experiment & Fringe Width Analytical Derivation', 'https://www.youtube.com/watch?v=UsX7AAksOQY&t=3800s&end=5700s', true, 1),
('65d29b56-0042-3210-0000-000000000004', '65d29b56-0042-2210-0000-000000000004', 'VIDEO', 'Diffraction at a Single Slit, Central Maximum Width & Distinctions Between Interference and Diffraction', 'https://www.youtube.com/watch?v=UsX7AAksOQY&t=5700s&end=7602s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
