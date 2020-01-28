CREATE TABLE user_profiles
(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (250) NOT NULL,
   email_address VARCHAR (250) NOT NULL,
   location VARCHAR (100),
   user_id INT signed,
   PRIMARY KEY (id),
   FOREIGN KEY (user_id) REFERENCES users (id),
   CONSTRAINT UN_USER_PROFILE_USER_ID UNIQUE (user_id)
);