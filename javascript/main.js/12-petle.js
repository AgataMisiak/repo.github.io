const imiona = [
    'Maciek',
    'Zosia',
    'PAweł',
    'Jola'
];


for(let i=0; i <= imiona.length-1; i++){
    if(i%2 != 0){
        // continue;
        break;
    }
    console.log(imiona[i]);
}

const obj = {
    imie: "agata",
    nazwisko: "misiak",
    wiek: 27
}

for(let i in obj){
    console.log("Właściwość "+i+" "+obj[i]);
}


let number = 10;
let iter = 0;
let wynik=[];

while(iter<=number){
    wynik.push(`iteracja nr ${iter + 1}`);
    iter++;
}

console.log(wynik.join(' + '));