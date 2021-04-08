const { Client } = require("pg");

module.exports = {
  async init() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    client.connect();
    try {
      const sql = `
        CREATE TABLE IF NOT EXISTS urls 
          (id SERIAL, longurl VARCHAR NOT NULL, shorturl VARCHAR NOT NULL, code VARCHAR NOT NULL)
        `;
      await client.query(sql);
      client.end();
    } catch (e) {
      client.end();
      throw new Error("An error ocurred, please try again");
    }
  },

  async insertURL(data) {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    client.connect();
    try {
      const sql =
        "INSERT INTO urls (longurl, shorturl, code) VALUES ($1, $2, $3) RETURNING *";
      const response = await client.query(sql, data);
      client.end();
      return response.rows[0];
    } catch (e) {
      client.end();
      throw new Error("An error ocurred, please try again");
    }
  },

  async findURLByCode(code) {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    client.connect();
    try {
      const sql = "SELECT * FROM urls WHERE code = $1";
      const response = await client.query(sql, [code]);
      client.end();
      return response.rows[0];
    } catch (e) {
      client.end();
      throw new Error("An error ocurred, please try again");
    }
  },
};
