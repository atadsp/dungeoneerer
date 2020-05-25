class Utility {
    public generateUpdateQuery = (table: string, cols: any): string => {
        let query = `UPDATE ${table} SET`;

        Object.keys(cols).forEach((key, i) => {
            query += ` ${key} = ?,`;
        });

        query = query.substring(0, query.length - 1);

        query += `WHERE id = ?`;

        return query;
    }
}

export default new Utility();
