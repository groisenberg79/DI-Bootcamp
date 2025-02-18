-- ITEM 1
-- SELECT * FROM customer

-- ITEM 2
-- SELECT first_name, last_name FROM customer AS full_name

-- ITEM 3
-- SELECT DISTINCT create_date FROM customer

-- ITEM 4
-- SELECT * FROM customer
-- ORDER BY first_name DESC

-- ITEM 5
-- SELECT film_id, title, description, release_year, rental_rate FROM film
-- ORDER BY rental_rate ASC

-- ITEM 6
-- SELECT address, phone FROM address
-- WHERE district = 'Texas'

-- ITEM 7
-- SELECT * FROM film WHERE film_id = 15 or film_id = 150

-- ITEM 8
-- SELECT film_id, title, description, length, rental_rate FROM film

-- ITEM 9
-- SELECT film_id, title, description, length, rental_rate FROM film
-- WHERE title LIKE 'De%'

-- ITEM 10
-- SELECT * FROM film
-- ORDER BY rental_rate ASC LIMIT 10

-- ITEM 11
-- SELECT * FROM film
-- ORDER BY rental_rate LIMIT 10 OFFSET 10

-- ITEM 12
-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- JOIN payment
-- ON customer.customer_id = payment.customer_id
-- ORDER BY customer.customer_id ASC

-- ITEM 13
-- SELECT film.title FROM film 
-- LEFT OUTER JOIN inventory
-- ON inventory.film_id = film.film_id
-- WHERE inventory.film_id IS NULL

-- ITEM 14
-- SELECT city.city, country.country FROM city
-- JOIN country
-- ON city.country_id = country.country_id


