-- V217__seed_class11_cs_ch05_getting_started_with_python_lectures.sql
-- Seeds verified 6 Continuous Master Subtopics for Class 11 Computer Science Chapter 5: Getting Started with Python & Fundamentals
-- Masterclass Video: Magnet Brains - Shraddha Ma'am (KKlgMP4EVO4)
-- 100% Zero-Gap Continuous Timeline: 0s to 7370s (02:02:50, Outro promotional course card trimmed)

-- 1. Remove old placeholder content items & topics for Chapter 5
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0083-1100-0000-000000000005'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0083-1100-0000-000000000005';

-- 2. Insert 6 Verified Master Subtopics for Chapter 5
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0083-2105-0000-000000000001', '65d29b56-0083-1100-0000-000000000005', 'Introduction to Python, Features & Execution Modes', 1, true),
('65d29b56-0083-2105-0000-000000000002', '65d29b56-0083-1100-0000-000000000005', 'Python Tokens, Keywords, Identifiers, Literals & Variables', 2, true),
('65d29b56-0083-2105-0000-000000000003', '65d29b56-0083-1100-0000-000000000005', 'Python Data Types & Mutability Concepts', 3, true),
('65d29b56-0083-2105-0000-000000000004', '65d29b56-0083-1100-0000-000000000005', 'Operators in Python (Arithmetic, Relational, Logical, Identity & Membership)', 4, true),
('65d29b56-0083-2105-0000-000000000005', '65d29b56-0083-1100-0000-000000000005', 'Expressions, Precedence & Type Conversion (Implicit & Explicit)', 5, true),
('65d29b56-0083-2105-0000-000000000006', '65d29b56-0083-1100-0000-000000000005', 'Console Input/Output Operations & Error Classification', 6, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, chapter_id = EXCLUDED.chapter_id, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Exact Continuous Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
-- Topic 1: 00:00 to 20:50 (0s to 1250s)
('65d29b56-0083-3105-0000-000000000001', '65d29b56-0083-2105-0000-000000000001', 'VIDEO', 'Introduction to Python, Features & Execution Modes (Interactive Shell vs Script Mode, Running First Python Script, IDLE & VS Code Setup)', 'https://www.youtube.com/watch?v=KKlgMP4EVO4&t=0s&end=1250s', true, 1),

-- Topic 2: 20:50 to 40:50 (1250s to 2450s)
('65d29b56-0083-3105-0000-000000000002', '65d29b56-0083-2105-0000-000000000002', 'VIDEO', 'Python Tokens, Keywords, Identifiers, Literals & Variables (Character Set, Token Types, Rules for Identifiers, String/Numeric Literals, l-value/r-value & Single/Multi-line Comments)', 'https://www.youtube.com/watch?v=KKlgMP4EVO4&t=1250s&end=2450s', true, 1),

-- Topic 3: 40:50 to 1:03:00 (2450s to 3780s)
('65d29b56-0083-3105-0000-000000000003', '65d29b56-0083-2105-0000-000000000003', 'VIDEO', 'Python Data Types & Mutability Concepts (Numbers [int, float, complex], Boolean, Sequences [string, list, tuple], None, Mapping [dict], type() Function & Mutable vs Immutable Objects)', 'https://www.youtube.com/watch?v=KKlgMP4EVO4&t=2450s&end=3780s', true, 1),

-- Topic 4: 1:03:00 to 1:32:00 (3780s to 5520s)
('65d29b56-0083-3105-0000-000000000004', '65d29b56-0083-2105-0000-000000000004', 'VIDEO', 'Operators in Python (Arithmetic, Relational, Logical, Assignment, Augmented Operators, Identity [is, is not] & Membership [in, not in])', 'https://www.youtube.com/watch?v=KKlgMP4EVO4&t=3780s&end=5520s', true, 1),

-- Topic 5: 1:32:00 to 1:48:00 (5520s to 6480s)
('65d29b56-0083-3105-0000-000000000005', '65d29b56-0083-2105-0000-000000000005', 'VIDEO', 'Expressions, Precedence & Type Conversion (Evaluation of Expressions, Operator Precedence Hierarchy, Implicit Type Coercion & Explicit Type Casting)', 'https://www.youtube.com/watch?v=KKlgMP4EVO4&t=5520s&end=6480s', true, 1),

-- Topic 6: 1:48:00 to 2:02:50 (6480s to 7370s)
('65d29b56-0083-3105-0000-000000000006', '65d29b56-0083-2105-0000-000000000006', 'VIDEO', 'Console Input/Output Operations & Error Classification (input() with Prompts, print() with sep and end, Syntax Errors, Logical Errors & Runtime Exceptions)', 'https://www.youtube.com/watch?v=KKlgMP4EVO4&t=6480s&end=7370s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
