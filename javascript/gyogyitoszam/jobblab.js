function ikerprim (n, m) {
  for (var x = 2; x < n / 2; x++) {
    if (n % x === 0) {
      return false;
    } else if (m === n - 2 || m === n + 2) {
      return true;
    }
  } return false;
}

module.exports = { ikerprim };
