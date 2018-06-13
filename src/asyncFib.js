const fib = async n => {
  if (n <= 2) {
    return 1;
  } else {
    return (await fib(n - 1)) + (await fib(n - 2));
  }
};

module.exports = fib;
