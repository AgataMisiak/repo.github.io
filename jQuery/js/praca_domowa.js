$( document ).ready( function() {

    $("body").append($("<button id='przycisk'></button>").text("Pobierz dane"));

    $("#przycisk").click(function(){
        $("span").each(function() {
            $(this).remove();         
        });  
     

        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            dataType: "json",
            success: function (resultJSON) {
                console.log(resultJSON);
                for(var prop in resultJSON) {
                    var item = resultJSON[prop];
                    $("body").append($("<span></span>").text(item));
                    console.log(item);
                    }
                //   });
                 
            }
        });
    })
    

} ); 



