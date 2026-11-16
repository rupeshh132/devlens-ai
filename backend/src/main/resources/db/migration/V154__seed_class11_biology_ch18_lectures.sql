-- V154__seed_class11_biology_ch18_lectures.sql
-- Seeds verified 5 Master Topics and Video Lecture Timestamps for Class 11 Biology Chapter 18 (Neural Control and Coordination)
-- Video: PW Class 11 Science (Neural Control and Coordination | Full Chapter in ONE SHOT | Chapter 18 | Class 11th Biology | odaz7IVZV8c)
-- 100% Zero-Gap Continuous Timeline Verified (0s to 7479s / 2h 04m 39s)

-- 1. Remove old placeholder topics & content items for Chapter 18 (Neural Control and Coordination)
DELETE FROM learn_content_items
WHERE topic_id IN (
    SELECT id FROM learn_topics
    WHERE chapter_id = '65d29b56-0440-1100-0000-000000000018'
);

DELETE FROM learn_topics
WHERE chapter_id = '65d29b56-0440-1100-0000-000000000018';

-- 2. Insert 5 Verified Master Topics for Chapter 18 (Neural Control and Coordination)
INSERT INTO learn_topics (id, chapter_id, title, order_index, is_active)
VALUES
('65d29b56-0440-2118-0000-000000000001', '65d29b56-0440-1100-0000-000000000018', 'Human Neural System Architecture & Peripheral Nervous System (PNS: Somatic & Autonomic)', 1, true),
('65d29b56-0440-2118-0000-000000000002', '65d29b56-0440-1100-0000-000000000018', 'Neuron as Structural & Functional Unit: Microscopic Anatomy, Types of Neurons & Axons', 2, true),
('65d29b56-0440-2118-0000-000000000003', '65d29b56-0440-1100-0000-000000000018', 'Generation and Conduction of Nerve Impulse (Resting Potential, Action Potential & Saltatory Conduction)', 3, true),
('65d29b56-0440-2118-0000-000000000004', '65d29b56-0440-1100-0000-000000000018', 'Synaptic Transmission: Electrical vs Chemical Synapses, Synaptic Cleft & Neurotransmitters', 4, true),
('65d29b56-0440-2118-0000-000000000005', '65d29b56-0440-1100-0000-000000000018', 'Central Nervous System (CNS): Cranial Meninges, Forebrain, Midbrain, Hindbrain & Brainstem', 5, true)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index, is_active = true;

-- 3. Insert Video Content Items with Zero-Gap Timestamps
INSERT INTO learn_content_items (id, topic_id, type, title, content_url, is_free, order_index)
VALUES
('65d29b56-0440-3118-0000-000000000001', '65d29b56-0440-2118-0000-000000000001', 'VIDEO', 'Human Neural System Architecture & Peripheral Nervous System (PNS: Somatic & Autonomic)', 'https://www.youtube.com/watch?v=odaz7IVZV8c&end=1095s', true, 1),
('65d29b56-0440-3118-0000-000000000002', '65d29b56-0440-2118-0000-000000000002', 'VIDEO', 'Neuron as Structural & Functional Unit: Microscopic Anatomy, Types of Neurons & Axons', 'https://www.youtube.com/watch?v=odaz7IVZV8c&t=1095s&end=1894s', true, 1),
('65d29b56-0440-3118-0000-000000000003', '65d29b56-0440-2118-0000-000000000003', 'VIDEO', 'Generation and Conduction of Nerve Impulse (Resting Potential, Action Potential & Saltatory Conduction)', 'https://www.youtube.com/watch?v=odaz7IVZV8c&t=1894s&end=4125s', true, 1),
('65d29b56-0440-3118-0000-000000000004', '65d29b56-0440-2118-0000-000000000004', 'VIDEO', 'Synaptic Transmission: Electrical vs Chemical Synapses, Synaptic Cleft & Neurotransmitters', 'https://www.youtube.com/watch?v=odaz7IVZV8c&t=4125s&end=4847s', true, 1),
('65d29b56-0440-3118-0000-000000000005', '65d29b56-0440-2118-0000-000000000005', 'VIDEO', 'Central Nervous System (CNS): Cranial Meninges, Forebrain, Midbrain, Hindbrain & Brainstem', 'https://www.youtube.com/watch?v=odaz7IVZV8c&t=4847s&end=7479s', true, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content_url = EXCLUDED.content_url, is_free = true;
