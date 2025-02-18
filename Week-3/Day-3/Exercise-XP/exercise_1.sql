-- ITEM 1
-- SELECT * FROM language

-- ITEM 2
-- SELECT f.title, f.description, l.name
-- FROM film AS f
-- INNER JOIN language AS l
-- ON f.language_id = l.language_id

-- ITEM 3
-- SELECT f.title, f.description, l.name
-- FROM film AS f
-- RIGHT JOIN language AS l
-- ON f.language_id = l.language_id

-- 4.Create a new table called new_film with the following columns :
-- id, name. Add some new films to the table.

-- ITEM 4
-- CREATE TABLE new_film (
-- film_id SERIAL PRIMARY KEY,
-- name VARCHAR(100)
-- )

-- INSERT INTO new_film (name) VALUES 
-- ('The Wonderful Life of Norman Bates'),
-- ('Billy the Crackhead'),
-- ('Flatulence: A Story')

-- ITEM 5
-- CREATE TABLE customer_review (
-- review_id SERIAL NOT NULL PRIMARY KEY,
-- film_id INTEGER REFERENCES new_film (film_id) ON DELETE CASCADE,
-- language_id INTEGER REFERENCES language (language_id),
-- title VARCHAR(100),
-- score SMALLINT,
-- review_text TEXT,
-- last_update DATE
-- )

-- ITEM 6
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES(
-- (SELECT film_id FROM new_film WHERE name = 'The Wonderful Life of Norman Bates'),
-- (SELECT language_id FROM language WHERE name = 'English'),
-- 'Wonderful Indeed!',
-- 10,
-- 'I began watching "The Wonderful Life of Norman Bates" with some trepidation,
-- given the bad fame that follows the guy, but I soon realized my uneasiness was unjustified.
-- Norman is a cool dude -- yeah, he dresses like his dead mom and goes on killing sprees, but ...
-- Cmon, can we give him a break? The movie is very fair, and shows the real Norman Bates --
-- a sweet, shy kid who eventually messses up, but ultimately does what he does out of the 
-- goodness of his kind heart. Ive already booked a room in his motel, and he told me he has 
-- a "very nice surprise" for me when I arrive there ... Cant wait!',
-- '05/05/2024'
-- )

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES(
-- (SELECT film_id FROM new_film WHERE name = 'Billy the Crackhead'),
-- (SELECT language_id FROM language WHERE name = 'Mandarin'),
-- 'Terrible',
-- 1,
-- 'A cheap imitation of the Kurosawas "Rashomon", but only set in Guadalajara, Mexico, in
-- the 70s. Dont waste your time.',
-- '05/06/2024'
-- )

-- ITEM 7
-- DELETE FROM new_film WHERE name = 'Billy the Crackhead'
-- SELECT * FROM customer_review

-- Answer: there's only one row in customer_review now.
-- Explanation: this happens because film_id was set ON DELETE CASCADE.
