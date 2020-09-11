import axios from 'axios';

export const FeatAPI ={
    async getFeat(id: string): Promise<any> {
        return await axios.get(`/api/v1/feats/${id}`)
            .catch((e) => {
                throw e;
            });
    },

    async getRealtedFeats(id: string): Promise<any> {
        return await axios.get(`/api/v1/feats/${id}/related`)
            .catch((e) => {
                throw e;
            });
    },
}
