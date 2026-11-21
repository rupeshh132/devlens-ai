-- V273__seed_class11_pol_ch02_rights_in_indian_constitution_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 2: Rights in the Indian Constitution
-- Masterclass Video: Next Toppers - 11th Humanities (dtvr1qhubHo)
-- 100% Zero-Gap Continuous Timeline: 0s to 5760s (01:36:00, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 2
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000002';

-- 2. Insert 4 Verified Master Subtopics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2102-0000-000000000001', '65d29b56-0028-1100-0000-000000000002', 'Importance of Rights, Bill of Rights & Fundamental Right to Equality', 1, true),
('65d29b56-0028-2102-0000-000000000002', '65d29b56-0028-1100-0000-000000000002', 'Right to Freedom, Personal Liberty, Preventive Detention & Right Against Exploitation', 2, true),
('65d29b56-0028-2102-0000-000000000003', '65d29b56-0028-1100-0000-000000000002', 'Freedom of Religion, Cultural & Educational Rights & Right to Constitutional Remedies (Writs)', 3, true),
('65d29b56-0028-2102-0000-000000000004', '65d29b56-0028-1100-0000-000000000002', 'Directive Principles of State Policy (DPSP), Relationship with Fundamental Rights & Fundamental Duties', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 31:00 (0s to 1860s)
('65d29b56-0028-3102-0000-000000000001', '65d29b56-0028-2102-0000-000000000001', 'VIDEO', 'Importance of Rights, Bill of Rights & Fundamental Right to Equality (Concept of Bill of Rights, Historical Background of Fundamental Rights in India, Right to Equality under Articles 14 to 18 & Abolition of Untouchability and Titles)', 'https://www.youtube.com/watch?v=dtvr1qhubHo&t=0s&end=1860s', true, 1),

-- Topic 2: 31:00 to 54:00 (1860s to 3240s)
('65d29b56-0028-3102-0000-000000000002', '65d29b56-0028-2102-0000-000000000002', 'VIDEO', 'Right to Freedom, Personal Liberty, Preventive Detention & Right Against Exploitation (Six Freedoms of Article 19, Protection in Respect of Conviction, Right to Life and Personal Liberty Article 21, Preventive Detention Laws & Articles 23-24 Prohibition of Human Trafficking and Child Labour)', 'https://www.youtube.com/watch?v=dtvr1qhubHo&t=1860s&end=3240s', true, 1),

-- Topic 3: 54:00 to 01:15:20 (3240s to 4520s)
('65d29b56-0028-3102-0000-000000000003', '65d29b56-0028-2102-0000-000000000003', 'VIDEO', 'Freedom of Religion, Cultural & Educational Rights & Right to Constitutional Remedies (Freedom of Conscience & Profession Articles 25-28, Minority Cultural Rights Articles 29-30 & Article 32 Heart and Soul of Constitution: Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari)', 'https://www.youtube.com/watch?v=dtvr1qhubHo&t=3240s&end=4520s', true, 1),

-- Topic 4: 01:15:20 to 01:36:00 (4520s to 5760s)
('65d29b56-0028-3102-0000-000000000004', '65d29b56-0028-2102-0000-000000000004', 'VIDEO', 'Directive Principles of State Policy (DPSP), Relationship with Fundamental Rights & Fundamental Duties (Goals, Welfare Policies and Non-Justiciable Character of DPSPs, Complementary vs Conflicting Dynamics with Fundamental Rights & 11 Fundamental Duties under Article 51A)', 'https://www.youtube.com/watch?v=dtvr1qhubHo&t=4520s&end=5760s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
