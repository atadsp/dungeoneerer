import * as pg from "pg";

const pool = new pg.Pool();

pool.on("error", (err, client,) => {
  console.error("Unexpected error on idle client", err,);
  process.exit(-1,);
},);

class Database {
  public async query(queryString: string, params: any[],): Promise<any> {
    return await pool
      .connect()
      .then(async (client,) => {
        try {
          const res = await client.query(queryString, params,);
          client.release();
          return res.rows;
        } catch (err) {
          client.release();
          console.log(err.stack,);
          throw err;
        }
      },)
      .catch((e,) => {
        throw e;
      },);
  }
}

export default new Database();
