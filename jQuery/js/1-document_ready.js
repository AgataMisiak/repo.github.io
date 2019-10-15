$( document ).ready( function() {

        $("#first")
        .css({color: 'red'})
        .hide( 'slow' )
        .show( 3000 );
        
        let second = $("#second");
        console.log(second);

        let kolekcja_paragraf = $(".paragraf");
        console.log(kolekcja_paragraf);

        
        


    } ); 

    // to jest  to samo co powyżej
// $( function() {
//     } ); 

    // w zwykłym js:
// window.addEventListener("DomContentLoaded")




