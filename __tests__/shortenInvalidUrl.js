const request = require("supertest");
const app = require("../src/app")

test("Shorten Invalid URL", (done) => {
  request(app)
    .get("/graphiql")
    .send({
      query: "{ shortenURL(url: \"twitter.com\") }",
    })
    .set("Accept", "application/json")
    .expect(500)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.body).toBeInstanceOf(Object);
      expect(Array.isArray(res.body.errors)).toBe(true);
      expect(res.body.data).toBe(null);
      expect(res.body.errors[0].message).toBe("Please enter a valid url. e.g http://example.com");
      done();
    });
});
