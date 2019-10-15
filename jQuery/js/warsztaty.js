$( document ).ready( function() {

    // tworzę imię
    $("#formularz").append($("<label for id:'inputImie'>").text("Imie"));
    $("#formularz").append($("<input type='text' id='imieID'>")).append("</br>");

    // tworzę nazwisko
    $("#formularz").append($("<label for id:'inputNazwisko'>").text("Nazwisko"));
    $("#formularz").append($("<input type='text' id='nazwiskoID'>")).append("</br>");

    // tworzę ulicę
    $("#formularz").append($("<label for id:'inputUlica'>").text("Ulica"));
    $("#formularz").append($("<input type='text' id='UlicaID'>")).append("</br>");

    // tworzę numer mieszkania
    $("#formularz").append($("<label for id:'inputNumer'>").text("Numer"));
    $("#formularz").append($("<input type='text' id='NumerID'>")).append("</br>");

    // tworzę kod pocztowy
    $("#formularz").append($("<label for id:'inputKod'>").text("Kod"));
    $("#formularz").append($("<input type='text' id='KodID'>")).append("</br>");

    // tworzę miasto
    $("#formularz").append($("<label for id:'inputMiasto'>").text("Miasto"));
    $("#formularz").append($("<input type='text' id='MiastoID'>")).append("</br>");

    // tworzę pizzę do wyboru
    $("#formularz").append($("<label for id:'inputPizza'>").text("Pizza"));
    $("#formularz").append($("<select id='inputPizza'>"+
    "<option value='' selected disabled hidden>Choose here</option>"+
    "<option value='Margarita'>Margarita</option>"+
    "<option value='Capricioza'>Capricioza</option>"+
    "<option value='Hawajska'>Hawajska</option>"+
    "<option value='Z owocami morza'>Z owocami morza</option>"+
    "</select>"));

    // cena
    $("#formularz").append($("<span></span><br>"));

    //tworzę sos
    $("#formularz").append($("<input type='checkbox' name='pomidorowy' value='sos pomidorowy'> Sos pomidorowy<br>"));
    $("#formularz").append($("<input type='checkbox' name='czosnokowy' value='sos czosnkowy'> Sos czosnkowy<br>"));
    
    //zgoda na RODO
    $("#formularz").append($("<input type='checkbox' name='RODO' value='RODO'> Wyrazam zgodę<br>"));

    // przycisk
    $("#formularz").append($("<input type='submit'>").val("Zamow")).append("</br>");

    // komentarz
    $("#formularz").append($("<ul id='komentarz'></ul>"));


    $( '[type="submit"]' ).on
       ('click', function() {
        let imie = $("#imieID").val();
        let nazwisko = $("#nazwiskoID").val();
        let ulica = $("#UlicaID").val();
        let numer = $("#NumerID").val();
        let kod = $("#kodID").val();
        let miasto = $("#MiastoID").val();
        let pizza = $("#inputPizza").val();



        // warunek na wszystkie pola wypełnione
    if ([imie,nazwisko,ulica,numer,kod,miasto,pizza].includes("")){

        if(imie ==''){$("ul").append('<li>Proszę wpisać imie</li>')};
        if(nazwisko ==''){$("ul").append('<li>Proszę wpisać nazwisko</li>')};
        if(ulica ==''){$("ul").append('<li>Proszę wpisać ulice</li>')};
        if(numer ==''){$("ul").append('<li>Proszę wpisać numer bloku</li>')};
        if(kod ==''){$("ul").append('<li>Proszę wpisać kod pocztowy</li>')};
        if(miasto ==''){$("ul").append('<li>Proszę wpisać miasto</li>')};
        if(pizza ==''){$("ul").append('<li>Proszę wybrac pizze</li>')};
        if($("[name='RODO']").prop('checked')==false){$("ul").append('<li>Proszę wyrazic zgode na RODO</li>')}
    }
    
    else{
         console.log("mozna wysłać wyniki")
    } ;
    });

    //change w pizzy

    //tabelka z cenami
    class cennik{
        constructor(nazwa,cena){
            this.nazwa = nazwa;
            this.cena = cena;
        }
    };

    let Pizza1 = new cennik("Margarita", 21);
    let Pizza2 = new cennik("Capricioza", 22);
    let Pizza3 = new cennik("Hawajska", 23);
    let Pizza4 = new cennik("Z owocami morza", 24);

    cennik_glob= [];
    cennik_glob.push(Pizza1);
    cennik_glob.push(Pizza2);
    cennik_glob.push(Pizza3);
    cennik_glob.push(Pizza4);
    console.log(cennik_glob);

    let cena=0;
    $("#inputPizza").on
       ('change', function() {
           for(let i=0; i<cennik_glob.length; i++){
               if(cennik_glob[i].nazwa == $("#inputPizza").val()){
                   cena=cennik_glob[i].cena;
               };
            $("span").text(cena);
           }
       });






} ); 



