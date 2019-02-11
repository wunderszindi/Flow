function fibonacci (n) {
  let x = 1;
  let y = 1;
  let temp = 0;

  for (let i = 3; i <= n; i++) {
    temp = x + y;
    x = y;
    y = temp;
  } return y;
}
console.log(fibonacci(46));

let result = fibonacci(10);
if (result !== 55) {
  console.log('Rossz a fuggveny!');
}
