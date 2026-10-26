-- V27__seed_class9_content.sql
-- Seed Class 9 Exam Type, Subjects, Chapters, and Topics with fixed UUIDs for easy Admin import

-- 1. Insert Class 9 Exam Type
INSERT INTO learn_exam_types (id, name, slug, full_name, category, required_plan, display_order) 
VALUES ('99999999-0000-0000-0000-000000000009', 'Class 9', 'cbse-class-9', 'Central Board of Secondary Education - Class 9', 'SCHOOL', 'SCHOOL', 9)
ON CONFLICT (id) DO NOTHING;

-- 2. Insert Subjects for Class 9
INSERT INTO learn_subjects (id, exam_type_id, name, order_index)
VALUES 
('99999999-1111-0000-0000-000000000009', '99999999-0000-0000-0000-000000000009', 'Science', 1),
('99999999-2222-0000-0000-000000000009', '99999999-0000-0000-0000-000000000009', 'Mathematics', 2),
('99999999-3333-0000-0000-000000000009', '99999999-0000-0000-0000-000000000009', 'Social Science', 3),
('99999999-4444-0000-0000-000000000009', '99999999-0000-0000-0000-000000000009', 'English', 4)
ON CONFLICT (id) DO NOTHING;

-- 3. Insert Chapters for Science (ID: 99999999-1111-0000-0000-000000000009)
INSERT INTO learn_chapters (id, subject_id, title, order_index)
VALUES 
('99999999-1111-1000-0000-000000000009', '99999999-1111-0000-0000-000000000009', 'Matter in Our Surroundings', 1),
('99999999-1111-2000-0000-000000000009', '99999999-1111-0000-0000-000000000009', 'Is Matter Around Us Pure', 2)
ON CONFLICT (id) DO NOTHING;

-- 4. Insert Topics for "Matter in Our Surroundings" (ID: 99999999-1111-1000-0000-000000000009)
INSERT INTO learn_topics (id, chapter_id, title, description, order_index)
VALUES 
('99999999-1111-1000-0001-000000000009', '99999999-1111-1000-0000-000000000009', 'Physical Nature of Matter', 'Introduction to matter and its physical properties', 1),
('99999999-1111-1000-0002-000000000009', '99999999-1111-1000-0000-000000000009', 'States of Matter', 'Solid, Liquid, and Gas', 2),
('99999999-1111-1000-0003-000000000009', '99999999-1111-1000-0000-000000000009', 'Evaporation', 'Concept and factors affecting evaporation', 3)
ON CONFLICT (id) DO NOTHING;
