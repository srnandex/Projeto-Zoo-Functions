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
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
