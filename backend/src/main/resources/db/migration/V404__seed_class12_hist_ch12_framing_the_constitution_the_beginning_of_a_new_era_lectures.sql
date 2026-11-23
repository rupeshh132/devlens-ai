-- V404__seed_class12_hist_ch12_framing_the_constitution_the_beginning_of_a_new_era_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 12 (Framing the Constitution: The Beginning of a New Era)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (OBZ8Xr383DU)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1944s)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Framing the Constitution: The Beginning of a New Era)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000012';

-- 2. Insert 4 Verified Master Topics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2212-0000-000000000001', '65d29b56-0027-1200-0000-000000000012', 'A Tumultuous Setting: Partition, Refugee Crisis, Princely State Integration & Composition of the Constituent Assembly', 1, true),
('65d29b56-0027-2212-0000-000000000002', '65d29b56-0027-1200-0000-000000000012', 'The Objectives Resolution: Nehru''s Vision of Independent Sovereign Republic & Defining Minority and Depressed Class Rights', 2, true),
('65d29b56-0027-2212-0000-000000000003', '65d29b56-0027-1200-0000-000000000012', 'Defining the Powers of the State: The Center vs States Autonomy Debate (Santhanam) & Financial Allocations', 3, true),
('65d29b56-0027-2212-0000-000000000004', '65d29b56-0027-1200-0000-000000000012', 'The Language of the Nation Debate: Hindustani vs Regional Languages, Hindi Compromise & Final Enactment of the Constitution', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3212-0000-000000000001', '65d29b56-0027-2212-0000-000000000001', 'VIDEO', 'A Tumultuous Setting: Partition, Refugee Crisis, Princely State Integration & Composition of the Constituent Assembly', 'https://www.youtube.com/watch?v=OBZ8Xr383DU&end=480s', true, 1),
('65d29b56-0027-3212-0000-000000000002', '65d29b56-0027-2212-0000-000000000002', 'VIDEO', 'The Objectives Resolution: Nehru''s Vision of Independent Sovereign Republic & Defining Minority and Depressed Class Rights', 'https://www.youtube.com/watch?v=OBZ8Xr383DU&t=480s&end=970s', true, 1),
('65d29b56-0027-3212-0000-000000000003', '65d29b56-0027-2212-0000-000000000003', 'VIDEO', 'Defining the Powers of the State: The Center vs States Autonomy Debate (Santhanam) & Financial Allocations', 'https://www.youtube.com/watch?v=OBZ8Xr383DU&t=970s&end=1450s', true, 1),
('65d29b56-0027-3212-0000-000000000004', '65d29b56-0027-2212-0000-000000000004', 'VIDEO', 'The Language of the Nation Debate: Hindustani vs Regional Languages, Hindi Compromise & Final Enactment of the Constitution', 'https://www.youtube.com/watch?v=OBZ8Xr383DU&t=1450s&end=1944s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
