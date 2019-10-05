const samochody = [
    "honda",
    "passat",
    "toyota",
    "mazda"
];


//dodajemy kilka samochodow
samochody.push("BMW","Porshe");
// console.log(samochody, samochody.length);
// ["honda", "passat", "toyota", "mazda", "BMW", "Porshe"] 6


samochody.unshift("masserati","maclaren");
// console.log(samochody, samochody.length);
//  ["masserati", "maclaren", "honda", "passat", "toyota", "mazda", "BMW", "Porshe"]

let usuniety=samochody.pop();
// console.log(`usunięty samochod to ${usuniety}`);
// usunięty samochod to Porshe

console.log(samochody);
let usuniete3ZKonca=samochody.splice(samochody.length-3);
console.log(samochody);

//usuwanie z przodu
console.log(samochody);
console.log(samochody.shift());
console.log(samochody);

// zamiana tablicy na string
console.log(samochody.join(' + '));
string_sam=samochody.join(' + ');
//tablica ze stringa
console.log(string_sam.split(' + '))

console.log(samochody.reverse());
console.log(samochody.sort());

let czyIStnieje = samochody.indexOf("BMW");
console.log(czyIStnieje);

let czyIStnieje1 = samochody.includes("BMW");
console.log(czyIStnieje1);

let czytablica = Array.isArray(samochody);
console.log(czytablica);

samochody.forEach(function(elementTablicy, indexTablicy, tablica){
    console.log(`wartosc elementu: ${elementTablicy} | index elementu: ${indexTablicy}`);
});


























