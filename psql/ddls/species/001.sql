CREATE TABLE species.species
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    attribute_bonuses jsonb,
    skill_bonuses jsonb,
    species_bonuses jsonb,
    species_weight INT,
    race_weight INT NOT NULL
);

CREATE TABLE species.subrace
(
    id SERIAL PRIMARY KEY,
    parent_race_id INT,
    child_race_id INT,
    FOREIGN KEY (parent_race_id) REFERENCES species.species(id) ON DELETE CASCADE,
    FOREIGN KEY (child_race_id) REFERENCES species.species(id) ON DELETE CASCADE
);

CREATE TABLE species.species_names
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL UNIQUE
);

CREATE TABLE species.species_index
(
    id SERIAL PRIMARY KEY,
    species_id INT NOT NULL,
    species_name_id INT NOT NULL,
    book_id INT NOT NULL,
    page_number INT,
    FOREIGN KEY (species_id) REFERENCES species.species(id) ON DELETE CASCADE,
    FOREIGN KEY (species_name_id) REFERENCES species.species_names(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES versions.books(id) ON DELETE CASCADE
);