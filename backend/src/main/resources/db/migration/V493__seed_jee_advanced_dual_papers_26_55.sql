-- V493__seed_jee_advanced_dual_papers_26_55.sql
-- Completes Dual-Paper IIT JEE Advanced Series Set 26..55 (30 Pairs = 60 Full IIT Papers: Paper 1 + Paper 2)
-- Combined with V492 (50 Papers) => 110 Full-Length Dual-Paper IIT Simulation Papers (55 Pairs).

DO $$
DECLARE
    v_adv_id UUID;
    i INT;
    q_idx INT;
    v_pair_id UUID;
    v_p1_id UUID;
    v_p2_id UUID;

    v_phy_scq UUID[]; v_phy_msq UUID[]; v_phy_num UUID[];
    v_chem_scq UUID[]; v_chem_msq UUID[]; v_chem_num UUID[];
    v_math_scq UUID[]; v_math_msq UUID[]; v_math_num UUID[];
    q_id UUID;
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

    FOR i IN 26..55 LOOP
        v_pair_id := ('40100000-0000-4000-8000-' || LPAD(i::text, 12, '0'))::uuid;
        v_p1_id   := ('40101000-0000-4000-8000-' || LPAD(((i - 1) * 2 + 1)::text, 12, '0'))::uuid;
        v_p2_id   := ('40101000-0000-4000-8000-' || LPAD(((i - 1) * 2 + 2)::text, 12, '0'))::uuid;

        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, paper_pair_id, paper_number, syllabus_version)
        VALUES (
            v_p1_id, v_adv_id,
            'JEE Advanced 2026 Dual-Paper Series Set ' || i || ' — Paper 1 (Morning Session)',
            180, 198, 1.00, false,
            'Full Syllabus (PCM)', 'FULL', 'JEE Advanced',
            'IIT Paper 1 (54 Qs / 198 Marks / 180 Mins): Per Subject -> 6 SCQ (+3/-1), 6 IIT_MSQ Partial (+4/+3/+2/+1/-2), 6 Numerical (+4/0).',
            'IIT Paper 1: Phy 18 + Chem 18 + Math 18 (SCQ + MSQ + Num) = 198M',
            v_pair_id, 1, 'IIT_ADV_2026'
        );

        INSERT INTO learn_mock_tests (id, exam_type_id, title, duration_mins, total_marks, negative_marking, is_free, subject, test_type, class_level, instructions, blueprint_json, paper_pair_id, paper_number, syllabus_version)
        VALUES (
            v_p2_id, v_adv_id,
            'JEE Advanced 2026 Dual-Paper Series Set ' || i || ' — Paper 2 (Afternoon Session)',
            180, 198, 1.00, false,
            'Full Syllabus (PCM)', 'FULL', 'JEE Advanced',
            'IIT Paper 2 (54 Qs / 198 Marks / 180 Mins): Per Subject -> 6 Paragraph/Matrix/SCQ (+3/-1), 6 IIT_MSQ Partial (+4/+3/+2/+1/-2), 6 Decimal Numerical (+4/0).',
            'IIT Paper 2: Phy 18 + Chem 18 + Math 18 (Para/Matrix + MSQ + Num) = 198M',
            v_pair_id, 2, 'IIT_ADV_2026'
        );

        FOR q_idx IN 1..6 LOOP
            q_id := v_phy_scq[1 + ((i * 2 + q_idx - 1) % array_length(v_phy_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p1_id, q_id, 'Physics Sec I (SCQ)', 3, 1.00, 'Physics', q_idx);
            q_id := v_phy_msq[1 + ((i * 3 + q_idx - 1) % array_length(v_phy_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p1_id, q_id, 'Physics Sec II (MSQ)', 4, 2.00, 'Physics', 6 + q_idx);
            q_id := v_phy_num[1 + ((i * 4 + q_idx - 1) % array_length(v_phy_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p1_id, q_id, 'Physics Sec III (Numerical)', 4, 0.00, 'Physics', 12 + q_idx);

            q_id := v_chem_scq[1 + ((i * 2 + q_idx - 1) % array_length(v_chem_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p1_id, q_id, 'Chemistry Sec I (SCQ)', 3, 1.00, 'Chemistry', 18 + q_idx);
            q_id := v_chem_msq[1 + ((i * 3 + q_idx - 1) % array_length(v_chem_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p1_id, q_id, 'Chemistry Sec II (MSQ)', 4, 2.00, 'Chemistry', 24 + q_idx);
            q_id := v_chem_num[1 + ((i * 4 + q_idx - 1) % array_length(v_chem_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p1_id, q_id, 'Chemistry Sec III (Numerical)', 4, 0.00, 'Chemistry', 30 + q_idx);

            q_id := v_math_scq[1 + ((i * 2 + q_idx - 1) % array_length(v_math_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p1_id, q_id, 'Mathematics Sec I (SCQ)', 3, 1.00, 'Mathematics', 36 + q_idx);
            q_id := v_math_msq[1 + ((i * 3 + q_idx - 1) % array_length(v_math_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p1_id, q_id, 'Mathematics Sec II (MSQ)', 4, 2.00, 'Mathematics', 42 + q_idx);
            q_id := v_math_num[1 + ((i * 4 + q_idx - 1) % array_length(v_math_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p1_id, q_id, 'Mathematics Sec III (Numerical)', 4, 0.00, 'Mathematics', 48 + q_idx);

            -- Paper 2
            q_id := v_phy_scq[1 + ((i * 2 + q_idx + 6) % array_length(v_phy_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p2_id, q_id, 'Physics Sec I (Para/Matrix/SCQ)', 3, 1.00, 'Physics', q_idx);
            q_id := v_phy_msq[1 + ((i * 3 + q_idx + 6) % array_length(v_phy_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p2_id, q_id, 'Physics Sec II (MSQ)', 4, 2.00, 'Physics', 6 + q_idx);
            q_id := v_phy_num[1 + ((i * 4 + q_idx + 6) % array_length(v_phy_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p2_id, q_id, 'Physics Sec III (Numerical)', 4, 0.00, 'Physics', 12 + q_idx);

            q_id := v_chem_scq[1 + ((i * 2 + q_idx + 6) % array_length(v_chem_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p2_id, q_id, 'Chemistry Sec I (Para/Matrix/SCQ)', 3, 1.00, 'Chemistry', 18 + q_idx);
            q_id := v_chem_msq[1 + ((i * 3 + q_idx + 6) % array_length(v_chem_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p2_id, q_id, 'Chemistry Sec II (MSQ)', 4, 2.00, 'Chemistry', 24 + q_idx);
            q_id := v_chem_num[1 + ((i * 4 + q_idx + 6) % array_length(v_chem_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p2_id, q_id, 'Chemistry Sec III (Numerical)', 4, 0.00, 'Chemistry', 30 + q_idx);

            q_id := v_math_scq[1 + ((i * 2 + q_idx + 6) % array_length(v_math_scq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p2_id, q_id, 'Mathematics Sec I (Para/Matrix/SCQ)', 3, 1.00, 'Mathematics', 36 + q_idx);
            q_id := v_math_msq[1 + ((i * 3 + q_idx + 6) % array_length(v_math_msq, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p2_id, q_id, 'Mathematics Sec II (MSQ)', 4, 2.00, 'Mathematics', 42 + q_idx);
            q_id := v_math_num[1 + ((i * 4 + q_idx + 6) % array_length(v_math_num, 1))];
            INSERT INTO learn_test_questions (mock_test_id, question_id, section_name, marks, negative_marks, subject_label, order_index) VALUES (v_p2_id, q_id, 'Mathematics Sec III (Numerical)', 4, 0.00, 'Mathematics', 48 + q_idx);
        END LOOP;
    END LOOP;
END $$;
