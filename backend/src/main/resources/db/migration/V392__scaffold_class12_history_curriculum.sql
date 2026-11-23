-- V392__scaffold_class12_history_curriculum.sql
-- Scaffolds Class 12 History (Code: 027) and its 14 Evaluative Chapters
-- Session: 2026-27 (Directorate of Education, GNCT Delhi & CBSE)

-- 1. Insert Subject History (Code: 027, Order Index: 7)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES ('65d29b56-0027-0000-0000-000000000012', 'e334760b-a4d0-4843-9234-a0ab75684ff3', 'History', '027', 7, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 14 Evaluative Chapters for Class 12 History
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0027-1200-0000-000000000001', '65d29b56-0027-0000-0000-000000000012', 'Bricks, Beads and Bones: The Harappan Civilization', 1, true),
('65d29b56-0027-1200-0000-000000000002', '65d29b56-0027-0000-0000-000000000012', 'Kings, Farmers and Towns: Early States and Economies', 2, true),
('65d29b56-0027-1200-0000-000000000003', '65d29b56-0027-0000-0000-000000000012', 'Kinship, Caste and Class: Early Societies', 3, true),
('65d29b56-0027-1200-0000-000000000004', '65d29b56-0027-0000-0000-000000000012', 'Thinkers, Beliefs and Buildings: Cultural Developments', 4, true),
('65d29b56-0027-1200-0000-000000000005', '65d29b56-0027-0000-0000-000000000012', 'Through the Eyes of Travellers: Perception of Society', 5, true),
('65d29b56-0027-1200-0000-000000000006', '65d29b56-0027-0000-0000-000000000012', 'The Bhakti-Sufi Traditions: Changes in Religious Beliefs and Devotional Texts', 6, true),
('65d29b56-0027-1200-0000-000000000007', '65d29b56-0027-0000-0000-000000000012', 'An Imperial Capital: Vijayanagara', 7, true),
('65d29b56-0027-1200-0000-000000000008', '65d29b56-0027-0000-0000-000000000012', 'Peasants, Zamindars and The State: Agrarian Society and the Mughal Empire', 8, true),
('65d29b56-0027-1200-0000-000000000009', '65d29b56-0027-0000-0000-000000000012', 'Colonialism and the Countryside: Exploring Official Archives', 9, true),
('65d29b56-0027-1200-0000-000000000010', '65d29b56-0027-0000-0000-000000000012', 'Rebels and the Raj: The Revolt of 1857 and Its Representations', 10, true),
('65d29b56-0027-1200-0000-000000000011', '65d29b56-0027-0000-0000-000000000012', 'Mahatma Gandhi and the Nationalist Movement: Civil Disobedience and Beyond', 11, true),
('65d29b56-0027-1200-0000-000000000012', '65d29b56-0027-0000-0000-000000000012', 'Framing the Constitution: The Beginning of a New Era', 12, true),
('65d29b56-0027-1200-0000-000000000013', '65d29b56-0027-0000-0000-000000000012', 'Complete Map Work (Ancient, Medieval & Modern India - 5 Marks Board Evaluation)', 13, true),
('65d29b56-0027-1200-0000-000000000014', '65d29b56-0027-0000-0000-000000000012', 'Internal Assessment: Project Work, Viva Voce & Research Portfolio (20 Marks)', 14, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
