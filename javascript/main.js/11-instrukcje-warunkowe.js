const wiekKAsi = 29;
const wiekDominiki = 28;
const miesiac = 10;


if(wiekKAsi < wiekDominiki){
    document.body.style.backgroundColor='red';
}
    else if(wiekKAsi > wiekDominiki){
        document.body.style.backgroundColor='green';
    }
    else{
        document.body.style.backgroundColor='blue';
    }




switch(miesiac){
    case 8:
        document.body.textContent= "Sierpień";
        break;
    case 9:
        document.body.textContent= "Wrzesień";
        break;
    default:
        document.body.textContent= "Nie mam pojęcia co za miesiąc";
}








