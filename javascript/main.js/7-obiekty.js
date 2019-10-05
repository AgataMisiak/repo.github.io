let osobaOb={
    imie: 'Agata',
    nazwisko: "Misiak",
    wiek: 27,
    zawod: "programista",
    nazwa_funkcji: function(){
        return `Cześć, mam na imię ${this.imie} i mam ${this.wiek}`;
    }
}
let przedstawienie = osobaOb.nazwa_funkcji();
console.log(przedstawienie);


