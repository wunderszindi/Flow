let tomb = [4, 67, 42, 3, 92, 1];

function insertion (tomb) {
  let len = tomb.length;
  for (let i = 0; i < len - 1; i++) {
    let swap = tomb[i];
    let valtozo = i;
    for (let j = i + 1; j < len; j++) {
      if (tomb[j] < tomb[valtozo]) {
        valtozo = j;
      }
    }
    tomb[i] = tomb[valtozo];
    tomb[valtozo] = swap;
  } 
  return tomb;
}

let result = insertion(tomb);
console.log(result);
