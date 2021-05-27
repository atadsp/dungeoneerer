import axios from "axios";

export const CharacterGeneratorAPI = {
  async generateCharacter(characterName: string, ): Promise<any> {
    return await axios.get(`/api/v1/character_generator?characterName=${characterName}`,).catch((e,) => {
      throw e;
    },);
  },
};
