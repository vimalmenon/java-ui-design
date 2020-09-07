CREATE TABLE tutorials (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL,
    link VARCHAR (150) NOT NULL,
    topic_id INT signed null,
    youtube_id VARCHAR (250) NOT NULL,
    notes VARCHAR (250) NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (topic_id) REFERENCES tutorial_topics (id),
    CONSTRAINT UN_LINK UNIQUE (link),
    CONSTRAINT UN_YOUTUBE_ID UNIQUE (youtube_id)
);

insert into tutorials(name,link,youtube_id)
    values("Introduction to My Channel","introduction-to-my-channel", "Wb1uty_bc3c");

insert into tutorials(name,link,youtube_id)
    values("Web Development Introduction","web-development-introduction", "Jg-FAIH2yf4");

insert into tutorials(name,link,youtube_id)
    values("01 Introduction to HTML","introduction-to-html", "kAHzqg7AVcs");

insert into tutorials(name,link,youtube_id)
    values("02 - More HTML tags and Attributes","more-html-tags-and-attributes", "iyrdiFVaVtc");

insert into tutorials(name,link,youtube_id)
    values("01 - Introduction to Git and GitHub","introduction-to-git-and-gitHub", "DwRpOkmw33g");