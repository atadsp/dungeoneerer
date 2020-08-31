import { IFeatPrereq } from "./feat-prereq.interface";

export interface IFeat {
    short_description: string;
    name: string;
    feat_name: string;
    type: boolean;
    categories: string[];
    prerequisites: any[];
    game_effects: any[];
    description: string;
    benefit: string;
    special: string;
    normal: string;
    id: number;
    feat_name_id: number;
    book_name: string;
    page_number: number;
    book_id: number;
    version_name: string;
    version_id: number;
    required_for: IFeatPrereq[];
    requires: IFeatPrereq[];
}
