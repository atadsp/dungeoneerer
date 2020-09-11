
INSERT INTO versions.versions VALUES (1, 'Pathfinder');
INSERT INTO versions.versions VALUES (2, 'D&D 3.5');

INSERT INTO versions.books VALUES (1, 'Players Handbook', 1);
INSERT INTO versions.books VALUES (2, 'Players Handbook', 2);

INSERT INTO feats.feat_categories VALUES (1, 'Combat');
INSERT INTO feats.feat_categories VALUES (2, 'Fighter');
INSERT INTO feats.feat_categories VALUES (3, 'General');

INSERT INTO feats.feat_names VALUES (1, 'weapon_focus', 'blah');
INSERT INTO feats.feat_names VALUES (2, 'weapon_specialization', 'blah');
INSERT INTO feats.feat_names VALUES (3, 'greater_weapon_focus', 'blah');

INSERT INTO feats.feats VALUES (1, 'Weapon Focus', true, '[{"proficency": {"weapon": "type"}, "prerequisite": "Proficiency with selected weapon"}, {"prerequisite": "base attack bonus +1", "baseAttackBonus": 1}]', '[{"weapon": "type", "attackBonus": 1}]', 'Choose one type of weapon. You can also choose unarmed strike or grapple (or ray, if you are a spellcaster) as your weapon for the purposes of this feat.', 'You gain a +1 bonus on all attack rolls you make using the selected weapon.', 'You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.', NULL);
INSERT INTO feats.feats VALUES (2, 'Weapon Specialization', true, '[{"proficency": {"weapon": "type"}, "prerequisite": "Proficiency with selected weapon"}, {"feat": {"name": "Weapon Focus", "weapon": "type", "feat_id": "1"}, "prerequisite": "Weapon Focus with selected weapon"}, {"classLevel": {"fighter": 4}, "prerequisite": "Fighter level 4th"}]', '[{"weapon": "type", "damageBonus": 2}]', 'You are skilled at dealing damage with one weapon. Choose one type of weapon (including unarmed strike or grapple) for which you have already selected the Weapon Focus feat. You deal extra damage when using this weapon.', 'You gain a +2 bonus on all damage rolls you make using the selected weapon.', 'You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.', NULL);
INSERT INTO feats.feats VALUES (3, 'Greater Weapon Focus', true, '[{"proficency": {"weapon": "type"}, "prerequisite": "Proficiency with selected weapon"}, {"prerequisite": "base attack bonus +1", "baseAttackBonus": 1}, {"feat": {"name": "Weapon Focus", "weapon": "type", "feat_id": "1"}, "prerequisite": "Weapon Focus with selected weapon"}, {"classLevel": {"fighter": 8}, "prerequisite": "Fighter level 8th"}]', '[{"weapon": "type", "attackBonus": 1}]', 'Choose one type of weapon (including unarmed strike or grapple) for which you have already selected Weapon Focus. You are a master at your chosen weapon.', 'You gain a +1 bonus on attack rolls you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including those from Weapon Focus.', 'You can gain Greater Weapon Focus multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.', 'blah2');
INSERT INTO feats.feats VALUES (4, 'Weapon Focus', true, '[{"proficency": {"weapon": "type"}, "prerequisite": "Proficiency with selected weapon"}, {"prerequisite": "base attack bonus +1", "baseAttackBonus": 1}]', '[{"weapon": "type", "attackBonus": 1}]', 'Choose one type of weapon. You can also choose unarmed strike or grapple (or ray, if you are a spellcaster) as your weapon for the purposes of this feat.', 'You gain a +1 bonus on all attack rolls you make using the selected weapon.', 'You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.', NULL);

INSERT INTO feats.feat_category_index VALUES (1, 1, 1);
INSERT INTO feats.feat_category_index VALUES (2, 1, 2);
INSERT INTO feats.feat_category_index VALUES (3, 1, 3);
INSERT INTO feats.feat_category_index VALUES (4, 2, 4);
INSERT INTO feats.feat_category_index VALUES (5, 3, 4);

INSERT INTO feats.feat_index VALUES (1, 1, 1, 1, NULL);
INSERT INTO feats.feat_index VALUES (2, 2, 2, 1, NULL);
INSERT INTO feats.feat_index VALUES (3, 3, 3, 1, NULL);
INSERT INTO feats.feat_index VALUES (4, 4, 1, 2, NULL);

INSERT INTO feats.feat_prerequisites VALUES (1, 1, 2);
INSERT INTO feats.feat_prerequisites VALUES (2, 1, 3);
