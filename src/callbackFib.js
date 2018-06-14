const fib = (n, done) => {
  if (n < 2) {
    done(1);
  } else {
    setImmediate(() => {
      fib(n - 2, val1 => {
        fib(n - 1, val2 => {
          done(val1 + val2);
        });
      });
    });
  }
};

module.exports = fib;
