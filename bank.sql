create table public."bank_branches"(ifsc varchar(20),bank_id int,
								   branch varchar(200),address varchar(200),
								   city varchar(50),district varchar(100),
								   state varchar(200),bank_name varchar(200));

copy public."bank_branches" from 'D:\Bussinessbot-serverdatabase\bank_branches.csv' delimiter ',' csv header;
select * from public."bank_branches";