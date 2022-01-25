const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nameSpecie = data.species.find((naSpecies) => naSpecies.name === animal);
  const verif = nameSpecie.residents.every((getAni) => getAni.age > age);
  return verif;
}
module.exports = getAnimalsOlderThan;
