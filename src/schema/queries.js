const validUrl = require("valid-url")
const database = require("../utils/database")
const random = require("../utils/random")

module.exports = {
  async shortenURL(root, { longurl }, ctx) {
  	if (validUrl.isUri(longurl)) {
  		const code = random.generate(6)
  		const shorturl = `https://bd-challenge.herokuapp.com/${code}`
	    const insertedUrl = await database.insertURL([longurl, shorturl, code])
	    console.log(insertedUrl)
	    return insertedUrl;
  	}

    throw new Error("Please enter a valid url")
  },
};
