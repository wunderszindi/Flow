let tomb = [9, 7, 56, 8, 45, 21];

function selection (tomb) {
  let len = tomb.length;
  for (let i = 0; i < len - 1; i++) {
    let swap = tomb[i];
    let index = i;
    for (let j = i + 1; j < len; j++) {
      if (tomb[index] > tomb[j]) {
        index = j;
      }
    }
    tomb[i] = tomb[index];
    tomb[index] = swap;
  }
  return tomb;
}

let result = selection(tomb);
console.log(result);
