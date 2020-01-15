-- Table: dungeoneerer.feat_index

-- DROP TABLE dungeoneerer.feat_index;

CREATE TABLE dungeoneerer.feat_index
(
    feat_index_id SERIAL PRIMARY KEY,
    feat_id INT NOT NULL,
    feat_name_id INT NOT NULL,
    book_id INT NOT NULL,
    page_number INT,
    FOREIGN KEY (feat_id) REFERENCES dungeoneerer.feats(feat_id),
    FOREIGN KEY (feat_name_id) REFERENCES dungeoneerer.feat_names(feat_name_id),
    FOREIGN KEY (book_id) REFERENCES dungeoneerer.books(book_id)
);