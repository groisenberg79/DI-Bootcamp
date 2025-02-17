-- Q1: What will be the OUTPUT of the following statement?
-- SELECT COUNT(*)
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- Answer: 0
-- Explanation:
-- SELECT id FROM SecondTab WHERE id IS NULL ==> returns NULL
-- ft.id NOT IN ( NULL ) ==> since NULL is an unknown, ft.id NOT IN NULL is also an unknown, that is, a NULL
-- SELECT COUNT (*) FROM NULL ==> returns 0, since one cannot count an unknown.

-- Q2: What will be the OUTPUT of the following statement?
-- SELECT COUNT(*) FROM FirstTab AS ft 
-- WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- Answer: 2
-- Explanation:
-- SELECT id FROM SecondTab WHERE id = 5 ==> returns id 5
-- ft.id NOT IN (id 5) ==> returns all rows with id != 5 in ft, that is, 6 and 7 (NULL cannot be compared)
-- SELECT COUNT(*) FROM FirstTab AS ft WHERE (id = 6 or id = 7 ) ==> returns 2, since there are two rows
-- in FirstTab satisfying this constraint.

-- Q3. What will be the OUTPUT of the following statement?
-- SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- Answer: 0
-- Explanation:
-- SELECT id FROM SecondTab ==> returns all rows from SecondTab, id 5 and id NULL
-- ft.id NOT IN ( SELECT id FROM SecondTab ) ==> since NULL is an unknown,
-- ft.id NOT IN also returns an unknown 
-- SELECT COUNT (*) FROM NULL ==> returns 0, since one cannot count an unknown.

-- Q4. What will be the OUTPUT of the following statement?
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- Answer: 2
-- Explanation:
-- SELECT id FROM SecondTab WHERE id IS NOT NULL ==> returns row id 5 (the only row with value NOT NULL)
-- ft.id NOT IN (row id 5) ==> returns all rows with id != 5 in ft, that is, 6 and 7 (NULL cannot be compared)
-- SELECT COUNT(*) FROM FirstTab AS ft WHERE (row id = 6 or row id = 7 ) ==> returns 2, 
-- since there are two rows in FirstTab satisfying this constraint.

