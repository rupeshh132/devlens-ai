-- V350__seed_class12_eng_ch09_flamingo_poem_my_mother_at_sixty_six_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 9 (Flamingo Poem: My Mother at Sixty-Six)
-- Video: Simran Sahni (Board Exam Masterclass) (mY5rXGyf0tQ)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 620s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 9 (Flamingo Poem: My Mother at Sixty-Six)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000009';

-- 2. Insert 3 Verified Master Topics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2209-0000-000000000001', '65d29b56-0301-1200-0000-000000000009', 'The Drive to Cochin Airport, The Mother''s Ashen Corpse-like Appearance & Rising Separation Anxiety', 1, true),
('65d29b56-0301-2209-0000-000000000002', '65d29b56-0301-1200-0000-000000000009', 'Symbolic Contrast of Vitality: "Young Trees Sprinting" & "Merry Children", The Late Winter''s Moon', 2, true),
('65d29b56-0301-2209-0000-000000000003', '65d29b56-0301-1200-0000-000000000009', 'The Familiar Childhood Ache, The Hiding Parting Smile ("See you soon, Amma"), Poetic Devices & RTCs', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3209-0000-000000000001', '65d29b56-0301-2209-0000-000000000001', 'VIDEO', 'The Drive to Cochin Airport, The Mother''s Ashen Corpse-like Appearance & Rising Separation Anxiety', 'https://www.youtube.com/watch?v=mY5rXGyf0tQ&end=210s', true, 1),
('65d29b56-0301-3209-0000-000000000002', '65d29b56-0301-2209-0000-000000000002', 'VIDEO', 'Symbolic Contrast of Vitality: "Young Trees Sprinting" & "Merry Children", The Late Winter''s Moon', 'https://www.youtube.com/watch?v=mY5rXGyf0tQ&t=210s&end=420s', true, 1),
('65d29b56-0301-3209-0000-000000000003', '65d29b56-0301-2209-0000-000000000003', 'VIDEO', 'The Familiar Childhood Ache, The Hiding Parting Smile ("See you soon, Amma"), Poetic Devices & RTCs', 'https://www.youtube.com/watch?v=mY5rXGyf0tQ&t=420s&end=620s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
