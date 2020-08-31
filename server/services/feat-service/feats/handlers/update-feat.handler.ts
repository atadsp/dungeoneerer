import Database from "../../../../database/database.class";
import Utility from "../../../../services/utility.class";
import { IFeat } from "../../models/feat.interface";
import GetFeat from "./get-feat.handler";

class UpdateFeat {
    public async updateFeatById(feat: any, featId: number): Promise <IFeat> {
        console.log("Updating feat", featId);

        const keyArry = [];
        const valArry = [];

        for (const i in feat) {
            if (feat.hasOwnProperty(i)) {
                keyArry.push(i);
                valArry.push(feat[i]);
            }
        }

        valArry.push(featId);

        const query = Utility.generateUpdateQuery("feats", "feats", keyArry);

        console.log(feat);
        console.log(query);
        console.log(keyArry);
        console.log(valArry);

        await Database.query(query, valArry)
            .catch((e) => {
                throw e;
            });

        const updatedFeat = await GetFeat.getFeatByID(featId);

        console.log(updatedFeat);

        return updatedFeat;
    }
}

export default new UpdateFeat();
