let z = [5, 99, 8, 6, 89, 56];

function exchange (tomb) {
  // let tomb = [5, 3, 7, 6];
  let len = tomb.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (tomb[i] < tomb[j]) {
        let swap = tomb[i];
        tomb[i] = tomb[j];
        tomb[j] = swap;
        console.log(tomb);
      }
    }
  }
  return tomb;
}

//let z = [5, 3, 7, 6];
let result = exchange(z);
console.log(result);
