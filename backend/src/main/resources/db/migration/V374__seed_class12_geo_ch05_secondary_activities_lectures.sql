-- V374__seed_class12_geo_ch05_secondary_activities_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 5 (Secondary Activities)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (RXkiDNJ5bXw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1136s)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Secondary Activities)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000005';

-- 2. Insert 4 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2205-0000-000000000001', '65d29b56-0029-1200-0000-000000000005', 'Characteristics of Modern Large-Scale Manufacturing & Factors Influencing Industrial Location', 1, true),
('65d29b56-0029-2205-0000-000000000002', '65d29b56-0029-1200-0000-000000000005', 'Classification of Manufacturing Industries: Based on Size (Cottage, Small, Large) & Inputs/Raw Materials', 2, true),
('65d29b56-0029-2205-0000-000000000003', '65d29b56-0029-1200-0000-000000000005', 'Classification Based on Output/Products (Basic vs Consumer) & Ownership (Public, Private, Joint)', 3, true),
('65d29b56-0029-2205-0000-000000000004', '65d29b56-0029-1200-0000-000000000005', 'Traditional Large-Scale Industrial Regions (Ruhr Coal Field), Concept of Technopolis & High-Tech Industry', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3205-0000-000000000001', '65d29b56-0029-2205-0000-000000000001', 'VIDEO', 'Characteristics of Modern Large-Scale Manufacturing & Factors Influencing Industrial Location', 'https://www.youtube.com/watch?v=RXkiDNJ5bXw&end=280s', true, 1),
('65d29b56-0029-3205-0000-000000000002', '65d29b56-0029-2205-0000-000000000002', 'VIDEO', 'Classification of Manufacturing Industries: Based on Size (Cottage, Small, Large) & Inputs/Raw Materials', 'https://www.youtube.com/watch?v=RXkiDNJ5bXw&t=280s&end=570s', true, 1),
('65d29b56-0029-3205-0000-000000000003', '65d29b56-0029-2205-0000-000000000003', 'VIDEO', 'Classification Based on Output/Products (Basic vs Consumer) & Ownership (Public, Private, Joint)', 'https://www.youtube.com/watch?v=RXkiDNJ5bXw&t=570s&end=850s', true, 1),
('65d29b56-0029-3205-0000-000000000004', '65d29b56-0029-2205-0000-000000000004', 'VIDEO', 'Traditional Large-Scale Industrial Regions (Ruhr Coal Field), Concept of Technopolis & High-Tech Industry', 'https://www.youtube.com/watch?v=RXkiDNJ5bXw&t=850s&end=1136s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
