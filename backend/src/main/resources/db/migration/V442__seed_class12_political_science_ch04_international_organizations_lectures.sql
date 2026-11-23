-- V442__seed_class12_political_science_ch04_international_organizations_lectures.sql
-- Seeds verified 4 Master Topics and Video Lecture Timestamps for Class 12 Political Science Chapter 4 (International Organizations)
-- Video: Simran Sahni (Class 12 Political Science Masterclass) (gxJaFptWXuQ)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2875s)

-- 1. Remove old placeholder topics & content items for Chapter 4 (International Organizations)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1200-0000-000000000004';

-- 2. Insert 4 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2204-0000-000000000001', '65d29b56-0028-1200-0000-000000000004', 'Need and Evolution of International Organizations & The Foundation of the United Nations (UN)', 1, true),
('65d29b56-0028-2204-0000-000000000002', '65d29b56-0028-1200-0000-000000000004', 'Principal Organs of the UN: General Assembly, Security Council, ICJ, ECOSOC & Secretariat Functions', 2, true),
('65d29b56-0028-2204-0000-000000000003', '65d29b56-0028-1200-0000-000000000004', 'Post-Cold War UN Reforms: Restructuring of the Security Council, Veto Power Debate & India''s Candidature', 3, true),
('65d29b56-0028-2204-0000-000000000004', '65d29b56-0028-1200-0000-000000000004', 'Specialized Agencies (IMF, World Bank, WTO, ILO, IAEA) & Global NGOs (Amnesty, Human Rights Watch)', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0028-3204-0000-000000000001', '65d29b56-0028-2204-0000-000000000001', 'VIDEO', 'Need and Evolution of International Organizations & The Foundation of the United Nations (UN)', 'https://www.youtube.com/watch?v=gxJaFptWXuQ&end=710s', true, 1),
('65d29b56-0028-3204-0000-000000000002', '65d29b56-0028-2204-0000-000000000002', 'VIDEO', 'Principal Organs of the UN: General Assembly, Security Council, ICJ, ECOSOC & Secretariat Functions', 'https://www.youtube.com/watch?v=gxJaFptWXuQ&t=710s&end=1430s', true, 1),
('65d29b56-0028-3204-0000-000000000003', '65d29b56-0028-2204-0000-000000000003', 'VIDEO', 'Post-Cold War UN Reforms: Restructuring of the Security Council, Veto Power Debate & India''s Candidature', 'https://www.youtube.com/watch?v=gxJaFptWXuQ&t=1430s&end=2150s', true, 1),
('65d29b56-0028-3204-0000-000000000004', '65d29b56-0028-2204-0000-000000000004', 'VIDEO', 'Specialized Agencies (IMF, World Bank, WTO, ILO, IAEA) & Global NGOs (Amnesty, Human Rights Watch)', 'https://www.youtube.com/watch?v=gxJaFptWXuQ&t=2150s&end=2875s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
