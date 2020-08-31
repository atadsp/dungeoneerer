CREATE TABLE versions.versions
(
    id  SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL
);

CREATE TABLE versions.books
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    version_id INT NOT NULL,
    FOREIGN KEY (version_id) REFERENCES versions.versions(id) ON DELETE CASCADE
);