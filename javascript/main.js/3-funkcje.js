function mnozenie(parametr1, parametr2, parametr3){
    let wynik = parametr1 * parametr2 * parametr3;
    let rezultatDzialania1 = 'Twój wynik to: '+ wynik;
    let rezultatDzialania2 = `Twój wynik to: ${wynik}`;
    return rezultatDzialania1;
    console.log(rezultatDzialania1, rezultatDzialania2)
}

let wynik=mnozenie(34,54,90);
// console.log(mnozenie(34,54,90));
// console.log(wynik);


const mnozenieFatArrow = (liczba1,liczba2,liczba3) => {
    let wynik = liczba1*liczba2*liczba3;
    let rezultatDzialaniafunkcji2=`wynik to ${wynik}`;
    return(rezultatDzialaniafunkcji2);
}

let wynikmnozenia = mnozenieFatArrow(3,3,3);
// console.log(wynikmnozenia);

const mnozenieskrotowo = (p1,p2,p3) => `wynik to ${p1*p2*p3}`;
console.log(mnozenieskrotowo(3,4,5));