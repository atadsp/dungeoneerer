-- Table: dungeoneerer.books

-- DROP TABLE dungeoneerer.books;

CREATE TABLE dungeoneerer.books
(
    book_id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    version_id INT NOT NULL,
    FOREIGN KEY (version_id) REFERENCES dungeoneerer.versions(version_id),
)