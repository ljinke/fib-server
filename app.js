const app = require("express")();
const responseTime = require("response-time");
const throttle = require("express-throttle");

const fib = require("./src/fib");
const callbackFib = require("./src/callbackFib");
const promiseFib = require("./src/promiseFib");
const asyncFib = require("./src/asyncFib");

const PORT = process.env.PORT || 5000;

app.use(responseTime());

const requestThrottle = throttle({ rate: "5/s" });

app.get("/fib/:n", requestThrottle, (req, res) => {
  console.log(`started fib${req.params.n}: ${new Date().toISOString()}`);

  const result = fib(req.params.n);
  console.log(`complete fib${req.params.n}: ${new Date().toISOString()}`);

  res.json({ result });
});

app.get("/callback/:n", requestThrottle, (req, res) => {
  console.log(`started callback${req.params.n}: ${new Date().toISOString()}`);

  callbackFib(req.params.n, result => {
    console.log(
      `complete callback${req.params.n}: ${new Date().toISOString()}`
    );

    res.json({ result });
  });
});

app.get("/promise/:n", requestThrottle, async (req, res) => {
  console.log(`started promise${req.params.n}: ${new Date().toISOString()}`);

  const result = await promiseFib(req.params.n);

  console.log(`complete promise${req.params.n}: ${new Date().toISOString()}`);

  res.json({ result });
});

app.get("/async/:n", requestThrottle, async (req, res) => {
  console.log(`started async${req.params.n}: ${new Date().toISOString()}`);

  const result = await asyncFib(req.params.n);
  console.log(`complete async${req.params.n}: ${new Date().toISOString()}`);

  res.json({ result });
});

process.on("unhandledRejection", error => {
  console.log("Fib server shuting down due to unhandled error.", {
    pid: process.id,
    error: error.message
  });
  //eslint-disable-next-line
  process.exit(1);
});

console.log(`Starting server at port: ${PORT}`);

app.listen(PORT);

console.log(`Server started at port: ${PORT}`);
