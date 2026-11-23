-- V294__seed_class12_bio_ch02_human_reproduction_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 2 (Human Reproduction)
-- Video: NCERT Wallah / Physics Wallah (VIJETA 2026 Series) (Human Reproduction | zZ05EByJ9ts)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 12929s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 2 (Human Reproduction)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000002'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000002';

-- 2. Insert 6 Verified Master Topics for Chapter 2
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2202-0000-000000000001', '65d29b56-0440-1200-0000-000000000002', 'Male Reproductive System: Testes, Seminiferous Tubules & Accessory Ducts/Glands', 1, true),
('65d29b56-0440-2202-0000-000000000002', '65d29b56-0440-1200-0000-000000000002', 'Female Reproductive System: Ovaries, Fallopian Tubes, Uterus & Mammary Glands', 2, true),
('65d29b56-0440-2202-0000-000000000003', '65d29b56-0440-1200-0000-000000000002', 'Spermatogenesis, Hormonal Regulation in Males & Human Sperm Morphology', 3, true),
('65d29b56-0440-2202-0000-000000000004', '65d29b56-0440-1200-0000-000000000002', 'Oogenesis, Folliculogenesis & The Human Menstrual Cycle', 4, true),
('65d29b56-0440-2202-0000-000000000005', '65d29b56-0440-1200-0000-000000000002', 'Fertilization, Cortical Reaction, Cleavage & Blastocyst Implantation', 5, true),
('65d29b56-0440-2202-0000-000000000006', '65d29b56-0440-1200-0000-000000000002', 'Pregnancy, Placenta Hormones, Parturition, Lactation & Board Practice Questions', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3202-0000-000000000001', '65d29b56-0440-2202-0000-000000000001', 'VIDEO', 'Male Reproductive System: Testes, Seminiferous Tubules & Accessory Ducts/Glands', 'https://www.youtube.com/watch?v=zZ05EByJ9ts&end=3060s', true, 1),
('65d29b56-0440-3202-0000-000000000002', '65d29b56-0440-2202-0000-000000000002', 'VIDEO', 'Female Reproductive System: Ovaries, Fallopian Tubes, Uterus & Mammary Glands', 'https://www.youtube.com/watch?v=zZ05EByJ9ts&t=3060s&end=5727s', true, 1),
('65d29b56-0440-3202-0000-000000000003', '65d29b56-0440-2202-0000-000000000003', 'VIDEO', 'Spermatogenesis, Hormonal Regulation in Males & Human Sperm Morphology', 'https://www.youtube.com/watch?v=zZ05EByJ9ts&t=5727s&end=7120s', true, 1),
('65d29b56-0440-3202-0000-000000000004', '65d29b56-0440-2202-0000-000000000004', 'VIDEO', 'Oogenesis, Folliculogenesis & The Human Menstrual Cycle', 'https://www.youtube.com/watch?v=zZ05EByJ9ts&t=7120s&end=9858s', true, 1),
('65d29b56-0440-3202-0000-000000000005', '65d29b56-0440-2202-0000-000000000005', 'VIDEO', 'Fertilization, Cortical Reaction, Cleavage & Blastocyst Implantation', 'https://www.youtube.com/watch?v=zZ05EByJ9ts&t=9858s&end=11240s', true, 1),
('65d29b56-0440-3202-0000-000000000006', '65d29b56-0440-2202-0000-000000000006', 'VIDEO', 'Pregnancy, Placenta Hormones, Parturition, Lactation & Board Practice Questions', 'https://www.youtube.com/watch?v=zZ05EByJ9ts&t=11240s&end=12929s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
