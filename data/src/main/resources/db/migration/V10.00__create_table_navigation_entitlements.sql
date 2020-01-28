CREATE TABLE navigation_entitlements
(
   id INT NOT NULL AUTO_INCREMENT,
   navigation_id int signed,
   group_id int signed,
   access TINYINT (1) NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (group_id) REFERENCES groups (id),
   CONSTRAINT UN_COMPONENT_ENTITLEMENT_GROUP_ID_ACCESS UNIQUE (navigation_id, group_id, access)
);

insert into navigation_entitlements
(
	navigation_id,
	group_id,
	access
)
select id,
(select id from groups where name="Super Admin"),
1
from navigations where name = "Admin";


insert into navigation_entitlements
(
	navigation_id,
	group_id,
	access
)
select id,
(select id from groups where name="Visitor"),
0
from navigations where name = "Admin";