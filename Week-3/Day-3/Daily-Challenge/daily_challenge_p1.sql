-- ITEM 1

-- CREATE TABLE customer(
-- id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50)NOT NULL,
-- last_name VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE customer_profile(
-- id SERIAL PRIMARY KEY,
-- isLoggedIn BOOLEAN DEFAULT FALSE,
-- customer_id SERIAL,
-- CONSTRAINT fk_customer_id
-- 	FOREIGN KEY (customer_id)
-- 		REFERENCES customer (id)
-- )

-- ITEM 2
-- INSERT INTO 
-- 	customer (first_name, last_name)
-- VALUES
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lau'),
-- 	('Lea', 'Rive')

-- ITEM 3
-- INSERT INTO
-- 	customer_profile (isLoggedIn, customer_id)
-- VALUES
-- 	(TRUE, (SELECT customer.id FROM customer WHERE customer.first_name = 'John')),
-- 	(FALSE, (SELECT customer.id FROM customer WHERE customer.first_name = 'Jerome'))

-- ITEM 4

-- SELECT 
-- 	customer.first_name FROM customer
-- INNER JOIN 
-- 	customer_profile ON customer_profile.customer_id = customer.id
-- WHERE
-- 	customer_profile.isLoggedIn = TRUE

-- SELECT 
-- 	c.first_name, cprof.isLoggedIn FROM customer AS c
-- FULL JOIN
-- 	customer_profile AS cprof
-- ON c.id = cprof.customer_id

-- SELECT 
-- 	COUNT(*) FROM customer as c
-- FULL JOIN
-- 	customer_profile AS cprof ON c.id = cprof.customer_id
-- WHERE
-- 	cprof.isLoggedIn IS NULL
	


