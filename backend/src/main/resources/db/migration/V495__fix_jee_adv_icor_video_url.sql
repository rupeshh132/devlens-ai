-- V495__fix_jee_adv_icor_video_url.sql
-- Replaces the unavailable YouTube ID j4j2w7xK-tU with verified Rotational & Momentum lecture ID gIDn8NW3N6M
UPDATE learn_content_items
SET content_url = 'https://www.youtube.com/watch?v=gIDn8NW3N6M'
WHERE id = '65d29b56-3011-3016-0000-000000000001';
