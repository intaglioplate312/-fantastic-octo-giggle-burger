DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

Only burger_name will need to be specified.
CREATE TABLE burgers (
  id          INT(10) AUTO_INCREMENT              NOT NULL,
  burger_name VARCHAR(30)                         NOT NULL,
  devoured    BOOL DEFAULT FALSE                  NOT NULL,
  date        TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
