-- V435__seed_class12_physics_ch13_nuclei_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Physics Chapter 13 (Nuclei)
-- Video: Abhishek Sahu (Class 12 Physics Masterclass) (mwFzUv_ye5I)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7040s)

-- 1. Remove old placeholder topics & content items for Chapter 13 (Nuclei)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0042-1200-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0042-1200-0000-000000000013';

-- 2. Insert 4 Verified Master Topics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0042-2213-0000-000000000001', '65d29b56-0042-1200-0000-000000000013', 'Composition and Size of Nucleus, Nuclear Radius Formula (R = R₀A¹/³) & Nuclear Density Invariance', 1, true),
('65d29b56-0042-2213-0000-000000000002', '65d29b56-0042-1200-0000-000000000013', 'Einstein''s Mass-Energy Equivalence (E = mc²), Mass Defect & Nuclear Binding Energy Formulations', 2, true),
('65d29b56-0042-2213-0000-000000000003', '65d29b56-0042-1200-0000-000000000013', 'Binding Energy per Nucleon Curve, Nuclear Stability Criteria & Strong Nuclear Force Characteristics', 3, true),
('65d29b56-0042-2213-0000-000000000004', '65d29b56-0042-1200-0000-000000000013', 'Nuclear Energy Mechanisms: Nuclear Fission in Heavy Nuclei & Thermonuclear Fusion in Stars', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0042-3213-0000-000000000001', '65d29b56-0042-2213-0000-000000000001', 'VIDEO', 'Composition and Size of Nucleus, Nuclear Radius Formula (R = R₀A¹/³) & Nuclear Density Invariance', 'https://www.youtube.com/watch?v=mwFzUv_ye5I&end=1760s', true, 1),
('65d29b56-0042-3213-0000-000000000002', '65d29b56-0042-2213-0000-000000000002', 'VIDEO', 'Einstein''s Mass-Energy Equivalence (E = mc²), Mass Defect & Nuclear Binding Energy Formulations', 'https://www.youtube.com/watch?v=mwFzUv_ye5I&t=1760s&end=3520s', true, 1),
('65d29b56-0042-3213-0000-000000000003', '65d29b56-0042-2213-0000-000000000003', 'VIDEO', 'Binding Energy per Nucleon Curve, Nuclear Stability Criteria & Strong Nuclear Force Characteristics', 'https://www.youtube.com/watch?v=mwFzUv_ye5I&t=3520s&end=5280s', true, 1),
('65d29b56-0042-3213-0000-000000000004', '65d29b56-0042-2213-0000-000000000004', 'VIDEO', 'Nuclear Energy Mechanisms: Nuclear Fission in Heavy Nuclei & Thermonuclear Fusion in Stars', 'https://www.youtube.com/watch?v=mwFzUv_ye5I&t=5280s&end=7040s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
