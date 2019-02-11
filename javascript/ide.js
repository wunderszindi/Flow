const tomb = () => {
  let a = [];
  let n = 1;
  for (let i = 0; i < 3; i++) {
    let b = [];
    for (let j = 0; j < 3; j++) {
      b.push(n);
      n++;
    }
    a[i] = b;
    console.log(b);
  }
  console.log(a);
  for (let i = 0; i < 3; i++) {
    console.log(`${a[i][0]} ${a[i][1]} ${a[i][2]}`);
  }
 };

 console.log(tomb())