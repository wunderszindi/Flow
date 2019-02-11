let tomb = [9, 7, 56, 8, 45, 21];

function bubble (tomb) {
  let len = tomb.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (tomb[j] > tomb[j + 1]) {
        let swap = tomb[j];
        tomb[j] = tomb[j + 1];
        tomb[j + 1] = swap;
        console.log(tomb);
      }
    }
  }
  return tomb;
}

let result = bubble(tomb);
console.log(result);
