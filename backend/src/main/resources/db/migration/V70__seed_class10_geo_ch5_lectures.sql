-- V70__seed_class10_geo_ch5_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 10 Geography Chapter 5 / Overall SST Chapter 10 (Minerals and Energy Resources)
-- Video: PW Warrior 2026 (Minerals and Energy Resources One Shot: FULL CHAPTER | Class 10 Geography Chapter 5 | rRHekx6Npo4)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 4036s / 01h 07m 16s)

-- 1. Remove old placeholder topics & content items for Geography Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-3333-1000-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-3333-1000-0000-000000000010';

-- 2. Insert 5 NCERT-Aligned Master Topics for Geography Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-3333-2010-0000-000000000001', '65d29b56-3333-1000-0000-000000000010', 'What is a Mineral, Mode of Occurrence & Mining Laws (Rat-Hole Mining)', 1, true),
('65d29b56-3333-2010-0000-000000000002', '65d29b56-3333-1000-0000-000000000010', 'Classification of Minerals & Ferrous Minerals (Iron Ore Belts & Manganese)', 2, true),
('65d29b56-3333-2010-0000-000000000003', '65d29b56-3333-1000-0000-000000000010', 'Non-Ferrous & Non-Metallic Minerals, Mining Hazards & Conservation of Minerals', 3, true),
('65d29b56-3333-2010-0000-000000000004', '65d29b56-3333-1000-0000-000000000010', 'Energy Resources: Conventional Sources (Coal, Petroleum & Natural Gas)', 4, true),
('65d29b56-3333-2010-0000-000000000005', '65d29b56-3333-1000-0000-000000000010', 'Non-Conventional Energy Sources, Conservation of Energy & Map Work Review', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps (0s to 4036s)
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-3333-3010-0000-000000000001', '65d29b56-3333-2010-0000-000000000001', 'VIDEO', 'What is a Mineral, Mode of Occurrence & Mining Laws (Rat-Hole Mining)', 'https://www.youtube.com/watch?v=rRHekx6Npo4&end=1597s', true, 1),
('65d29b56-3333-3010-0000-000000000002', '65d29b56-3333-2010-0000-000000000002', 'VIDEO', 'Classification of Minerals & Ferrous Minerals (Iron Ore Belts & Manganese)', 'https://www.youtube.com/watch?v=rRHekx6Npo4&t=1597s&end=2437s', true, 1),
('65d29b56-3333-3010-0000-000000000003', '65d29b56-3333-2010-0000-000000000003', 'VIDEO', 'Non-Ferrous & Non-Metallic Minerals, Mining Hazards & Conservation of Minerals', 'https://www.youtube.com/watch?v=rRHekx6Npo4&t=2437s&end=3012s', true, 1),
('65d29b56-3333-3010-0000-000000000004', '65d29b56-3333-2010-0000-000000000004', 'VIDEO', 'Energy Resources: Conventional Sources (Coal, Petroleum & Natural Gas)', 'https://www.youtube.com/watch?v=rRHekx6Npo4&t=3012s&end=3488s', true, 1),
('65d29b56-3333-3010-0000-000000000005', '65d29b56-3333-2010-0000-000000000005', 'VIDEO', 'Non-Conventional Energy Sources, Conservation of Energy & Map Work Review', 'https://www.youtube.com/watch?v=rRHekx6Npo4&t=3488s&end=4036s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
