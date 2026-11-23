-- V347__seed_class12_eng_ch06_flamingo_poets_and_pancakes_lectures.sql
-- Seeds verified 3 Master Topics and Video Lecture Timestamps for Class 12 English Core Chapter 6 (Flamingo: Poets and Pancakes)
-- Video: Simran Sahni (Board Exam Masterclass) (VLBKdYZDHCM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1740s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 6 (Flamingo: Poets and Pancakes)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0301-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0301-1200-0000-000000000006';

-- 2. Insert 3 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0301-2206-0000-000000000001', '65d29b56-0301-1200-0000-000000000006', 'Gemini Studios, The Make-up Department (''Pancake'' Brand) & Hierarchy (Office Boy''s Frustration)', 1, true),
('65d29b56-0301-2206-0000-000000000002', '65d29b56-0301-1200-0000-000000000006', 'Kothamangalam Subbu (No. 2 at Gemini Studios) – Character Sketch, Versatility & Legal Adviser Irony', 2, true),
('65d29b56-0301-2206-0000-000000000003', '65d29b56-0301-1200-0000-000000000006', 'The Moral Re-Armament Army Visit, Stephen Spender''s Perplexing Speech, ''The God That Failed'' & Satire', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0301-3206-0000-000000000001', '65d29b56-0301-2206-0000-000000000001', 'VIDEO', 'Gemini Studios, The Make-up Department (''Pancake'' Brand) & Hierarchy (Office Boy''s Frustration)', 'https://www.youtube.com/watch?v=VLBKdYZDHCM&end=600s', true, 1),
('65d29b56-0301-3206-0000-000000000002', '65d29b56-0301-2206-0000-000000000002', 'VIDEO', 'Kothamangalam Subbu (No. 2 at Gemini Studios) – Character Sketch, Versatility & Legal Adviser Irony', 'https://www.youtube.com/watch?v=VLBKdYZDHCM&t=600s&end=1200s', true, 1),
('65d29b56-0301-3206-0000-000000000003', '65d29b56-0301-2206-0000-000000000003', 'VIDEO', 'The Moral Re-Armament Army Visit, Stephen Spender''s Perplexing Speech, ''The God That Failed'' & Satire', 'https://www.youtube.com/watch?v=VLBKdYZDHCM&t=1200s&end=1740s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
