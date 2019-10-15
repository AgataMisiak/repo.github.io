const div=document.querySelector(".par-first");
console.log(div);

const div1=document.getElementsByClassName("par-first")[0];
console.log(div1);

const rodzic_diva = div.parentElement;
console.log(rodzic_diva);

const potomokowie_diva = div.childNodes;
console.log(potomokowie_diva);
//komentarz też się napatoczył


const potomkowie_diva2 = div.children;
console.log(potomkowie_diva2);


const pierwszyPotomekDiva = div.firstElementChild;
console.log(pierwszyPotomekDiva);

const ostatniPotomekDiva = div.lastElementChild;
console.log(ostatniPotomekDiva);

const elementPrzedDivem = div.previousElementSibling;
console.log(elementPrzedDivem);

const ElementZaDivem = div.nextElementSibling;
console.log(ElementZaDivem.nextElementSibling.nextElementSibling.nextElementSibling);

