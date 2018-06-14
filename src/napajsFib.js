const napa = require("napajs");

function fib(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// Change this value to control number of napa workers initialized.
const NUMBER_OF_WORKERS = 4;

// Create a napa zone with number_of_workers napa workers.
const zone = napa.zone.create("fib", { workers: NUMBER_OF_WORKERS });

// Broadcast function declaration of 'fibonacci' to napa workers.
zone.broadcast(fib.toString());

const napaFib = n => {
  return zone
    .execute("", "fib", [n])
    .then(result => result.value)
    .catch(err => console.error(err));
};

module.exports = napaFib;
