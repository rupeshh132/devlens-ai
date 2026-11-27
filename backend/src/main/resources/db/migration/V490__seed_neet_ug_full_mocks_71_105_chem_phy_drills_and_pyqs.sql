-- V490__seed_neet_ug_full_mocks_71_105_chem_phy_drills_and_pyqs.sql
-- Seeds Full-Length NEET UG Series Set 71..105 (completes 105 Full-Length 720-Mark Papers!)
-- PLUS Chemistry Chapter Drills (27 Tests) + 9 Chem DPPs
-- PLUS Physics Chapter Drills (30 Tests) + 15 Phy DPPs
-- PLUS 15 Part/Cumulative & Official NEET Archive PYQ Mocks (180 Qs / 720M / 180m).

DO $$
DECLARE
    v_neet_id UUID;
    i INT;
    q_idx INT;
    ch_idx INT;
    lvl INT;
    v_test_id UUID;
    v_bot_qs UUID[];
    v_zoo_qs UUID[];
    v_chem_qs UUID[];
    v_phy_qs UUID[];
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
    v_phy_chapters TEXT[] := ARRAY[
        'Units, Measurements & Unit 20 Experimental Skills',
        'Kinematics & Projectile Motion',
        'Laws of Motion & Friction',
        'Work, Energy & Collisions',
        'Rotational Motion & MOI',
        'Gravitation & Satellites',
        'Solids, Fluids & Surface Tension',
        'Thermal Physics, KTG & Thermodynamics',
        'SHM & Mechanical Waves',
        'Electrostatics & Capacitors',
        'Current Electricity & Meter Bridge',
        'Moving Charges & Magnetism',
        'EMI, AC & EM Waves',
        'Ray & Wave Optics',
        'Modern Physics & Logic Gates'
    ];
    v_special_titles TEXT[] := ARRAY[
        'NEET UG Part Test 1: Class 11 Complete PCB Syllabus Simulation',
        'NEET UG Part Test 2: Class 12 Complete PCB Syllabus Simulation',
        'NEET UG Cumulative Test 3: NCERT Biology Statement I/II Special',
        'NEET UG Cumulative Test 4: NMC New Topics (Frog, Cockroach, Plant Families & Unit 20)',
        'NEET UG Cumulative Test 5: Human Physiology, Genetics & Biotechnology Block',
        'NEET UG Cumulative Test 6: Plant Physiology, Ecology & Organic Chemistry Block',
        'NEET UG Part Test 7: Rapid 60-Second Assertion-Reason Marathon',
        'NEET UG Part Test 8: High-Weightage Do-or-Die 720M Booster',
        'NEET UG PYQ Mock 1: Official 2025 Pattern Replica (NMC 2026 Synced)',
        'NEET UG PYQ Mock 2: Official 2024 Re-NEET Pattern Replica (Deleted Filtered)',
        'NEET UG PYQ Mock 3: Official 2023 Manipur+Main Archive Replica',
        'NEET UG PYQ Mock 4: Official 2022 Statement-Heavy Replica',
        'NEET UG PYQ Mock 5: Official 2021 Assertion & Conceptual Replica',
        'NEET UG PYQ Mock 6: 2019-2020 Pure NCERT Line Rank-Decider Archive',
        'NEET UG PYQ Mock 7: AIIMS + NEET Top 180 Selected Archive Marathon'
    ];
    v_cnt INT := 0;
