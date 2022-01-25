const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const funcionario = data.employees
    .find((empre) => empre.firstName === employeeName || empre.lastName === employeeName);
  return funcionario;
}
module.exports = getEmployeeByName;
