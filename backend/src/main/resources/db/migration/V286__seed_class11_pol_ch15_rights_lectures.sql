-- V286__seed_class11_pol_ch15_rights_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 15: Rights
-- Masterclass Video: Next Toppers - 11th Humanities (P_FzVjyRpA8)
-- 100% Zero-Gap Continuous Timeline: 0s to 3210s (53:30, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 15
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000015'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000015';

-- 2. Insert 4 Verified Master Subtopics for Chapter 15
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2115-0000-000000000001', '65d29b56-0028-1100-0000-000000000015', 'What Are Rights? Justified Claims, Human Dignity & Conditions for Self-Realization', 1, true),
('65d29b56-0028-2115-0000-000000000002', '65d29b56-0028-1100-0000-000000000015', 'Where Do Rights Come From? Evolution from Natural Rights to Universal Human Rights', 2, true),
('65d29b56-0028-2115-0000-000000000003', '65d29b56-0028-1100-0000-000000000015', 'Legal Rights and the State: Classification of Rights (Political, Civil, Socio-Economic)', 3, true),
('65d29b56-0028-2115-0000-000000000004', '65d29b56-0028-1100-0000-000000000015', 'Rights and Responsibilities: Moral Duties of Citizens, Common Good & Sustainable Living', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 14:34 (0s to 874s)
('65d29b56-0028-3115-0000-000000000001', '65d29b56-0028-2115-0000-000000000001', 'VIDEO', 'What Are Rights? Justified Claims, Human Dignity & Conditions for Self-Realization (Definition of Rights, Claims vs Rights, Recognition by Society, Inviolable Dignity of Human Beings, Immanuel Kant on Treating Humans as Ends in Themselves)', 'https://www.youtube.com/watch?v=P_FzVjyRpA8&t=0s&end=874s', true, 1),

-- Topic 2: 14:34 to 31:33 (874s to 1893s)
('65d29b56-0028-3115-0000-000000000002', '65d29b56-0028-2115-0000-000000000002', 'VIDEO', 'Where Do Rights Come From? Evolution from Natural Rights to Universal Human Rights (17th-18th Century Natural Law: Locke Right to Life, Liberty & Property, God-Given Rights, Shift to Inherent Human Rights & UN Universal Declaration of Human Rights 1948)', 'https://www.youtube.com/watch?v=P_FzVjyRpA8&t=874s&end=1893s', true, 1),

-- Topic 3: 31:33 to 47:02 (1893s to 2822s)
('65d29b56-0028-3115-0000-000000000003', '65d29b56-0028-2115-0000-000000000003', 'VIDEO', 'Legal Rights and the State: Classification of Rights (Constitutional Recognition, Enforceability via Judiciary, Political Rights: Vote, Contest & Form Associations, Civil Rights: Free Speech & Fair Trial, Socio-Economic Rights: Adequate Wage & Health)', 'https://www.youtube.com/watch?v=P_FzVjyRpA8&t=1893s&end=2822s', true, 1),

-- Topic 4: 47:02 to 53:30 (2822s to 3210s)
('65d29b56-0028-3115-0000-000000000004', '65d29b56-0028-2115-0000-000000000004', 'VIDEO', 'Rights and Responsibilities: Moral Duties of Citizens, Common Good & Sustainable Living (Correlation between Rights and Duties, Respecting Rights of Others, Balancing Individual Rights with Public Interest, Ecological Responsibilities & Protecting the Global Commons)', 'https://www.youtube.com/watch?v=P_FzVjyRpA8&t=2822s&end=3210s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
