-- V466: Clean up legacy non-80M diagnostic placeholder for Class 9 and fix class_level metadata on other diagnostic tests

UPDATE learn_mock_tests
SET class_level = 'Class 10'
WHERE id = 'a1010101-0000-0000-0000-000000000010' AND class_level = 'Class 9';

UPDATE learn_mock_tests
SET class_level = 'Class 11'
WHERE id = 'a1111111-0000-0000-0000-000000000011' AND class_level = 'Class 9';

UPDATE learn_mock_tests
SET class_level = 'Class 12'
WHERE id = 'a1212121-0000-0000-0000-000000000012' AND class_level = 'Class 9';

UPDATE learn_mock_tests
SET class_level = 'JEE Mains'
WHERE id = 'a2222222-0000-0000-0000-000000000022' AND class_level = 'Class 9';

UPDATE learn_mock_tests
SET class_level = 'NEET UG'
WHERE id = 'a3333333-0000-0000-0000-000000000033' AND class_level = 'Class 9';

-- Remove legacy 2-question 50-mark placeholder from Class 9 so 100% of Class 9 papers are authentic 80-mark papers
DELETE FROM learn_test_attempts
WHERE mock_test_id = 'a0909090-0000-0000-0000-000000000009';

DELETE FROM learn_test_questions
WHERE mock_test_id = 'a0909090-0000-0000-0000-000000000009';

DELETE FROM learn_mock_tests
WHERE id = 'a0909090-0000-0000-0000-000000000009';
