const data = require('../data/zoo_data');

function getSpeciesByIds(ids1, ids2) {
  const filSpecie = data.species
   .filter((filSpecies) => filSpecies.id === ids1 || filSpecies.id === ids2);
  return filSpecie;
}
module.exports = getSpeciesByIds;
