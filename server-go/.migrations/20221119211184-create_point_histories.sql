-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS point_histories (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  order_id INT NOT NULL,
  user_id INT NOT NULL,
  progress INT NOT NULL DEFAULT 0,
  service INT NOT NULL DEFAULT 0,
  used_point INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id),
  INDEX idx_point_histories_order_id (order_id),
  INDEX idx_point_histories_user_id (user_id)
);

ALTER TABLE point_histories 
  ADD CONSTRAINT fk_point_histories_order_id
  FOREIGN KEY (order_id) 
  REFERENCES orders(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE point_histories 
  ADD CONSTRAINT fk_point_histories_user_id
  FOREIGN KEY (user_id) 
  REFERENCES users(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE point_histories DROP FOREIGN KEY fk_point_histories_order_id;
ALTER TABLE point_histories DROP FOREIGN KEY fk_point_histories_user_id;

DROP TABLE IF EXISTS point_histories;
