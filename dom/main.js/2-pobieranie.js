const section = document.getElementById("selection-first");
// console.dir(section);

const links = document.getElementsByClassName("link");
console.dir(links);

for(let i=0; i<links.length; i++){
    // console.dir(links[i]);
}

// to jest spread operator
[...links].forEach((element) => {
    // console.log(element);
});


const p = document.getElementsByTagName("p");
// console.log(p);

const divs = document.querySelectorAll("div");
console.log(divs);

// na nodelista działa foreach

const link_first = document.querySelector("a");
console.log(link_first);


