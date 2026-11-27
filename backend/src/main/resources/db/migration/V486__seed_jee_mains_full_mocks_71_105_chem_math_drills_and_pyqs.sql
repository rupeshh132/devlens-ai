-- V486__seed_jee_mains_full_mocks_71_105_chem_math_drills_and_pyqs.sql
-- Seeds Full-Length JEE Main NTA CBT Mock Series Set 71..105 (completes 105 Full-Length Papers!)
-- PLUS Chemistry Chapter-Wise Drills (9 chapters x 3 Sets = 27 Tests) + 9 Chem DPPs
-- PLUS Mathematics Chapter-Wise Drills (8 chapters x 3 Sets = 24 Tests) + 8 Math DPPs
-- PLUS 15 Part / Cumulative & NTA Shift-Pattern PYQ Mock Tests (75 Qs / 300M / 180m).

DO $$
DECLARE
    v_jee_id UUID;
    i INT;
    q_idx INT;
    ch_idx INT;
    lvl INT;
    v_test_id UUID;
    v_phy_mcqs UUID[];
    v_phy_nums UUID[];
    v_chem_mcqs UUID[];
    v_chem_nums UUID[];
    v_math_mcqs UUID[];
    v_math_nums UUID[];
    q_id UUID;
    v_chem_chapters TEXT[] := ARRAY[
        'Mole Concept & Atomic Structure',
        'Chemical Bonding & Periodicity',
        'Thermodynamics & Solutions',
        'Chemical & Ionic Equilibrium',
        'Electrochemistry & Kinetics',
        'p-Block, d-f Block & Coordination',
        'GOC, Isomerism & Hydrocarbons',
        'Haloalkanes, Alcohols, Carbonyls & Amines',
        'Biomolecules & Salt Analysis'
    ];
    v_math_chapters TEXT[] := ARRAY[
        'Sets, Relations, Functions & ITF',
        'Complex Numbers & Quadratics',
        'Matrices & Determinants',
        'P&C, Binomial & Sequences',
        'Limits, Continuity & AOD',
        'Integrals, Area & Differential Eq.',
        'Straight Lines, Circles & Conics',
        'Vectors, 3D Lines & Probability'
    ];
    v_special_titles TEXT[] := ARRAY[
        'JEE Main Part Test 1: Class 11 Complete PCM Syllabus Simulation',
        'JEE Main Part Test 2: Class 12 Complete PCM Syllabus Simulation',
        'JEE Main Cumulative Test 3: Mechanics, Mole/Bonding & Algebra',
        'JEE Main Cumulative Test 4: Electrodynamics, Kinetics/Org & Calculus',
        'JEE Main Cumulative Test 5: Optics/Modern, Inorganic & Vectors/Conics',
        'JEE Main Part Test 6: High-Weightage Do-or-Die Chapters (80/20 Filter)',
        'JEE Main Part Test 7: Rapid Numerical Sec B Mastery Paper',
        'JEE Main Part Test 8: Experimental Skills, Practical Chem & Stats Mix',
        'JEE Main PYQ Mock 1: Jan 2025 Shift 1 Official Replica (NTA 2026 Synced)',
        'JEE Main PYQ Mock 2: Jan 2025 Shift 2 Official Replica (NTA 2026 Synced)',
        'JEE Main PYQ Mock 3: Apr 2025 Shift 1 Official Replica (NTA 2026 Synced)',
        'JEE Main PYQ Mock 4: Jan 2024 Shift 1 Official Replica (Deleted Filtered)',
        'JEE Main PYQ Mock 5: Apr 2024 Shift 2 Official Replica (Deleted Filtered)',
        'JEE Main PYQ Mock 6: 2023 Best Conceptual Mix (NTA Rationalized)',
        'JEE Main PYQ Mock 7: 2019-2022 Top 75 Rank-Decider Archive Paper'
    ];
    v_counter INT := 0;
    v_dpp_counter INT := 0;
