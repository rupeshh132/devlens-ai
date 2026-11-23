-- V300__seed_class12_bio_ch08_microbes_in_human_welfare_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 8 (Microbes in Human Welfare)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards One Shot) (Microbes in Human Welfare | JgWvP7YVv84)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7740s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Microbes in Human Welfare)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000008';

-- 2. Insert 5 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2208-0000-000000000001', '65d29b56-0440-1200-0000-000000000008', 'Microbes in Household Food Processing: Curd, Bread Dough, Cheese & Traditional Fermented Foods', 1, true),
('65d29b56-0440-2208-0000-000000000002', '65d29b56-0440-1200-0000-000000000008', 'Microbes in Industrial Production: Fermented Beverages, Penicillin & Bioactive Chemicals/Enzymes', 2, true),
('65d29b56-0440-2208-0000-000000000003', '65d29b56-0440-1200-0000-000000000008', 'Microbes as Biological Control Agents (Bt, Trichoderma, Baculovirus) & Biofertilizers', 3, true),
('65d29b56-0440-2208-0000-000000000004', '65d29b56-0440-1200-0000-000000000008', 'Microbes in Sewage Treatment Plants (STP): Primary & Secondary Biological Treatment, BOD Reduction', 4, true),
('65d29b56-0440-2208-0000-000000000005', '65d29b56-0440-1200-0000-000000000008', 'Microbes in Biogas Production (Methanogens, Cattle Dung Digestion) & Chapter Summary', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3208-0000-000000000001', '65d29b56-0440-2208-0000-000000000001', 'VIDEO', 'Microbes in Household Food Processing: Curd, Bread Dough, Cheese & Traditional Fermented Foods', 'https://www.youtube.com/watch?v=JgWvP7YVv84&end=1800s', true, 1),
('65d29b56-0440-3208-0000-000000000002', '65d29b56-0440-2208-0000-000000000002', 'VIDEO', 'Microbes in Industrial Production: Fermented Beverages, Penicillin & Bioactive Chemicals/Enzymes', 'https://www.youtube.com/watch?v=JgWvP7YVv84&t=1800s&end=3410s', true, 1),
('65d29b56-0440-3208-0000-000000000003', '65d29b56-0440-2208-0000-000000000003', 'VIDEO', 'Microbes as Biological Control Agents (Bt, Trichoderma, Baculovirus) & Biofertilizers', 'https://www.youtube.com/watch?v=JgWvP7YVv84&t=3410s&end=4680s', true, 1),
('65d29b56-0440-3208-0000-000000000004', '65d29b56-0440-2208-0000-000000000004', 'VIDEO', 'Microbes in Sewage Treatment Plants (STP): Primary & Secondary Biological Treatment, BOD Reduction', 'https://www.youtube.com/watch?v=JgWvP7YVv84&t=4680s&end=6530s', true, 1),
('65d29b56-0440-3208-0000-000000000005', '65d29b56-0440-2208-0000-000000000005', 'VIDEO', 'Microbes in Biogas Production (Methanogens, Cattle Dung Digestion) & Chapter Summary', 'https://www.youtube.com/watch?v=JgWvP7YVv84&t=6530s&end=7740s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
