-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS views (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  content_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_views_content_id (content_id),
  INDEX idx_views_user_id (user_id)
);

ALTER TABLE views 
  ADD CONSTRAINT fk_views_content_id
  FOREIGN KEY (content_id) 
  REFERENCES contents(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE views
  ADD CONSTRAINT fk_views_user_id
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE views DROP FOREIGN KEY fk_views_content_id;
ALTER TABLE views DROP FOREIGN KEY fk_views_user_id;

DROP TABLE IF EXISTS views;
