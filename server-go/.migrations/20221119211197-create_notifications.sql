-- ユーザー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS notifications (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  send_user_id INT NOT NULL,
  receive_user_id INT NOT NULL,
  type INT NOT NULL DEFAULT 0,
  topic VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT FALSE, -- 既読かどうか
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_notifications_send_user_id (send_user_id),
  INDEX idx_notifications_receive_user_id (receive_user_id)
);

ALTER TABLE notifications
  ADD CONSTRAINT fk_notifications_send_user_id
  FOREIGN KEY (send_user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE notifications
  ADD CONSTRAINT fk_notifications_receive_user_id
  FOREIGN KEY (receive_user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE notifications DROP FOREIGN KEY fk_notifications_send_user_id;
ALTER TABLE notifications DROP FOREIGN KEY fk_notifications_receive_user_id;

DROP TABLE IF EXISTS notifications;
