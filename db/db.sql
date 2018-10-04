-- --------------------------------------------------------
-- Host           :    127.0.0.1
-- Port           :    3306
-- DB version     :    mysql  Ver 14.14 Distrib 5.7.23, for Linux (x86_64) using  EditLine wrapper
-- Server version :    ubuntu 16.04
-- --------------------------------------------------------

create table auth_user (
id int primary key auto_increment,
email varchar(255),
password varchar(255)
);

create table auth_userprofile (
id int primary key auto_increment,
user_id int,
sex varchar(255),
birth varchar(255)
);