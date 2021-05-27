import axios from "axios";

export const FeatsAPI = {
  async getFeats(): Promise<any> {
    return await axios.get("/api/v1/feats_by_index",).catch((e,) => {
      throw e;
    },);
  },
};
