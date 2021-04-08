const validUrl = require("valid-url");
const { database, random } = require("../lib");

module.exports = {
  async shortenURL(root, { url }, ctx) {
    try {
      if (validUrl.isUri(url)) {
        const code = random.generate(6);
        const shorturl = `https://bd-challenge.herokuapp.com/${code}`;
        const insertedUrl = await database.insertURL([url, shorturl, code]);
        return insertedUrl.shorturl;
      }
      throw new Error("Please enter a valid url. e.g http://example.com");
    } catch (e) {
      throw new Error(e.message);
    }
  },
};
