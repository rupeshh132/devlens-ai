-- V290__fix_class11_pol_ch01_topics.sql
-- Fixes Chapter 1 Topics & Video Content Items mapping for Class 11 Political Science
-- Ensures Chapter 1 has all 4 Continuous Master Subtopics attached to Chapter 1 ID: 65d29b56-0028-1100-0000-000000000001

-- 1. Clean existing content items & topics for Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000001'
       OR id IN (
           '65d29b56-0028-2101-0000-000000000001',
           '65d29b56-0028-2101-0000-000000000002',
           '65d29b56-0028-2101-0000-000000000003',
           '65d29b56-0028-2101-0000-000000000004'
       )
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000001'
   OR id IN (
       '65d29b56-0028-2101-0000-000000000001',
       '65d29b56-0028-2101-0000-000000000002',
       '65d29b56-0028-2101-0000-000000000003',
       '65d29b56-0028-2101-0000-000000000004'
   );

-- 2. Insert 4 Verified Master Subtopics strictly referencing Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2101-0000-000000000001', '65d29b56-0028-1100-0000-000000000001', 'Why Do We Need a Constitution? Functions, Coordination & Powers of Government', 1, true),
('65d29b56-0028-2101-0000-000000000002', '65d29b56-0028-1100-0000-000000000001', 'The Authority of a Constitution: Promulgation, Substantive Provisions & Balanced Design', 2, true),
('65d29b56-0028-2101-0000-000000000003', '65d29b56-0028-1100-0000-000000000001', 'Making of the Indian Constitution: Constituent Assembly, Procedures & Nationalist Movement Legacy', 3, true),
('65d29b56-0028-2101-0000-000000000004', '65d29b56-0028-1100-0000-000000000001', 'Provisions Adapted from Constitutions of Different Countries & Chapter Synthesis', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 30:29 (0s to 1829s)
('65d29b56-0028-3101-0000-000000000001', '65d29b56-0028-2101-0000-000000000001', 'VIDEO', 'Why Do We Need a Constitution? Functions, Coordination & Powers of Government (Coordination & Assurance, Specification of Decision-Making Powers, Limitations on Powers of Government, Aspirations & Goals of Society & Fundamental Identity)', 'https://www.youtube.com/watch?v=NotkrpI1Vhw&t=0s&end=1829s', true, 1),

-- Topic 2: 30:29 to 54:15 (1829s to 3255s)
('65d29b56-0028-3101-0000-000000000002', '65d29b56-0028-2101-0000-000000000002', 'VIDEO', 'The Authority of a Constitution: Promulgation, Substantive Provisions & Balanced Design (Mode of Promulgation, Popular Referendum, Substantive Provisions for Reason to Comply & Balanced Institutional Design of Checks and Balances)', 'https://www.youtube.com/watch?v=NotkrpI1Vhw&t=1829s&end=3255s', true, 1),

-- Topic 3: 54:15 to 01:31:23 (3255s to 5483s)
('65d29b56-0028-3101-0000-000000000003', '65d29b56-0028-2101-0000-000000000003', 'VIDEO', 'Making of the Indian Constitution: Constituent Assembly, Procedures & Nationalist Movement Legacy (Cabinet Mission Plan, Composition of Constituent Assembly, Democratic Deliberation, Principle of Consensus & Institutional Arrangements)', 'https://www.youtube.com/watch?v=NotkrpI1Vhw&t=3255s&end=5483s', true, 1),

-- Topic 4: 01:31:23 to 01:34:40 (5483s to 5680s)
('65d29b56-0028-3101-0000-000000000004', '65d29b56-0028-2101-0000-000000000004', 'VIDEO', 'Provisions Adapted from Constitutions of Different Countries & Chapter Synthesis (Borrowed Features: British, US, Irish, French & Canadian Constitutions, Adaptation vs Copying & Chapter Summary)', 'https://www.youtube.com/watch?v=NotkrpI1Vhw&t=5483s&end=5680s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
