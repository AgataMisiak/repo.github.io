$( document ).ready( function() {
    $("p").hide("slow").show("fast").fadeOut("linear").fadeIn("slow").slideUp( "slow" ).slideDown( "slow" ); 

    // const pomniejszenie =()=>{
    //     $("h3").animate({"font-size":"1em","margin-left":"0"}, 5000);
    // }
    // $("h3").animate({"font-size":"50px","margin-left":"100px"}, 5000, pomniejszenie);


    const pomniejszenie =()=>{
        $("h3").animate({"font-size":"1em","background-color":"white"}, 5000);
    }
    $("h3").animate({"font-size":"50px","background-color":"red"}, 5000, pomniejszenie);




} ); 



