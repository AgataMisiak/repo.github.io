const btn = document.getElementById("scroll-down");

const scrollDown =() =>{
    document.documentElement.scrollTop = window.innerHeight;
}

btn.addEventListener('click', scrollDown);

setTimeout(() => {
    btn.removeEventListener('click',scrollDown)
}, 10000);

const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', () =>{
    document.body.classList.add('scroll1');
});
h1.addEventListener('mouseleave', () =>{
    document.body.classList.remove('scroll1');
});


//************************************** */
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let imie = document.querySelector('[name="imie"]').value;
    let nazwisko = document.querySelector('[name="nazwisko"]').value;
    let wiadomosc = "Dziękujemy za przesłanie formularza";

    if(imie=='' || nazwisko==''){
        wiadomosc = "niepoprawnie wypełniony formularz";
    }

    document.querySelector('.message').innerText=wiadomosc;
});


    const btn_projekt = document.getElementById("przycisk");
    btn_projekt.addEventListener('click', (e) => {
    const paragraf_1 = document.querySelector("#pierwszy_paragraf");
    paragraf_1.classList.add("scroll3");
    const paragraf_2 = document.querySelector("#drugi_paragraf");
    paragraf_2.classList.add("scroll4");
    });


    // rozwiązanie Adama

    // const colors = [
    //     'yellow',
    //     'blue'
    // ];
// const p=document.getElementsByTagName("p");
// const ustaw_tło = () => {
    // p[0].style.background = 'red';
    // p[1].style.background = 'blue';

    // opcjonalnie

//     [...p].forEach((element,index) => {
//         element.style.backgroundColor = colors[index];
//     })
// }

    //drugie zadanie
    const form_zad = document.querySelector("#formularz")
    const przycisk = document.querySelector("#formularz").querySelector("[type=submit]");
    form_zad.addEventListener('submit',(e) => {
        const imie_zad2 = form_zad.querySelector("[name='fname']").value;
        const nazwisko_zad2 = form_zad.querySelector("[name='lname']").value;
        console.log(imie_zad2,nazwisko_zad2);
        e.preventDefault;

        if(imie_zad2==''){
            alert('coś nie halo')
        }
    })
    // console.log(przycisk);


    const checkbox1 = document.querySelector("#formularz").querySelector("[name=vehicle1]");

    checkbox1.addEventListener( 'change', function() {
        if(this.checked) {
            document.querySelector("#formularz").querySelector("[name=vehicle2]").checked = true;
            document.querySelector("#formularz").querySelector("[name=vehicle3]").checked = true;
        } else {
            // Checkbox is not checked..
        }
    });

    
    //trzecie zadanie





