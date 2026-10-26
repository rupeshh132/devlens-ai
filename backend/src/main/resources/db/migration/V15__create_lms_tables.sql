CREATE TABLE course (
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL DEFAULT 0,
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE module (
    id UUID PRIMARY KEY,
    course_id UUID NOT NULL REFERENCES course(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    order_index INTEGER NOT NULL,
    content_url VARCHAR(1024),
    text_content TEXT,
    type VARCHAR(50) NOT NULL
);

CREATE TABLE enrollment (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES course(id) ON DELETE CASCADE,
    enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) NOT NULL
);

CREATE TABLE user_progress (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    module_id UUID NOT NULL REFERENCES module(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL,
    project_repo_url VARCHAR(1024),
    project_deploy_url VARCHAR(1024),
    mock_test_score INTEGER,
    rejection_reason TEXT,
    UNIQUE(user_id, module_id)
);

CREATE TABLE gamification_profile (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    total_points INTEGER NOT NULL DEFAULT 0,
    focus_fails INTEGER NOT NULL DEFAULT 0
);
