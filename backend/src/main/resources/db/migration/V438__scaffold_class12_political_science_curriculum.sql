-- V438__scaffold_class12_political_science_curriculum.sql
-- Scaffolds Class 12 Political Science (Code: 028) and its 16 Evaluative Chapters
-- Session: 2026-27 (Directorate of Education, GNCT Delhi & CBSE)

-- 1. Insert Subject Political Science (Code: 028, Order Index: 10)
INSERT INTO learn_subjects (id, exam_type_id, name, code, order_index, is_active)
VALUES ('65d29b56-0028-0000-0000-000000000012', 'e334760b-a4d0-4843-9234-a0ab75684ff3', 'Political Science', '028', 10, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, code = EXCLUDED.code, order_index = EXCLUDED.order_index, is_active = true;

-- 2. Insert 16 Evaluative Chapters for Class 12 Political Science
INSERT INTO learn_chapters (id, subject_id, title, order_index, is_active)
VALUES
('65d29b56-0028-1200-0000-000000000001', '65d29b56-0028-0000-0000-000000000012', 'The End of Bipolarity', 1, true),
('65d29b56-0028-1200-0000-000000000002', '65d29b56-0028-0000-0000-000000000012', 'Contemporary Centers of Power', 2, true),
('65d29b56-0028-1200-0000-000000000003', '65d29b56-0028-0000-0000-000000000012', 'Contemporary South Asia', 3, true),
('65d29b56-0028-1200-0000-000000000004', '65d29b56-0028-0000-0000-000000000012', 'International Organizations', 4, true),
('65d29b56-0028-1200-0000-000000000005', '65d29b56-0028-0000-0000-000000000012', 'Security in the Contemporary World', 5, true),
('65d29b56-0028-1200-0000-000000000006', '65d29b56-0028-0000-0000-000000000012', 'Environment and Natural Resources', 6, true),
('65d29b56-0028-1200-0000-000000000007', '65d29b56-0028-0000-0000-000000000012', 'Globalisation', 7, true),
('65d29b56-0028-1200-0000-000000000008', '65d29b56-0028-0000-0000-000000000012', 'Challenges of Nation-Building', 8, true),
('65d29b56-0028-1200-0000-000000000009', '65d29b56-0028-0000-0000-000000000012', 'Era of One-Party Dominance', 9, true),
('65d29b56-0028-1200-0000-000000000010', '65d29b56-0028-0000-0000-000000000012', 'Politics of Planned Development', 10, true),
('65d29b56-0028-1200-0000-000000000011', '65d29b56-0028-0000-0000-000000000012', 'India''s External Relations', 11, true),
('65d29b56-0028-1200-0000-000000000012', '65d29b56-0028-0000-0000-000000000012', 'Challenges to and Restoration of the Congress System', 12, true),
('65d29b56-0028-1200-0000-000000000013', '65d29b56-0028-0000-0000-000000000012', 'The Crisis of Democratic Order', 13, true),
('65d29b56-0028-1200-0000-000000000014', '65d29b56-0028-0000-0000-000000000012', 'Regional Aspirations', 14, true),
('65d29b56-0028-1200-0000-000000000015', '65d29b56-0028-0000-0000-000000000012', 'Recent Developments in Indian Politics', 15, true),
('65d29b56-0028-1200-0000-000000000016', '65d29b56-0028-0000-0000-000000000012', 'Project Work, Internal Assessment & Viva Voce (20 Marks Evaluation)', 16, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;
