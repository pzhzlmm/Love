CREATE TABLE emp(
	emp_id INT AUTO_INCREMENT PRIMARY KEY,
	emp_name VARCHAR(25),
	salary DOUBLE(10, 2),
	birthday DATE
);

SELECT * FROM emp;

INSERT INTO emp(emp_name, salary, birthday)
VALUES('马云', 2025.33, '1973-8-12');

INSERT INTO emp(emp_name, salary, birthday)
VALUES('李彦宏', 3000.22, '1987-6-5');

INSERT INTO emp(emp_name, salary, birthday)
VALUES('马化腾', 5555.55, '1956-6-6');

ALTER TABLE emp
ADD telephone VARCHAR(30);

CREATE TABLE depart(
	depart_id INT AUTO_INCREMENT PRIMARY KEY,
	depart_name VARCHAR(30)
);

SELECT * FROM depart;

ALTER TABLE emp
ADD depart_id_fk INT;

ALTER TABLE emp
ADD CONSTRAINT emp_depart_id_fk FOREIGN KEY(depart_id_fk) REFERENCES depart(depart_id);

SELECT * FROM emp;
SELECT * FROM depart;

DELETE FROM emp
WHERE emp_id = 5;

UPDATE emp
SET salary = salary + 200, telephone = '13586705312'
WHERE emp_id = 17;

SELECT *
FROM emp
WHERE emp_id = 63;

SELECT birthday, telephone
FROM emp
WHERE emp_name = 'Linda';

SELECT *
FROM emp
WHERE salary BETWEEN 2000 AND 5000;

SELECT COUNT(*)
FROM emp
WHERE salary > 3000;

SELECT *
FROM emp
WHERE salary IN(1000, 3000, 5000);

SELECT *
FROM emp
WHERE emp_name LIKE '%o%';

SELECT *
FROM emp
WHERE telephone IS NULL;

SELECT salary, depart_name
FROM emp
JOIN depart
ON emp.`depart_id_fk` = depart.`depart_id`
WHERE depart_name = 'Sales'
ORDER BY salary DESC;

SELECT *
FROM emp
LIMIT 0, 10;