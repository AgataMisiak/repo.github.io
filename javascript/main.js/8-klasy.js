let kolekcja=[];

class Samochod{
    constructor(marka, model, przebieg, silnik, rok, kolor){
        this.marka = marka;
        this.model = model;
        this.przebieg = przebieg;
        this.silnik - silnik;
        this.rok = rok;
        this.kolor = kolor;
    }

    wyswietlInfo(){
        document.body.insertAdjacentHTML('beforeend',`
        samochód \n 
        Marka: ${this.marka}\n
        Model: ${this.model}\n
        Przebieg: ${this.przebieg}\n
        Silnik: ${this.silnik}\n
        Rok: ${this.rok}\n
        Kolor: ${this.kolor}\n
        <br>`)
    }

    zapiszDoNazy(){
        kolekcja.push(this);
    }
}

let auto1 = new Samochod("BMW", "x6",50000,"diesel",2017,"zielony")
auto1.zapiszDoNazy();
auto1 = new Samochod("Audi", "nie_wiem",4000,"benzyna",2019,"czerwony")
auto1.wyswietlInfo();
auto1.zapiszDoNazy();
// console.log(auto1);
console.log(kolekcja);