-- V451__seed_class12_political_science_ch13_the_crisis_of_democratic_order_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 13 (The Crisis of Democratic Order)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (CdnJJ7zOlfE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3902s)

-- 1. Remove old placeholder topics & content items for Chapter 13 (The Crisis of Democratic Order)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000013'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000013';

-- 2. Insert 4 Verified Master Topics for Chapter 13
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2213-0000-000000000001', '65d29b56-0028-1200-0000-000000000013', 'Background to Emergency: Economic Strains, Gujarat & Bihar Navnirman Movements (JP Narayan & Total Revolution)', 1, true),
('65d29b56-0028-2213-0000-000000000002', '65d29b56-0028-1200-0000-000000000013', 'Conflict with Judiciary: Fundamental Rights vs DPSPs, Kesavananda Bharati Case & Allahabad High Court Verdict', 2, true),
('65d29b56-0028-2213-0000-000000000003', '65d29b56-0028-1200-0000-000000000013', 'Declaration of Internal Emergency (25 June 1975): Proclamation, Preventive Detention, Press Censorship & 42nd Amendment', 3, true),
('65d29b56-0028-2213-0000-000000000004', '65d29b56-0028-1200-0000-000000000013', 'End of Emergency, 1977 Lok Sabha Election, Janata Party Victory, Shah Commission & Democratic Lessons', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3213-0000-000000000001', '65d29b56-0028-2213-0000-000000000001', 'VIDEO', 'Background to Emergency: Economic Strains, Gujarat & Bihar Navnirman Movements (JP Narayan & Total Revolution)', 'https://www.youtube.com/watch?v=CdnJJ7zOlfE&end=970s', true, 1),
('65d29b56-0028-3213-0000-000000000002', '65d29b56-0028-2213-0000-000000000002', 'VIDEO', 'Conflict with Judiciary: Fundamental Rights vs DPSPs, Kesavananda Bharati Case & Allahabad High Court Verdict', 'https://www.youtube.com/watch?v=CdnJJ7zOlfE&t=970s&end=1950s', true, 1),
('65d29b56-0028-3213-0000-000000000003', '65d29b56-0028-2213-0000-000000000003', 'VIDEO', 'Declaration of Internal Emergency (25 June 1975): Proclamation, Preventive Detention, Press Censorship & 42nd Amendment', 'https://www.youtube.com/watch?v=CdnJJ7zOlfE&t=1950s&end=2920s', true, 1),
('65d29b56-0028-3213-0000-000000000004', '65d29b56-0028-2213-0000-000000000004', 'VIDEO', 'End of Emergency, 1977 Lok Sabha Election, Janata Party Victory, Shah Commission & Democratic Lessons', 'https://www.youtube.com/watch?v=CdnJJ7zOlfE&t=2920s&end=3902s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
