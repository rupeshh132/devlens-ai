-- V494__seed_jee_advanced_drills_dpps_and_pyq_mocks.sql
-- Seeds JEE Advanced Chapter Drills (41 Chapters x 2 Sets = 82 Tests, 18 Qs / 66M / 60m),
-- 41 IIT Ranker DPPs (10 Qs / 36M / 25m across 18 Phy + 13 Chem + 10 Math chapters),
-- and 15 Part/Cumulative & Official IIT Archive PYQ Mocks (54 Qs / 198M / 180m).

DO $$
DECLARE
    v_adv_id UUID;
    i INT;
    q_idx INT;
    ch_idx INT;
    lvl INT;
    v_test_id UUID;

    v_phy_scq UUID[]; v_phy_msq UUID[]; v_phy_num UUID[];
    v_chem_scq UUID[]; v_chem_msq UUID[]; v_chem_num UUID[];
    v_math_scq UUID[]; v_math_msq UUID[]; v_math_num UUID[];
    q_id UUID;

    v_phy_chapters TEXT[] := ARRAY[
        'Units, Error Propagation & Experiments',
        'Kinematics & Inclined Projectiles',
        'Laws of Motion, Friction & Constraints',
        'Work, Energy & 2D Oblique Collisions',
        'Rotational Dynamics & Angular Impulse',
        'Gravitation & Elliptical Kepler Orbits',
        'Fluid Dynamics, Viscosity & Surface Tension',
        'Thermal Conduction, Radiation & KTG',
        'Coupled SHM & Standing Waves',
        'Electrostatics, Dielectrics & RC Networks',
        'Current Electricity & Infinite Ladders',
        'Magnetism, Crossed E×B & Cavity Fields',
        'EMI, Motional EMF & Series LCR Resonance',
        'Ray Optics, Gradient Media & Wave Interference',
        'Modern Physics & Parallel Nuclear Decay',
        '[ADV ONLY] ICOR, Plank Rolling & Rocket Thrust',
        '[ADV ONLY] Carnot Entropy & Moving-Wall Doppler',
        '[ADV ONLY] Spherical Cavity, Potentiometer & Thin Film'
    ];

    v_chem_chapters TEXT[] := ARRAY[
        'Stoichiometry, Oleum & Radial Wavefunctions',
        'Chemical Bonding, Bent Rule & MOT',
        'Thermodynamics, Entropy & Azeotropes',
        'Polyprotic Ionic Equilibrium & Ksp',
        'Electrochemistry & Reversible/Parallel Kinetics',
        'Coordination Isomerism, Jahn-Teller & Carbonyls',
        'GOC, Atropisomerism & Aromaticity',
        'Organic Mechanisms, NGP & Named Cascades',
        'Biomolecules & Wet Salt Analysis',
        '[ADV ONLY] Van der Waals Real Gases & Bravais Lattices',
        '[ADV ONLY] Freundlich Isotherm & Concentration Cells',
        '[ADV ONLY] Boranes, Silicates & Ellingham Metallurgy',
        '[ADV ONLY] Condensation Polymers & Organic Roadmaps'
    ];

    v_math_chapters TEXT[] := ARRAY[
        'Functions & Inverse Trig Principal Bounds',
        'Quadratic Roots & Apollonius Complex Loci',
        'Matrices, Orthogonal Identities & Systems',
        'Surjections, Derangements & Binomial Bounds',
        'Non-Differentiability, Rolle & LMVT Proofs',
        'Newton-Leibniz Integrals & Differential Eq.',
        'Coaxial Circles, Parabola Normals & Conics',
        'Skew Lines, Trig Solutions & Conditional Bayes',
        '[ADV ONLY] Box/Vector Triple Product & 3D Planes',
        '[ADV ONLY] Argand Rotation & Cayley-Hamilton'
    ];

    v_special_titles TEXT[] := ARRAY[
        'JEE Advanced Part Test 1: Class 11 Full PCM IIT Rank-Booster',
        'JEE Advanced Part Test 2: Class 12 Full PCM IIT Rank-Booster',
        'JEE Advanced Exclusive Test 3: ADV_ONLY Modules Marathon (ICOR/Carnot/Solid State/Planes)',
        'JEE Advanced Cumulative Test 4: IIT_MSQ Partial-Marking Survival Drill',
        'JEE Advanced Cumulative Test 5: Decimal Tolerance & Matrix-Match Accuracy Lab',
        'JEE Advanced Cumulative Test 6: Electromagnetism + Organic Synthesis + Calculus',
        'JEE Advanced Cumulative Test 7: Rotational + Thermodynamics + Complex/Matrices',
        'JEE Advanced Part Test 8: Pre-Exam High-Rigor 198-Mark Top-500 AIR Filter',
        'JEE Advanced PYQ Mock 1: Official 2025 Paper 1 Replica (IIT Kanpur Syllabus)',
        'JEE Advanced PYQ Mock 2: Official 2024 IIT Madras Paper 1 Replica',
        'JEE Advanced PYQ Mock 3: Official 2024 IIT Madras Paper 2 Replica',
        'JEE Advanced PYQ Mock 4: Official 2023 IIT Guwahati Archive Replica',
        'JEE Advanced PYQ Mock 5: Official 2022 IIT Bombay Decimal/Matrix Replica',
        'JEE Advanced PYQ Mock 6: Official 2021 IIT Kharagpur Passage Special',
        'JEE Advanced PYQ Mock 7: 2016-2020 Classic Tough IIT Archive Compilation'
    ];

    v_cnt INT := 0;
