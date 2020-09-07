CREATE TABLE tutorial_topics (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL,
    link VARCHAR (150) NOT NULL,
    sequence INT signed,
    playlist VARCHAR (250) NOT NULL,
    is_active TINYINT signed,
    PRIMARY KEY (id),
    CONSTRAINT UN_LINK UNIQUE (link)
);

insert into tutorial_topics(name,link,playlist,is_active)
    values("HTML Tutorials","html-tutorials", "https://www.youtube.com/playlist?list=PLYzdMZY9B6ismjnsaHIzJyYwdk7DINObt",1);