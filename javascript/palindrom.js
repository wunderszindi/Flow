function palindrom (msg) {
  let ujMsg = '';
  let len = msg.length;
  let temp = '';

  for (let i = len - 1; i >= 0; i--) {
    temp += msg[i];
    ujMsg = temp;
  } return ujMsg;
}

function szamol (msg) {
  let newMsg = palindrom(msg);
  if (newMsg === msg) {
    console.log('Ez egy palindrom!');
  } else {
    console.log('Ez nem palindrom');
  }
}
szamol('gorog');

let result = palindrom('gorog');
if (result !== 'gorog') {
  console.log('Ez nem mukodik!');
}
