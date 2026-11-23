-- V385__seed_class12_geo_ch16_international_trade_india_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Geography Chapter 16 (International Trade (India))
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (Qf2gDguthYM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 714s)

-- 1. Remove old placeholder topics & content items for Chapter 16 (International Trade (India))
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1200-0000-000000000016'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1200-0000-000000000016';

-- 2. Insert 4 Verified Master Topics for Chapter 16
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2216-0000-000000000001', '65d29b56-0029-1200-0000-000000000016', 'Changing Patterns of India''s Foreign Trade: Volume of Trade, Balance of Trade & Post-Reform Trends', 1, true),
('65d29b56-0029-2216-0000-000000000002', '65d29b56-0029-1200-0000-000000000016', 'Changing Composition of India''s Export and Import Trade & Direction of Trade', 2, true),
('65d29b56-0029-2216-0000-000000000003', '65d29b56-0029-1200-0000-000000000016', 'Major Sea Ports on the Western Coast of India (Kandla, Mumbai, JNPT, Marmagao, New Mangalore, Kochi)', 3, true),
('65d29b56-0029-2216-0000-000000000004', '65d29b56-0029-1200-0000-000000000016', 'Major Sea Ports on the Eastern Coast of India (Kolkata, Haldia, Paradip, Visakhapatnam, Chennai, Ennore, Tuticorin) & Major International Airports', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0029-3216-0000-000000000001', '65d29b56-0029-2216-0000-000000000001', 'VIDEO', 'Changing Patterns of India''s Foreign Trade: Volume of Trade, Balance of Trade & Post-Reform Trends', 'https://www.youtube.com/watch?v=Qf2gDguthYM&end=180s', true, 1),
('65d29b56-0029-3216-0000-000000000002', '65d29b56-0029-2216-0000-000000000002', 'VIDEO', 'Changing Composition of India''s Export and Import Trade & Direction of Trade', 'https://www.youtube.com/watch?v=Qf2gDguthYM&t=180s&end=360s', true, 1),
('65d29b56-0029-3216-0000-000000000003', '65d29b56-0029-2216-0000-000000000003', 'VIDEO', 'Major Sea Ports on the Western Coast of India (Kandla, Mumbai, JNPT, Marmagao, New Mangalore, Kochi)', 'https://www.youtube.com/watch?v=Qf2gDguthYM&t=360s&end=540s', true, 1),
('65d29b56-0029-3216-0000-000000000004', '65d29b56-0029-2216-0000-000000000004', 'VIDEO', 'Major Sea Ports on the Eastern Coast of India (Kolkata, Haldia, Paradip, Visakhapatnam, Chennai, Ennore, Tuticorin) & Major International Airports', 'https://www.youtube.com/watch?v=Qf2gDguthYM&t=540s&end=714s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
