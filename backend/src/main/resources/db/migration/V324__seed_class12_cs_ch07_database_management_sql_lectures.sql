-- V324__seed_class12_cs_ch07_database_management_sql_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Computer Science Chapter 7 (Database Management & SQL)
-- Video: Swati Chawla (Rock in Board Series / Boards 2026) (VLpiaMSJycs)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 5460s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 7 (Database Management & SQL)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0830-1200-0000-000000000007'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0830-1200-0000-000000000007';

-- 2. Insert 6 Verified Master Topics for Chapter 7
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0830-2207-0000-000000000001', '65d29b56-0830-1200-0000-000000000007', 'Database Concepts, Need for DBMS & Relational Data Model (Relation, Attribute, Tuple, Domain, Degree, Cardinality)', 1, true),
('65d29b56-0830-2207-0000-000000000002', '65d29b56-0830-1200-0000-000000000007', 'Relational Keys (Candidate, Primary, Alternate, Foreign Keys) & Data Types (CHAR, VARCHAR, INT, FLOAT, DATE)', 2, true),
('65d29b56-0830-2207-0000-000000000003', '65d29b56-0830-1200-0000-000000000007', 'SQL Data Definition Language (DDL): Constraints, CREATE DATABASE, USE, CREATE TABLE, ALTER TABLE, DROP TABLE', 3, true),
('65d29b56-0830-2207-0000-000000000004', '65d29b56-0830-1200-0000-000000000007', 'SQL Data Manipulation Language (DML): INSERT INTO, SELECT Queries, WHERE Filtering, Relational & Logical Operators', 4, true),
('65d29b56-0830-2207-0000-000000000005', '65d29b56-0830-1200-0000-000000000007', 'Pattern Matching (LIKE), Range (BETWEEN), Membership (IN), IS NULL, ORDER BY Sorting & Table Updates (UPDATE, DELETE)', 5, true),
('65d29b56-0830-2207-0000-000000000006', '65d29b56-0830-1200-0000-000000000007', 'SQL Aggregate Functions (MAX, MIN, AVG, SUM, COUNT), GROUP BY, HAVING Clause & Multi-Table Joins (Equi-Join)', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0830-3207-0000-000000000001', '65d29b56-0830-2207-0000-000000000001', 'VIDEO', 'Database Concepts, Need for DBMS & Relational Data Model (Relation, Attribute, Tuple, Domain, Degree, Cardinality)', 'https://www.youtube.com/watch?v=VLpiaMSJycs&end=820s', true, 1),
('65d29b56-0830-3207-0000-000000000002', '65d29b56-0830-2207-0000-000000000002', 'VIDEO', 'Relational Keys (Candidate, Primary, Alternate, Foreign Keys) & Data Types (CHAR, VARCHAR, INT, FLOAT, DATE)', 'https://www.youtube.com/watch?v=VLpiaMSJycs&t=820s&end=1620s', true, 1),
('65d29b56-0830-3207-0000-000000000003', '65d29b56-0830-2207-0000-000000000003', 'VIDEO', 'SQL Data Definition Language (DDL): Constraints, CREATE DATABASE, USE, CREATE TABLE, ALTER TABLE, DROP TABLE', 'https://www.youtube.com/watch?v=VLpiaMSJycs&t=1620s&end=2680s', true, 1),
('65d29b56-0830-3207-0000-000000000004', '65d29b56-0830-2207-0000-000000000004', 'VIDEO', 'SQL Data Manipulation Language (DML): INSERT INTO, SELECT Queries, WHERE Filtering, Relational & Logical Operators', 'https://www.youtube.com/watch?v=VLpiaMSJycs&t=2680s&end=3720s', true, 1),
('65d29b56-0830-3207-0000-000000000005', '65d29b56-0830-2207-0000-000000000005', 'VIDEO', 'Pattern Matching (LIKE), Range (BETWEEN), Membership (IN), IS NULL, ORDER BY Sorting & Table Updates (UPDATE, DELETE)', 'https://www.youtube.com/watch?v=VLpiaMSJycs&t=3720s&end=4680s', true, 1),
('65d29b56-0830-3207-0000-000000000006', '65d29b56-0830-2207-0000-000000000006', 'VIDEO', 'SQL Aggregate Functions (MAX, MIN, AVG, SUM, COUNT), GROUP BY, HAVING Clause & Multi-Table Joins (Equi-Join)', 'https://www.youtube.com/watch?v=VLpiaMSJycs&t=4680s&end=5460s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
