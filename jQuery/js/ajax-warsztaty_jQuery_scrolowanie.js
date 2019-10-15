'use strict';

$( document ).ready( function() {
    console.log('DOM fully loaded and parsed');

    $("body").append($("<button></button>").text("click me"));
    $("body").append($("<p></p>"));

    $( "button" ).addClass( "przycisk" ); 

    $(".przycisk").click(function() {
        $.getJSON(
            "https://jsonplaceholder.typicode.com/users",
            function (data) {
            console.log(data);
            for(let i=0; i< data.length; i++ ){
                $("body").append($("<p id='"+i+"' ></p>"));
                $("#"+i).text(data[i].id);

                $("body").append($("<p id=n"+i+" ></p>"));
                $("#n"+i).text(data[i].name);

                $("body").append($("<p id=usern"+i+" ></p>"));
                $("#usern"+i).text(data[i].username);

                $("body").append($("<p id=mail"+i+" ></p>"));
                $("#mail"+i).text(data[i].email);

                $("body").append($("<p id=address"+i+" ></p>"));
                $("#address"+i).text(data[i].address.street);
            };
            // $("p").text([data.id, data.name]);
            }
        );
    });
    let j=1;
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == ($(document).height())) {
            j+=1;
            $.getJSON(
                "https://jsonplaceholder.typicode.com/users",
                function (data) {
                console.log(data);
                for(let i=0; i< data.length; i++ ){
                    $("body").append($("<p id=aa'"+i+"_"+j+"' ></p>"));
                    $("#aa"+i+"_"+j).text(String(j));

                    $("body").append($("<p id='"+i+"_"+j+"' ></p>"));
                    $("#"+i+"_"+j).text(data[i].id);
    
                    $("body").append($("<p id=n"+i+"_"+j+" ></p>"));
                    $("#n"+i+"_"+j).text(data[i].name);
    
                    $("body").append($("<p id=usern"+i+"_"+j+" ></p>"));
                    $("#usern"+i+"_"+j).text(data[i].username);
    
                    $("body").append($("<p id=mail"+i+"_"+j+" ></p>"));
                    $("#mail"+i+"_"+j).text(data[i].email);
    
                    $("body").append($("<p id=address"+i+"_"+j+" ></p>"));
                    $("#address"+i+"_"+j).text(data[i].address.street);
                };
                // $("p").text([data.id, data.name]);
                }
            );
        };
    });



}); 
