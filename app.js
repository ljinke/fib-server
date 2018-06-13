const app = require("express")();

const fib = require("./src/fib");
const callbackFib = require("./src/callbackFib");
const promiseFib = require("./src/promiseFib");
const asyncFib = require("./src/asyncFib");

app.get("/fib/:n", (req, res) => {
  console.log(`fib${req.params.n}`);

  const result = fib(req.params.n);
  res.json({ result });
});

app.get("/callback/:n", (req, res) => {
  console.log(`callback${req.params.n}`);

  callbackFib(req.params.n, result => {
    res.json({ result });
  });
});

app.get("/promise/:n", async (req, res) => {
  console.log(`promise${req.params.n}`);

  const result = await promiseFib(req.params.n);
  res.json({ result });
});

app.get("/async/:n", async (req, res) => {
  console.log(`async${req.params.n}`);

  const result = await asyncFib(req.params.n);
  res.json({ result });
});

app.listen(3030);
