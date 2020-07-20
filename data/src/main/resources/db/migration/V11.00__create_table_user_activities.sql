CREATE TABLE user_activities
(
   id INT NOT NULL AUTO_INCREMENT,
   user_id INT signed,
   context VARCHAR (250) NOT NULL,
   detail VARCHAR (250) NOT NULL,
   payload text NULL,
   time TIMESTAMP NOT NULL,
   verify TINYINT (1) signed,
   PRIMARY KEY (id),
   FOREIGN KEY (user_id) REFERENCES users (id)
);