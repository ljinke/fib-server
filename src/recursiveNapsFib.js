const napa = require("napajs");

// Change this value to control number of napa workers initialized.
const NUMBER_OF_WORKERS = 4;

// Create a napa zone with number_of_workers napa workers.
const zone = napa.zone.create("rfib", { workers: NUMBER_OF_WORKERS });

function fib(n) {
  if (n <= 2) {
    return 1;
  }

  const p1 = zone.execute("", "fib", [n - 1]);
  const p2 = zone.execute("", "fib", [n - 2]);

  // Returning promise to avoid blocking each worker.
  return Promise.all([p1, p2]).then(([result1, result2]) => {
    return result1.value + result2.value;
  });
}

// Broadcast declaration of 'napa' and 'zone' to napa workers.
zone.broadcast(
  ' \
    var napa = require("napajs"); \
    var zone = napa.zone.get("rfib"); \
'
);
// Broadcast function declaration of 'fibonacci' to napa workers.
zone.broadcast(fib.toString());

module.exports = fib;
