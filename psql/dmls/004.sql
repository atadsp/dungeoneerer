INSERT INTO feats.feat_index(
    feat_id, feat_name_id, book_id
) VALUES (
            (SELECT id FROM feats.feats WHERE name = 'Weapon Focus'), 
            (SELECT id FROM feats.feat_names WHERE name = 'weapon_focus'), 
            (SELECT id FROM versions.books WHERE name = 'Players Handbook' 
                AND version_id = (SELECT id from versions.versions WHERE name = 'Pathfinder')
            )
        ), 
        (
            (SELECT id FROM feats.feats WHERE name = 'Weapon Specialization'), 
            (SELECT id FROM feats.feat_names WHERE name = 'weapon_specialization'), 
            (SELECT id FROM versions.books WHERE name = 'Players Handbook' 
                AND version_id = (SELECT id from versions.versions WHERE name ='Pathfinder')
            )
        );