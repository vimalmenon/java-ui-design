CREATE TABLE tutorials (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL,
    link VARCHAR (150) NOT NULL,
    topic_id INT signed null,
    youtube_url VARCHAR (250) NOT NULL,
    notes VARCHAR (250) NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (topic_id) REFERENCES tutorial_topics (id),
    CONSTRAINT UN_LINK UNIQUE (link),
    CONSTRAINT UN_YOUTUBE_URL UNIQUE (youtube_url)
);

insert into tutorials(name,link,youtube_url)
    values("Introduction to My Channel","introduction-to-my-channel", "https://www.youtube.com/embed/Wb1uty_bc3c");

insert into tutorials(name,link,youtube_url)
    values("Web Development Introduction","web-development-introduction", "https://www.youtube.com/embed/Jg-FAIH2yf4");

insert into tutorials(name,link,youtube_url)
    values("01 Introduction to HTML","introduction-to-html", "https://www.youtube.com/embed/kAHzqg7AVcs");

insert into tutorials(name,link,youtube_url)
    values("02 - More HTML tags and Attributes","more-html-tags-and-attributes", "https://www.youtube.com/embed/iyrdiFVaVtc");

insert into tutorials(name,link,youtube_url)
    values("01 - Introduction to Git and GitHub","introduction-to-git-and-gitHub", "https://www.youtube.com/embed/DwRpOkmw33g");