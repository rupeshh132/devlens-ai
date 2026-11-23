-- V360__seed_class12_eng_ch19_vistas_memories_of_childhood_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 19 (Vistas: Memories of Childhood)
-- Video: Simran Sahni (Board Exam Masterclass) (6UCQ7ZXe7XA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1420s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 19 (Vistas: Memories of Childhood)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000019'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000019';

-- 2. Insert 3 Verified Master Topics for Chapter 19
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2219-0000-000000000001', '65d29b56-0301-1200-0000-000000000019', 'Part 1: "The Cutting of My Long Hair" (Zitkala-Sa) – Carlisle School Bedlam & Humiliation of Forced Uniformity', 1, true),
('65d29b56-0301-2219-0000-000000000002', '65d29b56-0301-1200-0000-000000000019', 'Zitkala-Sa''s Resistance Under the Bed, Shingling the Hair & Grief of Becoming a Helpless Captive', 2, true),
('65d29b56-0301-2219-0000-000000000003', '65d29b56-0301-1200-0000-000000000019', 'Part 2: "We Too Are Human Beings" (Bama) – Village Sights, The Humiliating Vadai Packet & Annan''s Wisdom', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3219-0000-000000000001', '65d29b56-0301-2219-0000-000000000001', 'VIDEO', 'Part 1: "The Cutting of My Long Hair" (Zitkala-Sa) – Carlisle School Bedlam & Humiliation of Forced Uniformity', 'https://www.youtube.com/watch?v=6UCQ7ZXe7XA&end=480s', true, 1),
('65d29b56-0301-3219-0000-000000000002', '65d29b56-0301-2219-0000-000000000002', 'VIDEO', 'Zitkala-Sa''s Resistance Under the Bed, Shingling the Hair & Grief of Becoming a Helpless Captive', 'https://www.youtube.com/watch?v=6UCQ7ZXe7XA&t=480s&end=960s', true, 1),
('65d29b56-0301-3219-0000-000000000003', '65d29b56-0301-2219-0000-000000000003', 'VIDEO', 'Part 2: "We Too Are Human Beings" (Bama) – Village Sights, The Humiliating Vadai Packet & Annan''s Wisdom', 'https://www.youtube.com/watch?v=6UCQ7ZXe7XA&t=960s&end=1420s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
