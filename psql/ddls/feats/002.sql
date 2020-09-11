CREATE TABLE feats.feat_categories
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL UNIQUE
);

CREATE TABLE feats.feat_category_index
(
    id SERIAL PRIMARY KEY,
    feat_category_id INT NOT NULL,
    feat_id INT NOT NULL,
    FOREIGN KEY (feat_category_id) REFERENCES feats.feat_categories(id) ON DELETE CASCADE,
    FOREIGN KEY (feat_id) REFERENCES feats.feats(id) ON DELETE CASCADE
);
