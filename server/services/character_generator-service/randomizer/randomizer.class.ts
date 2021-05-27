import * as express from "express";
import GetGender from "../gender/handlers/getGender.handler";
import GetCulture from "../culture/handlers/getCulture.handler";
import { ICulture, } from "../models/culture.interface";

const getTotalWeight = (arrayToWeight: any[], ) : number => {
  let totalWeight = 0;
  arrayToWeight.forEach((element,) =>{
    if (element.hasOwnProperty("weight", )){
      totalWeight += element.weight;
    }
  },);
  return totalWeight;
};

const getRandomNumber = (max: number,) :number => {
  const value = Math.floor(Math.random() * max,) + 1;
  return value;
};

const getRandomElementFromArray = (arrayOfElements: any[],) :any => {
  const totalWeight = getTotalWeight(arrayOfElements, );
  const randomWeight = getRandomNumber(totalWeight,);
  let currentWeight = 0;
  const randomElement = arrayOfElements.find((element, ) :any =>{
    if (element.hasOwnProperty("weight", )){
      const startingWeight = currentWeight;
      currentWeight += element.weight;
      if (randomWeight <= currentWeight && randomWeight >= startingWeight){
        return true;
      }
    }
    return false;
  },);
  return randomElement;
};

class Randomizer {
  public RandomizerRoutes(app: express.Express,): express.Express {
    app.get("/api/v1/character_generator", async (req: any, res: any,) => {
      let characterName = req.query.characterName;
      if (req.query !== ""){
        characterName = "ThisWillRandomlyGenerateANameLaterYo";
      }

      const genderArray = await GetGender.getGenders();
      const cultureArray = await GetCulture.getCultures();

      const gender = genderArray[Math.floor(Math.random() * genderArray.length,)];
      const culture = getRandomElementFromArray(cultureArray, ) as ICulture;

      console.log(gender, culture, );
      const resp = {};

      res.send(resp,);
    },);

    return app;
  }
}

export default new Randomizer();
