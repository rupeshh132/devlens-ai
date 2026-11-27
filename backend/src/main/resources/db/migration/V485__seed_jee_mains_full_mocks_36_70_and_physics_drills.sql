-- V485__seed_jee_mains_full_mocks_36_70_and_physics_drills.sql
-- Seeds Full-Length JEE Main NTA CBT Mock Series Set 36..70 (35 Papers x 75 Qs / 300M / 180m)
-- PLUS Physics Chapter-Wise Drills (15 NTA chapters x 2 Sets = 30 Tests, 25 Qs / 100M / 60m)
-- PLUS Physics Chapter DPPs (15 Daily Practice Problems, 10 Qs / 40M / 20m).

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
    v_phy_chapters TEXT[] := ARRAY[
        'Units, Measurements & Experimental Skills',
        'Kinematics & Relative Velocity',
        'Laws of Motion, Friction & Circular',
        'Work, Energy, Power & Collisions',
        'Rotational Motion & Moment of Inertia',
        'Gravitation & Orbital Mechanics',
        'Properties of Solids & Fluids',
        'Thermal Physics, Thermodynamics & KTG',
        'Oscillations (SHM) & Mechanical Waves',
        'Electrostatics, Gauss Law & Capacitors',
        'Current Electricity & Meter Bridge',
        'Magnetic Effects of Current & Magnetism',
        'EMI, Alternating Current & EM Waves',
        'Ray & Wave Optics (YDSE)',
        'Modern Physics & Logic Gates'
    ];
    v_counter INT := 0;
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

    -- 1. Full-Length NTA CBT Series: Set 36..70
    FOR i IN 36..70 LOOP
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

    -- 2. Physics Chapter-Wise Drills (15 Chapters x 2 Sets = 30 Tests, 25 Qs / 100M / 60m)
    FOR ch_idx IN 1..array_length(v_phy_chapters, 1) LOOP
        FOR lvl IN 1..2 LOOP
            v_counter := v_counter + 1;
            v_test_id := ('20102000-0000-4000-8000-' || LPAD(v_counter::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id,
                v_jee_id,
                'JEE Main Chapter Mock: ' || v_phy_chapters[ch_idx] || ' - Set ' || lvl,
                60,
                100,
                1.00,
                (ch_idx = 1),
                'Physics',
                'CHAPTER_WISE',
                'JEE Mains',
                'NTA Physics Chapter Drill (20 MCQ + 5 Compulsory Numerical / 60 Mins / 100 Marks, +4/-1).',
                'JEE Main Physics Chapter: 20 MCQ + 5 Numerical = 25 Qs / 100M',
                'NTA_2026'
            );

            FOR q_idx IN 1..20 LOOP
                q_id := v_phy_mcqs[1 + ((ch_idx * 3 + lvl * 5 + q_idx - 1) % array_length(v_phy_mcqs, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Physics Sec A (MCQ)', 4, 1.00, 'Physics', q_idx);
            END LOOP;
            FOR q_idx IN 1..5 LOOP
                q_id := v_phy_nums[1 + ((ch_idx + lvl + q_idx - 1) % array_length(v_phy_nums, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Physics Sec B (Numerical)', 4, 1.00, 'Physics', 20 + q_idx);
            END LOOP;
        END LOOP;

        -- 3. Physics Daily Practice Problem (DPP: 10 Qs / 40M / 20m)
        v_test_id := ('20103000-0000-4000-8000-' || LPAD(ch_idx::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id,
            v_jee_id,
            'JEE Main Physics DPP ' || ch_idx || ': ' || v_phy_chapters[ch_idx],
            20,
            40,
            1.00,
            (ch_idx = 1),
            'Physics',
            'DPP',
            'JEE Mains',
            'Daily Practice Problem (7 MCQ + 3 Compulsory Numerical / 20 Mins / 40 Marks, +4/-1).',
            'JEE Physics DPP: 7 MCQ + 3 Numerical = 10 Qs / 40M',
            'NTA_2026'
        );

        FOR q_idx IN 1..7 LOOP
            q_id := v_phy_mcqs[1 + ((ch_idx * 2 + q_idx - 1) % array_length(v_phy_mcqs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Physics DPP MCQ', 4, 1.00, 'Physics', q_idx);
        END LOOP;
        FOR q_idx IN 1..3 LOOP
            q_id := v_phy_nums[1 + ((ch_idx + q_idx - 1) % array_length(v_phy_nums, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Physics DPP Numerical', 4, 1.00, 'Physics', 7 + q_idx);
        END LOOP;
    END LOOP;
END $$;
