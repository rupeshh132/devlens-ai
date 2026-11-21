-- V254__seed_class11_geo_ch15_india_location_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Geography Chapter 15: India — Location (Book 2 Ch 1)
-- Masterclass Video: Next Toppers - 11th Humanities (HWFzDBPEue4)
-- 100% Zero-Gap Continuous Timeline: 0s to 3675s (01:01:15, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 15
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0029-1100-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0029-1100-0000-000000000015';

-- 2. Insert 4 Verified Master Subtopics for Chapter 15
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0029-2115-0000-000000000001', '65d29b56-0029-1100-0000-000000000015', 'Geographical Location of India: Latitudinal & Longitudinal Extent', 1, true),
('65d29b56-0029-2115-0000-000000000002', '65d29b56-0029-1100-0000-000000000015', 'India Standard Meridian (82°30 E), Standard Time (IST) vs GMT', 2, true),
('65d29b56-0029-2115-0000-000000000003', '65d29b56-0029-1100-0000-000000000015', 'Size of India, Total Area, Frontier Boundaries & Strategic Peninsula Location', 3, true),
('65d29b56-0029-2115-0000-000000000004', '65d29b56-0029-1100-0000-000000000015', 'India and Its Neighbours: Bordering Countries, Palk Strait & Maritime Frontiers', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 14:10 (0s to 850s)
('65d29b56-0029-3115-0000-000000000001', '65d29b56-0029-2115-0000-000000000001', 'VIDEO', 'Geographical Location of India: Latitudinal & Longitudinal Extent (Mainland 8°4''N to 37°6''N, 68°7''E to 97°25''E, Tropic of Cancer 23°30''N Division, Indira Point 6°45''N & Kanyakumari Mainland Limit)', 'https://www.youtube.com/watch?v=HWFzDBPEue4&t=0s&end=850s', true, 1),

-- Topic 2: 14:10 to 32:30 (850s to 1950s)
('65d29b56-0029-3115-0000-000000000002', '65d29b56-0029-2115-0000-000000000002', 'VIDEO', 'India Standard Meridian (82°30 E), Standard Time (IST) vs GMT (Mirzapur UP Meridian, 30° Longitude Difference, 2-Hour Time Lag from Arunachal to Gujarat & Uniform Time Coordination)', 'https://www.youtube.com/watch?v=HWFzDBPEue4&t=850s&end=1950s', true, 1),

-- Topic 3: 32:30 to 45:50 (1950s to 2750s)
('65d29b56-0029-3115-0000-000000000003', '65d29b56-0029-2115-0000-000000000003', 'VIDEO', 'Size of India, Total Area, Frontier Boundaries & Strategic Peninsula Location (3.28 Million sq km, 2.4% World Area, 7th Largest Country, 15,200 km Land Boundary & 7,516.6 km Coastline)', 'https://www.youtube.com/watch?v=HWFzDBPEue4&t=1950s&end=2750s', true, 1),

-- Topic 4: 45:50 to 01:01:15 (2750s to 3675s)
('65d29b56-0029-3115-0000-000000000004', '65d29b56-0029-2115-0000-000000000004', 'VIDEO', 'India and Its Neighbours: Bordering Countries, Palk Strait & Maritime Frontiers (Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar, Bangladesh, Sri Lanka, Maldives & Strategic Indian Ocean Hub)', 'https://www.youtube.com/watch?v=HWFzDBPEue4&t=2750s&end=3675s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
