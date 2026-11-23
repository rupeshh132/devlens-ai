-- V340__seed_class12_eco_ch14_comparative_development_experiences_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 14 (Comparative Development Experiences of India and Its Neighbours)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (83I1QXLOjys)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2820s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 14 (Comparative Development Experiences of India and Its Neighbours)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000014';

-- 2. Insert 5 Verified Master Topics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2214-0000-000000000001', '65d29b56-0030-1200-0000-000000000014', 'Historical Context, Geo-Economic Background & Common Development Trajectories of India, Pakistan and China', 1, true),
('65d29b56-0030-2214-0000-000000000002', '65d29b56-0030-1200-0000-000000000014', 'Development Strategies of China: Great Leap Forward (GLF), Commune System, Cultural Revolution & 1978 Reforms (SEZs)', 2, true),
('65d29b56-0030-2214-0000-000000000003', '65d29b56-0030-1200-0000-000000000014', 'Development Strategies of Pakistan: Import Substitution, Nationalisation, Denationalisation & 1988 Structural Reforms', 3, true),
('65d29b56-0030-2214-0000-000000000004', '65d29b56-0030-1200-0000-000000000014', 'Comparative Demographic Indicators: Population Size, Annual Growth Rate, Density, Sex Ratio, Fertility & Urbanisation', 4, true),
('65d29b56-0030-2214-0000-000000000005', '65d29b56-0030-1200-0000-000000000014', 'Comparative Sectoral Transformation (GVA & Employment), Human Development Indicators (HDI Rankings) & Critical Appraisal', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3214-0000-000000000001', '65d29b56-0030-2214-0000-000000000001', 'VIDEO', 'Historical Context, Geo-Economic Background & Common Development Trajectories of India, Pakistan and China', 'https://www.youtube.com/watch?v=83I1QXLOjys&end=550s', true, 1),
('65d29b56-0030-3214-0000-000000000002', '65d29b56-0030-2214-0000-000000000002', 'VIDEO', 'Development Strategies of China: Great Leap Forward (GLF), Commune System, Cultural Revolution & 1978 Reforms (SEZs)', 'https://www.youtube.com/watch?v=83I1QXLOjys&t=550s&end=1120s', true, 1),
('65d29b56-0030-3214-0000-000000000003', '65d29b56-0030-2214-0000-000000000003', 'VIDEO', 'Development Strategies of Pakistan: Import Substitution, Nationalisation, Denationalisation & 1988 Structural Reforms', 'https://www.youtube.com/watch?v=83I1QXLOjys&t=1120s&end=1650s', true, 1),
('65d29b56-0030-3214-0000-000000000004', '65d29b56-0030-2214-0000-000000000004', 'VIDEO', 'Comparative Demographic Indicators: Population Size, Annual Growth Rate, Density, Sex Ratio, Fertility & Urbanisation', 'https://www.youtube.com/watch?v=83I1QXLOjys&t=1650s&end=2200s', true, 1),
('65d29b56-0030-3214-0000-000000000005', '65d29b56-0030-2214-0000-000000000005', 'VIDEO', 'Comparative Sectoral Transformation (GVA & Employment), Human Development Indicators (HDI Rankings) & Critical Appraisal', 'https://www.youtube.com/watch?v=83I1QXLOjys&t=2200s&end=2820s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
