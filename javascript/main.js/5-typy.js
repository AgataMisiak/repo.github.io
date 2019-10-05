// typ liczbowy
let wyplata = 5000;
let premia = 1200;

const dochod = wyplata + premia;
// console.log(dochod); 
// console.log(typeof(dochod));

let wyplataString="5000";
let premiaString="1300";
const dochodString = Number(wyplataString) + Number(premiaString);
console.log(dochodString, typeof(dochodString));

//logiczny
let prawda=true;
if (prawda){
    console.log("jemy chinczyka")
}else{
    console.log("zostajemy w domu")
}

console.log(typeof(prawda))

//indefined
let zmienna;
console.log(zmienna, typeof(zmienna));

//null
let tytulStrony=document.getElementById('tytul');
console.log(tytulStrony);

