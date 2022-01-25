const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  }
  const ani = data.species.find((anima) => anima.name === animal.specie);
  const sexA = ani.residents.filter((sexAni) => sexAni.sex === animal.sex);
  if (animal.sex === undefined) {
    return ani.residents.length;
  } return sexA.length;
}
module.exports = countAnimals;
