-- table for reviews
-- +migrate Up
CREATE TABLE IF NOT EXISTS reviews (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  content_id INT NOT NULL,
  user_id INT NOT NULL,
  star INT NOT NULL DEFAULT 0,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  purchased_at DATETIME NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_reviews_content_id (content_id),
  INDEX idx_reviews_user_id (user_id)
);

ALTER TABLE reviews 
  ADD CONSTRAINT fk_reviews_content_id
  FOREIGN KEY (content_id) 
  REFERENCES contents(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE reviews
  ADD CONSTRAINT fk_reviews_user_id
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE reviews DROP FOREIGN KEY fk_reviews_content_id;
ALTER TABLE reviews DROP FOREIGN KEY fk_reviews_user_id;

DROP TABLE IF EXISTS reviews;
