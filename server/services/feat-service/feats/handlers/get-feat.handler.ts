import Database from "../../../../database/database.class";
import GetFeatPrereq from "../../feat_prerequisites/handlers/get-feat-prerequisite.handler"
import { IFeatPrereq } from "../../models/feat-prereq.interface";
import { IFeat } from "../../models/feat.interface";

const getFeatQuery = `
SELECT fn.short_description, fn.name, f.name as feat_name, f.type, f.categories, f.prerequisites, f.game_effects, f.description, f.benefit,
f.special, f.normal, f.id as id, fn.id as feat_name_id, b.name as book_name, fi.page_number, b.id as book_id, v.name as version_name, v.id as version_id
FROM feats.feat_index as fi
    LEFT JOIN feats.feat_names as fn
        ON fi.feat_name_id = fn.id
    LEFT JOIN feats.feats as f
        ON fi.feat_id = f.id
    LEFT JOIN versions.books as b
        ON fi.book_id = b.id
    LEFT JOIN versions.versions as v
        ON b.version_id = v.id
`;

const getFeatByIDQuery = `
SELECT
    fn.short_description, fn.name,
    f.name as feat_name, f.type, f.categories, f.prerequisites, f.game_effects, f.description, f.benefit, f.special, f.normal, f.id as id, fn.id as feat_name_id,
    fi.page_number, b.name as book_name, b.id as book_id, v.name as version_name, v.id as version_id,
    ARRAY_AGG(sf.feat_id) as same_feat
FROM feats.feat_index as fi
	LEFT JOIN feats.feat_names as fn
		ON fi.feat_name_id = fn.id
	LEFT JOIN feats.feats as f
		ON fi.feat_id = f.id
	LEFT JOIN versions.books as b
		ON fi.book_id = b.id
	LEFT JOIN versions.versions as v
		ON b.version_id = v.id
	LEFT JOIN feats.feat_index as sf
		ON fi.feat_name_id = sf.feat_name_id
	WHERE f.id=$1
	GROUP BY fn.short_description, fn.name, f.name, f.type, f.categories, f.prerequisites, f.game_effects, f.description, f.benefit,
f.special, f.normal, f.id, fn.id, b.name, fi.page_number, b.id, v.name, v.id`

const getFeatsByIndexQuery = `
SELECT fn.short_description, fn.name, f.name as feat_name, fn.id as feat_name_id,
	ARRAY_AGG(feat_id) as feat_ids,
	ARRAY_AGG(DISTINCT b.id) as book_ids, ARRAY_AGG(DISTINCT b.name) as book_names,
	ARRAY_AGG(DISTINCT v.name) as version_names, ARRAY_AGG(DISTINCT v.id) as version_ids
FROM feats.feat_index as fi
	INNER JOIN feats.feat_names as fn
		ON fi.feat_name_id = fn.id
	INNER JOIN feats.feats as f
		ON fi.feat_id = f.id
	LEFT JOIN versions.books as b
		ON fi.book_id = b.id
	LEFT JOIN versions.versions as v
		ON b.version_id = v.id
    GROUP BY fn.short_description, fn.name, feat_name, fn.id
    ORDER BY feat_name`;

class GetFeat {
    public async getFeat(): Promise < IFeat[] > {
        console.log("Getting Feats");

        const query = getFeatQuery + ";";
        const results = await Database.query(query, [])
            .catch((e) => {
                throw e;
            });

        return results as IFeat[];
    }

    public async getFeatsByIndex(): Promise < IFeat[] > {
        console.log("Getting Feats By Index");

        const query = getFeatsByIndexQuery;
        const results = await Database.query(query, [])
            .catch((e) => {
                throw e;
            });

        return results as IFeat[];
    }

    public async getFeatByID(id: any): Promise < IFeat > {
        console.log("Getting Feat: ", id);

        const query = getFeatByIDQuery;
        const parameters = [id];
        const results = await Database.query(query, parameters)
            .catch((e) => {
                throw e;
            });

        const feat = results[0] as IFeat;

        feat.required_for = await GetFeatPrereq.getFeatPrereqRequiredFor(feat.id);
        feat.requires = await GetFeatPrereq.getFeatPrereqRequires(feat.id);

        return feat;
    }
}

export default new GetFeat();
