CREATE TABLE character_generator.random_gender
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    subjective_pronoun varchar(255) NOT NULL,
    possesive_pronoun  varchar(255) NOT NULL,
    objective_pronoun varchar(255) NOT NULL,
    reflexive_pronoun varchar(255) NOT NULL
);

CREATE TABLE character_generator.random_culture
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    culture_mod INT,
    skill_bonuses jsonb,
    native_literacy int,
    foreign_literacy jsonb,
    items jsonb,
    environment jsonb,
    hobby jsonb,
    weight INT
);

CREATE TABLE character_generator.random_social_status
(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    social_mod INT,
    native_literacy INT,
    wealth FLOAT,
    skill_bonuses jsonb,
    experiences jsonb,
    items jsonb,
    traits jsonb,
    relations jsonb,
    weight INT
);