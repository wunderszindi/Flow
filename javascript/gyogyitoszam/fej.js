function oszthatoHarom (n) {
  if (n % 3 === 0 && n % 4 !== 0) {
    return true;
  } else {
    return false;
  }
}
module.exports = { oszthatoHarom };
