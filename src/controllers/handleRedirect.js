const { database } = require("../lib");

module.exports = async (request) => {
  const url = await database.findURLByCode(request.params.code);
  if (url) {
    return { redirect: url.longurl };
  } else {
    throw new Error("Short URL does not exist");
  }
};
