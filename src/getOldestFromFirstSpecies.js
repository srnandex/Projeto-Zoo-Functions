const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let aniOld = { age: 0 };
  const encotrarEmploy = data.employees.find((el) => el.id === id);
  const encotrarAni = data.species.find((ele) => ele.id === encotrarEmploy.responsibleFor[0]);
  encotrarAni.residents.forEach((eleme) => {
    if (eleme.age > aniOld.age) {
      aniOld = eleme;
    }
  });
  const resp = [aniOld.name, aniOld.sex, aniOld.age];
  return resp;
}

module.exports = getOldestFromFirstSpecies;
