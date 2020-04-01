CREATE TABLE links
(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (250) NOT NULL,
   link VARCHAR (250) NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_LINKS UNIQUE (link)
);