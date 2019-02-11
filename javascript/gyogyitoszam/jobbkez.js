function oszthatoot (n) {
  if (n % 5 === 0 && n % 7 !== 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = { oszthatoot };
