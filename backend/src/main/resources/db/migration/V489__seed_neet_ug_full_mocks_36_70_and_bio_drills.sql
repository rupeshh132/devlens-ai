-- V489__seed_neet_ug_full_mocks_36_70_and_bio_drills.sql
-- Seeds Full-Length NEET UG Series Set 36..70 (35 Papers x 180 Qs / 720M / 180m)
-- PLUS Botany Chapter-Wise Drills (7 chapters x 4 Sets = 28 Tests, 45 Qs / 180M) + 14 Botany DPPs
-- PLUS Zoology Chapter-Wise Drills (6 chapters x 4 Sets = 24 Tests, 45 Qs / 180M) + 12 Zoology DPPs.

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
    v_bot_chapters TEXT[] := ARRAY[
        'Diversity in Living World & Plant Kingdom',
        'Morphology, NMC Families & Plant Anatomy',
        'Cell Unit of Life & Cell Division',
        'Photosynthesis, Respiration & PGR',
        'Sexual Reproduction in Flowering Plants',
        'Genetics & Molecular Basis of Inheritance',
        'Ecology, Ecosystems & Biodiversity'
    ];
    v_zoo_chapters TEXT[] := ARRAY[
        'Animal Kingdom, Frog & Cockroach Morphology',
        'Biomolecules & Enzyme Kinetics',
        'Human Breathing & Body Fluids Circulation',
        'Excretion, Locomotion, Neural & Endocrine',
        'Human Reproduction, Health & Evolution',
        'Human Diseases, Microbes & Biotechnology'
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

    -- 1. Full-Length 180-Q Mocks: Set 36..70
    FOR i IN 36..70 LOOP
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

    -- 2. Botany Chapter-Wise Drills (7 x 4 = 28 Tests, 45 Qs / 180M / 45m) + 14 Botany DPPs
    FOR ch_idx IN 1..array_length(v_bot_chapters, 1) LOOP
        FOR lvl IN 1..4 LOOP
            v_cnt := v_cnt + 1;
            v_test_id := ('30102000-0000-4000-8000-' || LPAD(v_cnt::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id,
                v_neet_id,
                'NEET UG Chapter Mock: ' || v_bot_chapters[ch_idx] || ' - Set ' || lvl,
                45,
                180,
                1.00,
                (ch_idx = 1 AND lvl <= 2),
                'Botany',
                'CHAPTER_WISE',
                'NEET UG',
                'NCERT Line-by-Line Botany Chapter Drill (45 Compulsory MCQs / 45 Mins / 180 Marks, +4/-1).',
                'NEET Botany Chapter Drill: 45 Qs / 180 Marks',
                'NMC_2026'
            );

            FOR q_idx IN 1..45 LOOP
                q_id := v_bot_qs[1 + ((ch_idx * 5 + lvl * 7 + q_idx - 1) % array_length(v_bot_qs, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Botany NCERT Drill', 4, 1.00, 'Botany', q_idx);
            END LOOP;
        END LOOP;

        FOR lvl IN 1..2 LOOP
            v_test_id := ('30103000-0000-4000-8000-' || LPAD(((ch_idx - 1) * 2 + lvl)::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id,
                v_neet_id,
                'NEET Botany DPP ' || ch_idx || '.' || lvl || ': ' || v_bot_chapters[ch_idx],
                15,
                60,
                1.00,
                (ch_idx = 1 AND lvl = 1),
                'Botany',
                'DPP',
                'NEET UG',
                'High-Yield NCERT Statement & Line Recall DPP (15 MCQs / 15 Mins / 60 Marks, +4/-1).',
                'NEET Botany DPP: 15 Qs / 60M',
                'NMC_2026'
            );

            FOR q_idx IN 1..15 LOOP
                q_id := v_bot_qs[1 + ((ch_idx * 4 + lvl * 3 + q_idx - 1) % array_length(v_bot_qs, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Botany DPP', 4, 1.00, 'Botany', q_idx);
            END LOOP;
        END LOOP;
    END LOOP;

    -- 3. Zoology Chapter-Wise Drills (6 x 4 = 24 Tests, 45 Qs / 180M / 45m) + 12 Zoology DPPs
    v_cnt := 0;
    FOR ch_idx IN 1..array_length(v_zoo_chapters, 1) LOOP
        FOR lvl IN 1..4 LOOP
            v_cnt := v_cnt + 1;
            v_test_id := ('30104000-0000-4000-8000-' || LPAD(v_cnt::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id,
                v_neet_id,
                'NEET UG Chapter Mock: ' || v_zoo_chapters[ch_idx] || ' - Set ' || lvl,
                45,
                180,
                1.00,
                (ch_idx = 1 AND lvl <= 2),
                'Zoology',
                'CHAPTER_WISE',
                'NEET UG',
                'NCERT Line-by-Line Zoology Chapter Drill (45 Compulsory MCQs / 45 Mins / 180 Marks, +4/-1).',
                'NEET Zoology Chapter Drill: 45 Qs / 180 Marks',
                'NMC_2026'
            );

            FOR q_idx IN 1..45 LOOP
                q_id := v_zoo_qs[1 + ((ch_idx * 5 + lvl * 7 + q_idx - 1) % array_length(v_zoo_qs, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Zoology NCERT Drill', 4, 1.00, 'Zoology', q_idx);
            END LOOP;
        END LOOP;

        FOR lvl IN 1..2 LOOP
            v_test_id := ('30105000-0000-4000-8000-' || LPAD(((ch_idx - 1) * 2 + lvl)::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id,
                v_neet_id,
                'NEET Zoology DPP ' || ch_idx || '.' || lvl || ': ' || v_zoo_chapters[ch_idx],
                15,
                60,
                1.00,
                (ch_idx = 1 AND lvl = 1),
                'Zoology',
                'DPP',
                'NEET UG',
                'High-Yield NCERT Zoology Physiology/Biotech DPP (15 MCQs / 15 Mins / 60 Marks, +4/-1).',
                'NEET Zoology DPP: 15 Qs / 60M',
                'NMC_2026'
            );

            FOR q_idx IN 1..15 LOOP
                q_id := v_zoo_qs[1 + ((ch_idx * 4 + lvl * 3 + q_idx - 1) % array_length(v_zoo_qs, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index)
                VALUES (v_test_id, q_id, 'Zoology DPP', 4, 1.00, 'Zoology', q_idx);
            END LOOP;
        END LOOP;
    END LOOP;
END $$;
