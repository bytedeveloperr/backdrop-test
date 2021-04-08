const request = require("supertest");
const app = require("../src/app");

const vals = [1234, true];

test("Shorten Non String Value Of URL", (done) => {
  const val = vals[Math.round(Math.random())];
  request(app)
    .post("/graphiql")
    .send({
      query: `{ shortenURL(url: ${val}) }`,
    })
    .set("Accept", "application/json")
    .expect(400)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.body).toBeInstanceOf(Object);
      expect(Array.isArray(res.body.errors)).toBe(true);
      expect(res.body.data).toBe(undefined);
      expect(res.body.errors[0].message).toBe(
        `String cannot represent a non string value: ${val}`
      );
      done();
    });
});
