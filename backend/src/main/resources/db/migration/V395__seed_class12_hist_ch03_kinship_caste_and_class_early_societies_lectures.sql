-- V395__seed_class12_hist_ch03_kinship_caste_and_class_early_societies_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 3 (Kinship, Caste and Class: Early Societies)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (mDUR5vUBPrs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1185s)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Kinship, Caste and Class: Early Societies)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000003';

-- 2. Insert 4 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2203-0000-000000000001', '65d29b56-0027-1200-0000-000000000003', 'The Critical Edition of the Mahabharata (Sukthankar) & Rules of Kinship, Patriliny and Marriage Practices', 1, true),
('65d29b56-0027-2203-0000-000000000002', '65d29b56-0027-1200-0000-000000000003', 'Social Differences within Framework of Dharma: The Varna System, Jatis, Social Mobility & Beyond the Four Varnas', 2, true),
('65d29b56-0027-2203-0000-000000000003', '65d29b56-0027-1200-0000-000000000003', 'Beyond Birth: Resources and Status, Gender Access to Property & Non-Varna Perspectives on Wealth (Buddhism)', 3, true),
('65d29b56-0027-2203-0000-000000000004', '65d29b56-0027-1200-0000-000000000003', 'Handling Texts: Historians and the Mahabharata, Language, Content (Narrative vs Didactic) & A Dynamic Text', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3203-0000-000000000001', '65d29b56-0027-2203-0000-000000000001', 'VIDEO', 'The Critical Edition of the Mahabharata (Sukthankar) & Rules of Kinship, Patriliny and Marriage Practices', 'https://www.youtube.com/watch?v=mDUR5vUBPrs&end=300s', true, 1),
('65d29b56-0027-3203-0000-000000000002', '65d29b56-0027-2203-0000-000000000002', 'VIDEO', 'Social Differences within Framework of Dharma: The Varna System, Jatis, Social Mobility & Beyond the Four Varnas', 'https://www.youtube.com/watch?v=mDUR5vUBPrs&t=300s&end=590s', true, 1),
('65d29b56-0027-3203-0000-000000000003', '65d29b56-0027-2203-0000-000000000003', 'VIDEO', 'Beyond Birth: Resources and Status, Gender Access to Property & Non-Varna Perspectives on Wealth (Buddhism)', 'https://www.youtube.com/watch?v=mDUR5vUBPrs&t=590s&end=890s', true, 1),
('65d29b56-0027-3203-0000-000000000004', '65d29b56-0027-2203-0000-000000000004', 'VIDEO', 'Handling Texts: Historians and the Mahabharata, Language, Content (Narrative vs Didactic) & A Dynamic Text', 'https://www.youtube.com/watch?v=mDUR5vUBPrs&t=890s&end=1185s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