BEGIN
    SELECT id INTO v_adv_id FROM learn_exam_types WHERE slug = 'jee-advanced' LIMIT 1;
    IF v_adv_id IS NULL THEN
        RAISE EXCEPTION 'jee-advanced exam_type missing';
    END IF;

    SELECT array_agg(id ORDER BY id) INTO v_phy_scq  FROM learn_questions WHERE id::text LIKE '40100101-%';
    SELECT array_agg(id ORDER BY id) INTO v_phy_msq  FROM learn_questions WHERE id::text LIKE '40100102-%';
    SELECT array_agg(id ORDER BY id) INTO v_phy_num  FROM learn_questions WHERE id::text LIKE '40100103-%';
    SELECT array_agg(id ORDER BY id) INTO v_chem_scq FROM learn_questions WHERE id::text LIKE '40100201-%';
    SELECT array_agg(id ORDER BY id) INTO v_chem_msq FROM learn_questions WHERE id::text LIKE '40100202-%';
    SELECT array_agg(id ORDER BY id) INTO v_chem_num FROM learn_questions WHERE id::text LIKE '40100203-%';
    SELECT array_agg(id ORDER BY id) INTO v_math_scq FROM learn_questions WHERE id::text LIKE '40100301-%';
    SELECT array_agg(id ORDER BY id) INTO v_math_msq FROM learn_questions WHERE id::text LIKE '40100302-%';
    SELECT array_agg(id ORDER BY id) INTO v_math_num FROM learn_questions WHERE id::text LIKE '40100303-%';

    -- 1. Physics Chapter Drills (18 x 2 = 36 Tests, 18 Qs / 66M / 60m) + 18 Physics DPPs (10 Qs / 36M / 25m)
    FOR ch_idx IN 1..array_length(v_phy_chapters, 1) LOOP
        FOR lvl IN 1..2 LOOP
            v_cnt := v_cnt + 1;
            v_test_id := ('40102000-0000-4000-8000-' || LPAD(v_cnt::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id, v_adv_id,
                'JEE Advanced Chapter Mock: ' || v_phy_chapters[ch_idx] || ' - Set ' || lvl,
                60, 66, 1.00, (ch_idx = 1 OR ch_idx = 16),
                'Physics', 'CHAPTER_WISE', 'JEE Advanced',
                'IIT Physics Drill (18 Qs / 66 Marks / 60 Mins): 6 SCQ (+3/-1) + 6 IIT_MSQ (+4/-2) + 6 Numerical (+4/0).',
                'IIT Phy Chapter: 6 SCQ + 6 MSQ + 6 Num = 66M', 'IIT_ADV_2026'
            );

            FOR q_idx IN 1..6 LOOP
                q_id := v_phy_scq[1 + ((ch_idx * 2 + lvl * 3 + q_idx - 1) % array_length(v_phy_scq, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Physics SCQ/Para', 3, 1.00, 'Physics', q_idx);
                q_id := v_phy_msq[1 + ((ch_idx * 3 + lvl * 5 + q_idx - 1) % array_length(v_phy_msq, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Physics IIT_MSQ', 4, 2.00, 'Physics', 6 + q_idx);
                q_id := v_phy_num[1 + ((ch_idx * 4 + lvl * 7 + q_idx - 1) % array_length(v_phy_num, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Physics Numerical', 4, 0.00, 'Physics', 12 + q_idx);
            END LOOP;
        END LOOP;

        v_test_id := ('40103000-0000-4000-8000-' || LPAD(ch_idx::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id, v_adv_id,
            'JEE Adv Physics DPP ' || ch_idx || ': ' || v_phy_chapters[ch_idx],
            25, 36, 1.00, (ch_idx = 1 OR ch_idx = 16),
            'Physics', 'DPP', 'JEE Advanced',
            'IIT Ranker DPP (10 Qs / 36M / 25m): 4 SCQ (+3/-1) + 3 MSQ (+4/-2) + 3 Numerical (+4/0).',
            'IIT Phy DPP: 10 Qs / 36M', 'IIT_ADV_2026'
        );
        FOR q_idx IN 1..4 LOOP
            q_id := v_phy_scq[1 + ((ch_idx * 3 + q_idx - 1) % array_length(v_phy_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Phy DPP SCQ', 3, 1.00, 'Physics', q_idx);
        END LOOP;
        FOR q_idx IN 1..3 LOOP
            q_id := v_phy_msq[1 + ((ch_idx * 5 + q_idx - 1) % array_length(v_phy_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Phy DPP MSQ', 4, 2.00, 'Physics', 4 + q_idx);
            q_id := v_phy_num[1 + ((ch_idx * 7 + q_idx - 1) % array_length(v_phy_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Phy DPP Numerical', 4, 0.00, 'Physics', 7 + q_idx);
        END LOOP;
    END LOOP;

    -- 2. Chemistry Chapter Drills (13 x 2 = 26 Tests, 18 Qs / 66M / 60m) + 13 Chemistry DPPs (10 Qs / 36M / 25m)
    v_cnt := 0;
    FOR ch_idx IN 1..array_length(v_chem_chapters, 1) LOOP
        FOR lvl IN 1..2 LOOP
            v_cnt := v_cnt + 1;
            v_test_id := ('40104000-0000-4000-8000-' || LPAD(v_cnt::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id, v_adv_id,
                'JEE Advanced Chapter Mock: ' || v_chem_chapters[ch_idx] || ' - Set ' || lvl,
                60, 66, 1.00, (ch_idx = 1 OR ch_idx = 10),
                'Chemistry', 'CHAPTER_WISE', 'JEE Advanced',
                'IIT Chemistry Drill (18 Qs / 66 Marks / 60 Mins): 6 SCQ (+3/-1) + 6 IIT_MSQ (+4/-2) + 6 Numerical (+4/0).',
                'IIT Chem Chapter: 6 SCQ + 6 MSQ + 6 Num = 66M', 'IIT_ADV_2026'
            );

            FOR q_idx IN 1..6 LOOP
                q_id := v_chem_scq[1 + ((ch_idx * 2 + lvl * 3 + q_idx - 1) % array_length(v_chem_scq, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Chemistry SCQ/Para', 3, 1.00, 'Chemistry', q_idx);
                q_id := v_chem_msq[1 + ((ch_idx * 3 + lvl * 5 + q_idx - 1) % array_length(v_chem_msq, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Chemistry IIT_MSQ', 4, 2.00, 'Chemistry', 6 + q_idx);
                q_id := v_chem_num[1 + ((ch_idx * 4 + lvl * 7 + q_idx - 1) % array_length(v_chem_num, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Chemistry Numerical', 4, 0.00, 'Chemistry', 12 + q_idx);
            END LOOP;
        END LOOP;

        v_test_id := ('40105000-0000-4000-8000-' || LPAD(ch_idx::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id, v_adv_id,
            'JEE Adv Chemistry DPP ' || ch_idx || ': ' || v_chem_chapters[ch_idx],
            25, 36, 1.00, (ch_idx = 1 OR ch_idx = 10),
            'Chemistry', 'DPP', 'JEE Advanced',
            'IIT Ranker DPP (10 Qs / 36M / 25m): 4 SCQ (+3/-1) + 3 MSQ (+4/-2) + 3 Numerical (+4/0).',
            'IIT Chem DPP: 10 Qs / 36M', 'IIT_ADV_2026'
        );
        FOR q_idx IN 1..4 LOOP
            q_id := v_chem_scq[1 + ((ch_idx * 3 + q_idx - 1) % array_length(v_chem_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Chem DPP SCQ', 3, 1.00, 'Chemistry', q_idx);
        END LOOP;
        FOR q_idx IN 1..3 LOOP
            q_id := v_chem_msq[1 + ((ch_idx * 5 + q_idx - 1) % array_length(v_chem_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Chem DPP MSQ', 4, 2.00, 'Chemistry', 4 + q_idx);
            q_id := v_chem_num[1 + ((ch_idx * 7 + q_idx - 1) % array_length(v_chem_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Chem DPP Numerical', 4, 0.00, 'Chemistry', 7 + q_idx);
        END LOOP;
    END LOOP;

    -- 3. Mathematics Chapter Drills (10 x 2 = 20 Tests, 18 Qs / 66M / 60m) + 10 Math DPPs (10 Qs / 36M / 25m)
    v_cnt := 0;
    FOR ch_idx IN 1..array_length(v_math_chapters, 1) LOOP
        FOR lvl IN 1..2 LOOP
            v_cnt := v_cnt + 1;
            v_test_id := ('40106000-0000-4000-8000-' || LPAD(v_cnt::text, 12, '0'))::uuid;
            INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
            VALUES (
                v_test_id, v_adv_id,
                'JEE Advanced Chapter Mock: ' || v_math_chapters[ch_idx] || ' - Set ' || lvl,
                60, 66, 1.00, (ch_idx = 1 OR ch_idx = 9),
                'Mathematics', 'CHAPTER_WISE', 'JEE Advanced',
                'IIT Mathematics Drill (18 Qs / 66 Marks / 60 Mins): 6 SCQ (+3/-1) + 6 IIT_MSQ (+4/-2) + 6 Numerical (+4/0).',
                'IIT Math Chapter: 6 SCQ + 6 MSQ + 6 Num = 66M', 'IIT_ADV_2026'
            );

            FOR q_idx IN 1..6 LOOP
                q_id := v_math_scq[1 + ((ch_idx * 2 + lvl * 3 + q_idx - 1) % array_length(v_math_scq, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Mathematics SCQ/Para', 3, 1.00, 'Mathematics', q_idx);
                q_id := v_math_msq[1 + ((ch_idx * 3 + lvl * 5 + q_idx - 1) % array_length(v_math_msq, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Mathematics IIT_MSQ', 4, 2.00, 'Mathematics', 6 + q_idx);
                q_id := v_math_num[1 + ((ch_idx * 4 + lvl * 7 + q_idx - 1) % array_length(v_math_num, 1))];
                INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Mathematics Numerical', 4, 0.00, 'Mathematics', 12 + q_idx);
            END LOOP;
        END LOOP;

        v_test_id := ('40107000-0000-4000-8000-' || LPAD(ch_idx::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, syllabus_version)
        VALUES (
            v_test_id, v_adv_id,
            'JEE Adv Mathematics DPP ' || ch_idx || ': ' || v_math_chapters[ch_idx],
            25, 36, 1.00, (ch_idx = 1 OR ch_idx = 9),
            'Mathematics', 'DPP', 'JEE Advanced',
            'IIT Ranker DPP (10 Qs / 36M / 25m): 4 SCQ (+3/-1) + 3 MSQ (+4/-2) + 3 Numerical (+4/0).',
            'IIT Math DPP: 10 Qs / 36M', 'IIT_ADV_2026'
        );
        FOR q_idx IN 1..4 LOOP
            q_id := v_math_scq[1 + ((ch_idx * 3 + q_idx - 1) % array_length(v_math_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Math DPP SCQ', 3, 1.00, 'Mathematics', q_idx);
        END LOOP;
        FOR q_idx IN 1..3 LOOP
            q_id := v_math_msq[1 + ((ch_idx * 5 + q_idx - 1) % array_length(v_math_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Math DPP MSQ', 4, 2.00, 'Mathematics', 4 + q_idx);
            q_id := v_math_num[1 + ((ch_idx * 7 + q_idx - 1) % array_length(v_math_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Math DPP Numerical', 4, 0.00, 'Mathematics', 7 + q_idx);
        END LOOP;
    END LOOP;

    -- 4. Special IIT Part / Cumulative Tests (8) + IIT Archive PYQ Mocks (7) = 15 Full 54-Q / 198M Tests
    FOR i IN 1..array_length(v_special_titles, 1) LOOP
        v_test_id := ('40108000-0000-4000-8000-' || LPAD(i::text, 12, '0'))::uuid;
        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, paper_number, syllabus_version)
        VALUES (
            v_test_id, v_adv_id,
            v_special_titles[i],
            180, 198, 1.00, (i = 3 OR i = 9),
            'Full Syllabus (PCM)',
            CASE WHEN i <= 8 THEN 'PART_TEST' ELSE 'PYQ_MOCK' END,
            'JEE Advanced',
            'IIT JEE Advanced Special Mock (54 Qs / 198 Marks / 180 Mins): SCQ (+3/-1) + IIT_MSQ (+4/+3/+2/+1/-2) + Numerical (+4/0).',
            'IIT Special 54 Qs / 198 Marks',
            CASE WHEN i = 11 THEN 2 ELSE 1 END,
            'IIT_ADV_2026'
        );

        FOR q_idx IN 1..6 LOOP
            q_id := v_phy_scq[1 + ((i * 2 + q_idx - 1) % array_length(v_phy_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Physics Sec I (SCQ)', 3, 1.00, 'Physics', q_idx);
            q_id := v_phy_msq[1 + ((i * 3 + q_idx - 1) % array_length(v_phy_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Physics Sec II (MSQ)', 4, 2.00, 'Physics', 6 + q_idx);
            q_id := v_phy_num[1 + ((i * 4 + q_idx - 1) % array_length(v_phy_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Physics Sec III (Numerical)', 4, 0.00, 'Physics', 12 + q_idx);

            q_id := v_chem_scq[1 + ((i * 2 + q_idx - 1) % array_length(v_chem_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Chemistry Sec I (SCQ)', 3, 1.00, 'Chemistry', 18 + q_idx);
            q_id := v_chem_msq[1 + ((i * 3 + q_idx - 1) % array_length(v_chem_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Chemistry Sec II (MSQ)', 4, 2.00, 'Chemistry', 24 + q_idx);
            q_id := v_chem_num[1 + ((i * 4 + q_idx - 1) % array_length(v_chem_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Chemistry Sec III (Numerical)', 4, 0.00, 'Chemistry', 30 + q_idx);

            q_id := v_math_scq[1 + ((i * 2 + q_idx - 1) % array_length(v_math_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Mathematics Sec I (SCQ)', 3, 1.00, 'Mathematics', 36 + q_idx);
            q_id := v_math_msq[1 + ((i * 3 + q_idx - 1) % array_length(v_math_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Mathematics Sec II (MSQ)', 4, 2.00, 'Mathematics', 42 + q_idx);
            q_id := v_math_num[1 + ((i * 4 + q_idx - 1) % array_length(v_math_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_test_id, q_id, 'Mathematics Sec III (Numerical)', 4, 0.00, 'Mathematics', 48 + q_idx);
        END LOOP;
    END LOOP;
END $$;
