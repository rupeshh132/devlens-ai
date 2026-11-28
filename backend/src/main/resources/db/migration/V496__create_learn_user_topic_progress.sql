-- Cross-device cloud persistence for student Syllabus Topic completion checklist
CREATE TABLE IF NOT EXISTS learn_user_topic_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES learn_users(id) ON DELETE CASCADE,
    topic_id VARCHAR(160) NOT NULL,
    exam_goal VARCHAR(80),
    completed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_learn_user_topic_progress UNIQUE (user_id, topic_id)
);

CREATE INDEX IF NOT EXISTS idx_learn_user_topic_progress_user
    ON learn_user_topic_progress(user_id);
