-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS clicks (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  content_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_clicks_content_id (content_id),
  INDEX idx_clicks_user_id (user_id)
);

ALTER TABLE clicks 
  ADD CONSTRAINT fk_clicks_content_id
  FOREIGN KEY (content_id) 
  REFERENCES contents(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE clicks
  ADD CONSTRAINT fk_clicks_user_id
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE clicks DROP FOREIGN KEY fk_clicks_content_id;
ALTER TABLE clicks DROP FOREIGN KEY fk_clicks_user_id;

DROP TABLE IF EXISTS clicks;
