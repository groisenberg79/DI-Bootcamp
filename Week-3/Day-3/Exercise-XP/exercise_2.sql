-- ITEM 1
-- UPDATE film SET language_id = (SELECT language_id FROM language WHERE name = 'French')
-- WHERE (title = 'Chamber Italian') or (title = 'Airport Pollock') or (title = 'Adaptation Holes')

-- ITEM 2
-- Answer: the customer_address_id is a foreign key. Thus when we INSERT INTO the customer table,
-- we have to make a query on the address table to obtain address_id:
-- SELECT address_id from address WHERE <some contraint>)

-- ITEM 3
-- Answer: we need to check first if it is a parent table for another table. Since it is not,
-- we can drop it without fearing it will modify any other table.
-- DROP TABLE customer_review

-- ITEM 4
-- SELECT COUNT(*) FROM rental WHERE return_date IS NULL

--ITEM 5
-- SELECT 
-- 	film.title, film.replacement_cost, rental.return_date FROM film
-- RIGHT OUTER JOIN 
-- 	inventory ON film.film_id = inventory.film_id
-- RIGHT OUTER JOIN
-- 	rental ON inventory.inventory_id = rental.inventory_id
-- WHERE 
-- 	rental.return_date IS NULL
-- ORDER BY 
-- 	film.replacement_cost DESC
-- LIMIT 30

-- ITEM 6

-- 1ST FILM

-- SELECT 
-- 	film.title, actor.first_name, actor.last_name FROM film
-- INNER JOIN 
-- 	film_actor ON film.film_id = film_actor.film_id
-- INNER JOIN 
-- 	actor ON film_actor.actor_id = actor.actor_id
-- WHERE actor.first_name = 'Penelope' 
-- 	AND actor.last_name = 'Monroe' 
-- 	AND film.description ILIKE '%sumo%wrestler%'

-- 2ND FILM

-- SELECT 
-- 	film.title, film.length, film.rating, category.name FROM film
-- INNER JOIN 
-- 	film_category ON film.film_id = film_category.film_id
-- INNER JOIN
-- 	category ON category.category_id = film_category.category_id
-- WHERE 
-- 	film.rating = 'R' AND film.length < 60 AND category.name = 'Documentary'

-- 3RD FILM

-- SELECT 
-- 	film.title, film.rental_rate, rental.return_date FROM film
-- INNER JOIN 
-- 	inventory ON inventory.film_id = film.film_id
-- INNER JOIN
-- 	rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN
-- 	customer ON customer.customer_id = rental.customer_id
-- WHERE
-- 	customer.first_name = 'Matthew' 
-- 	AND customer.last_name = 'Mahan' 
-- 	AND film.rental_rate > 4.00
-- 	AND rental.return_date <= '2005-08-01'
-- 	AND rental.return_date >= '2005-07-28'

-- 4TH FILM

-- SELECT 
-- 	film.title, film.replacement_cost FROM film
-- INNER JOIN 
-- 	inventory ON inventory.film_id = film.film_id
-- INNER JOIN
-- 	rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN
-- 	customer ON customer.customer_id = rental.customer_id
-- WHERE
-- 	customer.first_name = 'Matthew'
-- 	AND customer.last_name = 'Mahan'
-- 	AND (film.description ILIKE '%boat%' OR film.title ILIKE '%boat%')
-- ORDER BY film.replacement_cost DESC
-- LIMIT 1