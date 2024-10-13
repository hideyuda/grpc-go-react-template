-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS points (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  user_id INT NOT NULL,
  point INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id),
  INDEX idx_points_user_id (user_id)
);

ALTER TABLE points 
  ADD CONSTRAINT fk_points_user_id
  FOREIGN KEY (user_id) 
  REFERENCES users(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE points DROP FOREIGN KEY fk_points_user_id;

DROP TABLE IF EXISTS points;
