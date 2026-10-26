-- V21__seed_exam_types.sql
-- Seeds the static exam categories for DevLens Learn

INSERT INTO learn_exam_types (name, slug, full_name, category, required_plan, display_order) VALUES
-- School Category
('CBSE Class 12', 'cbse-class-12', 'Central Board of Secondary Education - Class 12', 'SCHOOL', 'SCHOOL', 10),
('CBSE Class 10', 'cbse-class-10', 'Central Board of Secondary Education - Class 10', 'SCHOOL', 'SCHOOL', 11),
('ICSE Class 10', 'icse-class-10', 'Indian Certificate of Secondary Education - Class 10', 'SCHOOL', 'SCHOOL', 12),
('Maharashtra HSC', 'maharashtra-hsc', 'Maharashtra State Board - Higher Secondary Certificate', 'SCHOOL', 'SCHOOL', 13),

-- Engineering Entrance
('JEE Mains', 'jee-mains', 'Joint Entrance Examination - Main', 'ENGINEERING', 'ENGINEERING', 20),
('JEE Advanced', 'jee-advanced', 'Joint Entrance Examination - Advanced', 'ENGINEERING', 'ENGINEERING', 21),
('BITSAT', 'bitsat', 'BITS Admission Test', 'ENGINEERING', 'ENGINEERING', 22),

-- Medical Entrance
('NEET UG', 'neet-ug', 'National Eligibility cum Entrance Test - Undergraduate', 'MEDICAL', 'MEDICAL', 30),
('NEET PG', 'neet-pg', 'National Eligibility cum Entrance Test - Postgraduate', 'MEDICAL', 'MEDICAL', 31),

-- Government Exams
('SSC CGL', 'ssc-cgl', 'Staff Selection Commission - Combined Graduate Level', 'GOVT', 'GOVT_EXAM', 40),
('SSC CHSL', 'ssc-chsl', 'Staff Selection Commission - Combined Higher Secondary Level', 'GOVT', 'GOVT_EXAM', 41),
('UPSC CSE', 'upsc-cse', 'Union Public Service Commission - Civil Services Exam', 'GOVT', 'GOVT_EXAM', 42),
('IBPS PO', 'ibps-po', 'Institute of Banking Personnel Selection - Probationary Officer', 'GOVT', 'GOVT_EXAM', 43),
('SBI PO', 'sbi-po', 'State Bank of India - Probationary Officer', 'GOVT', 'GOVT_EXAM', 44),
('RRB NTPC', 'rrb-ntpc', 'Railway Recruitment Board - Non-Technical Popular Categories', 'GOVT', 'GOVT_EXAM', 45),
('NDA', 'nda', 'National Defence Academy', 'GOVT', 'GOVT_EXAM', 46),

-- CUET & UG
('CUET UG', 'cuet-ug', 'Common University Entrance Test - Undergraduate', 'CUET', 'CUET', 50),
('BTech CS (Sem 1-8)', 'btech-cs', 'Bachelor of Technology - Computer Science', 'GRADUATION', 'GRADUATION', 60),

-- PG & Placement
('CAT', 'cat', 'Common Admission Test (IIMs)', 'PRIVATE', 'PLACEMENT', 70),
('TCS NQT', 'tcs-nqt', 'Tata Consultancy Services - National Qualifier Test', 'PRIVATE', 'PLACEMENT', 71);

-- Seed basic subscription plans
INSERT INTO learn_subscription_plans (name, display_name, monthly_price, yearly_price, accessible_categories) VALUES
('SCHOOL', 'School Prep (Class 9-12)', 19900, 99900, '{"SCHOOL"}'),
('ENGINEERING', 'Engineering Entrance (JEE)', 29900, 149900, '{"ENGINEERING"}'),
('MEDICAL', 'Medical Entrance (NEET)', 29900, 149900, '{"MEDICAL"}'),
('GOVT_EXAM', 'Govt Job Prep (SSC/UPSC/Bank)', 29900, 149900, '{"GOVT"}'),
('COMBO_ALL', 'Unlimited Access (All Exams)', 59900, 299900, '{"SCHOOL", "ENGINEERING", "MEDICAL", "GOVT", "CUET", "GRADUATION", "PRIVATE"}');
