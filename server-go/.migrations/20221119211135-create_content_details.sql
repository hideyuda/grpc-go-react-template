-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS content_details (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  content_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  prompt TEXT NOT NULL,
  prompt_instruction TEXT NOT NULL,
  url VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id),
  INDEX idx_content_details_content_id (content_id)
);

ALTER TABLE content_details 
  ADD CONSTRAINT fk_content_details_content_id
  FOREIGN KEY (content_id) 
  REFERENCES contents(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE content_details DROP FOREIGN KEY fk_content_details_content_id;

DROP TABLE IF EXISTS content_details;
