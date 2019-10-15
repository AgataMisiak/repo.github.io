$( document ).ready( function() {

    $( "div" ).find( ".paragraf" ).css( { "color": "red"} );
    console.log($( "div" ).find( ".paragraf" ));

    $("p").each(function(index){
        $(this).addClass("paragraf " + index);
        // console.log($(this).text());
        console.log($(this).attr("class"));
    });

    
    // .css({"font-size":"30px"})
    
    } ); 



