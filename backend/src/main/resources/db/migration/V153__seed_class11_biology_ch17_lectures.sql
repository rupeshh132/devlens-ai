-- V153__seed_class11_biology_ch17_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 17 (Locomotion and Movement)
-- Video: PW Class 11 Science (Locomotion And Movement Class 11 One Shot | Aarushi Ma'am | vNnZYN_WYqE)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 6827s / 1h 53m 47s)

-- 1. Remove old placeholder topics & content items for Chapter 17 (Locomotion and Movement)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000017'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000017';

-- 2. Insert 5 Verified Master Topics for Chapter 17 (Locomotion and Movement)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2117-0000-000000000001', '65d29b56-0440-1100-0000-000000000017', 'Types of Movement (Amoeboid, Ciliary, Muscular) & Muscle Tissue Classification', 1, true),
('65d29b56-0440-2117-0000-000000000002', '65d29b56-0440-1100-0000-000000000017', 'Microscopic Anatomy of Skeletal Muscle, Sarcomere & Contractile Proteins (Actin & Myosin)', 2, true),
('65d29b56-0440-2117-0000-000000000003', '65d29b56-0440-1100-0000-000000000017', 'Mechanism of Muscle Contraction (Sliding Filament Theory, Cross-bridge Cycle & Fiber Types)', 3, true),
('65d29b56-0440-2117-0000-000000000004', '65d29b56-0440-1100-0000-000000000017', 'Human Skeletal System: Axial Skeleton (Skull, Vertebral Column, Ribs) & Appendicular Skeleton (Limbs, Girdles)', 4, true),
('65d29b56-0440-2117-0000-000000000005', '65d29b56-0440-1100-0000-000000000017', 'Joints (Fibrous, Cartilaginous, Synovial) & Musculoskeletal Disorders (Myasthenia Gravis, Tetany, Arthritis, Osteoporosis)', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3117-0000-000000000001', '65d29b56-0440-2117-0000-000000000001', 'VIDEO', 'Types of Movement (Amoeboid, Ciliary, Muscular) & Muscle Tissue Classification', 'https://www.youtube.com/watch?v=vNnZYN_WYqE&end=1429s', true, 1),
('65d29b56-0440-3117-0000-000000000002', '65d29b56-0440-2117-0000-000000000002', 'VIDEO', 'Microscopic Anatomy of Skeletal Muscle, Sarcomere & Contractile Proteins (Actin & Myosin)', 'https://www.youtube.com/watch?v=vNnZYN_WYqE&t=1429s&end=2540s', true, 1),
('65d29b56-0440-3117-0000-000000000003', '65d29b56-0440-2117-0000-000000000003', 'VIDEO', 'Mechanism of Muscle Contraction (Sliding Filament Theory, Cross-bridge Cycle & Fiber Types)', 'https://www.youtube.com/watch?v=vNnZYN_WYqE&t=2540s&end=3680s', true, 1),
('65d29b56-0440-3117-0000-000000000004', '65d29b56-0440-2117-0000-000000000004', 'VIDEO', 'Human Skeletal System: Axial Skeleton (Skull, Vertebral Column, Ribs) & Appendicular Skeleton (Limbs, Girdles)', 'https://www.youtube.com/watch?v=vNnZYN_WYqE&t=3680s&end=6017s', true, 1),
('65d29b56-0440-3117-0000-000000000005', '65d29b56-0440-2117-0000-000000000005', 'VIDEO', 'Joints (Fibrous, Cartilaginous, Synovial) & Musculoskeletal Disorders (Myasthenia Gravis, Tetany, Arthritis, Osteoporosis)', 'https://www.youtube.com/watch?v=vNnZYN_WYqE&t=6017s&end=6827s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
