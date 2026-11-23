-- V296__seed_class12_bio_ch04_principles_of_inheritance_and__lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 4 (Principles of Inheritance and Variation)
-- Video: Competition Wallah / PW NEET (Ummeed Series / Vipin Sir) (Principles of Inheritance and Variation | nyIf7AXZ4I8)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 14600s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 4 (Principles of Inheritance and Variation)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000004';

-- 2. Insert 6 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2204-0000-000000000001', '65d29b56-0440-1200-0000-000000000004', 'Mendel''s Principles of Inheritance: Terminology, Contrasting Traits & Monohybrid Cross', 1, true),
('65d29b56-0440-2204-0000-000000000002', '65d29b56-0440-1200-0000-000000000004', 'Laws of Inheritance (Dominance, Segregation), Test Cross & Deviations (Incomplete/Co-dominance)', 2, true),
('65d29b56-0440-2204-0000-000000000003', '65d29b56-0440-1200-0000-000000000004', 'Multiple Alleles (ABO Blood Grouping), Pleiotropy & Dihybrid Cross (Independent Assortment)', 3, true),
('65d29b56-0440-2204-0000-000000000004', '65d29b56-0440-1200-0000-000000000004', 'Chromosomal Theory of Inheritance, Morgan''s Drosophila Experiments, Linkage & Recombination', 4, true),
('65d29b56-0440-2204-0000-000000000005', '65d29b56-0440-1200-0000-000000000004', 'Sex Determination Mechanisms (Human, Birds, Honeybee), Mutations & Pedigree Analysis', 5, true),
('65d29b56-0440-2204-0000-000000000006', '65d29b56-0440-1200-0000-000000000004', 'Mendelian & Chromosomal Genetic Disorders (Haemophilia, Sickle Cell, Thalassemia, Down/Turner/Klinefelter)', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3204-0000-000000000001', '65d29b56-0440-2204-0000-000000000001', 'VIDEO', 'Mendel''s Principles of Inheritance: Terminology, Contrasting Traits & Monohybrid Cross', 'https://www.youtube.com/watch?v=nyIf7AXZ4I8&end=3725s', true, 1),
('65d29b56-0440-3204-0000-000000000002', '65d29b56-0440-2204-0000-000000000002', 'VIDEO', 'Laws of Inheritance (Dominance, Segregation), Test Cross & Deviations (Incomplete/Co-dominance)', 'https://www.youtube.com/watch?v=nyIf7AXZ4I8&t=3725s&end=5937s', true, 1),
('65d29b56-0440-3204-0000-000000000003', '65d29b56-0440-2204-0000-000000000003', 'VIDEO', 'Multiple Alleles (ABO Blood Grouping), Pleiotropy & Dihybrid Cross (Independent Assortment)', 'https://www.youtube.com/watch?v=nyIf7AXZ4I8&t=5937s&end=8768s', true, 1),
('65d29b56-0440-3204-0000-000000000004', '65d29b56-0440-2204-0000-000000000004', 'VIDEO', 'Chromosomal Theory of Inheritance, Morgan''s Drosophila Experiments, Linkage & Recombination', 'https://www.youtube.com/watch?v=nyIf7AXZ4I8&t=8768s&end=9723s', true, 1),
('65d29b56-0440-3204-0000-000000000005', '65d29b56-0440-2204-0000-000000000005', 'VIDEO', 'Sex Determination Mechanisms (Human, Birds, Honeybee), Mutations & Pedigree Analysis', 'https://www.youtube.com/watch?v=nyIf7AXZ4I8&t=9723s&end=12209s', true, 1),
('65d29b56-0440-3204-0000-000000000006', '65d29b56-0440-2204-0000-000000000006', 'VIDEO', 'Mendelian & Chromosomal Genetic Disorders (Haemophilia, Sickle Cell, Thalassemia, Down/Turner/Klinefelter)', 'https://www.youtube.com/watch?v=nyIf7AXZ4I8&t=12209s&end=14600s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
