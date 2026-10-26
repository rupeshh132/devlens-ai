-- V42: Relax NOT NULL constraint on affiliate_user_id in learn_affiliate_ledger
-- Allows sales driven by direct platform marketing promo codes (where affiliate_user_id IS NULL)
-- to be recorded in the ledger without violating database constraints.

ALTER TABLE learn_affiliate_ledger ALTER COLUMN affiliate_user_id DROP NOT NULL;

CREATE INDEX IF NOT EXISTS idx_affiliate_ledger_promo_str ON learn_affiliate_ledger(promo_code_str);
