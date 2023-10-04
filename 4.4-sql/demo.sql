
-- two dashes are how you do a comment in SQL
CREATE TABLE items(
	id SERIAL PRIMARY KEY,
	item_name TEXT NOT NULL,
	description TEXT,
	completed BOOLEAN DEFAULT false,
	created TIMESTAMPTZ DEFAULT now()
);

DROP TABLE IF EXISTS items;

-- C of CRUD: create
-- add data into our table
-- define which columns we're providing data for, then provide that data
INSERT INTO items (item_name, description) VALUES ('yogurt', 'the big bucket from costco');

-- can insert many rows with a single insert query, like this
INSERT INTO items 
  (item_name, description)
VALUES 
  ('Avocados', 'avocado mash'),
  ('Orange juice', 'not just for breakfast'),
  ('Ice Cream', 'Ben & Jerry''s'),
  ('Oil Change', 'stop at dealership'),
  ('Cat Food', null),
  ('Sun Glasses', 'for vacation'),
  ('Dark roast', 'nectar of the gods'),
  ('Running Shoes', null),
  ('Espresso', 'nectar of the gods'),
  ('Merlot', 'for dinner');
 
-- PostgreSQL will error if we try to violate a constraint
INSERT INTO items (item_name, description) VALUES (null, 'the null item');

INSERT INTO items (item_name, description) VALUES ('null', 'the null item');

----------- afternoon lecture!

-- the R of CRUD : read
SELECT * FROM items;
-- only get specific columns by naming them
SELECT id, item_name FROM items;
-- only get some rows by using a WHERE clause
SELECT * FROM items WHERE id > 7;
-- you can combine these two fun things
SELECT item_name, created FROM items WHERE description IS NULL;

-- the U of CRUD: update
-- by default, if you do not include a WHERE clause, an update will apply to EVERY ROW OF YOUR TABLE
-- THIS IS DANGEROUS AND BAD
UPDATE items SET description = 'delicious';
UPDATE items SET description = 'yum' WHERE id = 1;

-- the D of CRUD: delete
DELETE FROM items WHERE id = 13;


-- products adventures
SELECT * FROM products WHERE aisle = 'coffee';

SELECT DISTINCT aisle FROM products ORDER BY aisle;

SELECT COUNT(DISTINCT aisle) FROM products;
SELECT COUNT(*) FROM products;

-- LIKE syntax: surround the substring we're looking for with percent signs
-- LIKE is case-sensitive; ILIKE is case Insensitive
SELECT * FROM products WHERE aisle='tea' AND price > 30 AND price < 35 AND product_name ILIKE '%herbal%';

SELECT * FROM products WHERE department LIKE '%pet%';

SELECT * FROM products WHERE department = 'pets' ORDER BY price DESC;

-- GROUP BY is good for bucketing - take all the things where that column matches and count them together
SELECT COUNT(*), department FROM products GROUP BY department;

-- How many products with "canned" in name but not in an aisle containing "canned"?
SELECT COUNT(*) FROM products WHERE product_name ILIKE '%canned%' AND aisle NOT ILIKE '%canned%';

--What's the average cost of all products by dept (rounded to 2 decimals), sorted from lowest to highest?
SELECT AVG(price), department FROM products GROUP BY department;
SELECT ROUND(AVG(price), 2) averagePrice, department FROM products GROUP BY department;
SELECT ROUND(AVG(price), 2) averagePrice, department 
	FROM products 
	GROUP BY department 
	ORDER BY averagePrice;
