import { IFeat, } from "./feat.interface";

export interface IFeatRelated {
  same_feat: IFeat[];
  required_for: IFeat[];
  requires: IFeat[];
}
