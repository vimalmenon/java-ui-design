CREATE TABLE user_activities
(
   id INT NOT NULL AUTO_INCREMENT,
   user_id INT signed,
   ip_address VARCHAR (250) NOT NULL,
   detail VARCHAR (250) NOT NULL,
   time_stamp VARCHAR (100) NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (user_id) REFERENCES users (id)
);