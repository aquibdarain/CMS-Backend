create database CMS;
use CMS;

create table user( id int  AUTO_INCREMENT,name varchar(250),contactNumber varchar(20),
email varchar(50) unique,dob varchar(255),github varchar(255),linkedin varchar(255),instagram varchar(255),
twitter varchar(255),
aadhar varchar(255),occupation varchar(255),address varchar(1000), primary key (id)
);

select * from user;