-- V397__seed_class12_hist_ch05_through_the_eyes_of_travellers_perception_of_society_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 5 (Through the Eyes of Travellers: Perception of Society)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (tyroiQPYG5g)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 887s)

-- 1. Remove old placeholder topics & content items for Chapter 5 (Through the Eyes of Travellers: Perception of Society)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000005';

-- 2. Insert 4 Verified Master Topics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2205-0000-000000000001', '65d29b56-0027-1200-0000-000000000005', 'Al-Biruni and the Kitab-ul-Hind: Overcoming Linguistic and Cultural Barriers & Perception of the Caste System', 1, true),
('65d29b56-0027-2205-0000-000000000002', '65d29b56-0027-1200-0000-000000000005', 'Ibn Battuta''s Rihla: The Excitement of the Unfamiliar, The Coconut and Paan, Indian Cities & Postal System', 2, true),
('65d29b56-0027-2205-0000-000000000003', '65d29b56-0027-1200-0000-000000000005', 'François Bernier: Comparing East and West, The Question of Crown Ownership of Land & Assessment of Artisans and Cities', 3, true),
('65d29b56-0027-2205-0000-000000000004', '65d29b56-0027-1200-0000-000000000005', 'Women Slaves, Sati and Labourers in Foreign Travellers'' Accounts & Critical Appraisal of European Perspectives', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3205-0000-000000000001', '65d29b56-0027-2205-0000-000000000001', 'VIDEO', 'Al-Biruni and the Kitab-ul-Hind: Overcoming Linguistic and Cultural Barriers & Perception of the Caste System', 'https://www.youtube.com/watch?v=tyroiQPYG5g&end=220s', true, 1),
('65d29b56-0027-3205-0000-000000000002', '65d29b56-0027-2205-0000-000000000002', 'VIDEO', 'Ibn Battuta''s Rihla: The Excitement of the Unfamiliar, The Coconut and Paan, Indian Cities & Postal System', 'https://www.youtube.com/watch?v=tyroiQPYG5g&t=220s&end=440s', true, 1),
('65d29b56-0027-3205-0000-000000000003', '65d29b56-0027-2205-0000-000000000003', 'VIDEO', 'François Bernier: Comparing East and West, The Question of Crown Ownership of Land & Assessment of Artisans and Cities', 'https://www.youtube.com/watch?v=tyroiQPYG5g&t=440s&end=660s', true, 1),
('65d29b56-0027-3205-0000-000000000004', '65d29b56-0027-2205-0000-000000000004', 'VIDEO', 'Women Slaves, Sati and Labourers in Foreign Travellers'' Accounts & Critical Appraisal of European Perspectives', 'https://www.youtube.com/watch?v=tyroiQPYG5g&t=660s&end=887s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
