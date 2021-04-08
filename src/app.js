const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { errors, notFound } = require("./middleware");
const { database, handler } = require("./lib");
const handleRedirect = require("./controllers/handleRedirect");
const schema = require("./schema");

database.init();
const app = express();

app.use(
  "/graphiql",
  graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: (e) => {
      return { message: e.message, status: "error" };
    },
  })
);

app.get("/:code", handler.request(handleRedirect));
app.use("*", notFound());
app.use(errors());

module.exports = app;
