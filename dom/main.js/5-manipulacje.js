const mainHEadrr =document.getElementById("main-header");
const innerHTML = mainHEadrr.innerHTML;
// console.log(innerHTML);

document.querySelectorAll(".superlink")[0].innerText=innerHTML;

console.log(mainHEadrr.innerHTML);
console.log(mainHEadrr.innerText);
console.log(mainHEadrr.outerHTML);


window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop >= 2*window.innerHeight)
    {console.log(mainHEadrr.dataset.category);
    mainHEadrr.style.fontSize = '40px';

    document.body.classList.add("scroll1");
    document.body.classList.remove("scroll2");}
    else if(document.documentElement.scrollTop >= window.innerHeight)
    {document.body.classList.add("scroll2");
    document.body.classList.remove("scroll1");
    mainHEadrr.style.fontSize = '80px';}
    else {document.body.classList.remove("scroll1", "scroll2");
    mainHEadrr.style.fontSize = 'initial';}
        
});