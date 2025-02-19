-- ITEM 1

-- CREATE TABLE book (
-- book_id SERIAL PRIMARY KEY,
-- title VARCHAR(100) NOT NULL,
-- author VARCHAR(50) NOT NULL
-- )

-- ITEM 2

-- INSERT INTO 
-- 	book (title, author)
-- VALUES
-- 	('Alice In Wonderland', 'Lewis Carroll'),
-- 	('Harry Potter', 'J.K Rowling'),
-- 	('To Kill a Mockingbird', 'Harper Lee')

-- ITEM 3

-- CREATE TABLE student (
-- student_id SERIAL PRIMARY KEY,
-- name VARCHAR(50) NOT NULL UNIQUE,
-- age SMALLINT CHECK (age <= 15)
-- )

-- ITEM 4

-- INSERT INTO
-- 	student (name, age)
-- VALUES
-- 	('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14)

-- ITEM 5

-- CREATE TABLE library (
-- book_fk_id INTEGER ,
-- student_fk_id INTEGER,
-- borrowed_date DATE,
-- PRIMARY KEY (book_fk_id, student_fk_id),
-- FOREIGN KEY (book_fk_id) REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- FOREIGN KEY (student_fk_id) REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )


-- ITEM 6

-- INSERT INTO 
-- 	library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES
-- 	((SELECT book.book_id FROM book WHERE book.title = 'Alice In Wonderland'),
-- 	(SELECT student.student_id FROM student WHERE student.name = 'John'),
-- 	'2022-02-15')
	
-- 	((SELECT book.book_id FROM book WHERE book.title = 'To Kill a Mockingbird'),
-- 	(SELECT student.student_id FROM student WHERE student.name = 'Bob'),
-- 	'2021-03-03'),

-- 	((SELECT book.book_id FROM book WHERE book.title = 'Alice In Wonderland'),
-- 	(SELECT student.student_id FROM student WHERE student.name = 'Lera'),
-- 	'2021-05-23'),

-- 	((SELECT book.book_id FROM book WHERE book.title = 'Harry Potter'),
-- 	(SELECT student.student_id FROM student WHERE student.name = 'Bob'),
-- 	'2021-08-12')

-- ITEM 7

-- SELECT * FROM library

-- SELECT 
-- 	st.name, bk.title FROM student AS st
-- INNER JOIN
-- 	library AS lb ON lb.student_fk_id = st.student_id
-- INNER JOIN
-- 	book AS bk ON bk.book_id = lb.book_fk_id

-- SELECT 
-- 	avg(st.age) FROM student AS st
-- INNER JOIN
-- 	library AS lb ON lb.student_fk_id = st.student_id
-- INNER JOIN
-- 	book AS bk ON bk.book_id = lb.book_fk_id
-- WHERE 
-- 	bk.title = 'Alice In Wonderland'

-- If we delete 'Patrick' from the student table, nothing happens in the library:
-- DELETE FROM student WHERE student.name = 'Patrick';
-- SELECT * FROM library
-- But if we delete 'Bob' from the library, all rows where Bob is one of the values get deleted:
-- DELETE FROM student WHERE student.name = 'Bob';
-- SELECT * FROM library

