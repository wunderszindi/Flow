let vampirOsszes = 12;
let vampirNo = 3;
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

console.log('Samnak', golyoSam, 'db tölténye van, Deannek pedig', golyoDean, 'db.')
console.log('Samnak és Deannek összesen', golyoOsszes, 'db golyója van.');

console.log('Egy női vámpír megöléséhez', golyoNo,'db golyó szükséges.');
console.log('Az Alpha vámpír megöléséhez', golyoAlpha,'db golyó szükséges.');

if (toltenyDean > toltenySam){
    console.log('Deannek van több tölténye!');
}else {
    console.log('Samnak van több tölténye!');
}

console.log('Az összes vámpír megöléséhez', killOsszes, 'töltényre van szükség!')

let golyoSamUj = 0;

if((golyoSam - killNo) > 1) {
    golyoSamUj = golyoSam - killNo;
    console.log('Samnak',golyoSamUj, 'tölténye maradt!');
    if (golyoSamUj - golyoAlpha > 9){
        console.log('Sam megolte az alphat is!');
    }else{
        console.log('Ennyi töltény nem elég az Alpha megöléséhez!');
    }
} 

let golyoDeanUj = 0;
let minNoHalalDean = golyoDean / golyoNo;

if (minNoHalalDean > vampirNo){
    if((golyoDean - killNo) > 0) {
        golyoDeanUj = golyoDean - killNo;
        console.log('Deannak',golyoDeanUj, 'tölténye maradt!');
    }
        if (golyoDeanUj - golyoAlpha > 9){
            console.log('Dean megölte az alphat is!');
        }
        else {
            console.log('Ennyi töltény nem elég az Alpha megöléséhez!');
        }
}else {
    console.log('Dean maximum', minNoHalalDean, 'női vámpírt tud megölni és így', golyoDean%minNoHalalDean, 'golyója marad');
}
    
if (toltenyDean + toltenySam > killOsszes){
    console.log('Nincs szükseg angyali beavatkozásra')
} else {
    console.log('Az angyalnak be kell avatkoznia')
}

let toltenyDeanWiskey = toltenyDean - 13;

if (toltenyDeanWiskey > toltenySam){
    console.log('Dean ölt meg több vámpírt', toltenyDeanWiskey/ toltenySam, '%-kal');
}else {
    console.log('Sam ölt meg több vámpírt', toltenySam/ (toltenySam -toltenyDeanWiskey), '%-kal');
}

let golyoCrowley = 5 * golyoAlpha;

if ((toltenyDeanWiskey + toltenySam) - killOsszes > golyoCrowley){
    console.log('Sikerülhetett megölni Crowley-t is!');
}else{
    console.log('Crowley győzött!');
}

let s8e18 = (22 + 22 + 16 + 22 + 22 + 22 + 23 + 18);
let avarageScreenTime = 45;
let fullWatchesTime = s8e18 * avarageScreenTime;

console.log('Ha átlagosan 5 részt néz Tasi,' , s8e18/ 5, 'napig és', s8e18* avarageScreenTime, 'percig tartott,ami', s8e18* avarageScreenTime/60, 'óra');


//let killNo = vampirNo * golyoNo;
//console.log('A női vámpírokat', killNo, 'db golyó öli meg!');

//let killHim = vampirHim * golyoHim;
//console.log('A hím vámpírokat', killHim, 'db golyó öli meg!');


//let osszesSam = golyoSam * tarSam;
//console.log('Sam összesen', osszesSam, '-t vámpírt ölhet meg.');

//let osszesDean  = golyoDean * tarDean;
//console.log('Dean összesen', osszesDean, '-t vámpírt ölhet meg.');
