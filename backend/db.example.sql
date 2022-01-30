-- Utilizar como referência para migrations e seeds

-- 'estoque-TXAI'

DROP DATABASE IF EXISTS `estoque-TXAI`;
CREATE DATABASE IF NOT EXISTS `estoque-TXAI`;

USE `estoque-TXAI`;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(32) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'customer',
  PRIMARY KEY (id),
  UNIQUE KEY `email` (email)
);

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INTEGER NOT NULL,
  PRIMARY KEY(id),
  UNIQUE KEY `name` (name)
  FOREIGN KEY (userId) REFERENCES users(id),
);

INSERT INTO users (id, name, email, password, role) VALUES
  (1, 'sistematxai', 'adm@deliveryapp.com', '123456789', 'administrator'),
  (2, 'Fulana Pereira', 'fulana@deliveryapp.com', '12345678', 'customer'),
  (3, 'Cliente Zé Birita', 'zebirita@email.com', '123456', 'customer');
    
