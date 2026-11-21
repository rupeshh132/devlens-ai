-- V213__seed_class11_cs_ch01_computer_system_overview_lectures.sql
-- Seeds verified 5 Continuous Master Subtopics for Class 11 Computer Science Chapter 1: Computer System Overview & Organisation
-- Masterclass Video: ScoreShala (1MukSdlsG9Y)
-- 100% Zero-Gap Continuous Timeline: 0s to 8028s (02:13:48, Outro promotional card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 1
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000001'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000001';

-- 2. Insert 5 Verified Master Subtopics for Chapter 1
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2101-0000-000000000001', '65d29b56-0083-1100-0000-000000000001', 'Computer System Overview & Hardware Organisation', 1, true),
('65d29b56-0083-2101-0000-000000000002', '65d29b56-0083-1100-0000-000000000002', 'Input & Output Devices, CPU Architecture & Execution Cycle', 2, true),
('65d29b56-0083-2101-0000-000000000003', '65d29b56-0083-1100-0000-000000000003', 'Memory Organisation, Units of Memory (bit to PB) & Cache Memory', 3, true),
('65d29b56-0083-2101-0000-000000000004', '65d29b56-0083-1100-0000-000000000004', 'Primary Memory (RAM, ROM) & Secondary Storage Devices', 4, true),
('65d29b56-0083-2101-0000-000000000005', '65d29b56-0083-1100-0000-000000000005', 'Types of Software, OS Functions, Translators & System Utilities', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 29:22 (0s to 1762s)
('65d29b56-0083-3101-0000-000000000001', '65d29b56-0083-2101-0000-000000000001', 'VIDEO', 'Computer System Overview & Hardware Organisation (Functional Components, Interconnection of Units, Hardware vs Software)', 'https://www.youtube.com/watch?v=1MukSdlsG9Y&t=0s&end=1762s', true, 1),

-- Topic 2: 29:22 to 1:03:41 (1762s to 3821s)
('65d29b56-0083-3101-0000-000000000002', '65d29b56-0083-2101-0000-000000000002', 'VIDEO', 'Input & Output Devices, CPU Architecture & Execution Cycle (ALU, Control Unit, Registers, Instruction Cycle & Peripherals)', 'https://www.youtube.com/watch?v=1MukSdlsG9Y&t=1762s&end=3821s', true, 1),

-- Topic 3: 1:03:41 to 1:23:32 (3821s to 5012s)
('65d29b56-0083-3101-0000-000000000003', '65d29b56-0083-2101-0000-000000000003', 'VIDEO', 'Memory Organisation, Units of Memory (bit to PB) & Cache Memory (Bit, Nibble, Byte, KB, MB, GB, TB, PB, Hierarchy & High-Speed Cache)', 'https://www.youtube.com/watch?v=1MukSdlsG9Y&t=3821s&end=5012s', true, 1),

-- Topic 4: 1:23:32 to 1:40:54 (5012s to 6054s)
('65d29b56-0083-3101-0000-000000000004', '65d29b56-0083-2101-0000-000000000004', 'VIDEO', 'Primary Memory (RAM, ROM) & Secondary Storage Devices (Volatile vs Non-Volatile, PROM, EPROM, EEPROM, HDD, SSD & Optical Media)', 'https://www.youtube.com/watch?v=1MukSdlsG9Y&t=5012s&end=6054s', true, 1),

-- Topic 5: 1:40:54 to 2:13:48 (6054s to 8028s)
('65d29b56-0083-3101-0000-000000000005', '65d29b56-0083-2101-0000-000000000005', 'VIDEO', 'Types of Software, OS Functions, Translators & System Utilities (System Software, Assembler, Compiler, Interpreter, Device Drivers, OS UI & Application Software)', 'https://www.youtube.com/watch?v=1MukSdlsG9Y&t=6054s&end=8028s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
