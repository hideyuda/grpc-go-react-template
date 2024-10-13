-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  firebase_id VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone_number VARCHAR(50) NOT NULL,
  photo_url VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  type INT NOT NULL DEFAULT 0,
  description TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);

-- +migrate Down
DROP TABLE IF EXISTS users;
