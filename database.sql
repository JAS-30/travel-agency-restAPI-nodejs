CREATE DATABASE orizon;

CREATE TABLE orizon.user(
    user_id INT AUTO_INCREMENT KEY,
first_name VARCHAR(30) NOT NULL,
surname VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL
);

CREATE TABLE orizon.product(
product_name VARCHAR(100) NOT NULL,
product_id INT AUTO_INCREMENT KEY
);

CREATE TABLE orizon.orders(
order_id INT NOT NULL,
user_id INT NOT NULL,
user_name VARCHAR(30) NOT NULL,
user_surname VARCHAR(30) NOT NULL,
user_email VARCHAR(50) NOT NULL,
product VARCHAR(100) NOT NULL
);