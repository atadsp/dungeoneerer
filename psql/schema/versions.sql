-- Table: dungeoneerer.versions

-- DROP TABLE dungeoneerer.versions;

CREATE TABLE dungeoneerer.versions
(
    version_id  SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL
)