import Database from "../../database/database.class";
import { IFeat } from "./feat.interface";

const insertFeatQuery = `
INSERT INTO dungeoneerer.feats
(name, type, categories, prerequisites, game_effects, description, benefit, special, normal)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING id
`;

const insertFeatName = `
INSERT INTO dungeoneerer.feat_names
(name, short_description)
VALUES ($1, $2)
ON CONFLICT(name) DO UPDATE SET name = EXCLUDED.name
RETURNING id;
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

class InsertFeat {
    public async insertFeat(feat: IFeat): Promise <IFeat> {
        console.log("Inserting feat");

        const insertFeatParams = [feat.feat_name, feat.type, JSON.stringify(feat.categories),
            JSON.stringify(feat.prerequisites), JSON.stringify(feat.game_effects), feat.description,
            feat.benefit, feat.special, feat.normal];
        const insertFeatResults = await Database.query(insertFeatQuery, insertFeatParams)
            .catch((e) => {
                throw e;
            });

        const featId = insertFeatResults[0].id;

        const insertFeatNameParams = [feat.name, feat.short_description];
        const insertFeatNameResults = await Database.query(insertFeatName, insertFeatNameParams)
            .catch((e) => {
                throw e;
            });

        const featNameId = insertFeatNameResults[0].id;

        const insertFeatIndexParam = [featId, featNameId, feat.book_id, feat.page_number];
        await Database.query(insertFeatIndex, insertFeatIndexParam)
            .catch((e) => {
                throw e;
            });

        if (feat.prerequisites.length > 0) {
            for (const i in feat.prerequisites) {
                if ("feat" in feat.prerequisites[i] && "feat_id" in feat.prerequisites[i].feat) {
                    const insertFeatPrereqParam = [feat.prerequisites[i].feat.feat_id, featId];
                    await Database.query(insertIntoFeatPrereq, insertFeatPrereqParam)
                        .catch((e) => {
                            throw e;
                        });
                }
            }
        }

        feat.id = featId;

        return feat;
    }
}

export default new InsertFeat();
