import Database from "../../../../database/database.class";
import { IGender, } from "../../models/gender.interface";

const getGenders = `SELECT * FROM character_generator.random_gender;`;

class GetGender {
  public async getGenders(): Promise<IGender[]> {
    console.log("Getting All Genders", );

    const genders = await Database.query(getGenders, [], ).catch((e,) => {
      throw e;
    },);

    return genders as IGender[];
  }
}

export default new GetGender();
