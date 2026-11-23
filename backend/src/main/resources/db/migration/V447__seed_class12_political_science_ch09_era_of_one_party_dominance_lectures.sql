-- V447__seed_class12_political_science_ch09_era_of_one_party_dominance_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 9 (Era of One-Party Dominance)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (zwCXbSipX3o)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2822s)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Era of One-Party Dominance)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000009';

-- 2. Insert 4 Verified Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2209-0000-000000000001', '65d29b56-0028-1200-0000-000000000009', 'Democratic Nation-Building: First General Election 1952, Election Commission & Universal Adult Suffrage', 1, true),
('65d29b56-0028-2209-0000-000000000002', '65d29b56-0028-1200-0000-000000000009', 'Congress Dominance in the First Three Elections (1952, 1957, 1962): Exceptional Nature & Democratic Legitimacy', 2, true),
('65d29b56-0028-2209-0000-000000000003', '65d29b56-0028-1200-0000-000000000009', 'Congress as a Social and Ideological Coalition: Umbrella Character & Internal Faction Management', 3, true),
('65d29b56-0028-2209-0000-000000000004', '65d29b56-0028-1200-0000-000000000009', 'Emergence of Opposition Parties: Socialist Party, CPI, Bharatiya Jana Sangh, Swatantra Party & Balance of Power', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3209-0000-000000000001', '65d29b56-0028-2209-0000-000000000001', 'VIDEO', 'Democratic Nation-Building: First General Election 1952, Election Commission & Universal Adult Suffrage', 'https://www.youtube.com/watch?v=zwCXbSipX3o&end=700s', true, 1),
('65d29b56-0028-3209-0000-000000000002', '65d29b56-0028-2209-0000-000000000002', 'VIDEO', 'Congress Dominance in the First Three Elections (1952, 1957, 1962): Exceptional Nature & Democratic Legitimacy', 'https://www.youtube.com/watch?v=zwCXbSipX3o&t=700s&end=1410s', true, 1),
('65d29b56-0028-3209-0000-000000000003', '65d29b56-0028-2209-0000-000000000003', 'VIDEO', 'Congress as a Social and Ideological Coalition: Umbrella Character & Internal Faction Management', 'https://www.youtube.com/watch?v=zwCXbSipX3o&t=1410s&end=2110s', true, 1),
('65d29b56-0028-3209-0000-000000000004', '65d29b56-0028-2209-0000-000000000004', 'VIDEO', 'Emergence of Opposition Parties: Socialist Party, CPI, Bharatiya Jana Sangh, Swatantra Party & Balance of Power', 'https://www.youtube.com/watch?v=zwCXbSipX3o&t=2110s&end=2822s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
