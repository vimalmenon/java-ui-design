CREATE TABLE links
(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR (100) NOT NULL,
   title VARCHAR (100) NOT NULL,
   url VARCHAR (250) NOT NULL,
   type VARCHAR (50) NOT NULL,
   is_active TINYINT NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_LINKS UNIQUE (url)
);

insert into links (name, title, url, type, is_active)
values("YouTube","YouTube","https://www.youtube.com/channel/UCjNZaCFrHPmgmYRmEud7f_A","SOCIAL_MEDIA",1);

insert into links (name, title, url, type, is_active)
values("GitHub","GitHub","https://github.com/vimalsmenon","SOCIAL_MEDIA",1);

insert into links (name, title, url, type, is_active)
values("Instagram","Instagram","https://www.instagram.com/vimal.s.menon","SOCIAL_MEDIA",1);