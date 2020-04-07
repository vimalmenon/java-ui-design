CREATE TABLE grps (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (100) NOT NULL,
   priority int signed,
   PRIMARY KEY (id),
   CONSTRAINT UN_GROUP_NAME UNIQUE (name)
);

insert into grps
(
   name,
   priority
)
values
(
   'No User',
   null
);
insert into grps
(
   name,
   priority
)
values
(
   'Super Admin',
   0
);
insert into grps
(
   name,
   priority
)
values
(
   'Visitor',
   1
);
