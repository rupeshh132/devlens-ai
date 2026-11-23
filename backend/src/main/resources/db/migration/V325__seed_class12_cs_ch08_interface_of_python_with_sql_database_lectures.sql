-- V325__seed_class12_cs_ch08_interface_of_python_with_sql_database_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Computer Science Chapter 8 (Interface of Python with SQL Database)
-- Video: Swati Chawla (Rock in Board Series / Boards 2026) (MnVsxQd2bKg)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 3060s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 8 (Interface of Python with SQL Database)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0830-1200-0000-000000000008'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0830-1200-0000-000000000008';

-- 2. Insert 6 Verified Master Topics for Chapter 8
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0830-2208-0000-000000000001', '65d29b56-0830-1200-0000-000000000008', 'Introduction to Python-SQL Connectivity, Installing mysql-connector-python & Architecture of DB API', 1, true),
('65d29b56-0830-2208-0000-000000000002', '65d29b56-0830-1200-0000-000000000008', 'Establishing Database Connection: mysql.connector.connect(), Connection Parameters & is_connected()', 2, true),
('65d29b56-0830-2208-0000-000000000003', '65d29b56-0830-1200-0000-000000000008', 'Creating Cursor Object (cursor()), Executing Queries (execute()) & Fetching Records with fetchone() and fetchall()', 3, true),
('65d29b56-0830-2208-0000-000000000004', '65d29b56-0830-1200-0000-000000000008', 'Cursor Metadata (rowcount), Formatting Display of Retrieved Records & Iterating Over Result Sets', 4, true),
('65d29b56-0830-2208-0000-000000000005', '65d29b56-0830-1200-0000-000000000008', 'Executing DML Queries (INSERT, UPDATE, DELETE) from Python, Using %s Format Specifiers & Transaction Management (commit())', 5, true),
('65d29b56-0830-2208-0000-000000000006', '65d29b56-0830-1200-0000-000000000008', 'Complete Python-MySQL Practical Application, Handling Database Errors & Board Exam Practical Coding Problems', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0830-3208-0000-000000000001', '65d29b56-0830-2208-0000-000000000001', 'VIDEO', 'Introduction to Python-SQL Connectivity, Installing mysql-connector-python & Architecture of DB API', 'https://www.youtube.com/watch?v=MnVsxQd2bKg&end=580s', true, 1),
('65d29b56-0830-3208-0000-000000000002', '65d29b56-0830-2208-0000-000000000002', 'VIDEO', 'Establishing Database Connection: mysql.connector.connect(), Connection Parameters & is_connected()', 'https://www.youtube.com/watch?v=MnVsxQd2bKg&t=580s&end=1120s', true, 1),
('65d29b56-0830-3208-0000-000000000003', '65d29b56-0830-2208-0000-000000000003', 'VIDEO', 'Creating Cursor Object (cursor()), Executing Queries (execute()) & Fetching Records with fetchone() and fetchall()', 'https://www.youtube.com/watch?v=MnVsxQd2bKg&t=1120s&end=1760s', true, 1),
('65d29b56-0830-3208-0000-000000000004', '65d29b56-0830-2208-0000-000000000004', 'VIDEO', 'Cursor Metadata (rowcount), Formatting Display of Retrieved Records & Iterating Over Result Sets', 'https://www.youtube.com/watch?v=MnVsxQd2bKg&t=1760s&end=2280s', true, 1),
('65d29b56-0830-3208-0000-000000000005', '65d29b56-0830-2208-0000-000000000005', 'VIDEO', 'Executing DML Queries (INSERT, UPDATE, DELETE) from Python, Using %s Format Specifiers & Transaction Management (commit())', 'https://www.youtube.com/watch?v=MnVsxQd2bKg&t=2280s&end=2740s', true, 1),
('65d29b56-0830-3208-0000-000000000006', '65d29b56-0830-2208-0000-000000000006', 'VIDEO', 'Complete Python-MySQL Practical Application, Handling Database Errors & Board Exam Practical Coding Problems', 'https://www.youtube.com/watch?v=MnVsxQd2bKg&t=2740s&end=3060s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
