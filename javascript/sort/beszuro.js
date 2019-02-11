let z = [4, 2, 10, 5, 6];
function beszuras (tomb) {
  for (let i = 1; i < tomb.length; i++) {
    let temp = tomb[i];//2
    let j = i - 1;//0
    console.log(tomb[i], tomb[j]);
    for (j; j >= 0 && temp < tomb[j]; j--) {
      tomb[j + 1] = tomb[j];//2-->4
      console.log(tomb[i], tomb[j]);
    }
    tomb[j + 1] = temp;
    console.log(tomb);
  } return tomb;
}


let result = beszuras(z);
console.log(result);
