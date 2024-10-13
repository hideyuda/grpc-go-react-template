-- table for following users
-- +migrate Up
CREATE TABLE IF NOT EXISTS followings (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  following_user_id INT NOT NULL,
  followed_user_id INT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_followings_following_user_id (following_user_id),
  INDEX idx_followings_followed_user_id (followed_user_id)
);

ALTER TABLE followings
  ADD CONSTRAINT fk_followings_following_user_id
  FOREIGN KEY (following_user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE followings
  ADD CONSTRAINT fk_followings_followed_user_id
  FOREIGN KEY (followed_user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE followings DROP FOREIGN KEY fk_followings_following_user_id;
ALTER TABLE followings DROP FOREIGN KEY fk_followings_followed_user_id;

DROP TABLE IF EXISTS followings;
