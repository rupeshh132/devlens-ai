-- V291__fix_chemistry_ch09_alkenes_url.sql
-- Fixes explicit starting timestamp '&t=0s' for Class 11 Chemistry Chapter 9 (Hydrocarbons: Alkenes)
UPDATE learn_content_items
SET content_url = 'https://www.youtube.com/watch?v=nGi3tGiKiv4&t=0s&end=1491s'
WHERE id = '65d29b56-0430-3109-0000-000000000006';
