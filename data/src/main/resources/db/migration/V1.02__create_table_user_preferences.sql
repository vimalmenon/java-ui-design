CREATE TABLE user_preferences
(
   id INT NOT NULL AUTO_INCREMENT,
   user_id INT SIGNED NOT NULL,
   preference text NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (user_id) REFERENCES users (id),
   CONSTRAINT UN_USER_USERNAME UNIQUE (user_id)
);