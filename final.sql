-- create database coins
-- Use coins

-- create table categories (
-- 	category_id int auto_increment primary key,
-- 	name varchar(200) unique not null,
-- 	created_at dateTime default current_timestamp,
-- 	updated_at datetime default current_timestamp on update current_timestamp,
-- 	image text
-- );

-- alter table categories add column img_category text;


-- create table coins (
-- 	coins_id int auto_increment primary key,
-- 	name varchar(200) unique not null,
-- 	face_value int,
-- 	year year not null,
-- 	price decimal(10,2),
-- 	country varchar(50),
-- 	short_description varchar(100),
-- 	full_description text,
-- 	created_at dateTime default current_timestamp,
-- 	updated_at datetime default current_timestamp on update current_timestamp,
-- 	img_obverse text,
-- 	img_reverse text,
--     category_id INT,
--     FOREIGN KEY (category_id) REFERENCES coins.categories(category_id)
-- );

-- insert into categories (name) values("Commemorative coins");

insert into categories (img_category) values("https://hizliresim.com/a9botyu");

-- select * from categories