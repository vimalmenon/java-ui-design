CREATE TABLE users
(
   id INT NOT NULL AUTO_INCREMENT,
   username VARCHAR (100) NOT NULL,
   password VARCHAR (250) NOT NULL,
   group_id INT SIGNED NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (group_id) REFERENCES groups (id),
   CONSTRAINT UN_USER_USERNAME UNIQUE (username)
);
insert into users
(
   username,
   password,
   group_id
)
select
   'VimalMenon',
   '$2a$12$cAW7XOYb/IA7Hph/jiJ2A.tsZ7DOEPoYd0sKTDhwXFjLNjEAr/RZi',
   id
from
   groups
where
   priority = 0;
insert into users
(
   username,
   password,
   group_id
)
select
   'Visitor',
   '$2a$12$ofHocPvI6HqqUknFAxlTAOv/1r7L160uyeKfbafydCJi0kVw6.eQm',
   id
from
   groups
where
   priority = 1;