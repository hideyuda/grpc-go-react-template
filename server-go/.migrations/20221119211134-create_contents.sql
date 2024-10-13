-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS contents (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  user_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  thumbnail VARCHAR(2000) NOT NULL,
  price INT NOT NULL DEFAULT 0,
  asp_rate INT NOT NULL DEFAULT 0,
  request_progress BOOLEAN NOT NULL DEFAULT FALSE, -- コンテンツの審査。false:未審査、true:審査済み
  is_open BOOLEAN NOT NULL DEFAULT FALSE, -- コンテンツの公開。false:非公開、true:公開
  like_count INT NOT NULL DEFAULT 0,
  share_count INT NOT NULL DEFAULT 0,
  asp_count INT NOT NULL DEFAULT 0,
  impression_count INT NOT NULL DEFAULT 0,
  view_count INT NOT NULL DEFAULT 0,
  click_couter INT NOT NULL DEFAULT 0,
  order_count INT NOT NULL DEFAULT 0,
  purchase_count INT NOT NULL DEFAULT 0,
  review_count INT NOT NULL DEFAULT 0,
  star_rate INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id),
  INDEX idx_contents_user_id (user_id)
);

ALTER TABLE contents 
  ADD CONSTRAINT fk_contents_user_id
  FOREIGN KEY (user_id) 
  REFERENCES users(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE contents DROP FOREIGN KEY fk_contents_user_id;

DROP TABLE IF EXISTS contents;
