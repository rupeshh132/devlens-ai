-- V223__seed_class11_cs_ch11_society_law_and_ethics_lectures.sql
-- Seeds verified 5 Continuous Master Subtopics for Class 11 Computer Science Chapter 11: Society, Law and Ethics
-- Masterclass Video: ScoreShala (_LdNgvQThEA)
-- 100% Zero-Gap Continuous Timeline: 0s to 3085s (51m 25s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 11
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000011';

-- 2. Insert 5 Verified Master Subtopics for Chapter 11
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2111-0000-000000000001', '65d29b56-0083-1100-0000-000000000011', 'Digital Footprints, Netiquette & Cyber Ethics', 1, true),
('65d29b56-0083-2111-0000-000000000002', '65d29b56-0083-1100-0000-000000000011', 'Intellectual Property Rights (IPR), Patents, Copyright & Plagiarism', 2, true),
('65d29b56-0083-2111-0000-000000000003', '65d29b56-0083-1100-0000-000000000011', 'Open Source Software & Licensing (GPL, Apache, Creative Commons)', 3, true),
('65d29b56-0083-2111-0000-000000000004', '65d29b56-0083-1100-0000-000000000011', 'Cyber Crimes, Cyber Safety, Malware & Indian IT Act', 4, true),
('65d29b56-0083-2111-0000-000000000005', '65d29b56-0083-1100-0000-000000000011', 'E-Waste Management & Technology in Society (Gender & Disability Inclusion)', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 10:40 (0s to 640s)
('65d29b56-0083-3111-0000-000000000001', '65d29b56-0083-2111-0000-000000000001', 'VIDEO', 'Digital Footprints, Netiquette & Cyber Ethics (Active vs Passive Footprints, Communication Etiquette, Social Media Hygiene & Data Confidentiality)', 'https://www.youtube.com/watch?v=_LdNgvQThEA&t=0s&end=640s', true, 1),

-- Topic 2: 10:40 to 22:00 (640s to 1320s)
('65d29b56-0083-3111-0000-000000000002', '65d29b56-0083-2111-0000-000000000002', 'VIDEO', 'Intellectual Property Rights (IPR), Patents, Copyright & Plagiarism (Copyright Protection, Trademark Infringement, Patent Registration & Preventing Plagiarism)', 'https://www.youtube.com/watch?v=_LdNgvQThEA&t=640s&end=1320s', true, 1),

-- Topic 3: 22:00 to 33:00 (1320s to 1980s)
('65d29b56-0083-3111-0000-000000000003', '65d29b56-0083-2111-0000-000000000003', 'VIDEO', 'Open Source Software & Licensing (GPL, Apache, Creative Commons) (Free Software vs Open Source vs Proprietary Software, Copyleft, GNU GPL, Apache 2.0 & CC Licenses)', 'https://www.youtube.com/watch?v=_LdNgvQThEA&t=1320s&end=1980s', true, 1),

-- Topic 4: 33:00 to 43:00 (1980s to 2580s)
('65d29b56-0083-3111-0000-000000000004', '65d29b56-0083-2111-0000-000000000004', 'VIDEO', 'Cyber Crimes, Cyber Safety, Malware & Indian IT Act (Hacking, Phishing, Ransomware, Cyber Trolls, Viruses, Worms, Trojans, Adware, Safe Browsing & Provisions of Indian IT Act)', 'https://www.youtube.com/watch?v=_LdNgvQThEA&t=1980s&end=2580s', true, 1),

-- Topic 5: 43:00 to 51:25 (2580s to 3085s)
('65d29b56-0083-3111-0000-000000000005', '65d29b56-0083-2111-0000-000000000005', 'VIDEO', 'E-Waste Management & Technology in Society (Environmental Hazards of E-Waste, Disposal Strategies, Recycling, Gender Parity & Disability Inclusion in Tech Education)', 'https://www.youtube.com/watch?v=_LdNgvQThEA&t=2580s&end=3085s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
