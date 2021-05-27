--A note on Gender: I want to be as inclusive as possible while also respecting the random character aspect of this project
--I went back and forth on how, or even if I should, address gender in this generator
--I descided in the end to add gender into the project but to be inclusive while doing so
--I hope this does not offend any members of the LGBTQ+ communities as I did this in an effort to be inclusive of all players
--so that they can see themselves represented in the characters that are randomly generated
INSERT INTO character_generator.random_gender(
	name, subjective_pronoun, possesive_pronoun, objective_pronoun, reflexive_pronoun)
	VALUES 
    ('Non-Binary', 'they', 'them', 'their', 'themself'),
    ('Female', 'she', 'her', 'her', 'herself'),
    ('Transgender Female', 'she', 'her', 'her', 'herself'),
    ('Male', 'he', 'him', 'his', 'himself'),
    ('Transgender Male', 'he', 'him', 'his', 'himself');


INSERT INTO character_generator.random_culture(
	name, culture_mod, skill_bonuses, native_literacy, foreign_literacy, items, environment, hobby, weight)
	VALUES 
        ('Primative', -3, '[{"weaponRank": 3, "chance": 100}, {"wildernessSurvivalRank": 5, "chance": 100}, {"huntingGatheringRank": 3, "chance": 100}, {"urbanSurvivalRank": 1, "chance": 100}]',
            5, '[]', '[{"item": "One-handed Weapon", "chance": 100}]', 
            '[{"environment": "Wilderness", "weight": 1, "skills":[]}]', 
            '[]', 1),
	    ('Nomad', 0, '[{"wildernessSurvivalRank": 4, "chance": 100}, {"urbanSurvivalRank": 1, "chance": 100}]', 
            20, '[{"chance": 10}, {"chance": 10}]', '[{"item": "Riding Animal", "chance": 75}]', 
            '[{"environment": "Wilderness", "weight": 1, "skills":[]}]', 
            '[]', 2),
	    ('Barbarian', 2, '[{"meleeWeaponRank": 3, "chance": 100}, {"missileWeaponRank": 3, "chance": 100}]', 
            10, '[]', '[{"item": "One handed melee weapon", "chance": 100}, {"item": "Missile weapon", "chance": 100}]', 
            '[{"environment": "Wilderness", "weight": 1, "skills":[{"urbanSurvivalRank": 1, "chance": 100}, {"wildernessSurvivalRank": 5, "chance": 100}]}, {"environment": "Urban", "weight": 1, "skills":[{"urbanSurvivalRank": 5, "chance": 100}, {"wildernessSurvivalRank": 1, "chance": 100}]}]', 
            '[]', 3),
        ('Civilized', 4, '[]', 
            30, '[]', '[]', 
            '[{"environment": "Wilderness", "weight": 1, "skills":[{"wildernessSurvivalRank": 2, "chance": 100}]}, {"environment": "Urban", "weight": 1, "skills":[{"urbanSurvivalRank": 2, "chance": 100}]}]', 
            '[{"chance": 50}]', 1),
        ('Civilized-Decadent', 7, '[{"urbanSurvivalRank": 3, "chance": 100}]', 
            30, '[{"chance": 10}]', '[]', 
            '[{"environment": "Urban", "weight": 1, "skills":[]}]', 
            '[]', 1);