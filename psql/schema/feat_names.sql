-- Table: dungeoneerer.feat_names

-- DROP TABLE dungeoneerer.feat_names;

CREATE TABLE dungeoneerer.feat_names
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL UNIQUE,
    short_description varchar NOT NULL
);