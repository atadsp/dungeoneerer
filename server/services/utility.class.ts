class Utility {
    public generateUpdateQuery = (schema: string, table: string, cols: string[]): string => {
        let query = `UPDATE ${schema}.${table} SET`;

        let i = 1;
        cols.forEach((element) => {
            query += ` ${element} = $${i},`;
            i++;
        });

        query = query.substring(0, query.length - 1);

        query += ` WHERE id = $${i}`;

        return query;
    }
}

export default new Utility();
