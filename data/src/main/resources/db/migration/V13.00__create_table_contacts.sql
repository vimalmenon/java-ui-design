CREATE TABLE contacts
(
   id INT NOT NULL AUTO_INCREMENT,
   ip_address VARCHAR (50) NOT NULL,
   name VARCHAR (250) NOT NULL,
   email VARCHAR (250) NOT NULL,
   subject VARCHAR (250) NOT NULL,
   message text NOT NULL,
   time TIMESTAMP NOT NULL,
   checked TINYINT (1) signed,
   PRIMARY KEY (id)
);