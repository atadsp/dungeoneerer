INSERT INTO feats.feat_prerequisites(
    feat_id, prerequisite_feat_id
) VALUES ((SELECT id FROM feats.feats WHERE name = 'Weapon Focus'), (SELECT id FROM feats.feats WHERE name = 'Weapon Specialization'));