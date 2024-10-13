-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS billings (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  user_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  number INT NOT NULL DEFAULT 0,
  password VARCHAR(100) NOT NULL,
  expiration_year INT NOT NULL,
  expiration_month INT NOT NULL,
  security_code INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  service INT NOT NULL DEFAULT 0,
  is_registered BOOLEAN NOT NULL DEFAULT FALSE,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id),
  INDEX idx_billings_user_id (user_id)
);

ALTER TABLE billings 
  ADD CONSTRAINT fk_billings_user_id
  FOREIGN KEY (user_id) 
  REFERENCES users(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE billings DROP FOREIGN KEY fk_billings_user_id;

DROP TABLE IF EXISTS billings;
