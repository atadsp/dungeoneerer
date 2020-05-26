import Database from "../../database/database.class";
import { IFeatPrereq } from "../feat-prereq-service/feat-prereq.interface";
import { IFeat } from "./feat.interface";

const getFeatQuery = `
SELECT fn.short_description, fn.name, f.name as feat_name, f.type, f.categories, f.prerequisites, f.game_effects, f.description, f.benefit,
f.special, f.normal, f.id as id, fn.id as feat_name_id, b.name as book_name, fi.page_number, b.id as book_id, v.name as version_name, v.id as version_id
FROM dungeoneerer.feat_index as fi
LEFT JOIN dungeoneerer.feat_names as fn
ON fi.feat_name_id = fn.id
LEFT JOIN dungeoneerer.feats as f
ON fi.feat_id = f.id
LEFT JOIN dungeoneerer.books as b
ON fi.book_id = b.id
LEFT JOIN dungeoneerer.versions as v
ON b.version_id = v.id
`;

const getFeatsRequiredFor = `
SELECT fn.name, fn.short_description, fp.prerequisite_feat_id
FROM dungeoneerer.feat_prerequisites as fp
LEFT JOIN dungeoneerer.feat_index as fi
ON fi.feat_id = fp.prerequisite_feat_id
LEFT JOIN dungeoneerer.feat_names as fn
ON fn.id=fi.feat_name_id
WHERE fp.feat_id=$1;
`;

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

    public async getFeatByID(id: any): Promise < IFeat > {
        console.log("Getting Feat: ", id);

        const query = getFeatQuery + "WHERE f.id=$1;";
        const parameters = [id];
        const results = await Database.query(query, parameters)
            .catch((e) => {
                throw e;
            });

        const feat = results[0] as IFeat;

        const featPrereq = await Database.query(getFeatsRequiredFor, [feat.id])
            .catch((e) => {
                throw e;
            });

        feat.required_for = featPrereq as IFeatPrereq[];

        return feat;
    }
}

export default new GetFeat();
