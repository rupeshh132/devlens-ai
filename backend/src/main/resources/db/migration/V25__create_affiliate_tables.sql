-- Create Promo Codes Table
CREATE TABLE learn_promo_codes (
    id UUID PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    affiliate_user_id UUID NOT NULL,
    discount_percentage DECIMAL(5,2) NOT NULL,
    commission_percentage DECIMAL(5,2) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_promo_codes_code ON learn_promo_codes(code);
CREATE INDEX idx_promo_codes_affiliate ON learn_promo_codes(affiliate_user_id);

-- Create Affiliate Ledger Table
CREATE TABLE learn_affiliate_ledger (
    id UUID PRIMARY KEY,
    affiliate_user_id UUID NOT NULL,
    buyer_user_id UUID NOT NULL,
    transaction_id UUID NOT NULL,
    promo_code_id UUID NOT NULL,
    sale_amount DECIMAL(10,2) NOT NULL,
    gross_commission DECIMAL(10,2) NOT NULL,
    tds_amount DECIMAL(10,2) NOT NULL,
    net_payable DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING',
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_ledger_promo FOREIGN KEY (promo_code_id) REFERENCES learn_promo_codes(id)
);

CREATE INDEX idx_ledger_affiliate ON learn_affiliate_ledger(affiliate_user_id);
CREATE INDEX idx_ledger_status ON learn_affiliate_ledger(status);
