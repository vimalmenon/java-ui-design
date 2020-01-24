CREATE TABLE notes
(
   id INT NOT NULL AUTO_INCREMENT,
   user_id INT SIGNED NOT NULL,
   title VARCHAR (100) NOT NULL,
   note text NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (user_id) REFERENCES users (id)   
);