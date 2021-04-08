const validUrl = require("valid-url")
const database = require("../utils/database")
const random = require("../utils/random")

module.exports = {
  async shortenURL(root, { url }, ctx) {
  	if (validUrl.isUri(url)) {
  		const code = random.generate(6)
  		const shortUrl = `https://bd-challenge.herokuapp.com/${code}`
  		const data = [url, shortUrl, code]
	    const insertedUrl = await database.insertURL(data)
	    return insertedUrl;
  	}
    throw new Error("Please enter a valid url")
  },
};
