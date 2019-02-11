function haromLeg (z) {
  let var1 = 0;
  let var2 = 0;
  let var3 = 0;
  //let temp = -100;

  for ( let j = 0; j < z.lenght; j++) {
    if (var1 > z[j]) {
      var1 = z[j];
    } if (var1 > var2[j]) {
      var1 = var2[j];
    } if (var2 > var3[j]) {
      var3 = var2[j];
    } return (var1, var2, var3);

  } console.log(var1, var2, var3);
}

let z = [3, 5, 6, 7, 2, 23, 56, 23];

haromLeg(z);