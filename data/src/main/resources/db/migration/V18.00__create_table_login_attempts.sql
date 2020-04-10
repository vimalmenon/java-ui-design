CREATE TABLE login_attempts (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT signed,
    attempt INT signed,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);