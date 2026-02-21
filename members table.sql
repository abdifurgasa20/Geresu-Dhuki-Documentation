CREATE TABLE members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    password VARCHAR(255),
    role ENUM('admin','member') DEFAULT 'member',
    savings DECIMAL(15,2) DEFAULT 0
);