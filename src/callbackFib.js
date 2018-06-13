function fibonacci(n, done) {
  if (n < 2) {
    done(1);
  } else {
    process.nextTick(function() {
      fibonacci(n - 2, function(val1) {
        fibonacci(n - 1, function(val2) {
          done(val1 + val2);
        });
      });
    });
  }
}

module.exports = fibonacci;
