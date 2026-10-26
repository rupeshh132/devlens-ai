-- V41__normalize_exam_types_and_add_class11.sql
-- Normalizes school exam types, seeds Class 11, and equips all classes with authentic diagnostic mock tests and questions.

-- 1. Ensure canonical Class 11, Class 12, Class 10, Class 9 exist in learn_exam_types
INSERT INTO learn_exam_types (name, slug, full_name, category, required_plan, display_order)
VALUES 
('Class 11', 'class-11', 'CBSE / State Boards - Class 11', 'SCHOOL', 'SCHOOL', 11)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, full_name = EXCLUDED.full_name;

INSERT INTO learn_exam_types (name, slug, full_name, category, required_plan, display_order)
VALUES 
('Class 12', 'class-12', 'CBSE / State Boards - Class 12', 'SCHOOL', 'SCHOOL', 12)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, full_name = EXCLUDED.full_name;

INSERT INTO learn_exam_types (name, slug, full_name, category, required_plan, display_order)
VALUES 
('Class 10', 'class-10', 'CBSE / Foundation - Class 10', 'SCHOOL', 'SCHOOL', 10)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, full_name = EXCLUDED.full_name;

INSERT INTO learn_exam_types (name, slug, full_name, category, required_plan, display_order)
VALUES 
('Class 9', 'class-9', 'CBSE / Foundation - Class 9', 'SCHOOL', 'SCHOOL', 9)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, full_name = EXCLUDED.full_name;

-- Ensure legacy CBSE slugs also resolve to the friendly goal name
UPDATE learn_exam_types SET name = 'Class 12' WHERE slug = 'cbse-class-12';
UPDATE learn_exam_types SET name = 'Class 10' WHERE slug = 'cbse-class-10';
UPDATE learn_exam_types SET name = 'Class 9' WHERE slug = 'cbse-class-9';

-- 2. Link authentic diagnostic mock tests and questions across all major goals
DO $$
DECLARE
    v_class12_id UUID;
    v_class11_id UUID;
    v_class10_id UUID;
    v_class9_id UUID;
    v_jee_id UUID;
    v_neet_id UUID;
