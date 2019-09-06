export interface IDatabase {
    getClient(c: any): void;
    query(t: string, p: any, c: any): void;
}
