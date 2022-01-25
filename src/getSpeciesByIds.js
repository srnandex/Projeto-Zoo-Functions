const zoo = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids1, ids2 ) {
  const filSpecie = data.species.filter((filSpecies)=> filSpecies.id === ids1 || filSpecies.id === ids2);
  return filSpecie;
}
console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46', 'ef3778eb-2844-4c7c-b66c-f432073e1c6b'));
module.exports = getSpeciesByIds;
