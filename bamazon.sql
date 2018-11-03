DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INTEGER(100) NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("oil cleanser", "skin care", 10.50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gel cleanser", "skin care", 9.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toner", "skin care", 15.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("moisturizer", "skin care", 50.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paddleboard", "outdoor gear", 950.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paddle", "outdoor gear", 20.22, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hiking boots", "outdoor gear", 75.80, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("flask", "outdoor gear", 6.25, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("nerd ropes", "candy", 2.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ring pop", "candy", 1.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mystery airhead", "candy", 0.75, 63);


