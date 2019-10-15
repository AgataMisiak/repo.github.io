$( document ).ready( function() {
    
    let text_1_paragrafu=$( "#first" ).text();
    console.log(text_1_paragrafu);

    // $(".paragraf").eq(1).text("Ala ma kota");
    // $(".paragraf").eq(1).html("<b>Ala ma kota</b>");
    // $(".paragraf").eq(1).append(" ala ma kota");
    // $(".paragraf").eq(1).prepend(" ala ma kota");
    // $(".paragraf").eq(1).before(" ala ma kota");
    // $(".paragraf").eq(1).after(" ala ma kota");

    // $(".paragraf").eq(1).empty(); 
    // $(".paragraf").eq(1).remove();
    $(".paragraf").eq(1).css("color", "blue")
    $(".paragrafnext").css({"background-color": "yellow", "font-size": "200%"}); 

    $("input#imie").val("Krystian");
    $("h1").addClass("blue");

    $("h1").attr("id","Marcin");
    
    } ); 



