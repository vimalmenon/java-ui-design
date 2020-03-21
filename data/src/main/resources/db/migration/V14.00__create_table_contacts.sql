CREATE TABLE contacts
(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (250) NOT NULL,
   ip_address VARCHAR (50) NOT NULL,
   email VARCHAR (250) NOT NULL,
   subject VARCHAR (250) NOT NULL,
   message text NOT NULL,
   time TIMESTAMP NOT NULL,
   checked INT signed,
   PRIMARY KEY (id)
);