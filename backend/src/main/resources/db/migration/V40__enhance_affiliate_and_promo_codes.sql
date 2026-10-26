-- V40: Enhance Affiliate and Promo Codes Schema
-- Allows platform-wide direct coupons, redemption tracking, partner metadata, and payout settlement audit

-- 1. Enhance learn_promo_codes
ALTER TABLE learn_promo_codes ALTER COLUMN affiliate_user_id DROP NOT NULL;

ALTER TABLE learn_promo_codes 
    ADD COLUMN IF NOT EXISTS max_redemptions INTEGER DEFAULT NULL,
    ADD COLUMN IF NOT EXISTS current_redemptions INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS expiry_date TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    ADD COLUMN IF NOT EXISTS description VARCHAR(255),
    ADD COLUMN IF NOT EXISTS partner_name VARCHAR(255),
    ADD COLUMN IF NOT EXISTS partner_email VARCHAR(255),
    ADD COLUMN IF NOT EXISTS partner_payout_upi VARCHAR(255);

CREATE INDEX IF NOT EXISTS idx_promo_codes_active ON learn_promo_codes(is_active);

-- 2. Enhance learn_affiliate_ledger
ALTER TABLE learn_affiliate_ledger
    ADD COLUMN IF NOT EXISTS promo_code_str VARCHAR(50),
    ADD COLUMN IF NOT EXISTS settled_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    ADD COLUMN IF NOT EXISTS settled_by_admin_id VARCHAR(255) DEFAULT NULL,
    ADD COLUMN IF NOT EXISTS payout_reference VARCHAR(255) DEFAULT NULL,
    ADD COLUMN IF NOT EXISTS payout_notes TEXT DEFAULT NULL;

-- 3. Seed Initial Promo Codes (Platform & Partner)
INSERT INTO learn_promo_codes (
    id, code, affiliate_user_id, discount_percentage, commission_percentage, 
    is_active, max_redemptions, current_redemptions, description, partner_name, partner_email, partner_payout_upi
)
VALUES 
    (gen_random_uuid(), 'WELCOME50', NULL, 50.00, 0.00, TRUE, 500, 14, '50% off introductory platform welcome coupon', 'DevLens Official', 'billing@devlens.ai', NULL),
    (gen_random_uuid(), 'PREP25', NULL, 25.00, 0.00, TRUE, 1000, 48, '25% off universal seasonal study discount', 'PrepLens Marketing', 'marketing@preplens.ai', NULL),
    (gen_random_uuid(), 'TOPPER10', NULL, 10.00, 10.00, TRUE, 200, 8, 'Affiliate partner coupon for Class 10/12 toppers', 'Aman Sharma', 'aman.topper@gmail.com', 'aman@oksbi')
ON CONFLICT (code) DO NOTHING;
