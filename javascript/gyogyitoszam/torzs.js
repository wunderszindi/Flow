let fibonacci = n => {
  let x = 1;
  let y = 1;
  for (let i = 1; x <= n; i++) {
    let temp = y;
    y = y + x;
    x = temp;
    if (x === n) {
      return true;
    }
  } return false;
};

module.exportss = { fibonacci };
