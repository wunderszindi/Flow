let vampirOsszes = 12;
let vampirNo = 10;
let vampirAlpha = 1;
let vampirHim = 8;

let golyoNo = 2;
let golyoHim = 4;
let golyoAtlag = 3;
let golyoAlpha = golyoAtlag * 3;

let killNo = vampirNo * golyoNo;
let killHim = vampirHim * golyoHim;
let killAlpha = vampirAlpha * golyoAlpha;
let killOsszes = killNo + killHim + killAlpha

let tarSam = 3;
let tarDean = 4;

let golyoSam = 8;
let golyoDean = 10;
let golyoOsszes = golyoSam + golyoDean

let toltenySam = tarSam * golyoSam

let toltenyDean = tarDean * golyoSam
let ujToltenyDean = golyoDean

for (let k = vampirNo; k > 0; k -= 1) {
  ujToltenyDean = ujToltenyDean - golyoNo;
  console.log(vampirNo - k + 1, 'nő vámpír ölt meg');
}

if (ujToltenyDean > golyoAlpha) {
  for (let i = vampirAlpha; i > 0; i -= 1) {
    ujToltenyDean = ujToltenyDean - golyoAlpha;
    console.log(i, 'Alphát ölt meg');
  }
} else {
  console.log('Dean csak a női vámpírokat tudta megölni és', golyoDean % killNo, 'golyója maradt');
}

function vampirOles (a) {
  for (let k = vampirNo; k > 0; k -= 1) {
    a = a - (golyoNo * k);
    return a;
  }
}
if (vampirOles(golyoSam) > golyoAlpha) {
  console.log('az alpha is halott');
}else {
  console.log('Az alpha még él!')
}
console.log(vampirOles(golyoSam), 'golyója maradt');
  
  