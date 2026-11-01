-- V59__seed_class10_maths_ch14_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Mathematics Chapter 14 (Probability)
-- Video: Ritik Mishra (Probability One Shot 🔥 | u1A7OvCJgIM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 9483s)

-- 1. Remove old placeholder topics & content items for Chapter 14
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-2222-1000-0000-000000000014'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-2222-1000-0000-000000000014';

-- 2. Insert 5 Student-Friendly Master Topics for Chapter 14
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-2222-2014-0000-000000000001', '65d29b56-2222-1000-0000-000000000014', 'Theoretical Foundations, Sample Spaces & Fundamental Properties', 1, true),
('65d29b56-2222-2014-0000-000000000002', '65d29b56-2222-1000-0000-000000000014', 'Coins & Single Die Experiments, Multi-Coin Tosses & Case Study', 2, true),
('65d29b56-2222-2014-0000-000000000003', '65d29b56-2222-1000-0000-000000000014', 'Playing Cards (52-Deck Masterclass) & Two-Dice Grid Experiments', 3, true),
('65d29b56-2222-2014-0000-000000000004', '65d29b56-2222-1000-0000-000000000014', 'Urns, Balls & Marbles, Defective Items & Algebraic Probability Equations', 4, true),
('65d29b56-2222-2014-0000-000000000005', '65d29b56-2222-1000-0000-000000000014', 'Shop Days Matrix, Calendar & Leap Year Mathematics, Board Case Studies & Outro', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-2222-3014-0000-000000000001', '65d29b56-2222-2014-0000-000000000001', 'VIDEO', 'Theoretical Foundations, Sample Spaces & Fundamental Properties', 'https://www.youtube.com/watch?v=u1A7OvCJgIM&end=2330s', true, 1),
('65d29b56-2222-3014-0000-000000000002', '65d29b56-2222-2014-0000-000000000002', 'VIDEO', 'Coins & Single Die Experiments, Multi-Coin Tosses & Case Study', 'https://www.youtube.com/watch?v=u1A7OvCJgIM&t=2330s&end=3790s', true, 1),
('65d29b56-2222-3014-0000-000000000003', '65d29b56-2222-2014-0000-000000000003', 'VIDEO', 'Playing Cards (52-Deck Masterclass) & Two-Dice Grid Experiments', 'https://www.youtube.com/watch?v=u1A7OvCJgIM&t=3790s&end=5190s', true, 1),
('65d29b56-2222-3014-0000-000000000004', '65d29b56-2222-2014-0000-000000000004', 'VIDEO', 'Urns, Balls & Marbles, Defective Items & Algebraic Probability Equations', 'https://www.youtube.com/watch?v=u1A7OvCJgIM&t=5190s&end=7530s', true, 1),
('65d29b56-2222-3014-0000-000000000005', '65d29b56-2222-2014-0000-000000000005', 'VIDEO', 'Shop Days Matrix, Calendar & Leap Year Mathematics, Board Case Studies & Outro', 'https://www.youtube.com/watch?v=u1A7OvCJgIM&t=7530s&end=9483s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