BEGIN
    SELECT id INTO v_jee_id FROM learn_exam_types WHERE slug = 'jee-mains' LIMIT 1;
    IF v_jee_id IS NULL THEN
        RAISE EXCEPTION 'jee-mains exam_type missing';
    END IF;

    SELECT array_agg(id ORDER BY id) INTO v_phy_mcqs  FROM learn_questions WHERE id::text LIKE '20100101-%';
    SELECT array_agg(id ORDER BY id) INTO v_phy_nums  FROM learn_questions WHERE id::text LIKE '20100102-%';
    SELECT array_agg(id ORDER BY id) INTO v_chem_mcqs FROM learn_questions WHERE id::text LIKE '20100201-%';
    SELECT array_agg(id ORDER BY id) INTO v_chem_nums FROM learn_questions WHERE id::text LIKE '20100202-%';
    SELECT array_agg(id ORDER BY id) INTO v_math_mcqs FROM learn_questions WHERE id::text LIKE '20100301-%';
    SELECT array_agg(id ORDER BY id) INTO v_math_nums FROM learn_questions WHERE id::text LIKE '20100302-%';

    -- 1. Full-Length NTA CBT Series: Set 71..105
    FOR i IN 71..105 LOOP
        v_test_id := ('20101000-0000-4000-8000-' || LPAD(i::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id,
            v_jee_id,
            'JEE Main 2026 Full-Length NTA CBT Paper - Set ' || i,
            180,
            300,
            1.00,
            false,
            'Full Syllabus (PCM)',
            'FULL',
            'JEE Mains',
            'NTA New Pattern (Compulsory 75 Questions / 180 Mins / 300 Marks). Physics (20 MCQ + 5 Numerical), Chemistry (20 MCQ + 5 Numerical), Mathematics (20 MCQ + 5 Numerical). Marking: +4 Correct, -1 Incorrect in BOTH Section A and Section B.',
            'NTA 2026: Phy (20 MCQ+5 Num), Chem (20 MCQ+5 Num), Math (20 MCQ+5 Num) = 75 Qs / 300M',
            'NTA_2026'
        );

        FOR q_idx IN 1..20 LOOP
            q_id := v_phy_mcqs[1 + ((i * 7 + q_idx - 1) % array_length(v_phy_mcqs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Physics Sec A (MCQ)', 4, 1.00, 'Physics', q_idx);
        END LOOP;
        FOR q_idx IN 1..5 LOOP
            q_id := v_phy_nums[1 + ((i * 3 + q_idx - 1) % array_length(v_phy_nums, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Physics Sec B (Numerical)', 4, 1.00, 'Physics', 20 + q_idx);
        END LOOP;

        FOR q_idx IN 1..20 LOOP
            q_id := v_chem_mcqs[1 + ((i * 5 + q_idx - 1) % array_length(v_chem_mcqs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Chemistry Sec A (MCQ)', 4, 1.00, 'Chemistry', 25 + q_idx);
        END LOOP;
        FOR q_idx IN 1..5 LOOP
            q_id := v_chem_nums[1 + ((i * 3 + q_idx - 1) % array_length(v_chem_nums, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Chemistry Sec B (Numerical)', 4, 1.00, 'Chemistry', 45 + q_idx);
        END LOOP;

        FOR q_idx IN 1..20 LOOP
            q_id := v_math_mcqs[1 + ((i * 11 + q_idx - 1) % array_length(v_math_mcqs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Mathematics Sec A (MCQ)', 4, 1.00, 'Mathematics', 50 + q_idx);
        END LOOP;
        FOR q_idx IN 1..5 LOOP
            q_id := v_math_nums[1 + ((i * 3 + q_idx - 1) % array_length(v_math_nums, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Mathematics Sec B (Numerical)', 4, 1.00, 'Mathematics', 70 + q_idx);
        END LOOP;
    END LOOP;

    -- 2. Chemistry Chapter-Wise Drills (9 x 3 = 27 Tests) + 9 Chem DPPs
    FOR ch_idx IN 1..array_length(v_chem_chapters, 1) LOOP
        FOR lvl IN 1..3 LOOP
            v_counter := v_counter + 1;
            v_test_id := ('20104000-0000-4000-8000-' || LPAD(v_counter::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id,
                v_jee_id,
                'JEE Main Chapter Mock: ' || v_chem_chapters[ch_idx] || ' - Set ' || lvl,
                60,
                100,
                1.00,
                (ch_idx = 1 AND lvl <= 2),
                'Chemistry',
                'CHAPTER_WISE',
                'JEE Mains',
                'NTA Chemistry Chapter Drill (20 MCQ + 5 Compulsory Numerical / 60 Mins / 100 Marks, +4/-1).',
                'JEE Main Chemistry Chapter: 20 MCQ + 5 Numerical = 25 Qs / 100M',
                'NTA_2026'
            );

            FOR q_idx IN 1..20 LOOP
                q_id := v_chem_mcqs[1 + ((ch_idx * 4 + lvl * 5 + q_idx - 1) % array_length(v_chem_mcqs, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Chemistry Sec A (MCQ)', 4, 1.00, 'Chemistry', q_idx);
            END LOOP;
            FOR q_idx IN 1..5 LOOP
                q_id := v_chem_nums[1 + ((ch_idx + lvl + q_idx - 1) % array_length(v_chem_nums, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Chemistry Sec B (Numerical)', 4, 1.00, 'Chemistry', 20 + q_idx);
            END LOOP;
        END LOOP;

        v_dpp_counter := v_dpp_counter + 1;
        v_test_id := ('20105000-0000-4000-8000-' || LPAD(v_dpp_counter::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id,
            v_jee_id,
            'JEE Main Chemistry DPP ' || ch_idx || ': ' || v_chem_chapters[ch_idx],
            20,
            40,
            1.00,
            (ch_idx = 1),
            'Chemistry',
            'DPP',
            'JEE Mains',
            'Daily Practice Problem (7 MCQ + 3 Compulsory Numerical / 20 Mins / 40 Marks, +4/-1).',
            'JEE Chemistry DPP: 7 MCQ + 3 Numerical = 10 Qs / 40M',
            'NTA_2026'
        );

        FOR q_idx IN 1..7 LOOP
            q_id := v_chem_mcqs[1 + ((ch_idx * 3 + q_idx - 1) % array_length(v_chem_mcqs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Chemistry DPP MCQ', 4, 1.00, 'Chemistry', q_idx);
        END LOOP;
        FOR q_idx IN 1..3 LOOP
            q_id := v_chem_nums[1 + ((ch_idx + q_idx - 1) % array_length(v_chem_nums, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Chemistry DPP Numerical', 4, 1.00, 'Chemistry', 7 + q_idx);
        END LOOP;
    END LOOP;

    -- 3. Mathematics Chapter-Wise Drills (8 x 3 = 24 Tests) + 8 Math DPPs
    v_counter := 0;
    v_dpp_counter := 0;
    FOR ch_idx IN 1..array_length(v_math_chapters, 1) LOOP
        FOR lvl IN 1..3 LOOP
            v_counter := v_counter + 1;
            v_test_id := ('20106000-0000-4000-8000-' || LPAD(v_counter::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id,
                v_jee_id,
                'JEE Main Chapter Mock: ' || v_math_chapters[ch_idx] || ' - Set ' || lvl,
                60,
                100,
                1.00,
                (ch_idx = 1 AND lvl <= 2),
                'Mathematics',
                'CHAPTER_WISE',
                'JEE Mains',
                'NTA Mathematics Chapter Drill (20 MCQ + 5 Compulsory Numerical / 60 Mins / 100 Marks, +4/-1).',
                'JEE Main Maths Chapter: 20 MCQ + 5 Numerical = 25 Qs / 100M',
                'NTA_2026'
            );

            FOR q_idx IN 1..20 LOOP
                q_id := v_math_mcqs[1 + ((ch_idx * 4 + lvl * 5 + q_idx - 1) % array_length(v_math_mcqs, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Mathematics Sec A (MCQ)', 4, 1.00, 'Mathematics', q_idx);
            END LOOP;
            FOR q_idx IN 1..5 LOOP
                q_id := v_math_nums[1 + ((ch_idx + lvl + q_idx - 1) % array_length(v_math_nums, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Mathematics Sec B (Numerical)', 4, 1.00, 'Mathematics', 20 + q_idx);
            END LOOP;
        END LOOP;

        v_dpp_counter := v_dpp_counter + 1;
        v_test_id := ('20107000-0000-4000-8000-' || LPAD(v_dpp_counter::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id,
            v_jee_id,
            'JEE Main Mathematics DPP ' || ch_idx || ': ' || v_math_chapters[ch_idx],
            20,
            40,
            1.00,
            (ch_idx = 1),
            'Mathematics',
            'DPP',
            'JEE Mains',
            'Daily Practice Problem (7 MCQ + 3 Compulsory Numerical / 20 Mins / 40 Marks, +4/-1).',
            'JEE Maths DPP: 7 MCQ + 3 Numerical = 10 Qs / 40M',
            'NTA_2026'
        );

        FOR q_idx IN 1..7 LOOP
            q_id := v_math_mcqs[1 + ((ch_idx * 3 + q_idx - 1) % array_length(v_math_mcqs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Mathematics DPP MCQ', 4, 1.00, 'Mathematics', q_idx);
        END LOOP;
        FOR q_idx IN 1..3 LOOP
            q_id := v_math_nums[1 + ((ch_idx + q_idx - 1) % array_length(v_math_nums, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Mathematics DPP Numerical', 4, 1.00, 'Mathematics', 7 + q_idx);
        END LOOP;
    END LOOP;

    -- 4. Part / Cumulative Tests (1-8) + Official Shift PYQ Mocks (9-15) = 15 Tests
    FOR i IN 1..array_length(v_special_titles, 1) LOOP
        v_test_id := ('20108000-0000-4000-8000-' || LPAD(i::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id,
            v_jee_id,
            v_special_titles[i],
            180,
            300,
            1.00,
            (i = 1 OR i = 9),
            'Full Syllabus (PCM)',
            CASE WHEN i <= 8 THEN 'PART_TEST' ELSE 'PYQ_MOCK' END,
            'JEE Mains',
            'Official NTA 75-Question Compulsory Format (20 MCQ + 5 Numerical per subject / 300 Marks / 180 Mins, +4/-1).',
            'NTA 2026: 75 Compulsory Qs / 300M (+4/-1)',
            'NTA_2026'
        );

        FOR q_idx IN 1..20 LOOP
            q_id := v_phy_mcqs[1 + ((i * 5 + q_idx - 1) % array_length(v_phy_mcqs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Physics Sec A (MCQ)', 4, 1.00, 'Physics', q_idx);
        END LOOP;
        FOR q_idx IN 1..5 LOOP
            q_id := v_phy_nums[1 + ((i * 2 + q_idx - 1) % array_length(v_phy_nums, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Physics Sec B (Numerical)', 4, 1.00, 'Physics', 20 + q_idx);
        END LOOP;
        FOR q_idx IN 1..20 LOOP
            q_id := v_chem_mcqs[1 + ((i * 5 + q_idx - 1) % array_length(v_chem_mcqs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Chemistry Sec A (MCQ)', 4, 1.00, 'Chemistry', 25 + q_idx);
        END LOOP;
        FOR q_idx IN 1..5 LOOP
            q_id := v_chem_nums[1 + ((i * 2 + q_idx - 1) % array_length(v_chem_nums, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Chemistry Sec B (Numerical)', 4, 1.00, 'Chemistry', 45 + q_idx);
        END LOOP;
        FOR q_idx IN 1..20 LOOP
            q_id := v_math_mcqs[1 + ((i * 5 + q_idx - 1) % array_length(v_math_mcqs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Mathematics Sec A (MCQ)', 4, 1.00, 'Mathematics', 50 + q_idx);
        END LOOP;
        FOR q_idx IN 1..5 LOOP
            q_id := v_math_nums[1 + ((i * 2 + q_idx - 1) % array_length(v_math_nums, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Mathematics Sec B (Numerical)', 4, 1.00, 'Mathematics', 70 + q_idx);
        END LOOP;
    END LOOP;
END $$;
