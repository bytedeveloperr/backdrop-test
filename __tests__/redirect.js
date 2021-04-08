const request = require("supertest");
const app = require("../src/app")

test("Shorten URL", (done) => {
  request(app)
    .get("/graphiql")
    .send({
      query: "{ shortenURL(url: \"https://twitter.com/bytedeveloper_\") }",
    })
    .set("Accept", "application/json")
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.body).toBeInstanceOf(Object);
      expect(typeof res.body.data.shortenURL
      	).toBe("string");
      done();
    });
});