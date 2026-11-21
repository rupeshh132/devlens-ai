-- V280__seed_class11_pol_ch09_constitution_as_living_document_lectures.sql
-- Seeds verified 4 Continuous Master Subtopics for Class 11 Political Science Chapter 9: Constitution as a Living Document
-- Masterclass Video: Humanities Wallah (mftan7zZXbU)
-- 100% Zero-Gap Continuous Timeline: 0s to 2120s (35m 20s, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 9
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0028-1100-0000-000000000009'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0028-1100-0000-000000000009';

-- 2. Insert 4 Verified Master Subtopics for Chapter 9
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0028-2109-0000-000000000001', '65d29b56-0028-1100-0000-000000000009', 'Are Constitutions Static? Concept of Constitution as an Evolving Living Document', 1, true),
('65d29b56-0028-2109-0000-000000000002', '65d29b56-0028-1100-0000-000000000009', 'How to Amend the Constitution: Article 368 & Three Modes of Constitutional Amendments', 2, true),
('65d29b56-0028-2109-0000-000000000003', '65d29b56-0028-1100-0000-000000000009', 'Why Have There Been So Many Amendments? Administrative Clarifications & Political Consensus', 3, true),
('65d29b56-0028-2109-0000-000000000004', '65d29b56-0028-1100-0000-000000000009', 'Basic Structure Doctrine (Kesavananda Bharati), Judicial Review & Enduring Constitutional Vitality', 4, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 08:30 (0s to 510s)
('65d29b56-0028-3109-0000-000000000001', '65d29b56-0028-2109-0000-000000000001', 'VIDEO', 'Are Constitutions Static? Concept of Constitution as an Evolving Living Document (Permanence vs Flexibility, Why Constitutions Must Adapt to Generational Changes, Robustness of the Indian Constitution & Balancing Core Values with Changing Circumstances)', 'https://www.youtube.com/watch?v=mftan7zZXbU&t=0s&end=510s', true, 1),

-- Topic 2: 08:30 to 17:15 (510s to 1035s)
('65d29b56-0028-3109-0000-000000000002', '65d29b56-0028-2109-0000-000000000002', 'VIDEO', 'How to Amend the Constitution: Article 368 & Three Modes of Constitutional Amendments (Simple Majority of Parliament, Special Majority of Parliament under Article 368, Special Majority plus 50% State Legislature Ratification & Rigid vs Flexible Synthesis)', 'https://www.youtube.com/watch?v=mftan7zZXbU&t=510s&end=1035s', true, 1),

-- Topic 3: 17:15 to 25:40 (1035s to 1540s)
('65d29b56-0028-3109-0000-000000000003', '65d29b56-0028-2109-0000-000000000003', 'VIDEO', 'Why Have There Been So Many Amendments? Administrative Clarifications & Political Consensus (Classification of Over 100 Amendments: Technical/Administrative, Differing Interpretations Judiciary vs Executive, Amendments through Political Consensus & 42nd Amendment Crisis)', 'https://www.youtube.com/watch?v=mftan7zZXbU&t=1035s&end=1540s', true, 1),

-- Topic 4: 25:40 to 35:20 (1540s to 2120s)
('65d29b56-0028-3109-0000-000000000004', '65d29b56-0028-2109-0000-000000000004', 'VIDEO', 'Basic Structure Doctrine (Kesavananda Bharati), Judicial Review & Enduring Constitutional Vitality (1973 Kesavananda Bharati Landmark Verdict, Inviolable Core: Rule of Law, Judicial Review, Secularism, Federalism, Dynamic Evolution through Judicial Interpretation)', 'https://www.youtube.com/watch?v=mftan7zZXbU&t=1540s&end=2120s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
