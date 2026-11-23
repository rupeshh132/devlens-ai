-- V359__seed_class12_eng_ch18_vistas_on_the_face_of_it_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 18 (Vistas: On the Face of It)
-- Video: Simran Sahni (Board Exam Masterclass) (Kqu5a0BrU-M)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2240s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 18 (Vistas: On the Face of It)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000018'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000018';

-- 2. Insert 3 Verified Master Topics for Chapter 18
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2218-0000-000000000001', '65d29b56-0301-1200-0000-000000000018', 'Derry Entering Mr. Lamb''s Secluded Garden, Sudden Confrontation & Derry''s Deep Acid-Burn Complex', 1, true),
('65d29b56-0301-2218-0000-000000000002', '65d29b56-0301-1200-0000-000000000018', 'Mr. Lamb''s Inclusive Philosophy: The Tin Leg, Crab Apples, Weeds as Flowers & Parable of the Timid Man', 2, true),
('65d29b56-0301-2218-0000-000000000003', '65d29b56-0301-1200-0000-000000000018', 'Derry''s Internal Rebirth, Defying His Mother to Return & The Heartbreaking Climax of Mr. Lamb''s Fall', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3218-0000-000000000001', '65d29b56-0301-2218-0000-000000000001', 'VIDEO', 'Derry Entering Mr. Lamb''s Secluded Garden, Sudden Confrontation & Derry''s Deep Acid-Burn Complex', 'https://www.youtube.com/watch?v=Kqu5a0BrU-M&end=750s', true, 1),
('65d29b56-0301-3218-0000-000000000002', '65d29b56-0301-2218-0000-000000000002', 'VIDEO', 'Mr. Lamb''s Inclusive Philosophy: The Tin Leg, Crab Apples, Weeds as Flowers & Parable of the Timid Man', 'https://www.youtube.com/watch?v=Kqu5a0BrU-M&t=750s&end=1520s', true, 1),
('65d29b56-0301-3218-0000-000000000003', '65d29b56-0301-2218-0000-000000000003', 'VIDEO', 'Derry''s Internal Rebirth, Defying His Mother to Return & The Heartbreaking Climax of Mr. Lamb''s Fall', 'https://www.youtube.com/watch?v=Kqu5a0BrU-M&t=1520s&end=2240s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
