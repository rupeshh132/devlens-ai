-- V321__seed_class12_cs_ch04_file_handling_in_python_lectures.sql
-- Seeds verified 6 Master Topics and Video Lecture Timestamps for Class 12 Computer Science Chapter 4 (File Handling in Python)
-- Video: Swati Chawla (Rock in Board Series / Boards 2026) (DPNYj_4lZMw)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 2850s, Outro trimmed)

-- 1. Remove old placeholder topics & content items for Chapter 4 (File Handling in Python)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0830-1200-0000-000000000004'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0830-1200-0000-000000000004';

-- 2. Insert 6 Verified Master Topics for Chapter 4
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0830-2204-0000-000000000001', '65d29b56-0830-1200-0000-000000000004', 'Introduction to Data Files, Types of Files (Text, Binary, CSV) & Relative vs Absolute File Paths', 1, true),
('65d29b56-0830-2204-0000-000000000002', '65d29b56-0830-1200-0000-000000000004', 'Text File Operations: Opening Modes (r, w, a, r+, w+, a+), with Statement & Closing Files', 2, true),
('65d29b56-0830-2204-0000-000000000003', '65d29b56-0830-1200-0000-000000000004', 'Reading & Writing in Text Files: read(), readline(), readlines(), write(), writelines(), tell() & seek()', 3, true),
('65d29b56-0830-2204-0000-000000000004', '65d29b56-0830-1200-0000-000000000004', 'Binary Files: The pickle Module, Serialization (dump()) & Deserialization (load())', 4, true),
('65d29b56-0830-2204-0000-000000000005', '65d29b56-0830-1200-0000-000000000004', 'Binary File Search, Record Append, Record Update Operations & Practice Programs', 5, true),
('65d29b56-0830-2204-0000-000000000006', '65d29b56-0830-1200-0000-000000000004', 'CSV Files: The csv Module, csv.reader(), csv.writer(), writerow(), writerows() & Delimiters', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0830-3204-0000-000000000001', '65d29b56-0830-2204-0000-000000000001', 'VIDEO', 'Introduction to Data Files, Types of Files (Text, Binary, CSV) & Relative vs Absolute File Paths', 'https://www.youtube.com/watch?v=DPNYj_4lZMw&end=480s', true, 1),
('65d29b56-0830-3204-0000-000000000002', '65d29b56-0830-2204-0000-000000000002', 'VIDEO', 'Text File Operations: Opening Modes (r, w, a, r+, w+, a+), with Statement & Closing Files', 'https://www.youtube.com/watch?v=DPNYj_4lZMw&t=480s&end=1180s', true, 1),
('65d29b56-0830-3204-0000-000000000003', '65d29b56-0830-2204-0000-000000000003', 'VIDEO', 'Reading & Writing in Text Files: read(), readline(), readlines(), write(), writelines(), tell() & seek()', 'https://www.youtube.com/watch?v=DPNYj_4lZMw&t=1180s&end=1720s', true, 1),
('65d29b56-0830-3204-0000-000000000004', '65d29b56-0830-2204-0000-000000000004', 'VIDEO', 'Binary Files: The pickle Module, Serialization (dump()) & Deserialization (load())', 'https://www.youtube.com/watch?v=DPNYj_4lZMw&t=1720s&end=2280s', true, 1),
('65d29b56-0830-3204-0000-000000000005', '65d29b56-0830-2204-0000-000000000005', 'VIDEO', 'Binary File Search, Record Append, Record Update Operations & Practice Programs', 'https://www.youtube.com/watch?v=DPNYj_4lZMw&t=2280s&end=2620s', true, 1),
('65d29b56-0830-3204-0000-000000000006', '65d29b56-0830-2204-0000-000000000006', 'VIDEO', 'CSV Files: The csv Module, csv.reader(), csv.writer(), writerow(), writerows() & Delimiters', 'https://www.youtube.com/watch?v=DPNYj_4lZMw&t=2620s&end=2850s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
