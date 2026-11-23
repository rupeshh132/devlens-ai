-- V295__seed_class12_bio_ch03_reproductive_health_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 12 Biology Chapter 3 (Reproductive Health)
-- Video: NCERT Wallah / Aarushi Ma'am (Class 12 Boards / NCERT Line by Line) (Reproductive Health | 8II-KV79dQA)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6449s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 3 (Reproductive Health)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1200-0000-000000000003'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1200-0000-000000000003';

-- 2. Insert 5 Verified Master Topics for Chapter 3
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2203-0000-000000000001', '65d29b56-0440-1200-0000-000000000003', 'Reproductive Health: Definition, Problems, Action Plans & Amniocentesis', 1, true),
('65d29b56-0440-2203-0000-000000000002', '65d29b56-0440-1200-0000-000000000003', 'Contraceptive Methods: Natural, Barrier, IUDs, Oral Pills, Implants & Surgical Sterilization', 2, true),
('65d29b56-0440-2203-0000-000000000003', '65d29b56-0440-1200-0000-000000000003', 'Medical Termination of Pregnancy (MTP): Legal Provisions & Healthcare Guidelines', 3, true),
('65d29b56-0440-2203-0000-000000000004', '65d29b56-0440-1200-0000-000000000003', 'Sexually Transmitted Infections (STIs / STDs): Symptoms, Transmission & Prevention', 4, true),
('65d29b56-0440-2203-0000-000000000005', '65d29b56-0440-1200-0000-000000000003', 'Infertility & Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT, ICSI, AI) & Adoption', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3203-0000-000000000001', '65d29b56-0440-2203-0000-000000000001', 'VIDEO', 'Reproductive Health: Definition, Problems, Action Plans & Amniocentesis', 'https://www.youtube.com/watch?v=8II-KV79dQA&end=2280s', true, 1),
('65d29b56-0440-3203-0000-000000000002', '65d29b56-0440-2203-0000-000000000002', 'VIDEO', 'Contraceptive Methods: Natural, Barrier, IUDs, Oral Pills, Implants & Surgical Sterilization', 'https://www.youtube.com/watch?v=8II-KV79dQA&t=2280s&end=4643s', true, 1),
('65d29b56-0440-3203-0000-000000000003', '65d29b56-0440-2203-0000-000000000003', 'VIDEO', 'Medical Termination of Pregnancy (MTP): Legal Provisions & Healthcare Guidelines', 'https://www.youtube.com/watch?v=8II-KV79dQA&t=4643s&end=5080s', true, 1),
('65d29b56-0440-3203-0000-000000000004', '65d29b56-0440-2203-0000-000000000004', 'VIDEO', 'Sexually Transmitted Infections (STIs / STDs): Symptoms, Transmission & Prevention', 'https://www.youtube.com/watch?v=8II-KV79dQA&t=5080s&end=5666s', true, 1),
('65d29b56-0440-3203-0000-000000000005', '65d29b56-0440-2203-0000-000000000005', 'VIDEO', 'Infertility & Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT, ICSI, AI) & Adoption', 'https://www.youtube.com/watch?v=8II-KV79dQA&t=5666s&end=6449s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
