-- V268__seed_class11_hist_ch07_paths_to_modernization_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 History Chapter 7: Paths to Modernization
-- Masterclass Video: Next Toppers - 11th Humanities (0V4ociOwPCg)
-- 100% Zero-Gap Continuous Timeline: 0s to 11610s (03:13:30, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1100-0000-000000000007';

-- 2. Insert 4 Verified Master Subtopics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2107-0000-000000000001', '65d29b56-0027-1100-0000-000000000007', 'Japan: Tokugawa Shogunate, Meiji Restoration (1868) & Modernizing Reforms', 1, true),
('65d29b56-0027-2107-0000-000000000002', '65d29b56-0027-1100-0000-000000000007', 'Japanese Industrialization, Militarism, World War II & Post-War Economic Reconstruction', 2, true),
('65d29b56-0027-2107-0000-000000000003', '65d29b56-0027-1100-0000-000000000007', 'China: Fall of Qing Dynasty, Sun Yat-sen Three Principles, Guomindang & CCP Emergence', 3, true),
('65d29b56-0027-2107-0000-000000000004', '65d29b56-0027-1100-0000-000000000007', 'Communist China (Mao Zedong to Deng Xiaoping), Modernization of Taiwan & South Korea', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 01:02:57 (0s to 3777s)
('65d29b56-0027-3107-0000-000000000001', '65d29b56-0027-2107-0000-000000000001', 'VIDEO', 'Japan: Tokugawa Shogunate, Meiji Restoration (1868) & Modernizing Reforms (Geography of Japanese Archipelago, Daimyo, Samurai Class, Commodore Perry Expedition & Meiji Restoration)', 'https://www.youtube.com/watch?v=0V4ociOwPCg&t=0s&end=3777s', true, 1),

-- Topic 2: 01:02:57 to 01:41:33 (3777s to 6093s)
('65d29b56-0027-3107-0000-000000000002', '65d29b56-0027-2107-0000-000000000002', 'VIDEO', 'Japanese Industrialization, Militarism, World War II & Post-War Economic Reconstruction (Fukuzawa Yukichi, Zaibatsu Conglomerates, Imperial Expansion, Atomic Bombing & Post-War Shinkansen Miracle)', 'https://www.youtube.com/watch?v=0V4ociOwPCg&t=3777s&end=6093s', true, 1),

-- Topic 3: 01:41:33 to 02:24:42 (6093s to 8682s)
('65d29b56-0027-3107-0000-000000000003', '65d29b56-0027-2107-0000-000000000003', 'VIDEO', 'China: Fall of Qing Dynasty, Sun Yat-sen Three Principles, Guomindang & CCP Emergence (Opium Wars, 1911 Revolution, Nationalism/Democracy/Socialism, Chiang Kai-shek & May Fourth Movement)', 'https://www.youtube.com/watch?v=0V4ociOwPCg&t=6093s&end=8682s', true, 1),

-- Topic 4: 02:24:42 to 03:13:30 (8682s to 11610s)
('65d29b56-0027-3107-0000-000000000004', '65d29b56-0027-2107-0000-000000000004', 'VIDEO', 'Communist China (Mao Zedong to Deng Xiaoping), Modernization of Taiwan & South Korea (The Long March 1934, PRC Foundation, Great Leap Forward, Four Modernizations, Taiwan & Miracle on the Han River)', 'https://www.youtube.com/watch?v=0V4ociOwPCg&t=8682s&end=11610s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
