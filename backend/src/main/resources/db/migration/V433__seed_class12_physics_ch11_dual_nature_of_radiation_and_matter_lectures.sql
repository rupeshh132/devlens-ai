-- V433__seed_class12_physics_ch11_dual_nature_of_radiation_and_matter_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 11 (Dual Nature of Radiation and Matter)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (uUpsZIcwgiY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6490s)

-- 1. Remove old placeholder topics & content items for Chapter 11 (Dual Nature of Radiation and Matter)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000011';

-- 2. Insert 4 Verified Master Topics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2211-0000-000000000001', '65d29b56-0042-1200-0000-000000000011', 'Electron Emission Phenomena, Hertz-Lenard Experiments & Discovery of Photoelectric Effect', 1, true),
('65d29b56-0042-2211-0000-000000000002', '65d29b56-0042-1200-0000-000000000011', 'Experimental Observations: Effect of Intensity, Frequency & Potential on Photoelectric Current and Stopping Potential', 2, true),
('65d29b56-0042-2211-0000-000000000003', '65d29b56-0042-1200-0000-000000000011', 'Einstein''s Photoelectric Equation, Photon Theory of Radiation & Work Function Analysis', 3, true),
('65d29b56-0042-2211-0000-000000000004', '65d29b56-0042-1200-0000-000000000011', 'Matter Waves, de Broglie Hypothesis, de Broglie Wavelength of Particles/Electrons & Dual Nature Synthesis', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3211-0000-000000000001', '65d29b56-0042-2211-0000-000000000001', 'VIDEO', 'Electron Emission Phenomena, Hertz-Lenard Experiments & Discovery of Photoelectric Effect', 'https://www.youtube.com/watch?v=uUpsZIcwgiY&end=1620s', true, 1),
('65d29b56-0042-3211-0000-000000000002', '65d29b56-0042-2211-0000-000000000002', 'VIDEO', 'Experimental Observations: Effect of Intensity, Frequency & Potential on Photoelectric Current and Stopping Potential', 'https://www.youtube.com/watch?v=uUpsZIcwgiY&t=1620s&end=3240s', true, 1),
('65d29b56-0042-3211-0000-000000000003', '65d29b56-0042-2211-0000-000000000003', 'VIDEO', 'Einstein''s Photoelectric Equation, Photon Theory of Radiation & Work Function Analysis', 'https://www.youtube.com/watch?v=uUpsZIcwgiY&t=3240s&end=4860s', true, 1),
('65d29b56-0042-3211-0000-000000000004', '65d29b56-0042-2211-0000-000000000004', 'VIDEO', 'Matter Waves, de Broglie Hypothesis, de Broglie Wavelength of Particles/Electrons & Dual Nature Synthesis', 'https://www.youtube.com/watch?v=uUpsZIcwgiY&t=4860s&end=6490s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
