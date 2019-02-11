let tomb = [4, 67, 42, 3, 92, 1];

function beszuros (tomb) {
  let len = tomb.length;
  for (let i = 1; i < len; i++) {
    let swap = tomb[i];
    let j = i - 1;
    for (j; j >= 0 && swap < tomb[j]; j--) {
      tomb[j + 1] = tomb[j];
    }
    tomb[j + 1] = swap;
  }
  return tomb;
}

let result = beszuros(tomb);
console.log(result);
