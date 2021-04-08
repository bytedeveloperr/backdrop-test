const { database } = require("../lib");

module.exports = async (request) => {
  // According to the instructions given, short URL path should be of length 6 characters, so path cannot be more than 6.
  if (request.params.code.length > 6) {
    throw new Error("Invalid Short URL");
  } else {
    const url = await database.findURLByCode(request.params.code);
    if (url) {
      return { redirect: url.longurl };
    } else {
      throw new Error("Short URL does not exist");
    }
  }
};
