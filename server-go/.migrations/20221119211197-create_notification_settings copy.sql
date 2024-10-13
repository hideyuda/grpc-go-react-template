
-- ユーザーのメディア情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS notification_settings (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  user_id INT NOT NULL,
  followed BOOLEAN NOT NULL DEFAULT TRUE, -- フォロー通知
  liked BOOLEAN NOT NULL DEFAULT TRUE, -- いいね通知
  commented BOOLEAN NOT NULL DEFAULT TRUE, -- コメント通知
  chated BOOLEAN NOT NULL DEFAULT TRUE, -- チャット通知
  liking_content_discounted BOOLEAN NOT NULL DEFAULT TRUE, -- いいねした商品が割引通知
  liking_content_commented BOOLEAN NOT NULL DEFAULT TRUE, -- いいねした商品が割引通知
  following_user_new BOOLEAN NOT NULL DEFAULT TRUE, -- フォローしたユーザーが新規投稿通知

  news BOOLEAN NOT NULL DEFAULT TRUE, -- ニュース通知
  event BOOLEAN NOT NULL DEFAULT TRUE, -- イベント通知
  coupon BOOLEAN NOT NULL DEFAULT TRUE, -- クーポン通知
  update BOOLEAN NOT NULL DEFAULT TRUE, -- アップデート通知

  email_followed BOOLEAN NOT NULL DEFAULT TRUE, -- フォロー通知
  email_liked BOOLEAN NOT NULL DEFAULT TRUE, -- いいね通知
  email_commented BOOLEAN NOT NULL DEFAULT TRUE, -- コメント通知
  email_chated BOOLEAN NOT NULL DEFAULT TRUE, -- チャット通知
  email_liking_content_discounted BOOLEAN NOT NULL DEFAULT TRUE, -- いいねした商品が割引通知
  email_liking_content_commented BOOLEAN NOT NULL DEFAULT TRUE, -- いいねした商品が割引通知
  email_following_user_new BOOLEAN NOT NULL DEFAULT TRUE, -- フォローしたユーザーが新規投稿通知

  email_news BOOLEAN NOT NULL DEFAULT TRUE, -- ニュース通知
  email_event BOOLEAN NOT NULL DEFAULT TRUE, -- イベント通知
  email_coupon BOOLEAN NOT NULL DEFAULT TRUE, -- クーポン通知
  email_update BOOLEAN NOT NULL DEFAULT TRUE, -- アップデート通知
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id),
  INDEX idx_notification_settings_user_id (user_id)
);

ALTER TABLE notification_settings
  ADD CONSTRAINT fk_notification_settings_user_id
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE notification_settings DROP FOREIGN KEY fk_notification_settings_user_id;
DROP TABLE IF EXISTS notification_settings;