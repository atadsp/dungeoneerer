import pg = require("pg");

const pool = new pg.Pool();

class Database {
  public getClient(callback: any): void {
    pool.connect((err: any, client: any, done: any) => {
      const query = client.query.bind(client);
      // monkey patch the query method to keep track of the last query executed
      client.query = () => {
        client.lastQuery = arguments;
        client.query.apply(client, arguments);
      };

      // set a timeout of 5 seconds, after which we will log this client's last query
      const timeout = setTimeout(() => {
        console.error("A client has been checked out for more than 5 seconds!");
        console.error(`The last executed query on this client was: ${client.lastQuery}`);
      }, 5000);
      const release = (relErr: any) => {
        // call the actual 'done' method, returning this client to the pool
        done(relErr);
        // clear our timeout
        clearTimeout(timeout);
        // set the query method back to its old un-monkey-patched version
        client.query = query;
      };
      callback(err, client, release);
    });
  }

  public async query(text: string, params: any): Promise<void | any[]> {
    return await pool.query(text, params)
        .then((res) => {
          return res.rows;
        })
        .catch((e) => console.error(e.stack));
  }
}

export default new Database();