BEGIN
    SELECT id INTO v_class12_id FROM learn_exam_types WHERE slug IN ('class-12', 'cbse-class-12') ORDER BY created_at DESC LIMIT 1;
    SELECT id INTO v_class11_id FROM learn_exam_types WHERE slug = 'class-11' LIMIT 1;
    SELECT id INTO v_class10_id FROM learn_exam_types WHERE slug IN ('class-10', 'cbse-class-10') ORDER BY created_at DESC LIMIT 1;
    SELECT id INTO v_class9_id FROM learn_exam_types WHERE slug IN ('class-9', 'cbse-class-9') ORDER BY created_at DESC LIMIT 1;
    SELECT id INTO v_jee_id FROM learn_exam_types WHERE slug = 'jee-mains' LIMIT 1;
    SELECT id INTO v_neet_id FROM learn_exam_types WHERE slug = 'neet-ug' LIMIT 1;

    -- Class 12 Authentic Mock Test & Questions
    IF v_class12_id IS NOT NULL THEN
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free)
        VALUES ('a1212121-0000-0000-0000-000000000012', v_class12_id, 'Class 12 Board Exam Diagnostic Test (Physics & Chemistry)', 45, 50, 0.25, true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_questions (id, question_text, options_json, correct_answer, explanation, difficulty, is_verified)
        VALUES 
        ('b1212121-0000-0000-0000-000000000001', 
         'What is the SI unit of electric flux?', 
         '{"A": "Volt / meter", "B": "Volt · meter", "C": "Newton / Coulomb", "D": "Joule · meter"}'::jsonb, 
         'B', 
         'Electric flux is defined as Phi = E * A. Since [E] = V/m and [A] = m^2, the SI unit is V * m (Volt-meter).', 
         'MEDIUM', true),
        ('b1212121-0000-0000-0000-000000000002', 
         'In a galvanic cell, oxidation takes place at which electrode?', 
         '{"A": "Cathode", "B": "Anode", "C": "Salt Bridge", "D": "Both electrodes equally"}'::jsonb, 
         'B', 
         'Oxidation always occurs at the Anode in an electrochemical cell (Anode - Oxidation, Cathode - Reduction).', 
         'EASY', true),
        ('b1212121-0000-0000-0000-000000000003', 
         'What is the derivative of e^(2x) * sin(x) with respect to x?', 
         '{"A": "e^(2x) * (2sin(x) + cos(x))", "B": "e^(2x) * cos(x)", "C": "2e^(2x) * cos(x)", "D": "e^(2x) * (sin(x) + 2cos(x))"}'::jsonb, 
         'A', 
         'Using product rule: d/dx[u*v] = u''v + uv'' = 2e^(2x)sin(x) + e^(2x)cos(x) = e^(2x)(2sin(x) + cos(x)).', 
         'MEDIUM', true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_test_questions (id, mock_test_id, question_id, section_name, marks, order_index)
        VALUES 
        ('c1212121-0000-0000-0000-000000000001', 'a1212121-0000-0000-0000-000000000012', 'b1212121-0000-0000-0000-000000000001', 'Physics', 4, 1),
        ('c1212121-0000-0000-0000-000000000002', 'a1212121-0000-0000-0000-000000000012', 'b1212121-0000-0000-0000-000000000002', 'Chemistry', 4, 2),
        ('c1212121-0000-0000-0000-000000000003', 'a1212121-0000-0000-0000-000000000012', 'b1212121-0000-0000-0000-000000000003', 'Mathematics', 4, 3)
        ON CONFLICT (id) DO NOTHING;
    END IF;

    -- Class 11 Authentic Mock Test & Questions
    IF v_class11_id IS NOT NULL THEN
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free)
        VALUES ('a1111111-0000-0000-0000-000000000011', v_class11_id, 'Class 11 Science Diagnostic Test (Kinematics & Mole Concept)', 45, 50, 0.25, true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_questions (id, question_text, options_json, correct_answer, explanation, difficulty, is_verified)
        VALUES 
        ('b1111111-0000-0000-0000-000000000001', 
         'A car accelerates uniformly from rest to 20 m/s in 5 seconds. What distance does it cover?', 
         '{"A": "100 m", "B": "50 m", "C": "40 m", "D": "25 m"}'::jsonb, 
         'B', 
         'Acceleration a = (20 - 0)/5 = 4 m/s^2. Distance s = ut + 0.5*a*t^2 = 0 + 0.5 * 4 * 25 = 50 meters.', 
         'MEDIUM', true),
        ('b1111111-0000-0000-0000-000000000002', 
         'How many molecules are present in 18 grams of water (H2O)?', 
         '{"A": "3.01 x 10^23", "B": "6.022 x 10^23", "C": "1.204 x 10^24", "D": "6.022 x 10^22"}'::jsonb, 
         'B', 
         '18 g of H2O is equal to 1 mole of water, which contains Avogadro''s number of molecules (6.022 x 10^23).', 
         'EASY', true),
        ('b1111111-0000-0000-0000-000000000003', 
         'If set A = {1, 2, 3} and set B = {3, 4, 5}, what is A ∩ B?', 
         '{"A": "{1, 2, 3, 4, 5}", "B": "{3}", "C": "{1, 2}", "D": "{4, 5}"}'::jsonb, 
         'B', 
         'The intersection A ∩ B consists of elements common to both sets, which is {3}.', 
         'EASY', true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_test_questions (id, mock_test_id, question_id, section_name, marks, order_index)
        VALUES 
        ('c1111111-0000-0000-0000-000000000001', 'a1111111-0000-0000-0000-000000000011', 'b1111111-0000-0000-0000-000000000001', 'Physics', 4, 1),
        ('c1111111-0000-0000-0000-000000000002', 'a1111111-0000-0000-0000-000000000011', 'b1111111-0000-0000-0000-000000000002', 'Chemistry', 4, 2),
        ('c1111111-0000-0000-0000-000000000011', 'a1111111-0000-0000-0000-000000000011', 'b1111111-0000-0000-0000-000000000003', 'Mathematics', 4, 3)
        ON CONFLICT (id) DO NOTHING;
    END IF;

    -- Class 10 Authentic Mock Test & Questions
    IF v_class10_id IS NOT NULL THEN
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free)
        VALUES ('a1010101-0000-0000-0000-000000000010', v_class10_id, 'Class 10 Science & Maths Diagnostic Mock Test', 45, 50, 0.25, true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_questions (id, question_text, options_json, correct_answer, explanation, difficulty, is_verified)
        VALUES 
        ('b1010101-0000-0000-0000-000000000001', 
         'What type of chemical reaction is: CaO + H2O -> Ca(OH)2 + Heat?', 
         '{"A": "Combination reaction and exothermic", "B": "Decomposition reaction and endothermic", "C": "Displacement reaction", "D": "Double displacement reaction"}'::jsonb, 
         'A', 
         'Quicklime reacts vigorously with water to produce slaked lime releasing large heat; it is both a combination and an exothermic reaction.', 
         'EASY', true),
        ('b1010101-0000-0000-0000-000000000002', 
         'What is the resistance of an electric lamp that draws 0.5 A current from a 220 V line?', 
         '{"A": "110 Ohms", "B": "220 Ohms", "C": "440 Ohms", "D": "880 Ohms"}'::jsonb, 
         'C', 
         'Using Ohm''s law: R = V / I = 220 / 0.5 = 440 Ohms.', 
         'MEDIUM', true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_test_questions (id, mock_test_id, question_id, section_name, marks, order_index)
        VALUES 
        ('c1010101-0000-0000-0000-000000000001', 'a1010101-0000-0000-0000-000000000010', 'b1010101-0000-0000-0000-000000000001', 'Science', 4, 1),
        ('c1010101-0000-0000-0000-000000000002', 'a1010101-0000-0000-0000-000000000010', 'b1010101-0000-0000-0000-000000000002', 'Science', 4, 2)
        ON CONFLICT (id) DO NOTHING;
    END IF;

    -- Class 9 Authentic Mock Test & Questions
    IF v_class9_id IS NOT NULL THEN
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free)
        VALUES ('a0909090-0000-0000-0000-000000000009', v_class9_id, 'Class 9 Science & Maths Diagnostic Mock Test', 45, 50, 0.25, true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_questions (id, question_text, options_json, correct_answer, explanation, difficulty, is_verified)
        VALUES 
        ('b0909090-0000-0000-0000-000000000001', 
         'Which of the following is NOT a state of matter?', 
         '{"A": "Plasma", "B": "Bose-Einstein Condensate", "C": "Electron Cloud", "D": "Solid"}'::jsonb, 
         'C', 
         'The states of matter are Solid, Liquid, Gas, Plasma, and Bose-Einstein Condensate. Electron cloud is a region around an atomic nucleus.', 
         'EASY', true),
        ('b0909090-0000-0000-0000-000000000002', 
         'Newton''s first law of motion gives the qualitative definition of which concept?', 
         '{"A": "Velocity", "B": "Inertia", "C": "Acceleration", "D": "Momentum"}'::jsonb, 
         'B', 
         'Newton''s first law is also known as the law of inertia.', 
         'EASY', true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_test_questions (id, mock_test_id, question_id, section_name, marks, order_index)
        VALUES 
        ('c0909090-0000-0000-0000-000000000001', 'a0909090-0000-0000-0000-000000000009', 'b0909090-0000-0000-0000-000000000001', 'Science', 4, 1),
        ('c0909090-0000-0000-0000-000000000002', 'a0909090-0000-0000-0000-000000000009', 'b0909090-0000-0000-0000-000000000002', 'Science', 4, 2)
        ON CONFLICT (id) DO NOTHING;
    END IF;

    -- JEE Mains Authentic Mock Test & Questions
    IF v_jee_id IS NOT NULL THEN
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free)
        VALUES ('a2222222-0000-0000-0000-000000000022', v_jee_id, 'JEE Mains High-Yield Physics & Chemistry Mock Test', 60, 100, 1.00, true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_questions (id, question_text, options_json, correct_answer, explanation, difficulty, is_verified)
        VALUES 
        ('b2222222-0000-0000-0000-000000000001', 
         'The dimensions of Planck''s constant are equal to that of:', 
         '{"A": "Energy", "B": "Linear Momentum", "C": "Angular Momentum", "D": "Power"}'::jsonb, 
         'C', 
         '[h] = [E / nu] = [ML^2T^-2 / T^-1] = [ML^2T^-1], which is identical to the dimension of angular momentum (L = r x p = [L][MLT^-1] = [ML^2T^-1]).', 
         'MEDIUM', true),
        ('b2222222-0000-0000-0000-000000000002', 
         'Which of the following compounds has the highest boiling point?', 
         '{"A": "CH3-CH2-CH2-OH", "B": "CH3-CH2-CHO", "C": "CH3-O-CH2-CH3", "D": "CH3-CH2-CH2-CH3"}'::jsonb, 
         'A', 
         '1-Propanol forms intermolecular hydrogen bonds which require significant energy to break compared to dipole-dipole or London dispersion forces.', 
         'MEDIUM', true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_test_questions (id, mock_test_id, question_id, section_name, marks, order_index)
        VALUES 
        ('c2222222-0000-0000-0000-000000000001', 'a2222222-0000-0000-0000-000000000022', 'b2222222-0000-0000-0000-000000000001', 'Physics', 4, 1),
        ('c2222222-0000-0000-0000-000000000022', 'a2222222-0000-0000-0000-000000000022', 'b2222222-0000-0000-0000-000000000002', 'Chemistry', 4, 2)
        ON CONFLICT (id) DO NOTHING;
    END IF;

    -- NEET UG Authentic Mock Test & Questions
    IF v_neet_id IS NOT NULL THEN
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free)
        VALUES ('a3333333-0000-0000-0000-000000000033', v_neet_id, 'NEET UG Biology & Chemistry Diagnostic Test', 60, 100, 1.00, true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_questions (id, question_text, options_json, correct_answer, explanation, difficulty, is_verified)
        VALUES 
        ('b3333333-0000-0000-0000-000000000001', 
         'DNA replication takes place in which phase of the eukaryotic cell cycle?', 
         '{"A": "G1 phase", "B": "S phase", "C": "G2 phase", "D": "M phase"}'::jsonb, 
         'B', 
         'Synthesis of DNA (replication) occurs specifically during the S (Synthesis) phase of interphase.', 
         'EASY', true),
        ('b3333333-0000-0000-0000-000000000002', 
         'Which cell organelle is responsible for the formation of acrosome in human sperm?', 
         '{"A": "Mitochondria", "B": "Golgi apparatus", "C": "Endoplasmic Reticulum", "D": "Centrosome"}'::jsonb, 
         'B', 
         'The acrosome of spermatozoa is derived from the Golgi complex during spermiogenesis.', 
         'MEDIUM', true)
        ON CONFLICT (id) DO NOTHING;

        INSERT INTO learn_test_questions (id, mock_test_id, question_id, section_name, marks, order_index)
        VALUES 
        ('c3333333-0000-0000-0000-000000000001', 'a3333333-0000-0000-0000-000000000033', 'b3333333-0000-0000-0000-000000000001', 'Biology', 4, 1),
        ('c3333333-0000-0000-0000-000000000033', 'a3333333-0000-0000-0000-000000000033', 'b3333333-0000-0000-0000-000000000002', 'Biology', 4, 2)
        ON CONFLICT (id) DO NOTHING;
    END IF;
END $$;
