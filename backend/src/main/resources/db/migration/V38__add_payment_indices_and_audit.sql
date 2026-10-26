-- =========================================================================
-- V38: Add Payment Indices and Admin Audit Columns
-- Enables 360° Billing Command Center and unified webhook processing
-- =========================================================================

-- Performance indices for webhook and status lookups
CREATE INDEX IF NOT EXISTS idx_learn_transactions_order_id ON learn_transactions(razorpay_order_id);
CREATE INDEX IF NOT EXISTS idx_learn_transactions_user_id ON learn_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_learn_transactions_status ON learn_transactions(status);
CREATE INDEX IF NOT EXISTS idx_payment_transaction_status ON payment_transaction(status);

-- Admin verification and audit columns for Learn Transactions
ALTER TABLE learn_transactions
    ADD COLUMN IF NOT EXISTS verified_by_admin_id UUID REFERENCES users(id),
    ADD COLUMN IF NOT EXISTS admin_notes TEXT,
    ADD COLUMN IF NOT EXISTS refund_status VARCHAR(30) DEFAULT 'NONE',
    ADD COLUMN IF NOT EXISTS payment_method VARCHAR(50);

-- Admin verification and audit columns for LMS Payment Transactions
ALTER TABLE payment_transaction
    ADD COLUMN IF NOT EXISTS verified_by_admin_id UUID REFERENCES users(id),
    ADD COLUMN IF NOT EXISTS admin_notes TEXT,
    ADD COLUMN IF NOT EXISTS refund_status VARCHAR(30) DEFAULT 'NONE';
