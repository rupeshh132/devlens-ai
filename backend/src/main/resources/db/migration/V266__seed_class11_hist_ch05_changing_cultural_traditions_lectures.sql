-- V266__seed_class11_hist_ch05_changing_cultural_traditions_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 History Chapter 5: Changing Cultural Traditions
-- Masterclass Video: Next Toppers - 11th Humanities (AJOYLmD_3sA)
-- 100% Zero-Gap Continuous Timeline: 0s to 8830s (02:27:10, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0027-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0027-1100-0000-000000000005';

-- 2. Insert 4 Verified Master Subtopics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0027-2105-0000-000000000001', '65d29b56-0027-1100-0000-000000000005', 'Revival of Italian City-States, Emergence of Humanism & Humanist View of History', 1, true),
('65d29b56-0027-2105-0000-000000000002', '65d29b56-0027-1100-0000-000000000005', 'Arab & West Asian Scientific Legacy, Renaissance Art, Realism & Classical Architecture', 2, true),
('65d29b56-0027-2105-0000-000000000003', '65d29b56-0027-1100-0000-000000000005', 'The Print Revolution, Human Agency, Aspirations of Women & Social Perspectives', 3, true),
('65d29b56-0027-2105-0000-000000000004', '65d29b56-0027-1100-0000-000000000005', 'The Protestant Reformation, Scientific Revolution & Historians Debate on Renaissance', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 45:09 (0s to 2709s)
('65d29b56-0027-3105-0000-000000000001', '65d29b56-0027-2105-0000-000000000001', 'VIDEO', 'Revival of Italian City-States, Emergence of Humanism & Humanist View of History (Florence & Venice Republics, Universities of Padua & Bologna, Petrarch, Civic Humanism & Periodization of History)', 'https://www.youtube.com/watch?v=AJOYLmD_3sA&t=0s&end=2709s', true, 1),

-- Topic 2: 45:09 to 01:11:33 (2709s to 4293s)
('65d29b56-0027-3105-0000-000000000002', '65d29b56-0027-2105-0000-000000000002', 'VIDEO', 'Arab & West Asian Scientific Legacy, Renaissance Art, Realism & Classical Architecture (Ibn Sina Canon of Medicine, Averroes, Human Anatomy Dissection, Leonardo da Vinci, Michelangelo & Brunelleschi)', 'https://www.youtube.com/watch?v=AJOYLmD_3sA&t=2709s&end=4293s', true, 1),

-- Topic 3: 01:11:33 to 01:39:36 (4293s to 5976s)
('65d29b56-0027-3105-0000-000000000003', '65d29b56-0027-2105-0000-000000000003', 'VIDEO', 'The Print Revolution, Human Agency, Aspirations of Women & Social Perspectives (Johannes Gutenberg Movable Type Press, Circulation of Ideas, Cassandra Fedele, Isabella d Este & Gender Inequalities)', 'https://www.youtube.com/watch?v=AJOYLmD_3sA&t=4293s&end=5976s', true, 1),

-- Topic 4: 01:39:36 to 02:27:10 (5976s to 8830s)
('65d29b56-0027-3105-0000-000000000004', '65d29b56-0027-2105-0000-000000000004', 'VIDEO', 'The Protestant Reformation, Scientific Revolution & Historians Debate on Renaissance (Martin Luther 95 Theses, Counter-Reformation, Copernicus Heliocentric Model, Galileo & Peter Burke Critique)', 'https://www.youtube.com/watch?v=AJOYLmD_3sA&t=5976s&end=8830s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
