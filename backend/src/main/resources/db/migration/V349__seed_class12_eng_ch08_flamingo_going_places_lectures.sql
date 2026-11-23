-- V349__seed_class12_eng_ch08_flamingo_going_places_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 8 (Flamingo: Going Places)
-- Video: Simran Sahni (Board Exam Masterclass) (bhSDiiDRp-U)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1030s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Flamingo: Going Places)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000008';

-- 2. Insert 3 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2208-0000-000000000001', '65d29b56-0301-1200-0000-000000000008', 'Sophie''s Wild Daydreams (Boutique, Actress) vs Jansie''s Grounded Realism (Biscuit Factory Destiny)', 1, true),
('65d29b56-0301-2208-0000-000000000002', '65d29b56-0301-1200-0000-000000000008', 'Family Atmosphere, Geoff''s Silent World & Sophie''s Fabricated Meeting with Danny Casey', 2, true),
('65d29b56-0301-2208-0000-000000000003', '65d29b56-0301-1200-0000-000000000008', 'The Solitary Wait at the Canal, The Pain of Unfulfilled Dreams & CBSE Board Examination Questions', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3208-0000-000000000001', '65d29b56-0301-2208-0000-000000000001', 'VIDEO', 'Sophie''s Wild Daydreams (Boutique, Actress) vs Jansie''s Grounded Realism (Biscuit Factory Destiny)', 'https://www.youtube.com/watch?v=bhSDiiDRp-U&end=350s', true, 1),
('65d29b56-0301-3208-0000-000000000002', '65d29b56-0301-2208-0000-000000000002', 'VIDEO', 'Family Atmosphere, Geoff''s Silent World & Sophie''s Fabricated Meeting with Danny Casey', 'https://www.youtube.com/watch?v=bhSDiiDRp-U&t=350s&end=720s', true, 1),
('65d29b56-0301-3208-0000-000000000003', '65d29b56-0301-2208-0000-000000000003', 'VIDEO', 'The Solitary Wait at the Canal, The Pain of Unfulfilled Dreams & CBSE Board Examination Questions', 'https://www.youtube.com/watch?v=bhSDiiDRp-U&t=720s&end=1030s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
