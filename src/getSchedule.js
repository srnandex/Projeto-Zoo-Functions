const data = require('../data/zoo_data');

const daysWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animalZoo = data.species.map((ele) => ele.name);

const arrayAniDay = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }
  const aniDay = [];
  data.species.forEach((element) => {
    if (element.availability.includes(day) === true) {
      aniDay.push(element.name);
    }
  });
  return aniDay;
};

const openClose = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  const dia = data.hours[day];
  const message = `Open from ${dia.open}am until ${dia.close}pm`;
  return message;
};

const constructDay = (day) => {
  const tem = { [day]: {
    officeHour: openClose(day),
    exhibition: arrayAniDay(day),
  },
  };
  return tem;
};

const constructWeek = () => {
  const teem = {};
  daysWeek.forEach((element) => {
    teem[element] = {
      officeHour: openClose(element),
      exhibition: arrayAniDay(element),
    };
  });
  return teem;
};

function getSchedule(scheduleTarget) {
  if (daysWeek.includes(scheduleTarget) === true) {
    return constructDay(scheduleTarget);
  } if (animalZoo.includes(scheduleTarget) === true) {
    const findAni = data.species.find((ele) => ele.name === scheduleTarget);
    return findAni.availability;
  }
  return constructWeek();
}
console.log(getSchedule('lions'));
module.exports = getSchedule;
