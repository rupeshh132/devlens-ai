-- V84__seed_class10_english_unit1_lectures.sql
-- Seeds verified Master Topics and Video Lecture Timestamps for:
-- 1. First Flight Prose Ch 1: A Letter to God (4274s)
-- 2. First Flight Poem 1: Dust of Snow (1427s)
-- 3. First Flight Poem 2: Fire and Ice (2357s)
-- Video: Chandni Ma'am / Magnet Brains (JhqV9jIVVYg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 8058s / 02h 14m 18s)

-- =========================================================================
-- 1. CHAPTER 1: A LETTER TO GOD (0s to 4274s)
-- =========================================================================
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000001';

INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2001-0000-000000000001', '65d29b56-4444-1000-0000-000000000001', 'Introduction & Course Overview: Setting the Scene in the Valley and Lencho''s Field of Ripe Corn', 1, true),
('65d29b56-4444-2001-0000-000000000002', '65d29b56-4444-1000-0000-000000000002', 'The Gathering Storm, Destructive Hailstorm & Lencho''s Unshakable Faith in God', 2, true),
('65d29b56-4444-2001-0000-000000000003', '65d29b56-4444-1000-0000-000000000003', 'The Postmaster''s Act of Benevolence, The 70 Pesos Collection & The ''Bunch of Crooks'' Irony', 3, true),
('65d29b56-4444-2001-0000-000000000004', '65d29b56-4444-1000-0000-000000000004', 'Comprehensive Chapter Summary, Character Analysis (Lencho vs Postmaster) & Core Themes', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3001-0000-000000000001', '65d29b56-4444-2001-0000-000000000001', 'VIDEO', 'Introduction & Course Overview: Setting the Scene in the Valley and Lencho''s Field of Ripe Corn', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&end=295s', true, 1),
('65d29b56-4444-3001-0000-000000000002', '65d29b56-4444-2001-0000-000000000002', 'VIDEO', 'The Gathering Storm, Destructive Hailstorm & Lencho''s Unshakable Faith in God', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&t=295s&end=2348s', true, 1),
('65d29b56-4444-3001-0000-000000000003', '65d29b56-4444-2001-0000-000000000003', 'VIDEO', 'The Postmaster''s Act of Benevolence, The 70 Pesos Collection & The ''Bunch of Crooks'' Irony', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&t=2348s&end=3580s', true, 1),
('65d29b56-4444-3001-0000-000000000004', '65d29b56-4444-2001-0000-000000000004', 'VIDEO', 'Comprehensive Chapter Summary, Character Analysis (Lencho vs Postmaster) & Core Themes', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&t=3580s&end=4274s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;

-- =========================================================================
-- 2. CHAPTER 10: FIRST FLIGHT POEM 1 - DUST OF SNOW (4274s to 5701s)
-- =========================================================================
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000010';

INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2010-0000-000000000001', '65d29b56-4444-1000-0000-000000000010', 'Stanza-by-Stanza Poem Explanation: The Crow, Hemlock Tree & The Transformative Falling Snow', 1, true),
('65d29b56-4444-2010-0000-000000000002', '65d29b56-4444-1000-0000-000000000010', 'Poem Summary, Poetic Devices (Alliteration, Enjambment, Inversion) & Symbolic Reversal of Mood', 2, true),
('65d29b56-4444-2010-0000-000000000003', '65d29b56-4444-1000-0000-000000000010', 'NCERT Textbook Solutions, Reference to Context (RTC) & CBSE Board Practice Questions', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3010-0000-000000000001', '65d29b56-4444-2010-0000-000000000001', 'VIDEO', 'Stanza-by-Stanza Poem Explanation: The Crow, Hemlock Tree & The Transformative Falling Snow', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&t=4274s&end=4782s', true, 1),
('65d29b56-4444-3010-0000-000000000002', '65d29b56-4444-2010-0000-000000000002', 'VIDEO', 'Poem Summary, Poetic Devices (Alliteration, Enjambment, Inversion) & Symbolic Reversal of Mood', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&t=4782s&end=5047s', true, 1),
('65d29b56-4444-3010-0000-000000000003', '65d29b56-4444-2010-0000-000000000003', 'VIDEO', 'NCERT Textbook Solutions, Reference to Context (RTC) & CBSE Board Practice Questions', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&t=5047s&end=5701s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;

-- =========================================================================
-- 3. CHAPTER 11: FIRST FLIGHT POEM 2 - FIRE AND ICE (5701s to 8058s)
-- =========================================================================
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-4444-1000-0000-000000000011'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-4444-1000-0000-000000000011';

INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-4444-2011-0000-000000000001', '65d29b56-4444-1000-0000-000000000011', 'Stanza-by-Stanza Poem Explanation: Fire as Desire and Ice as Hatred (Dual Cataclysmic Forces)', 1, true),
('65d29b56-4444-2011-0000-000000000002', '65d29b56-4444-1000-0000-000000000011', 'Poem Summary, Deep Metaphorical Themes, Paradox & Rhyme Scheme (ABA ABC BCB)', 2, true),
('65d29b56-4444-2011-0000-000000000003', '65d29b56-4444-1000-0000-000000000011', 'NCERT Questions 1 to 8 Discussion, Board Analysis & Comprehensive Chapter Wrap-Up', 3, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-4444-3011-0000-000000000001', '65d29b56-4444-2011-0000-000000000001', 'VIDEO', 'Stanza-by-Stanza Poem Explanation: Fire as Desire and Ice as Hatred (Dual Cataclysmic Forces)', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&t=5701s&end=6385s', true, 1),
('65d29b56-4444-3011-0000-000000000002', '65d29b56-4444-2011-0000-000000000002', 'VIDEO', 'Poem Summary, Deep Metaphorical Themes, Paradox & Rhyme Scheme (ABA ABC BCB)', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&t=6385s&end=6796s', true, 1),
('65d29b56-4444-3011-0000-000000000003', '65d29b56-4444-2011-0000-000000000003', 'VIDEO', 'NCERT Questions 1 to 8 Discussion, Board Analysis & Comprehensive Chapter Wrap-Up', 'https://www.youtube.com/watch?v=JhqV9jIVVYg&t=6796s&end=8058s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
