CREATE TABLE feats.feats
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    type boolean NOT NULL DEFAULT false,
    prerequisites jsonb,
    game_effects jsonb,
    description varchar NOT NULL,
    benefit varchar NOT NULL,
    special varchar,
    normal varchar
);

CREATE TABLE feats.feat_names
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL UNIQUE,
    short_description varchar NOT NULL
);

CREATE TABLE feats.feat_prerequisites
(
    id SERIAL PRIMARY KEY,
    feat_id INT NOT NULL,
    prerequisite_feat_id INT NOT NULL,
    FOREIGN KEY (feat_id) REFERENCES feats.feats(id) ON DELETE CASCADE,
    FOREIGN KEY (prerequisite_feat_id) REFERENCES feats.feats(id) ON DELETE CASCADE,
    CONSTRAINT feat_and_prereq UNIQUE (feat_id, prerequisite_feat_id)
);

CREATE TABLE feats.feat_index
(
    id SERIAL PRIMARY KEY,
    feat_id INT NOT NULL,
    feat_name_id INT NOT NULL,
    book_id INT NOT NULL,
    page_number INT,
    FOREIGN KEY (feat_id) REFERENCES feats.feats(id) ON DELETE CASCADE,
    FOREIGN KEY (feat_name_id) REFERENCES feats.feat_names(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES versions.books(id) ON DELETE CASCADE
);