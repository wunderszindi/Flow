function ceasarCode (msg, nums) {
  let kodolt = '';

  for (let i = 0; i < msg.length; i++) {
    let kod = msg.charCodeAt(i) + nums;
    kodolt += String.fromCharCode(kod);
  }
  return kodolt;
}

//ceasarCode('admin', 1);

let result = ceasarCode('admin', 1);
console.log(result);

if (result !== 'benjo') {
  console.log('result should be benjo!');
}
