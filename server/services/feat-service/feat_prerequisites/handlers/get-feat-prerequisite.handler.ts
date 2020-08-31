import Database from "../../../../database/database.class";
import { IFeatPrereq } from "../../models/feat-prereq.interface";

const getFeatsRequiredFor = `
SELECT fn.name, fn.short_description, fp.prerequisite_feat_id
FROM feats.feat_prerequisites as fp
LEFT JOIN feats.feat_index as fi
ON fi.feat_id = fp.prerequisite_feat_id
LEFT JOIN feats.feat_names as fn
ON fn.id=fi.feat_name_id
WHERE fp.feat_id=$1;
`;

const getFeatsRequires = `
SELECT fn.name, fn.short_description, fp.feat_id
FROM feats.feat_prerequisites as fp
LEFT JOIN feats.feat_index as fi
ON fi.feat_id = fp.feat_id
LEFT JOIN feats.feat_names as fn
ON fn.id=fi.feat_name_id
WHERE fp.prerequisite_feat_id=$1;
`;

class GetFeatPrereq {

    public async getFeatPrereqRequiredFor(featId: any): Promise < IFeatPrereq[] > {
        console.log("Getting Feat Prerequisites Required For: ", featId);

        const requiredFor = await Database.query(getFeatsRequiredFor, [featId])
            .catch((e) => {
                throw e;
            });

        return requiredFor as IFeatPrereq[];
    }

    public async getFeatPrereqRequires(featId: any): Promise < IFeatPrereq[] > {
        console.log("Getting Feat Prerequisites Requires: ", featId);

        const requiredFor = await Database.query(getFeatsRequires, [featId])
            .catch((e) => {
                throw e;
            });

        return requiredFor as IFeatPrereq[];
    }
}

export default new GetFeatPrereq();
