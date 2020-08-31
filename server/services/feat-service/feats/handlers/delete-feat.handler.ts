import Database from "../../../../database/database.class";

const deleteFeatQuery = `
DELETE FROM feats.feats
WHERE feat_id = $1;
`;

class GetFeat {
    public async deleteFeatById(id: any): Promise < null > {
        console.log("Deleting Feat: ", id);

        await Database.query(deleteFeatQuery, [id])
            .catch((e) => {
                throw e;
            });

        return null;
    }
}

export default new GetFeat();
