import Database from "../../database/database.class";
import Utility from "../utility.class";
import { IErr } from "../utility.interface";

const deleteFeatQuery = `
DELETE FROM dungeoneerer.feats
WHERE feat_id = $1;
`;

class GetFeat {
    public async deleteFeatById(id: any): Promise < any | IErr > {
        console.log("Deleting Feat: ", id);
        const results = await Database.query(deleteFeatQuery, [id]);
        const errors = Utility.checkDBResult(results, false);

        if ("error" in errors && errors.error !== "") {
            return errors;
        }

        return;
    }
}

export default new GetFeat();
