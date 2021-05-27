import Database from "../../../../database/database.class";
import { ICulture, } from "../../models/culture.interface";

const getCultures = `SELECT * FROM character_generator.random_culture;`;

class GetCulture {
  public async getCultures(): Promise<ICulture[]> {
    console.log("Getting All Cultures", );

    const cultures = await Database.query(getCultures, [], ).catch((e,) => {
      throw e;
    },);

    return cultures as ICulture[];
  }
}

export default new GetCulture();
