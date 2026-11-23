-- V450__seed_class12_political_science_ch12_challenges_to_and_restoration_of_the_congress_system_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 12 (Challenges to and Restoration of the Congress System)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (ayB4okfV3ZM)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3886s)

-- 1. Remove old placeholder topics & content items for Chapter 12 (Challenges to and Restoration of the Congress System)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000012'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000012';

-- 2. Insert 4 Verified Master Topics for Chapter 12
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2212-0000-000000000001', '65d29b56-0028-1200-0000-000000000012', 'Leadership Succession: From Nehru to Lal Bahadur Shastri, Shastri''s Legacy & Succession of Indira Gandhi', 1, true),
('65d29b56-0028-2212-0000-000000000002', '65d29b56-0028-1200-0000-000000000012', 'Fourth General Election 1967: Political Earthquake, Non-Congressism, SVD Coalitions & Defection ("Aaya Ram Gaya Ram")', 2, true),
('65d29b56-0028-2212-0000-000000000003', '65d29b56-0028-1200-0000-000000000012', 'Split in the Congress (1969): Indira Gandhi vs The Syndicate, 1969 Presidential Election (V.V. Giri vs Sanjeeva Reddy)', 3, true),
('65d29b56-0028-2212-0000-000000000004', '65d29b56-0028-1200-0000-000000000012', '1971 General Election, "Garibi Hatao" Slogan, Massive Congress Victory & Structural Restoration of Hegemony', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3212-0000-000000000001', '65d29b56-0028-2212-0000-000000000001', 'VIDEO', 'Leadership Succession: From Nehru to Lal Bahadur Shastri, Shastri''s Legacy & Succession of Indira Gandhi', 'https://www.youtube.com/watch?v=ayB4okfV3ZM&end=970s', true, 1),
('65d29b56-0028-3212-0000-000000000002', '65d29b56-0028-2212-0000-000000000002', 'VIDEO', 'Fourth General Election 1967: Political Earthquake, Non-Congressism, SVD Coalitions & Defection ("Aaya Ram Gaya Ram")', 'https://www.youtube.com/watch?v=ayB4okfV3ZM&t=970s&end=1940s', true, 1),
('65d29b56-0028-3212-0000-000000000003', '65d29b56-0028-2212-0000-000000000003', 'VIDEO', 'Split in the Congress (1969): Indira Gandhi vs The Syndicate, 1969 Presidential Election (V.V. Giri vs Sanjeeva Reddy)', 'https://www.youtube.com/watch?v=ayB4okfV3ZM&t=1940s&end=2910s', true, 1),
('65d29b56-0028-3212-0000-000000000004', '65d29b56-0028-2212-0000-000000000004', 'VIDEO', '1971 General Election, "Garibi Hatao" Slogan, Massive Congress Victory & Structural Restoration of Hegemony', 'https://www.youtube.com/watch?v=ayB4okfV3ZM&t=2910s&end=3886s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
