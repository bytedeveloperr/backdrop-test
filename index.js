const express = require("express");
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const database = require("./src/utils/database")
const schema = require("./src/schema");

database.init()
const app = express();

app.use(
  "/graphiql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/:code", async (req, res) => {
  const url = await database.findURLByCode(req.params.code)
  if (url) {
    res.redirect(url.url);
  } else {
    res.send("url isn't shortened");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
