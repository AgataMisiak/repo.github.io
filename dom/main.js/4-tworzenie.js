
let counter = 0;
let timer= setInterval(() => {
    if(counter ==3){
        clearInterval(timer);
        return;
    }
// }


const link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "css/style.css");
// setInterval(() => {
document.head.appendChild(link);

const p = document.createElement("p");
const ptext = document.createTextNode( `Nowy paragraf tralalalala ${++counter}`);
p.appendChild(ptext);
document.querySelector("#selection-first").insertAdjacentElement("afterbegin",p);
document.querySelector("#selection-first").insertAdjacentHTML("afterend","<h1>trelemorele</h1>");

},1000);


setTimeout(() => {
    const h1 = document.querySelector("#main-header");
    h1.parentElement.removeChild(h1);
}, 2000);


