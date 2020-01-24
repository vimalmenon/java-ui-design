CREATE TABLE component_entitlements
(
   id INT NOT NULL AUTO_INCREMENT,
   component_id int signed,
   group_id int signed,
   write_access TINYINT (1) NOT NULL,
   read_access TINYINT (1) NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (group_id) REFERENCES groups (id),
   FOREIGN KEY (component_id) REFERENCES components (id),
   CONSTRAINT UN_COMPONENT_ENTITLEMENT_COMPONENT_ID_GROUP_ID UNIQUE
   (
      component_id,
      group_id
   )
);