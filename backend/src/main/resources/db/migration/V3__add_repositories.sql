CREATE TABLE repositories (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    owner VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    branch VARCHAR(255) NOT NULL,
    visibility VARCHAR(50) NOT NULL,
    provider VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    user_id UUID NOT NULL,
    created_at TIMESTAMP(6) NOT NULL,
    updated_at TIMESTAMP(6) NOT NULL,
    
    CONSTRAINT fk_repositories_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
