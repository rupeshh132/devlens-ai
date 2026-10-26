ALTER TABLE enrollment ADD CONSTRAINT uq_enrollment_user_course UNIQUE (user_id, course_id);

CREATE INDEX idx_module_course_id ON module(course_id);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_enrollment_user_id ON enrollment(user_id);
