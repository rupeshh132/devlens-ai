-- V82__seed_class10_econ_ch5_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 10 Economics Chapter 5 / Overall SST Chapter 22 (Consumer Rights)
-- Video: Digraj Singh Rajput (Consumer Rights | State Boards / Full Chapter Explanation | gtFjdcVcvys)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 1779s / 29m 39s)

-- 1. Remove old placeholder topics & content items for Economics Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000022'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000022';

-- 2. Insert 4 NCERT-Aligned Master Topics for Economics Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2022-0000-000000000001', '65d29b56-3333-1000-0000-000000000022', 'The Consumer in the Marketplace & Right to Safety: Protection Against Hazardous Goods & Services (Reji''s Case)', 1, true),
('65d29b56-3333-2022-0000-000000000002', '65d29b56-3333-1000-0000-000000000022', 'Right to be Informed & The RTI Act 2005: Product Details, MRP & Transparency in Public Services (Amrita''s Case)', 2, true),
('65d29b56-3333-2022-0000-000000000003', '65d29b56-3333-1000-0000-000000000022', 'Right to Choose & Right to Seek Redressal: Compensation for Unfair Trade Practices (Abirami & Prakash''s Case)', 3, true),
('65d29b56-3333-2022-0000-000000000004', '65d29b56-3333-1000-0000-000000000022', 'COPRA Three-Tier Redressal Machinery (District, State, National) & Standardisation Marks (ISI, AGMARK, Hallmark)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 1779s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3022-0000-000000000001', '65d29b56-3333-2022-0000-000000000001', 'VIDEO', 'The Consumer in the Marketplace & Right to Safety: Protection Against Hazardous Goods & Services (Reji''s Case)', 'https://www.youtube.com/watch?v=gtFjdcVcvys&end=340s', true, 1),
('65d29b56-3333-3022-0000-000000000002', '65d29b56-3333-2022-0000-000000000002', 'VIDEO', 'Right to be Informed & The RTI Act 2005: Product Details, MRP & Transparency in Public Services (Amrita''s Case)', 'https://www.youtube.com/watch?v=gtFjdcVcvys&t=340s&end=740s', true, 1),
('65d29b56-3333-3022-0000-000000000003', '65d29b56-3333-2022-0000-000000000003', 'VIDEO', 'Right to Choose & Right to Seek Redressal: Compensation for Unfair Trade Practices (Abirami & Prakash''s Case)', 'https://www.youtube.com/watch?v=gtFjdcVcvys&t=740s&end=1230s', true, 1),
('65d29b56-3333-3022-0000-000000000004', '65d29b56-3333-2022-0000-000000000004', 'VIDEO', 'COPRA Three-Tier Redressal Machinery (District, State, National) & Standardisation Marks (ISI, AGMARK, Hallmark)', 'https://www.youtube.com/watch?v=gtFjdcVcvys&t=1230s&end=1779s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
