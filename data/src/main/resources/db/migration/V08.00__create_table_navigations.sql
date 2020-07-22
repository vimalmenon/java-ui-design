CREATE TABLE navigations
(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (250) NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_COMPONENT_NAME UNIQUE (name)
);

insert into navigations
(
	name
)
values
(
	"Admin"
);