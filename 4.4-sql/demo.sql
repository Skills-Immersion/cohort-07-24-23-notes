
-- two dashes are how you do a comment in SQL
CREATE TABLE items(
	id SERIAL PRIMARY KEY,
	item_name TEXT NOT NULL,
	description TEXT,
	completed BOOLEAN DEFAULT false,
	created TIMESTAMPTZ DEFAULT now()
);

DROP TABLE IF EXISTS items;

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