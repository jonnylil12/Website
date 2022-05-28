create table hibernate_sequence
(
    next_val bigint null
);

create table user
(
    id       int auto_increment
        primary key,
    name     text null,
    username text null,
    password text null,
    email    text null,
    age      int  null
);


