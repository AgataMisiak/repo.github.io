'use strict';

$( document ).ready( function() {
    console.log('DOM fully loaded and parsed');

    $("body").append($("<button></button>").text("click me"));
    $("body").append($("<p></p>"));

    $( "button" ).addClass( "przycisk" ); 

    $(".przycisk").click(function() {
        $.getJSON(
            "https://jsonplaceholder.typicode.com/users/1",
            function (data) {
            console.log(data);
            $("p").text([data.id, data.name]);
            }
        );
    });
}); 
