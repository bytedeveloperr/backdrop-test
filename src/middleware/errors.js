const { handler } = require("../lib");

module.exports = () => {
  return (err, req, res, next) => {
    res
      .status(err.statusCode || 500)
      .json(handler.reply(err.message, null, "error"));
  };
};
