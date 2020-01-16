import Database from "../../database/database.class";
import { IFeatPrereq } from "../feat-prereq-service/feat-prereq.interface";
import Utility from "../utility.class";
import {IErr} from "../utility.interface";
import {IFeat} from "./feat.interface";

const getFeatQuery = `
SELECT fn.short_description, fn.name, f.name as feat_name, f.type, f.categories, f.prerequisites, f.game_effects, f.description, f.benefit,
f.special, f.normal, f.feat_id, fn.feat_name_id, b.name as book_name, fi.page_number, b.book_id, v.name as version_name, v.version_id
FROM dungeoneerer.feat_index as fi
LEFT JOIN dungeoneerer.feat_names as fn
ON fi.feat_name_id = fn.feat_name_id
LEFT JOIN dungeoneerer.feats as f
ON fi.feat_id = f.feat_id
LEFT JOIN dungeoneerer.books as b
ON fi.book_id = b.book_id
LEFT JOIN dungeoneerer.versions as v
ON b.version_id = v.version_id
`;

const getFeatPrereqs = `
SELECT fn.name, fn.short_description, fp.prerequisite_feat_id as required_for
FROM dungeoneerer.feat_prerequisites as fp
LEFT JOIN dungeoneerer.feat_index as fi
ON fi.feat_id = fp.prerequisite_feat_id
LEFT JOIN dungeoneerer.feat_names as fn
ON fn.feat_name_id=fi.feat_name_id
WHERE fp.feat_id=$1;
`;

const insertFeatQuery = `
INSERT INTO dungeoneerer.feats
(name, type, categories, prerequisites, game_effects, description, benefit, special, normal)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING feat_id
`;

const insertFeatName = `
INSERT INTO dungeoneerer.feat_names
(short_description, name)
VALUES ($1, $2)
RETURNING feat_name_id
`;

const insertFeatIndex = `
INSERT INTO dungeoneerer.feat_index
(feat_id, feat_name_id, book_id, page_number)
VALUES ($1, $2, $3, $4)
`;

const insertIntoFeatPrereq = `
INSERT INTO dungeoneerer.feat_prerequisites
(feat_id, prerequisite_feat_id)
VALUES ($1, $2)
`;

class Feats {
    public async getFeat(): Promise < IFeat[] | IErr > {
        console.log("Getting Feats");
        const query = getFeatQuery + ";";
        const results = await Database.query(query, "");
        const errors = Utility.checkDBResult(results, true);

        if ("error" in errors && errors.error !== "") {
            return errors;
        }

        return results as IFeat[];
    }

    public async getFeatByID(id: any): Promise < IFeat | IErr > {
        console.log("Getting Feats: ", id);
        const query = getFeatQuery + "WHERE f.feat_id=$1;";
        const parameters = [id];
        const results = await Database.query(query, parameters);
        let errors = Utility.checkDBResult(results, true);

        if ("error" in errors && errors.error !== "") {
            return errors;
        }

        const feat = results[0] as IFeat;

        const featPrereq = await Database.query(getFeatPrereqs, [feat.feat_id]);
        errors = Utility.checkDBResult(featPrereq, false);

        if ("error" in errors && errors.error !== "") {
            return errors;
        }

        feat.required_for = featPrereq as IFeatPrereq[];

        return feat;
    }

    public async insertFeat(feat: IFeat): Promise <IFeat | IErr> {
        const insertFeatParams = [feat.feat_name, feat.type, JSON.stringify(feat.categories),
            JSON.stringify(feat.prerequisites), JSON.stringify(feat.game_effects), feat.description,
            feat.benefit, feat.special, feat.normal];
        const insertFeatResults = await Database.query(insertFeatQuery, insertFeatParams);

        let errors = Utility.checkDBResult(insertFeatResults, true);
        if ("error" in errors && errors.error !== "") {
            return errors;
        }

        const feat_id = insertFeatResults[0].feat_id;

        const insertFeatNameParams = [feat.short_description, feat.name];
        const insertFeatNameResults = await Database.query(insertFeatName, insertFeatNameParams);

        errors = Utility.checkDBResult(insertFeatNameResults, true);
        if ("error" in errors && errors.error !== "") {
            return errors;
        }

        const feat_name_id = insertFeatNameResults[0].feat_name_id;

        const insertFeatIndexParam = [feat_id, feat_name_id, feat.book_id, feat.page_number];
        const insertFeatIndexResults = await Database.query(insertFeatIndex, insertFeatIndexParam);

        errors = Utility.checkDBResult(insertFeatIndexResults, false);
        if ("error" in errors && errors.error !== "") {
            return errors;
        }

        if (feat.prerequisites.length > 0) {
            for (const i in feat.prerequisites) {
                if ("feat" in feat.prerequisites[i] && "feat_id" in feat.prerequisites[i].feat) {
                    const insertFeatPrereqParam = [feat_id, feat.prerequisites[i].feat.feat_id];
                    const insertFeatPrereqResults = await Database.query(insertIntoFeatPrereq, insertFeatPrereqParam);

                    errors = Utility.checkDBResult(insertFeatPrereqResults, false);
                    if ("error" in errors && errors.error !== "") {
                        return errors;
                    }
                }
            }
        }

        feat.feat_id = feat_id;

        return feat;
    }
}

export default new Feats();
