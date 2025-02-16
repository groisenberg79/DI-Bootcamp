-- CREATE TABLE actors (
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Matt','Damon','08/10/1970', 5),
-- ('George','Clooney','06/05/1961', 2),
-- ('Gal', 'Gadot', '05/30/1985', 2),
-- ('Meryl', 'Streep', '06/22/1949', 21)

-- SELECT * FROM actors

-- SELECT COUNT(*) FROM actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Clint', 'Eastwood')

-- ERROR:  INSERT has more target columns than expressions
-- LINE 20: INSERT INTO actors (first_name, last_name, age, number_oscar...