const button = document.getElementById("button");
const section = document.getElementsByClassName("section");


let arraySections = Array.from(section);

let numero = 0;
let valor = 0;

console.log(arraySections.length);

button.addEventListener("click", () => {
      if (numero < arraySections.length-1) {
          arraySections[numero].classList.remove(arraySections[numero].classList[arraySections[numero].classList.length - 1])
          arraySections[numero].classList.add("d-none");
          numero++;
          arraySections[numero].classList.remove(arraySections[numero].classList[arraySections[numero].classList.length - 1])
          arraySections[numero].classList.add("d-flex");
      }
      else{
          arraySections[numero].classList.remove(arraySections[numero].classList[arraySections[numero].classList.length - 1])
          arraySections[numero].classList.add("d-none");
          numero=0
          arraySections[numero].classList.remove(arraySections[numero].classList[arraySections[numero].classList.length - 1])
          arraySections[numero].classList.add("d-flex");
      }
})