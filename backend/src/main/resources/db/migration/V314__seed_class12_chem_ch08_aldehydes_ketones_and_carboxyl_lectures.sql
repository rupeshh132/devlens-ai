-- V314__seed_class12_chem_ch08_aldehydes_ketones_and_carboxyl_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Chemistry Chapter 8 (Aldehydes, Ketones and Carboxylic Acids)
-- Video: NCERT Wallah / Physics Wallah (Class 12 Full Revision) (Aldehydes, Ketones and Carboxylic Acids | uxZlQlbrvmw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 15660s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Aldehydes, Ketones and Carboxylic Acids)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0430-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0430-1200-0000-000000000008';

-- 2. Insert 6 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0430-2208-0000-000000000001', '65d29b56-0430-1200-0000-000000000008', 'Nomenclature, Isomerism & Electronic Structure of the Carbonyl (>C=O) Group', 1, true),
('65d29b56-0430-2208-0000-000000000002', '65d29b56-0430-1200-0000-000000000008', 'Methods of Preparation of Both Aldehydes and Ketones (Oxidation, Dehydrogenation, Ozonolysis)', 2, true),
('65d29b56-0430-2208-0000-000000000003', '65d29b56-0430-1200-0000-000000000008', 'Specific Preparations of Aldehydes (Rosenmund, Stephen, Etard) and Ketones (Friedel-Crafts Acylation)', 3, true),
('65d29b56-0430-2208-0000-000000000004', '65d29b56-0430-1200-0000-000000000008', 'Nucleophilic Addition Reactions, Carbonyl Reactivity & Distinction Tests (Tollens'' & Fehling''s)', 4, true),
('65d29b56-0430-2208-0000-000000000005', '65d29b56-0430-1200-0000-000000000008', 'Reactions Involving α-Hydrogen (Aldol & Cross-Aldol), Cannizzaro Reaction & Electrophilic Substitution', 5, true),
('65d29b56-0430-2208-0000-000000000006', '65d29b56-0430-1200-0000-000000000008', 'Carboxylic Acids: Structure, Acidity, Methods of Preparation, Chemical Reactions & HVZ Reaction', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0430-3208-0000-000000000001', '65d29b56-0430-2208-0000-000000000001', 'VIDEO', 'Nomenclature, Isomerism & Electronic Structure of the Carbonyl (>C=O) Group', 'https://www.youtube.com/watch?v=uxZlQlbrvmw&end=3879s', true, 1),
('65d29b56-0430-3208-0000-000000000002', '65d29b56-0430-2208-0000-000000000002', 'VIDEO', 'Methods of Preparation of Both Aldehydes and Ketones (Oxidation, Dehydrogenation, Ozonolysis)', 'https://www.youtube.com/watch?v=uxZlQlbrvmw&t=3879s&end=5398s', true, 1),
('65d29b56-0430-3208-0000-000000000003', '65d29b56-0430-2208-0000-000000000003', 'VIDEO', 'Specific Preparations of Aldehydes (Rosenmund, Stephen, Etard) and Ketones (Friedel-Crafts Acylation)', 'https://www.youtube.com/watch?v=uxZlQlbrvmw&t=5398s&end=7366s', true, 1),
('65d29b56-0430-3208-0000-000000000004', '65d29b56-0430-2208-0000-000000000004', 'VIDEO', 'Nucleophilic Addition Reactions, Carbonyl Reactivity & Distinction Tests (Tollens'' & Fehling''s)', 'https://www.youtube.com/watch?v=uxZlQlbrvmw&t=7366s&end=10000s', true, 1),
('65d29b56-0430-3208-0000-000000000005', '65d29b56-0430-2208-0000-000000000005', 'VIDEO', 'Reactions Involving α-Hydrogen (Aldol & Cross-Aldol), Cannizzaro Reaction & Electrophilic Substitution', 'https://www.youtube.com/watch?v=uxZlQlbrvmw&t=10000s&end=12725s', true, 1),
('65d29b56-0430-3208-0000-000000000006', '65d29b56-0430-2208-0000-000000000006', 'VIDEO', 'Carboxylic Acids: Structure, Acidity, Methods of Preparation, Chemical Reactions & HVZ Reaction', 'https://www.youtube.com/watch?v=uxZlQlbrvmw&t=12725s&end=15660s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
