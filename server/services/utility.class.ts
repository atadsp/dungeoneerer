import {IErr} from "./utility.interface";

class Utility {
    public checkDBResult(results: any, lengthErr: boolean): IErr {
        if ("stack" in results) {
            const errText: IErr = {error: results.stack, status: 500};
            return errText;
        }
        if (lengthErr && results.length === 0) {
            const errText: IErr = {error: "No Feat Found", status: 422};

            return  errText;
        }
        return {} as IErr;
    }
}

export default new Utility();
