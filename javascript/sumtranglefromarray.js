let arr = [1, 2, 3, 4, 5];

function sumTriangle (arr) {
  let len = arr.length;
  let newArr = [];

  for (let i = 0; i < len - 1; i++) {
    let temp = arr[i] + arr[i + 1];
    newArr.push(temp);
  }
  if (newArr.length > 1) {
    sumTriangle(newArr);
  }
  console.log(newArr);
}

sumTriangle(arr);
