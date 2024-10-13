-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS content_sub_categories (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  content_id INT NOT NULL,
  sub_category INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_content_sub_categories_content_id (content_id)
);

ALTER TABLE content_sub_categories 
  ADD CONSTRAINT fk_content_sub_categories_content_id
  FOREIGN KEY (content_id) 
  REFERENCES contents(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE content_sub_categories DROP FOREIGN KEY fk_content_sub_categories_content_id;

DROP TABLE IF EXISTS content_sub_categories;
