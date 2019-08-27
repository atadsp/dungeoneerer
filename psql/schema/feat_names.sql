-- Table: dungeoneerer.feat_names

-- DROP TABLE dungeoneerer.feat_names;

CREATE TABLE dungeoneerer.feat_names
(
    feat_name_id SERIAL PRIMARY KEY,
    short_description varchar NOT NULL,
    name varchar(255) NOT NULL
)