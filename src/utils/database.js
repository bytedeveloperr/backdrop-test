const { Client } = require("pg");

module.exports = {
  async init() {
    try {
      const client = new Client({ connectionString: process.env.DATABASE_URL });
      client.connect();
      const sql = `CREATE TABLE IF NOT EXISTS short_urls ( id INT AUTO INCREMENT, url VARCHAR 255 NOT NULL, code VARCHAR 255 NOT NULL, PRIMARY KEY(id) )`;
      await client.query(sql);
      client.end();
    } catch (e) {
      client.end();
      throw new Error("An error ocurred, please try again");
    }
  },

  async insertURL(data) {
    try {
      const client = new Client({ connectionString: process.env.DATABASE_URL });
      client.connect();
      const sql =
        "INSERT INTO short_urls (url, code) VALUES ($1, $2) RETURNING *";
      const response = await client.query(sql, data);
      client.end();
      return response.rows[0];
    } catch (e) {
      client.end();
      throw new Error("An error ocurred, please try again");
    }
  },

  async findURLByCode(code) {
    try {
      const client = new Client({ connectionString: process.env.DATABASE_URL });
      client.connect();
      const sql = "SELECT * WHERE code = $1";
      const response = await client.query(sql, [code]);
      client.end();
      return response.rows[0];
    } catch (e) {
      client.end();
      throw new Error("An error ocurred, please try again");
    }
  },
};