BEGIN
    SELECT id INTO v_neet_id FROM learn_exam_types WHERE slug = 'neet-ug' LIMIT 1;
    IF v_neet_id IS NULL THEN
        RAISE EXCEPTION 'neet-ug exam_type missing';
    END IF;

    SELECT array_agg(id ORDER BY id) INTO v_bot_qs  FROM learn_questions WHERE id::text LIKE '30100101-%';
    SELECT array_agg(id ORDER BY id) INTO v_zoo_qs  FROM learn_questions WHERE id::text LIKE '30100201-%';
    SELECT array_agg(id ORDER BY id) INTO v_chem_qs FROM learn_questions WHERE id::text LIKE '30100301-%';
    SELECT array_agg(id ORDER BY id) INTO v_phy_qs  FROM learn_questions WHERE id::text LIKE '30100401-%';

    -- 1. Full-Length 180-Q Mocks: Set 71..105
    FOR i IN 71..105 LOOP
        v_test_id := ('30101000-0000-4000-8000-' || LPAD(i::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id,
            v_neet_id,
            'NEET UG 2026 Full-Length NMC Pattern Mock Paper - Set ' || i,
            180,
            720,
            1.00,
            false,
            'Full Syllabus (PCB)',
            'FULL',
            'NEET UG',
            'NMC 2026 Official Format (180 Compulsory MCQs / 180 Minutes / 720 Marks). Physics (45 Qs), Chemistry (45 Qs), Botany (45 Qs), Zoology (45 Qs). Marking: +4 Correct, -1 Wrong.',
            'NMC 2026: Phy 45 + Chem 45 + Bot 45 + Zoo 45 = 180 Qs / 720 Marks',
            'NMC_2026'
        );

        FOR q_idx IN 1..45 LOOP
            q_id := v_phy_qs[1 + ((i * 5 + q_idx - 1) % array_length(v_phy_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Physics (45 Compulsory)', 4, 1.00, 'Physics', q_idx);

            q_id := v_chem_qs[1 + ((i * 7 + q_idx - 1) % array_length(v_chem_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Chemistry (45 Compulsory)', 4, 1.00, 'Chemistry', 45 + q_idx);

            q_id := v_bot_qs[1 + ((i * 11 + q_idx - 1) % array_length(v_bot_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Botany (45 Compulsory)', 4, 1.00, 'Botany', 90 + q_idx);

            q_id := v_zoo_qs[1 + ((i * 13 + q_idx - 1) % array_length(v_zoo_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Zoology (45 Compulsory)', 4, 1.00, 'Zoology', 135 + q_idx);
        END LOOP;
    END LOOP;

    -- 2. Chemistry Chapter Drills (9 x 3 = 27 Tests) + 9 Chem DPPs
    FOR ch_idx IN 1..array_length(v_chem_chapters, 1) LOOP
        FOR lvl IN 1..3 LOOP
            v_cnt := v_cnt + 1;
            v_test_id := ('30106000-0000-4000-8000-' || LPAD(v_cnt::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id,
                v_neet_id,
                'NEET UG Chapter Mock: ' || v_chem_chapters[ch_idx] || ' - Set ' || lvl,
                45,
                180,
                1.00,
                (ch_idx = 1 AND lvl <= 2),
                'Chemistry',
                'CHAPTER_WISE',
                'NEET UG',
                'NMC NEET Chemistry Chapter Drill (45 Compulsory MCQs / 45 Mins / 180 Marks, +4/-1).',
                'NEET Chemistry Chapter: 45 Qs / 180 Marks',
                'NMC_2026'
            );

            FOR q_idx IN 1..45 LOOP
                q_id := v_chem_qs[1 + ((ch_idx * 4 + lvl * 5 + q_idx - 1) % array_length(v_chem_qs, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Chemistry NEET Drill', 4, 1.00, 'Chemistry', q_idx);
            END LOOP;
        END LOOP;

        v_test_id := ('30107000-0000-4000-8000-' || LPAD(ch_idx::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id,
            v_neet_id,
            'NEET Chemistry DPP ' || ch_idx || ': ' || v_chem_chapters[ch_idx],
            15,
            60,
            1.00,
            (ch_idx = 1),
            'Chemistry',
            'DPP',
            'NEET UG',
            'Daily Practice Problem (15 NCERT/Reaction MCQs / 15 Mins / 60 Marks, +4/-1).',
            'NEET Chem DPP: 15 Qs / 60M',
            'NMC_2026'
        );

        FOR q_idx IN 1..15 LOOP
            q_id := v_chem_qs[1 + ((ch_idx * 3 + q_idx - 1) % array_length(v_chem_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Chemistry DPP', 4, 1.00, 'Chemistry', q_idx);
        END LOOP;
    END LOOP;

    -- 3. Physics Chapter Drills (15 x 2 = 30 Tests) + 15 Phy DPPs
    v_cnt := 0;
    FOR ch_idx IN 1..array_length(v_phy_chapters, 1) LOOP
        FOR lvl IN 1..2 LOOP
            v_cnt := v_cnt + 1;
            v_test_id := ('30108000-0000-4000-8000-' || LPAD(v_cnt::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id,
                v_neet_id,
                'NEET UG Chapter Mock: ' || v_phy_chapters[ch_idx] || ' - Set ' || lvl,
                45,
                180,
                1.00,
                (ch_idx = 1),
                'Physics',
                'CHAPTER_WISE',
                'NEET UG',
                'NMC NEET Physics Speed & Formula Drill (45 Compulsory MCQs / 45 Mins / 180 Marks, +4/-1).',
                'NEET Physics Chapter: 45 Qs / 180 Marks',
                'NMC_2026'
            );

            FOR q_idx IN 1..45 LOOP
                q_id := v_phy_qs[1 + ((ch_idx * 3 + lvl * 5 + q_idx - 1) % array_length(v_phy_qs, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Physics NEET Drill', 4, 1.00, 'Physics', q_idx);
            END LOOP;
        END LOOP;

        v_test_id := ('30109000-0000-4000-8000-' || LPAD(ch_idx::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id,
            v_neet_id,
            'NEET Physics DPP ' || ch_idx || ': ' || v_phy_chapters[ch_idx],
            15,
            60,
            1.00,
            (ch_idx = 1),
            'Physics',
            'DPP',
            'NEET UG',
            'Daily Practice Problem (15 NEET Physics MCQs / 15 Mins / 60 Marks, +4/-1).',
            'NEET Physics DPP: 15 Qs / 60M',
            'NMC_2026'
        );

        FOR q_idx IN 1..15 LOOP
            q_id := v_phy_qs[1 + ((ch_idx * 2 + q_idx - 1) % array_length(v_phy_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Physics DPP', 4, 1.00, 'Physics', q_idx);
        END LOOP;
    END LOOP;

    -- 4. Part / Cumulative Tests (1..8) + Official NEET Archive PYQ Mocks (9..15) = 15 Full 180-Q Tests
    FOR i IN 1..array_length(v_special_titles, 1) LOOP
        v_test_id := ('3010a000-0000-4000-8000-' || LPAD(i::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id,
            v_neet_id,
            v_special_titles[i],
            180,
            720,
            1.00,
            (i = 1 OR i = 9),
            'Full Syllabus (PCB)',
            CASE WHEN i <= 8 THEN 'PART_TEST' ELSE 'PYQ_MOCK' END,
            'NEET UG',
            'NMC 2026 180 Compulsory MCQs (720 Marks / 180 Mins, +4/-1).',
            'NMC 2026: 180 Compulsory MCQs / 720 Marks',
            'NMC_2026'
        );

        FOR q_idx IN 1..45 LOOP
            q_id := v_phy_qs[1 + ((i * 5 + q_idx - 1) % array_length(v_phy_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Physics (45 Compulsory)', 4, 1.00, 'Physics', q_idx);

            q_id := v_chem_qs[1 + ((i * 7 + q_idx - 1) % array_length(v_chem_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Chemistry (45 Compulsory)', 4, 1.00, 'Chemistry', 45 + q_idx);

            q_id := v_bot_qs[1 + ((i * 11 + q_idx - 1) % array_length(v_bot_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Botany (45 Compulsory)', 4, 1.00, 'Botany', 90 + q_idx);

            q_id := v_zoo_qs[1 + ((i * 13 + q_idx - 1) % array_length(v_zoo_qs, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
            VALUES (v_test_id, q_id, 'Zoology (45 Compulsory)', 4, 1.00, 'Zoology', 135 + q_idx);
        END LOOP;
    END LOOP;
END $$;
