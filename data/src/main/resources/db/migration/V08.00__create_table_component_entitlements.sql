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

insert into component_entitlements
(
	component_id,
	group_id,
	write_access,
	read_access
)
select id,
(select id from groups where name="No User"),
1,
1 
from components where name = "Login";


insert into component_entitlements
(
	component_id,
	group_id,
	write_access,
	read_access
)
select id,
(select id from groups where name="Super Admin"),
0,
0 
from components where name = "Login";


insert into component_entitlements
(
	component_id,
	group_id,
	write_access,
	read_access
)
select id,
(select id from groups where name="Visitor"),
0,
0 
from components where name = "Login";


-----------------------------------------------------------------------------------------------


insert into component_entitlements
(
	component_id,
	group_id,
	write_access,
	read_access
)
select id,
(select id from groups where name="No User"),
0,
0 
from components where name = "Dashboard";


insert into component_entitlements
(
	component_id,
	group_id,
	write_access,
	read_access
)
select id,
(select id from groups where name="Super Admin"),
1,
1 
from components where name = "Dashboard";



insert into component_entitlements
(
	component_id,
	group_id,
	write_access,
	read_access
)
select id,
(select id from groups where name="Visitor"),
1,
1 
from components where name = "Dashboard";



-----------------------------------------------------------------------------------------------


insert into component_entitlements
(
	component_id,
	group_id,
	write_access,
	read_access
)
select id,
(select id from groups where name="No User"),
0,
0 
from components where name = "Admin";


insert into component_entitlements
(
	component_id,
	group_id,
	write_access,
	read_access
)
select id,
(select id from groups where name="Super Admin"),
1,
1 
from components where name = "Admin";



insert into component_entitlements
(
	component_id,
	group_id,
	write_access,
	read_access
)
select id,
(select id from groups where name="Visitor"),
0,
0 
from components where name = "Admin";


