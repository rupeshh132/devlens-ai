-- V278__seed_class11_pol_ch07_federalism_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 7: Federalism
-- Masterclass Video: Next Toppers - 11th Humanities (tzpvYIRHocY)
-- 100% Zero-Gap Continuous Timeline: 0s to 5150s (01:25:50, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 7
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000007';

-- 2. Insert 4 Verified Master Subtopics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2107-0000-000000000001', '65d29b56-0028-1100-0000-000000000007', 'What is Federalism & Features of Federalism in the Indian Constitution', 1, true),
('65d29b56-0028-2107-0000-000000000002', '65d29b56-0028-1100-0000-000000000007', 'Division of Powers (Three Lists, Residuary Powers) & Federalism with a Strong Centre', 2, true),
('65d29b56-0028-2107-0000-000000000003', '65d29b56-0028-1100-0000-000000000007', 'Centre-State Conflicts: Demands for Autonomy, Role of Governors & Article 356', 3, true),
('65d29b56-0028-2107-0000-000000000004', '65d29b56-0028-1100-0000-000000000007', 'Demands for New States, Interstate Disputes & Special Asymmetric Provisions (Art 371)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 28:18 (0s to 1698s)
('65d29b56-0028-3107-0000-000000000001', '65d29b56-0028-2107-0000-000000000001', 'VIDEO', 'What is Federalism & Features of Federalism in the Indian Constitution (Federal Principle, Federation vs Confederation, Geographical & Cultural Plurality, Union of States Article 1 & Two-Tier Government Framework)', 'https://www.youtube.com/watch?v=tzpvYIRHocY&t=0s&end=1698s', true, 1),

-- Topic 2: 28:18 to 49:53 (1698s to 2993s)
('65d29b56-0028-3107-0000-000000000002', '65d29b56-0028-2107-0000-000000000002', 'VIDEO', 'Division of Powers & Federalism with a Strong Centre (7th Schedule: Union List, State List, Concurrent List, Residuary Powers to Centre, Emergency Provisions Articles 352/356/360, All India Services & Financial Superiority)', 'https://www.youtube.com/watch?v=tzpvYIRHocY&t=1698s&end=2993s', true, 1),

-- Topic 3: 49:53 to 01:05:13 (2993s to 3913s)
('65d29b56-0028-3107-0000-000000000003', '65d29b56-0028-2107-0000-000000000003', 'VIDEO', 'Centre-State Conflicts: Demands for Autonomy, Role of Governors & Article 356 (Financial Autonomy Demands, Sarkaria & Punchhi Commission Recommendations, Controversial Role of Governor as Central Agent, Misuse of President Rule & S.R. Bommai Ruling)', 'https://www.youtube.com/watch?v=tzpvYIRHocY&t=2993s&end=3913s', true, 1),

-- Topic 4: 01:05:13 to 01:25:50 (3913s to 5150s)
('65d29b56-0028-3107-0000-000000000004', '65d29b56-0028-2107-0000-000000000004', 'VIDEO', 'Demands for New States, Interstate Disputes & Special Asymmetric Provisions (Linguistic Reorganisation, Statehood Movements, Interstate Water Disputes Cauvery/Ravi-Beas Art 262, Border Disputes, Special Asymmetric Provisions under Article 371 & J&K Integration)', 'https://www.youtube.com/watch?v=tzpvYIRHocY&t=3913s&end=5150s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
