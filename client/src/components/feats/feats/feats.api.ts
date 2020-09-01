import axios from 'axios';

export const FeatsAPI ={
    async getFeats(): Promise<any> {
        return await axios.get("/api/v1/feats")
            .catch((e) => {
                throw e;
            });
    }
}
