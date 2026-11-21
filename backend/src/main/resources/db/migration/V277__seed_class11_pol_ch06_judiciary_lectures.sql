-- V277__seed_class11_pol_ch06_judiciary_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 6: Judiciary
-- Masterclass Video: Next Toppers - 11th Humanities (RZMMvVbnXBQ)
-- 100% Zero-Gap Continuous Timeline: 0s to 5720s (01:35:20, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 6
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000006'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000006';

-- 2. Insert 4 Verified Master Subtopics for Chapter 6
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2106-0000-000000000001', '65d29b56-0028-1100-0000-000000000006', 'Need for Independent Judiciary: Constitutional Safeguards, Appointment & Removal of Judges', 1, true),
('65d29b56-0028-2106-0000-000000000002', '65d29b56-0028-1100-0000-000000000006', 'Integrated Judicial Structure & Jurisdictions of the Supreme Court of India', 2, true),
('65d29b56-0028-2106-0000-000000000003', '65d29b56-0028-1100-0000-000000000006', 'Judicial Activism & Public Interest Litigation (PIL): Democratizing Access to Justice', 3, true),
('65d29b56-0028-2106-0000-000000000004', '65d29b56-0028-1100-0000-000000000006', 'Judiciary and Fundamental Rights, Constitutional Interpretation & Judiciary vs Parliament', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 45:39 (0s to 2739s)
('65d29b56-0028-3106-0000-000000000001', '65d29b56-0028-2106-0000-000000000001', 'VIDEO', 'Need for Independent Judiciary: Constitutional Safeguards, Appointment & Removal of Judges (Rule of Law, Security of Tenure, Fixed Salaries, Ban on Practice, Collegium System for Chief Justice & Judges, Impeachment Motion Procedure under Article 124(4))', 'https://www.youtube.com/watch?v=RZMMvVbnXBQ&t=0s&end=2739s', true, 1),

-- Topic 2: 45:39 to 01:02:43 (2739s to 3763s)
('65d29b56-0028-3106-0000-000000000002', '65d29b56-0028-2106-0000-000000000002', 'VIDEO', 'Integrated Judicial Structure & Jurisdictions of the Supreme Court of India (Single Integrated Judicial Pyramid: Supreme Court, High Courts, Subordinate Courts, Original Jurisdiction Art 131, Writ Art 32, Appellate Art 132-134, Advisory Art 143 & Special Leave Petitions Art 136)', 'https://www.youtube.com/watch?v=RZMMvVbnXBQ&t=2739s&end=3763s', true, 1),

-- Topic 3: 01:02:43 to 01:18:42 (3763s to 4722s)
('65d29b56-0028-3106-0000-000000000003', '65d29b56-0028-2106-0000-000000000003', 'VIDEO', 'Judicial Activism & Public Interest Litigation (PIL): Democratizing Access to Justice (Relaxation of Locus Standi, Epistolary Jurisdiction, Bhagwati & Krishna Iyer Bench, Landmark PILs for Undertrials, Bonded Labour, Clean Air & Executive Overreach Criticisms)', 'https://www.youtube.com/watch?v=RZMMvVbnXBQ&t=3763s&end=4722s', true, 1),

-- Topic 4: 01:18:42 to 01:35:20 (4722s to 5720s)
('65d29b56-0028-3106-0000-000000000004', '65d29b56-0028-2106-0000-000000000004', 'VIDEO', 'Judiciary and Fundamental Rights, Constitutional Interpretation & Judiciary vs Parliament (Judicial Review Art 13/226, Protection of Civil Liberties, Right to Property Battles, Kesavananda Bharati Basic Structure Doctrine & Parliamentary Sovereignty Boundaries)', 'https://www.youtube.com/watch?v=RZMMvVbnXBQ&t=4722s&end=5720s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
