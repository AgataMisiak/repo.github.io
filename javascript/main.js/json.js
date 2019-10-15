let jsonOsoby = {
   "osoby": [
       {
           imie: "Krystian", 
           nazwisko: "Dziopa", 
           wzrost: 180, 
           oczy: "niebieskie", 
           zainteresowania: [] 
       },
       {
           imie: "Dominik",
           nazwisko: "Gomuła",
           wzrost: 170,
           oczy: "brązowe",
           zainteresowania: [
               { nazwa: "gotowanie" },
               { nazwa: "języki" }
           ]
       },
       {
           imie: "Claudia",
           nazwisko: "Żelazowska",
           wzrost: 167,
           oczy: "brązowe",
           zainteresowania: [
               { nazwa: "programowanie" },
               { nazwa: "podroze" },
               { nazwa: "języki" }
           ]
           
       }
   ]
}


jsonOsoby.osoby.forEach(function(elementTablicy, indexTablicy, Tablica){
    let osoba = `imię ${elementTablicy.imie}, nazwisko: ${elementTablicy.naziwsko}`;
    let zainteresowania='';
    if (elementTablicy.zainteresowania.length>0){
        elementTablicy.zainteresowania.forEach(function(element, index){
            zainteresowania += `, zainteresowania: ${element.nazwa}, `;
        });
    };
    osoba += zainteresowania;
    console.log(osoba);
});