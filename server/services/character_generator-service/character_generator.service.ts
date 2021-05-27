import * as express from "express";
import Randomizer from "./randomizer/randomizer.class";
import Gender from "./gender/gender.class";
import Culture from "./culture/culture.class";

class CharacterGeneratorService {
  public NewCharacterGeneratorService(app: express.Express,): express.Express {
    app = Randomizer.RandomizerRoutes(app,);
    app = Gender.GenderRoutes(app,);
    app = Culture.CultureRoutes(app,);

    return app;
  }
}

export default new CharacterGeneratorService();
