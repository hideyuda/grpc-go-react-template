-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS asps (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  content_id INT NOT NULL,
  user_id INT NOT NULL,
  service INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id),
  INDEX idx_asps_content_id (content_id),
  INDEX idx_asps_user_id (user_id)
);

ALTER TABLE asps 
  ADD CONSTRAINT fk_asps_content_id
  FOREIGN KEY (content_id) 
  REFERENCES contents(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE asps
  ADD CONSTRAINT fk_asps_user_id
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE asps DROP FOREIGN KEY fk_asps_content_id;
ALTER TABLE asps DROP FOREIGN KEY fk_asps_user_id;

DROP TABLE IF EXISTS asps;
