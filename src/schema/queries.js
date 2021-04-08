const validUrl = require("valid-url")
const database = require("../utils/database")
const random = require("../utils/random")

module.exports = {
  async shortenURL(root, { url }, ctx) {
  	if (validUrl.isUri(url)) {
  		const code = random.generate(6)
  		const shorturl = `https://bd-challenge.herokuapp.com/${code}`
	    const insertedUrl = await database.insertURL([url, shorturl, code])
	    return insertedUrl.shorturl;
  	}

    throw new Error("Please enter a valid url")
  },
};
