let tomb = [4, 67, 42, 3, 92, 1];

function exchange (tomb) {
  let len = tomb.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len; j++) {
      if (tomb[i] > tomb[j]) {
        let swap = tomb[i];
        tomb[i] = tomb[j];
        tomb[j] = swap;
      }
    }
  }
  return tomb;
}

let result = exchange(tomb);
console.log(result);