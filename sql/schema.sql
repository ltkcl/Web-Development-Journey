show tables;
use delt_app;
create table user(id varchar(40) primary key ,username varchar(50) unique,email varchar(70) unique not null ,password varchar(50) not null);
select * from user;

