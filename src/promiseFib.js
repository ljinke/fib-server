const fib = n => {
  if (n <= 2) {
    return 1;
  } else {
    return Promise.all([
      delayed().then(() => fib(n - 1)),
      delayed().then(() => fib(n - 2))
    ]).then(([a, b]) => a + b);
  }
};

const delayed = () => {
  return new Promise(resolve => {
    setImmediate(() => {
      resolve();
    });
  });
};

module.exports = fib;
