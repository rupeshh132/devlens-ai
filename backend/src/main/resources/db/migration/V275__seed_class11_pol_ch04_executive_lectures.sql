-- V275__seed_class11_pol_ch04_executive_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 4: Executive
-- Masterclass Video: Next Toppers - 11th Humanities (dzLbTN73Dc4)
-- 100% Zero-Gap Continuous Timeline: 0s to 6256s (01:44:16, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 4
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000004';

-- 2. Insert 4 Verified Master Subtopics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2104-0000-000000000001', '65d29b56-0028-1100-0000-000000000004', 'Meaning of Executive & Classification of Executives (Parliamentary, Presidential, Semi-Presidential)', 1, true),
('65d29b56-0028-2104-0000-000000000002', '65d29b56-0028-1100-0000-000000000004', 'Parliamentary Executive in India: President of India & Discretionary Powers of President', 2, true),
('65d29b56-0028-2104-0000-000000000003', '65d29b56-0028-1100-0000-000000000004', 'Prime Minister and the Council of Ministers: Leadership, Powers & Coalition Governance', 3, true),
('65d29b56-0028-2104-0000-000000000004', '65d29b56-0028-1100-0000-000000000004', 'Permanent Executive: Civil Services & Bureaucracy in India (Structure, Neutrality & Accountability)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 23:56 (0s to 1436s)
('65d29b56-0028-3104-0000-000000000001', '65d29b56-0028-2104-0000-000000000001', 'VIDEO', 'Meaning of Executive & Classification of Executives (Political vs Permanent Executive, Systems Based on Collective Leadership vs Individual Leadership: USA, UK, France, Russia, Sri Lanka & Canada Models)', 'https://www.youtube.com/watch?v=dzLbTN73Dc4&t=0s&end=1436s', true, 1),

-- Topic 2: 23:56 to 01:11:35 (1436s to 4295s)
('65d29b56-0028-3104-0000-000000000002', '65d29b56-0028-2104-0000-000000000002', 'VIDEO', 'Parliamentary Executive in India: President of India & Discretionary Powers of President (Election via Electoral College, Constitutional Position as Head of State, 42nd & 44th Amendments, Reconsideration, Pocket Veto & Appointment of PM in Hung Parliament)', 'https://www.youtube.com/watch?v=dzLbTN73Dc4&t=1436s&end=4295s', true, 1),

-- Topic 3: 01:11:35 to 01:27:24 (4295s to 5244s)
('65d29b56-0028-3104-0000-000000000003', '65d29b56-0028-2104-0000-000000000003', 'VIDEO', 'Prime Minister and the Council of Ministers: Leadership, Powers & Coalition Governance (Keystone of the Cabinet Arch, Collective Responsibility to Lok Sabha, 91st Amendment 15% Size Limit, Impact of Coalition Era on Prime Ministerial Discretion)', 'https://www.youtube.com/watch?v=dzLbTN73Dc4&t=4295s&end=5244s', true, 1),

-- Topic 4: 01:27:24 to 01:44:16 (5244s to 6256s)
('65d29b56-0028-3104-0000-000000000004', '65d29b56-0028-2104-0000-000000000004', 'VIDEO', 'Permanent Executive: Civil Services & Bureaucracy in India (All India Services IAS/IPS, Central Services, State Civil Services, UPSC Role, Political Neutrality, Democratic Accountability & Red-Tapism Reforms)', 'https://www.youtube.com/watch?v=dzLbTN73Dc4&t=5244s&end=6256s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
