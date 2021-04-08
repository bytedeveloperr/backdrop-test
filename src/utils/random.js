module.exports = {
  generate(limit) {
    return crypto.randomBytes(limit / 2).toString("hex");
  },
};
