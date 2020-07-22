CREATE TABLE device_preferences
(
   id INT NOT NULL AUTO_INCREMENT,
   device_id VARCHAR (250) NULL,
   preference text NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_DEVICE_PREFERENCES UNIQUE (device_id)
);