INSERT INTO dungeoneerer.feats(
	name, type, categories, prerequisites, game_effects, description, benefit, special)
	VALUES ('Weapon Focus', true, '["Combat"]',
			'[{"prerequisite": "Proficiency with selected weapon","proficency": {"weapon": "type"}},{"prerequisite": "base attack bonus +1","baseAttackBonus": 1}]',
			'[{"attackBonus": 1,"weapon": "type"}]',
			'Choose one type of weapon. You can also choose unarmed strike or grapple (or ray, if you are a spellcaster) as your weapon for the purposes of this feat.',
			'You gain a +1 bonus on all attack rolls you make using the selected weapon.',
			'You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.');

INSERT INTO dungeoneerer.feats(
	name, type, categories, prerequisites, game_effects, description, benefit, special)
	VALUES ('Weapon Specialization', true, '["Combat"]',
			'[{"prerequisite": "Proficiency with selected weapon","proficency": {"weapon": "type"}},{
               "prerequisite": "Weapon Focus with selected weapon","feat": {"name": "Weapon Focus", "weapon": "type", "feat_id": "1"}},{"prerequisite": "Fighter level 4th","classLevel":{"fighter": 4}}]',
			'[{"damageBonus": 2,"weapon": "type"}]',
			'You are skilled at dealing damage with one weapon. Choose one type of weapon (including unarmed strike or grapple) for which you have already selected the Weapon Focus feat. You deal extra damage when using this weapon.',
			'You gain a +2 bonus on all damage rolls you make using the selected weapon.',
			'You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.');