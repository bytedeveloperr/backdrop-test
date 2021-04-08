const database = require("../utils/database")
const random = require("../utils/random")

module.exports = {
  async shortenURL(root, { url }, ctx) {
    const data = [url, random.generate(6)]
    const insertedUrl = await database.insertURL(data)
    return insertedUrl;
  },
};
