const { database } = require("../lib");

module.exports = async (request) => {
	// short URL shouldn't be greater than 6 characters according to the instructions given.
	if (request.params.code.length > 6) {
		throw new Error("Invalid Short URL")
	} else {
		const url = await database.findURLByCode(request.params.code);
	  if (url) {
	    return { redirect: url.longurl };
	  } else {
	    throw new Error("Short URL does not exist");
	  }
	}
};
