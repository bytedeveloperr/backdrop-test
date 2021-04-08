const { Client } = require("pg");

module.exports = {
  async init() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    client.connect();
    try {
      const sql = `CREATE TABLE IF NOT EXISTS short_urls ( id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, url VARCHAR(255) NOT NULL, code VARCHAR(6) NOT NULL)`;
      await client.query(sql);
      client.end();
    } catch (e) {
      client.end();
      // throw new Error("An error ocurred, please try again");
      console.log(e)
    }
  },

  async insertURL(data) {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    client.connect();
    try {
      const sql =
        "INSERT INTO short_urls (url, code) VALUES ($1, $2) RETURNING *";
      const response = await client.query(sql, data);
      client.end();
      return response.rows[0];
    } catch (e) {
      client.end();
      // throw new Error("An error ocurred, please try again");
      console.log(e)
    }
  },

  async findURLByCode(code) {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    client.connect();
    try {
      const sql = "SELECT * WHERE code = $1";
      const response = await client.query(sql, [code]);
      client.end();
      return response.rows[0];
    } catch (e) {
      client.end();
      // throw new Error("An error ocurred, please try again");
      console.log(e)
    }
  },
};
