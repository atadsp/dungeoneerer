-- Table: dungeoneerer.feats

-- DROP TABLE dungeoneerer.feats;

CREATE TABLE dungeoneerer.feats
(
    feat_id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    type boolean NOT NULL DEFAULT false,
    categories jsonb,
    prerequisites jsonb,
    game_effects jsonb,
    description varchar NOT NULL,
    benefit varchar NOT NULL,
    special varchar,
    normal varchar
)