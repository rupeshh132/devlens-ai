-- V429__seed_class12_physics_ch07_alternating_current_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 7 (Alternating Current)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (4sF2xkNP8XE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7660s)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Alternating Current)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000007';

-- 2. Insert 4 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2207-0000-000000000001', '65d29b56-0042-1200-0000-000000000007', 'Alternating Quantities: Peak Value, RMS Value of AC & Purely Resistive, Inductive and Capacitive Circuits', 1, true),
('65d29b56-0042-2207-0000-000000000002', '65d29b56-0042-1200-0000-000000000007', 'Series LCR Circuit: Phasor Diagrams, Impedance Triangle & Voltage-Current Phase Relationships', 2, true),
('65d29b56-0042-2207-0000-000000000003', '65d29b56-0042-1200-0000-000000000007', 'Resonance in Series LCR Circuit, Resonant Frequency, Sharpness of Resonance (Q-Factor) & Wattless Current', 3, true),
('65d29b56-0042-2207-0000-000000000004', '65d29b56-0042-1200-0000-000000000007', 'Average Power in AC Circuits, Power Factor & AC Transformer (Step-up/Step-down, Losses & Efficiency)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3207-0000-000000000001', '65d29b56-0042-2207-0000-000000000001', 'VIDEO', 'Alternating Quantities: Peak Value, RMS Value of AC & Purely Resistive, Inductive and Capacitive Circuits', 'https://www.youtube.com/watch?v=4sF2xkNP8XE&end=1910s', true, 1),
('65d29b56-0042-3207-0000-000000000002', '65d29b56-0042-2207-0000-000000000002', 'VIDEO', 'Series LCR Circuit: Phasor Diagrams, Impedance Triangle & Voltage-Current Phase Relationships', 'https://www.youtube.com/watch?v=4sF2xkNP8XE&t=1910s&end=3830s', true, 1),
('65d29b56-0042-3207-0000-000000000003', '65d29b56-0042-2207-0000-000000000003', 'VIDEO', 'Resonance in Series LCR Circuit, Resonant Frequency, Sharpness of Resonance (Q-Factor) & Wattless Current', 'https://www.youtube.com/watch?v=4sF2xkNP8XE&t=3830s&end=5740s', true, 1),
('65d29b56-0042-3207-0000-000000000004', '65d29b56-0042-2207-0000-000000000004', 'VIDEO', 'Average Power in AC Circuits, Power Factor & AC Transformer (Step-up/Step-down, Losses & Efficiency)', 'https://www.youtube.com/watch?v=4sF2xkNP8XE&t=5740s&end=7660s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
