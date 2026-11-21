-- V281__seed_class11_pol_ch10_philosophy_of_constitution_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 10: The Philosophy of the Constitution
-- Masterclass Video: Humanities Wallah (FEnd9uIMBbU)
-- 100% Zero-Gap Continuous Timeline: 0s to 2530s (42m 10s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 10
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000010'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000010';

-- 2. Insert 4 Verified Master Subtopics for Chapter 10
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2110-0000-000000000001', '65d29b56-0028-1100-0000-000000000010', 'What is the Philosophy of the Constitution? Democratic Transformation & Moral Vision', 1, true),
('65d29b56-0028-2110-0000-000000000002', '65d29b56-0028-1100-0000-000000000010', 'Political Philosophy of the Indian Constitution: Individual Freedom, Social Justice & Diversity', 2, true),
('65d29b56-0028-2110-0000-000000000003', '65d29b56-0028-1100-0000-000000000010', 'Secularism, Universal Franchise & Federalism as Pillars of Indian National Identity', 3, true),
('65d29b56-0028-2110-0000-000000000004', '65d29b56-0028-1100-0000-000000000010', 'Procedural Achievements, Critical Appraisals of the Constitution & Enduring Living Legacy', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 10:15 (0s to 615s)
('65d29b56-0028-3110-0000-000000000001', '65d29b56-0028-2110-0000-000000000001', 'VIDEO', 'What is the Philosophy of the Constitution? Democratic Transformation & Moral Vision (Concept of Political Philosophy, Normative Assessment of Institutions, Constitution as Means of Democratic Transformation, Breaking Traditional Hierarchies & Preamble Vision)', 'https://www.youtube.com/watch?v=FEnd9uIMBbU&t=0s&end=615s', true, 1),

-- Topic 2: 10:15 to 21:30 (615s to 1290s)
('65d29b56-0028-3110-0000-000000000002', '65d29b56-0028-2110-0000-000000000002', 'VIDEO', 'Political Philosophy of the Indian Constitution: Individual Freedom, Social Justice & Diversity (Commitment to Individual Liberty, Right to Freedom of Speech, Social Justice through Affirmative Action, Dr Ambedkar Perspective, Respect for Cultural & Religious Diversity)', 'https://www.youtube.com/watch?v=FEnd9uIMBbU&t=615s&end=1290s', true, 1),

-- Topic 3: 21:30 to 32:45 (1290s to 1965s)
('65d29b56-0028-3110-0000-000000000003', '65d29b56-0028-2110-0000-000000000003', 'VIDEO', 'Secularism, Universal Franchise & Federalism as Pillars of Indian National Identity (Principled Distance in Indian Secularism, Radical Experiment of Universal Adult Franchise at Inception, Asymmetrical Federalism, Common National Identity without Cultural Homogeneity)', 'https://www.youtube.com/watch?v=FEnd9uIMBbU&t=1290s&end=1965s', true, 1),

-- Topic 4: 32:45 to 42:10 (1965s to 2530s)
('65d29b56-0028-3110-0000-000000000004', '65d29b56-0028-2110-0000-000000000004', 'VIDEO', 'Procedural Achievements, Critical Appraisals of the Constitution & Enduring Living Legacy (Commitment to Open Deliberation & Compromise, Three Major Criticisms: Unwieldy Bulk, Unrepresentative Assembly & Western Borrowing, Constitutional Morality & Living Significance)', 'https://www.youtube.com/watch?v=FEnd9uIMBbU&t=1965s&end=2530s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
