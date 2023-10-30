-- update all of the cars in the car table to only have types of model s 3 or cyber truck of tesla
SELECT *
FROM CarChargeHistory
WHERE car_id = 4 --@Block
    CREATE TABLE Users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );
--@Block
-- Insert statement to generate random data
INSERT INTO Users (first_name, last_name, email, phone, password)
SELECT f.name AS first_name,
    l.name AS last_name,
    CONCAT(
        LEFT(f.name, 1),
        l.name,
        FLOOR(RAND() * 1000),
        '@',
        e.domain
    ) AS email,
    CONCAT(
        '(',
        FLOOR(100 + RAND() * 900),
        ') ',
        FLOOR(100 + RAND() * 900),
        '-',
        FLOOR(1000 + RAND() * 9000)
    ) AS phone,
    SUBSTRING(MD5(RAND()), 1, 8) AS password -- generating a random 8-character password using MD5 (not for actual use, just example)
FROM (
        SELECT 'John' AS name
        UNION
        SELECT 'Jane'
        UNION
        SELECT 'Robert'
        UNION
        SELECT 'Emily'
        UNION
        SELECT 'Michael'
    ) AS f,
    (
        SELECT 'Smith' AS name
        UNION
        SELECT 'Doe'
        UNION
        SELECT 'Johnson'
        UNION
        SELECT 'Davis'
        UNION
        SELECT 'Brown'
    ) AS l,
    (
        SELECT 'gmail.com' AS domain
        UNION
        SELECT 'yahoo.com'
        UNION
        SELECT 'hotmail.com'
        UNION
        SELECT 'outlook.com'
        UNION
        SELECT 'example.com'
    ) AS e
LIMIT 25;
-- adjust as necessary
--@Block
-- Cars Table
CREATE TABLE Cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(255),
    year INT,
    color VARCHAR(255),
    price INT
);
--@Block
-- Populating Cars table
-- Update the existing rows in Cars table to have values of either 'Tesla Model 3' or 'Cyber Truck'
UPDATE Cars
SET model = CASE
        WHEN id % 2 = 0 THEN 'Tesla Model 3'
        ELSE 'Cyber Truck'
    END,
    year = YEAR(CURDATE()) - FLOOR(RAND() * 5),
    -- random year between this year and 5 years old
    color = CASE
        FLOOR(RAND() * 5) -- random color from the list
        WHEN 0 THEN 'White'
        WHEN 1 THEN 'Black'
        ELSE 'Gray'
    END,
    price = FLOOR(20000 + RAND() * 30000);
-- random price between 20,000 and 50,000
--@Block
-- UserCars Join Table
--
CREATE TABLE UserCars (
user_id INT,
car_id INT,
PRIMARY KEY (user_id, car_id),
FOREIGN KEY (user_id) REFERENCES Users(id),
FOREIGN KEY (car_id) REFERENCES Cars(id)
);
--@Block
-- Populating UserCars table with random associations
-- Populating UserCars table with unique associations
INSERT INTO UserCars (user_id, car_id)
SELECT DISTINCT u.id AS user_id,
    FLOOR(1 + RAND() * 25) AS car_id
FROM Users u
    CROSS JOIN (
        SELECT 1
        UNION
        SELECT 2
        UNION
        SELECT 3
        UNION
        SELECT 4
        UNION
        SELECT 5
    ) AS t
ORDER BY RAND()
LIMIT 5;
-- add car id 1 to user id 1
INSERT INTO UserCars (user_id, car_id)
VALUES (1, 1);
--@Block
-- Car Charge History
CREATE TABLE CarChargeHistory (
    id INT PRIMARY KEY AUTO_INCREMENT,
    car_id INT,
    start_date DATE,
    end_date DATE,
    price INT,
    FOREIGN KEY (car_id) REFERENCES Cars(id)
);
--@Block
-- Populating CarChargeHistory table
INSERT INTO CarChargeHistory (car_id, start_date, end_date, price)
SELECT id,
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 30) DAY) AS start_date,
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 10) DAY) AS end_date,
    FLOOR(10 + RAND() * 40) -- random price between 10 and 50
FROM Cars
LIMIT 25;
--@Block
-- Payment History
CREATE TABLE PaymentHistory (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_car_user_id INT,
    user_car_car_id INT,
    date DATE,
    amount INT,
    FOREIGN KEY (user_car_user_id, user_car_car_id) REFERENCES UserCars(user_id, car_id)
);
-- Populating PaymentHistory table
INSERT INTO PaymentHistory (user_car_user_id, user_car_car_id, date, amount)
SELECT user_id,
    car_id,
    DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 365) DAY),
    FLOOR(50 + RAND() * 450) -- random payment between 50 and 500
FROM UserCars
LIMIT 50;
