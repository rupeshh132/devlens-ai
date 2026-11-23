-- V299__seed_class12_bio_ch07_human_health_and_disease_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 7 (Human Health and Disease)
-- Video: NCERT Wallah / Physics Wallah (Class 12th Boards One Shot) (Human Health and Disease | uySMYvvV1H4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 15406s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Human Health and Disease)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000007';

-- 2. Insert 6 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2207-0000-000000000001', '65d29b56-0440-1200-0000-000000000007', 'Concepts of Health, Disease Types & Common Bacterial/Viral Pathogens (Typhoid, Pneumonia, Cold)', 1, true),
('65d29b56-0440-2207-0000-000000000002', '65d29b56-0440-1200-0000-000000000007', 'Protozoan, Helminthic & Fungal Pathogens: Malaria Lifecycle, Amoebiasis, Ascariasis & Ringworm', 2, true),
('65d29b56-0440-2207-0000-000000000003', '65d29b56-0440-1200-0000-000000000007', 'Innate & Acquired Immunity: Physical/Cellular Barriers, Antibody Structure & Humoral/CMI Immunity', 3, true),
('65d29b56-0440-2207-0000-000000000004', '65d29b56-0440-1200-0000-000000000007', 'Active & Passive Immunity, Vaccination, Allergies, Autoimmunity & Lymphoid Organs', 4, true),
('65d29b56-0440-2207-0000-000000000005', '65d29b56-0440-1200-0000-000000000007', 'AIDS (Acquired Immuno Deficiency Syndrome): HIV Structure, Life Cycle, ELISA Diagnosis & Treatment', 5, true),
('65d29b56-0440-2207-0000-000000000006', '65d29b56-0440-1200-0000-000000000007', 'Cancer Biology (Transformation, Oncogenes, Treatment) & Adolescent Drug and Alcohol Abuse', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3207-0000-000000000001', '65d29b56-0440-2207-0000-000000000001', 'VIDEO', 'Concepts of Health, Disease Types & Common Bacterial/Viral Pathogens (Typhoid, Pneumonia, Cold)', 'https://www.youtube.com/watch?v=uySMYvvV1H4&end=2679s', true, 1),
('65d29b56-0440-3207-0000-000000000002', '65d29b56-0440-2207-0000-000000000002', 'VIDEO', 'Protozoan, Helminthic & Fungal Pathogens: Malaria Lifecycle, Amoebiasis, Ascariasis & Ringworm', 'https://www.youtube.com/watch?v=uySMYvvV1H4&t=2679s&end=4508s', true, 1),
('65d29b56-0440-3207-0000-000000000003', '65d29b56-0440-2207-0000-000000000003', 'VIDEO', 'Innate & Acquired Immunity: Physical/Cellular Barriers, Antibody Structure & Humoral/CMI Immunity', 'https://www.youtube.com/watch?v=uySMYvvV1H4&t=4508s&end=7597s', true, 1),
('65d29b56-0440-3207-0000-000000000004', '65d29b56-0440-2207-0000-000000000004', 'VIDEO', 'Active & Passive Immunity, Vaccination, Allergies, Autoimmunity & Lymphoid Organs', 'https://www.youtube.com/watch?v=uySMYvvV1H4&t=7597s&end=10180s', true, 1),
('65d29b56-0440-3207-0000-000000000005', '65d29b56-0440-2207-0000-000000000005', 'VIDEO', 'AIDS (Acquired Immuno Deficiency Syndrome): HIV Structure, Life Cycle, ELISA Diagnosis & Treatment', 'https://www.youtube.com/watch?v=uySMYvvV1H4&t=10180s&end=11836s', true, 1),
('65d29b56-0440-3207-0000-000000000006', '65d29b56-0440-2207-0000-000000000006', 'VIDEO', 'Cancer Biology (Transformation, Oncogenes, Treatment) & Adolescent Drug and Alcohol Abuse', 'https://www.youtube.com/watch?v=uySMYvvV1H4&t=11836s&end=15406s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
