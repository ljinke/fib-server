const fib = n => {
  return Promise.resolve().then(() => {
    if (n <= 2) {
      return 1;
    } else {
      return Promise.all([fib(n - 1), fib(n - 2)]).then(([a, b]) => a + b);
    }
  });
};

module.exports = fib;
