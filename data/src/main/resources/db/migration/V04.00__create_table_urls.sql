CREATE TABLE urls
(
   id INT NOT NULL AUTO_INCREMENT,
   url VARCHAR (250) NOT NULL,
   method VARCHAR (10) NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_URL_URL_METHOD UNIQUE (url, method)
);

insert into urls
(
	url,
	method
	
) 
values (
	"/api/admin",
	"GET"
);

insert into urls
(
	url,
	method
	
) 
values (
	"/api/admin/log_out",
	"POST"
);

insert into urls
(
	url,
	method
	
) 
values (
	"/api/admin/switch_account",
	"POST"
);

insert into urls
(
	url,
	method
) 
values (
	"/api/admin/*",
	"ALL"
);

