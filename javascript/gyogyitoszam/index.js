const torzs = require('./torzs.js');
const balkez = require('./balkez.js');
const jobbkez = require('./jobbkez.js');
const jobblab = require('./jobblab.js');
const ballab = require('./ballab.js');
const fej = require('./fej.js');

const readline = require('readline-sync');

let yourName = readline.question('Hogy hívnak? ');
console.log('Üdvözöllek,', yourName + '!');
console.log('Melyik testrészed fáj?');

let algorithm = ['törzs', 'bal kéz', 'jobb kéz', 'jobb láb', 'bal láb', 'fej'];
let index = readline.keyInSelect(algorithm, 'Adj meg egy számot a listáról!');

let num1 = Math.floor(Math.random() * 1000000) + 1000;
let num2 = Math.floor(Math.random() * 1000000) + 1000;

let algorithmPicker = index => {
  switch (index) {
    case 0:
      while (true) {
        num1 = Math.floor(Math.random() * 1000000) + 10000;
        if (torzs.fibonacci(num1)) {
          return num1;
        }
      }
    case 1:
      while (true) {
        num1 = Math.floor(Math.random() * 1000000) + 10000;
        if (balkez.prime(num1)) {
          return num1;
        }
      }
    case 2:
      while (true) {
        num1 = Math.floor(Math.random() * 1000000) + 10000;
        if (jobbkez.oszthatoot(num1)) {
          return num1;
        }
      }
    case 3:
      while (true) {
        num1 = Math.floor(Math.random() * 1000000) + 10000;
        if (jobblab.ikerprim(num1, num2)) {
          return num1;
        }
      }
    case 4:
      while (true) {
        num1 = Math.floor(Math.random() * 1000000) + 10000;
        if (ballab.pozitivEgesz(num1)) {
          return num1;
        }
      }
    case 5:
      while (true) {
        num1 = Math.floor(Math.random() * 1000000) + 10000;
        if (fej.oszthatoHarom(num1)) {
          return num1;
        }
      }
  }
};

let result = algorithmPicker(index);
console.log(yourName, 'a te gyógyító számod:', result);
