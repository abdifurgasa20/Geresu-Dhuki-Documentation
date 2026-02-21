CREATE TABLE loans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    amount DECIMAL(15,2),
    interest_rate DECIMAL(5,2),
    due_date DATE,
    status ENUM('pending','approved','rejected') DEFAULT 'pending',
    FOREIGN KEY (member_id) REFERENCES members(id)
);