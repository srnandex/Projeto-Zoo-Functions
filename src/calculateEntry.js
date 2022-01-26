const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const idadeSeparar = { child: 0, adult: 0, senior: 0 };
  const clientsChild = entrants.filter((idadC) => idadC.age < 18);
  const clientsAdult = entrants.filter((idadA) => (idadA.age >= 18 && idadA.age < 50));
  const clientsSenior = entrants.filter((idadS) => idadS.age >= 50);
  idadeSeparar.child = clientsChild.length;
  idadeSeparar.adult = clientsAdult.length;
  idadeSeparar.senior = clientsSenior.length;
  return idadeSeparar;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants[0] === undefined) {
    return 0;
  }
  const numberVisit = countEntrants(entrants);
  const valorChild = numberVisit.child * 20.99;
  const valorAdult = numberVisit.adult * 49.99;
  const valorSenior = numberVisit.senior * 24.99;
  return valorAdult + valorChild + valorSenior;
}
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
