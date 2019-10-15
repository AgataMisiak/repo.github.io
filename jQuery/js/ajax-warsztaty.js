'use strict';

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let btn = document.createElement( "button" );
    let textBtn = document.createTextNode( "Click me" );
    let classBtn = document.createAttribute( "class" ); 
    classBtn.value= "btn"; 

    document.body.appendChild(btn);

    btn.appendChild( textBtn ); // dodaj tekst do elementu <button>
    btn.setAttributeNode(classBtn); // dodaj atrybut class do elementu <button>
   

    let spn = document.createElement( "span" );
    document.body.appendChild(spn);
    // var textSpn = document.createTextNode( "a" );
    


    const getData1 = () => {


        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response){
            response.json()
            .then(function(data) {
                    console.log((data));
                    spn.appendChild(document.createTextNode( data.id));
                    spn.appendChild(document.createTextNode( data.body));
                });             
    })
    ;
};

    document.getElementsByClassName("btn")[0].addEventListener("click",getData1);
}); 
