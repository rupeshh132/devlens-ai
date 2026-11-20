-- V211__seed_class11_physics_ch14_waves_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Physics Chapter 14: Waves
-- Masterclass Video: PW Class 11 Science (p3vMfyGjfcM)
-- 100% Zero-Gap Continuous Timeline: 0s to 8640s (02:24:00, Outro banter trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 14
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0420-1100-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0420-1100-0000-000000000014';

-- 2. Insert 4 Verified Master Subtopics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0420-2114-0000-000000000001', '65d29b56-0420-1100-0000-000000000014', 'Wave Motion, Transverse vs Longitudinal Waves & Wave Characteristics', 1, true),
('65d29b56-0420-2114-0000-000000000002', '65d29b56-0420-1100-0000-000000000014', 'Progressive Waves: Displacement Equation, Phase Difference & Particle Velocity', 2, true),
('65d29b56-0420-2114-0000-000000000003', '65d29b56-0420-1100-0000-000000000014', 'Speed of Travelling Waves (Strings & Sound in Gases) & Laplace Correction', 3, true),
('65d29b56-0420-2114-0000-000000000004', '65d29b56-0420-1100-0000-000000000014', 'Superposition, Standing Waves in Strings/Organ Pipes & Beats', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 30:24 (0s to 1824s)
('65d29b56-0420-3114-0000-000000000001', '65d29b56-0420-2114-0000-000000000001', 'VIDEO', 'Wave Motion, Transverse vs Longitudinal Waves & Wave Characteristics (Mechanical vs Non-Mechanical Waves, Transverse & Longitudinal Waves, Wavelength, Frequency, Wave Speed & Particle Motion)', 'https://www.youtube.com/watch?v=p3vMfyGjfcM&t=0s&end=1824s', true, 1),

-- Topic 2: 30:24 to 1:08:40 (1824s to 4120s)
('65d29b56-0420-3114-0000-000000000002', '65d29b56-0420-2114-0000-000000000002', 'VIDEO', 'Progressive Waves: Displacement Equation, Phase Difference & Particle Velocity (Harmonic Wave Equation y(x,t) = A*sin(kx - wt + phi), Propagation Constant k, Phase Relationship, Particle Velocity vs Wave Velocity)', 'https://www.youtube.com/watch?v=p3vMfyGjfcM&t=1824s&end=4120s', true, 1),

-- Topic 3: 1:08:40 to 1:36:48 (4120s to 5808s)
('65d29b56-0420-3114-0000-000000000003', '65d29b56-0420-2114-0000-000000000003', 'VIDEO', 'Speed of Travelling Waves (Strings & Sound in Gases) & Laplace Correction (Speed of Transverse Wave on Stretched String v = sqrt(T/mu), Newton''s Sound Formula, Laplace''s Adiabatic Correction v = sqrt(gamma*P/rho) & Temperature Effects)', 'https://www.youtube.com/watch?v=p3vMfyGjfcM&t=4120s&end=5808s', true, 1),

-- Topic 4: 1:36:48 to 2:24:00 (5808s to 8640s)
('65d29b56-0420-3114-0000-000000000004', '65d29b56-0420-2114-0000-000000000004', 'VIDEO', 'Superposition, Standing Waves in Strings/Organ Pipes & Beats (Principle of Superposition, Standing Waves Analytical Treatment, Nodes & Antinodes, Normal Modes of Vibrating String, Open & Closed Organ Pipes, Harmonics & Beats)', 'https://www.youtube.com/watch?v=p3vMfyGjfcM&t=5808s&end=8640s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
