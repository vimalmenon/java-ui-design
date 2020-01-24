CREATE TABLE url_entitlements
(
   id INT NOT NULL AUTO_INCREMENT,
   url_id INT SIGNED NOT NULL,
   group_id INT SIGNED NOT NULL,
   access TINYINT (1) NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (group_id) REFERENCES groups (id),
   FOREIGN KEY (url_id) REFERENCES urls (id),
   CONSTRAINT UN_URL_ENTITLEMENT_URL_ID_GROUP_ID UNIQUE (url_id, group_id)
);