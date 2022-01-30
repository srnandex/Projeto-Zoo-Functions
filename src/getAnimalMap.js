/* eslint-disable sonarjs/cognitive-complexity */
const data = require('../data/zoo_data');

// função que filtra as regioes
const obReg = () => {
  const filReg = data.species.map((reg) => reg.location);
  const filAr = [...new Set(filReg)];
  return filAr;
};

// função que monta as regioẽs como chave de um objeto
const monObj = (call) => {
  const objTem = {};
  call().forEach((element) => { objTem[element] = []; });
  return objTem;
};
const template = monObj(obReg);

// função monta um objeto com os animais da localidade
const geralAni = (cal) => {
  const geral = cal;
  data.species.forEach((element) => { geral[element.location].push(element.name); });
  return geral;
};
const todosAni = geralAni(template);

// função que pega o nome de todos os animais e ordena
const incluTruGeral = (cal, boll) => {
  const objAniIncludTru = {};
  cal().forEach((element) => {
    const namesAni = [];
    const aniLoc = data.species.filter((neL) => neL.location === element);
    aniLoc.forEach((el) => {
      const an = {};
      const na = el.residents.map((it) => it.name);
      if (boll === true) {
        an[el.name] = na.sort();
      } else {
        an[el.name] = na;
      }
      namesAni.push(an);
    });
    objAniIncludTru[element] = namesAni;
  });
  return objAniIncludTru;
};

// função que pega o nome de todos os animais por sex e ordena
const incluTruSex = (cal, boll, se) => {
  const objAniMale = {};
  cal().forEach((element) => {
    const namesAni = [];
    const aniObNe = data.species.filter((neL) => neL.location === element);
    aniObNe.forEach((obj) => {
      const an = {};
      const na = [];
      obj.residents.forEach((it) => {
        if (it.sex === se) {
          na.push(it.name);
        }
      }); if (boll === true) {
        an[obj.name] = na.sort();
      } else {
        an[obj.name] = na;
      } namesAni.push(an);
    }); objAniMale[element] = namesAni;
  }); return objAniMale;
};

// função do requisito
function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return todosAni;
  } if (options.sex !== undefined) {
    return incluTruSex(obReg, options.sorted, options.sex);
  }
  return incluTruGeral(obReg, options.sorted);
}
module.exports = getAnimalMap;
