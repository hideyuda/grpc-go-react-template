-- オーダー情報を管理するテーブル
-- +migrate Up
CREATE TABLE IF NOT EXISTS orders (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  uuid VARCHAR(36) NOT NULL UNIQUE,
  content_id INT NOT NULL,
  billing_id INT NOT NULL,
  order_user_id INT NOT NULL,
  progress INT NOT NULL DEFAULT 0,
  service INT NOT NULL DEFAULT 0,
  price INT NOT NULL DEFAULT 0,
  asp_rate INT NOT NULL DEFAULT 0,
  via_asp BOOLEAN NOT NULL DEFAULT FALSE,
  used_point INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX idx_orders_content_id (content_id),
  INDEX idx_orders_billing_id (billing_id),
  INDEX idx_orders_order_user_id (order_user_id)
);

ALTER TABLE orders 
  ADD CONSTRAINT fk_orders_content_id
  FOREIGN KEY (content_id) 
  REFERENCES contents(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE orders
  ADD CONSTRAINT fk_orders_billing_id
  FOREIGN KEY (billing_id)
  REFERENCES billings(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE orders
  ADD CONSTRAINT fk_orders_order_user_id
  FOREIGN KEY (order_user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- +migrate Down
ALTER TABLE orders DROP FOREIGN KEY fk_orders_content_id;
ALTER TABLE orders DROP FOREIGN KEY fk_orders_order_user_id;

DROP TABLE IF EXISTS orders;
