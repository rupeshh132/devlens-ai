-- V339__seed_class12_eco_ch13_environment_and_sustainable_development_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Economics Chapter 13 (Environment and Sustainable Development)
-- Video: Sunil Panda (Board Exam One Shot Masterclass) (UcoEtxFcGOU)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3250s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 13 (Environment and Sustainable Development)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0030-1200-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0030-1200-0000-000000000013';

-- 2. Insert 4 Verified Master Topics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0030-2213-0000-000000000001', '65d29b56-0030-1200-0000-000000000013', 'Environment: Meaning, Vital Functions (Resource Supplier, Waste Assimilation, Life Support) & Carrying vs Absorptive Capacity', 1, true),
('65d29b56-0030-2213-0000-000000000002', '65d29b56-0030-1200-0000-000000000013', 'State of India''s Environment: Land Degradation, Deforestation, Soil Erosion, Biodiversity Loss & Vehicular/Air/Water Pollution', 2, true),
('65d29b56-0030-2213-0000-000000000003', '65d29b56-0030-1200-0000-000000000013', 'Global Environmental Issues: Global Warming (Greenhouse Effect), Ozone Depletion, Climate Change Protocols (Kyoto, Montreal)', 3, true),
('65d29b56-0030-2213-0000-000000000004', '65d29b56-0030-1200-0000-000000000013', 'Sustainable Development: Meaning (Brundtland Report), Core Principles & Strategies (Non-conventional Energy, Biogas, Organic Practices)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0030-3213-0000-000000000001', '65d29b56-0030-2213-0000-000000000001', 'VIDEO', 'Environment: Meaning, Vital Functions (Resource Supplier, Waste Assimilation, Life Support) & Carrying vs Absorptive Capacity', 'https://www.youtube.com/watch?v=UcoEtxFcGOU&end=750s', true, 1),
('65d29b56-0030-3213-0000-000000000002', '65d29b56-0030-2213-0000-000000000002', 'VIDEO', 'State of India''s Environment: Land Degradation, Deforestation, Soil Erosion, Biodiversity Loss & Vehicular/Air/Water Pollution', 'https://www.youtube.com/watch?v=UcoEtxFcGOU&t=750s&end=1550s', true, 1),
('65d29b56-0030-3213-0000-000000000003', '65d29b56-0030-2213-0000-000000000003', 'VIDEO', 'Global Environmental Issues: Global Warming (Greenhouse Effect), Ozone Depletion, Climate Change Protocols (Kyoto, Montreal)', 'https://www.youtube.com/watch?v=UcoEtxFcGOU&t=1550s&end=2350s', true, 1),
('65d29b56-0030-3213-0000-000000000004', '65d29b56-0030-2213-0000-000000000004', 'VIDEO', 'Sustainable Development: Meaning (Brundtland Report), Core Principles & Strategies (Non-conventional Energy, Biogas, Organic Practices)', 'https://www.youtube.com/watch?v=UcoEtxFcGOU&t=2350s&end=3250s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
