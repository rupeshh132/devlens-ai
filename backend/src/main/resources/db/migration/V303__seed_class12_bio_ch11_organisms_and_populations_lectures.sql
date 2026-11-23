-- V303__seed_class12_bio_ch11_organisms_and_populations_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 11 (Organisms and Populations)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards One Shot) (Organisms and Populations | Bb428wu6_Pg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7895s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 11 (Organisms and Populations)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000011';

-- 2. Insert 5 Verified Master Topics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2211-0000-000000000001', '65d29b56-0440-1200-0000-000000000011', 'Ecological Organization, Major Abiotic Factors (Temperature, Water, Light, Soil) & Adaptations', 1, true),
('65d29b56-0440-2211-0000-000000000002', '65d29b56-0440-1200-0000-000000000011', 'Population Attributes: Natality, Mortality, Sex Ratio, Density & Age Pyramids', 2, true),
('65d29b56-0440-2211-0000-000000000003', '65d29b56-0440-1200-0000-000000000011', 'Population Growth Models (Exponential vs Logistic Growth), Carrying Capacity & Life Histories', 3, true),
('65d29b56-0440-2211-0000-000000000004', '65d29b56-0440-1200-0000-000000000011', 'Positive Interspecific Interactions: Mutualism (Plant-Pollinator, Lichens) & Commensalism', 4, true),
('65d29b56-0440-2211-0000-000000000005', '65d29b56-0440-1200-0000-000000000011', 'Negative Interspecific Interactions: Competition (Gause''s Principle), Predation, Parasitism & Amensalism', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3211-0000-000000000001', '65d29b56-0440-2211-0000-000000000001', 'VIDEO', 'Ecological Organization, Major Abiotic Factors (Temperature, Water, Light, Soil) & Adaptations', 'https://www.youtube.com/watch?v=Bb428wu6_Pg&end=1322s', true, 1),
('65d29b56-0440-3211-0000-000000000002', '65d29b56-0440-2211-0000-000000000002', 'VIDEO', 'Population Attributes: Natality, Mortality, Sex Ratio, Density & Age Pyramids', 'https://www.youtube.com/watch?v=Bb428wu6_Pg&t=1322s&end=2340s', true, 1),
('65d29b56-0440-3211-0000-000000000003', '65d29b56-0440-2211-0000-000000000003', 'VIDEO', 'Population Growth Models (Exponential vs Logistic Growth), Carrying Capacity & Life Histories', 'https://www.youtube.com/watch?v=Bb428wu6_Pg&t=2340s&end=3718s', true, 1),
('65d29b56-0440-3211-0000-000000000004', '65d29b56-0440-2211-0000-000000000004', 'VIDEO', 'Positive Interspecific Interactions: Mutualism (Plant-Pollinator, Lichens) & Commensalism', 'https://www.youtube.com/watch?v=Bb428wu6_Pg&t=3718s&end=5309s', true, 1),
('65d29b56-0440-3211-0000-000000000005', '65d29b56-0440-2211-0000-000000000005', 'VIDEO', 'Negative Interspecific Interactions: Competition (Gause''s Principle), Predation, Parasitism & Amensalism', 'https://www.youtube.com/watch?v=Bb428wu6_Pg&t=5309s&end=7895s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
