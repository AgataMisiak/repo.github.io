$( document ).ready( function() {


    // $( 'p' ).click( function() {
    //     console.log( 'Guzik został naciśnięty.' );
    //     $(this).css({"color": "red"})
    //    } ); 



       $( 'p' ).on
       ('dblclick', function() {
        console.log( 'Guzik został naciśnięty.' );
        $(this).css({"color": "red"});
       });

       $( 'p' ).on
       ('click', function() {
        console.log( 'Guzik został naciśnięty.' );
        $(this).css({"color": "green"});
       });

       $( 'p' ).on
       ('mouseleave', function() {
        console.log( 'Guzik został naciśnięty.' );
        $(this).css({"color": "black"});
       } );

} ); 



