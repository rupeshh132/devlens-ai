-- V398__seed_class12_hist_ch06_the_bhakti_sufi_traditions_changes_in_religious_beliefs_and_devotional_texts_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 History Chapter 6 (The Bhakti-Sufi Traditions: Changes in Religious Beliefs and Devotional Texts)
-- Video: The Twin Bros - Humanities Ka Ghar (Rapid Revision) (jdvoGWLzwYY)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2019s)

-- 1. Remove old placeholder topics & content items for Chapter 6 (The Bhakti-Sufi Traditions: Changes in Religious Beliefs and Devotional Texts)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1200-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1200-0000-000000000006';

-- 2. Insert 4 Verified Master Topics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2206-0000-000000000001', '65d29b56-0027-1200-0000-000000000006', 'Integration of Cults & Southern Devotional Traditions: Alvars, Nayanars and the Virashaiva Movement in Karnataka', 1, true),
('65d29b56-0027-2206-0000-000000000002', '65d29b56-0027-1200-0000-000000000006', 'Growth of Islamic Traditions in the Subcontinent: Sharia, Popular Practice & The Emergence of Sufi Silsilas', 2, true),
('65d29b56-0027-2206-0000-000000000003', '65d29b56-0027-1200-0000-000000000006', 'The Chishti Silsila in the Subcontinent: Life in the Khanqah, Dargah Pilgrimage (Ziyarat) & State Relations', 3, true),
('65d29b56-0027-2206-0000-000000000004', '65d29b56-0027-1200-0000-000000000006', 'New Devotional Frameworks in Northern India: Kabir, Guru Nanak and the Sikh Tradition & Mirabai''s Songs', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0027-3206-0000-000000000001', '65d29b56-0027-2206-0000-000000000001', 'VIDEO', 'Integration of Cults & Southern Devotional Traditions: Alvars, Nayanars and the Virashaiva Movement in Karnataka', 'https://www.youtube.com/watch?v=jdvoGWLzwYY&end=500s', true, 1),
('65d29b56-0027-3206-0000-000000000002', '65d29b56-0027-2206-0000-000000000002', 'VIDEO', 'Growth of Islamic Traditions in the Subcontinent: Sharia, Popular Practice & The Emergence of Sufi Silsilas', 'https://www.youtube.com/watch?v=jdvoGWLzwYY&t=500s&end=1010s', true, 1),
('65d29b56-0027-3206-0000-000000000003', '65d29b56-0027-2206-0000-000000000003', 'VIDEO', 'The Chishti Silsila in the Subcontinent: Life in the Khanqah, Dargah Pilgrimage (Ziyarat) & State Relations', 'https://www.youtube.com/watch?v=jdvoGWLzwYY&t=1010s&end=1510s', true, 1),
('65d29b56-0027-3206-0000-000000000004', '65d29b56-0027-2206-0000-000000000004', 'VIDEO', 'New Devotional Frameworks in Northern India: Kabir, Guru Nanak and the Sikh Tradition & Mirabai''s Songs', 'https://www.youtube.com/watch?v=jdvoGWLzwYY&t=1510s&end=2019s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
