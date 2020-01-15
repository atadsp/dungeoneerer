--TODO: Join feat prerequisites
SELECT fn.short_description, fn.name, f.name as feat_name, f.type, f.categories, f.prerequisites, 
	f.game_effects, f.description, f.benefit, f.special, f.normal, b.name as book_name, v.name as version_name
	FROM dungeoneerer.feat_index as fi
	LEFT JOIN dungeoneerer.feat_names as fn
	ON fi.feat_name_id = fn.feat_name_id
	LEFT JOIN dungeoneerer.feats as f
	ON fi.feat_id = f.feat_id
	LEFT JOIN dungeoneerer.books as b
	ON fi.book_id = b.book_id
	LEFT JOIN dungeoneerer.versions as v
	ON b.version_id = v.version_id;