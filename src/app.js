const palos = ["♦", "♥", "♠", "♣"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
function generacionCarta() {
  let paloRandoms = palos[Math.floor(Math.random() * palos.length)];
  let valorRandoms = valores[Math.floor(Math.random() * valores.length)];
  // console.log(paloRandoms, valorRandoms);
  document.getElementById("paloArriba").innerHTML = paloRandoms;
  document.getElementById("paloAbajo").innerHTML = paloRandoms;
  document.getElementById("numero").innerHTML = valorRandoms;
  if (paloRandoms == "♥" || paloRandoms == "♦") {
    document.getElementById("paloArriba").style.color = "red";
    document.getElementById("paloAbajo").style.color = "red";
  } else {
    document.getElementById("paloArriba").style.color = "black";
    document.getElementById("paloAbajo").style.color = "black";
  }
}
window.onload = function() {
  generacionCarta();
};
document.querySelector(".boton").addEventListener("click", generacionCarta);

// let paloArriba = document.querySelector("#simboloArriba");
// let numero = document.querySelector("#numero");
// let paloAbajo = document.querySelector("#simboloAbajo");

// function eleccionCarta(arr1, arr2) {
//   let carta = [];
//   carta.push(arr1[Math.floor(Math.random() * arr1.length)]);
//   carta.push(arr2[Math.floor(Math.random() * arr2.length)]);
//   return carta;
// }
// function asignarColor(arr) {
//   if (arr[0] === "corazon" || arr[0] === "diamante") {
//     paloArriba.style.color = "red";
//     numero.style.color = "red";
//     paloAbajo.style.color = "red";
//   } else {
//     paloArriba.style.color = "black";
//     numero.style.color = "black";
//     paloAbajo.style.color = "black";
//   }
// }
// function asignarPalo(arr) {
//   if (arr[0] === "corazon") {
//     paloArriba.innerHTML = "♥";
//     paloAbajo.innerHTML = "♥";
//   } else if (arr[0] === "diamante") {
//     paloArriba.innerHTML = "♦";
//     paloAbajo.innerHTML = "♦";
//   } else if (arr[0] === "trebol") {
//     paloArriba.innerHTML = "♣";
//     paloAbajo.innerHTML = "♣";
//   } else {
//     paloArriba.innerHTML = "♠";
//     paloAbajo.innerHTML = "♠";
//   }
// }
// function asignarValor(arr) {
//   numero.innerHTML = arr[1];
// }
// function generacionCarta() {
//   let carta = eleccionCarta(palos, valores);
//   asignarColor(carta);
//   asignarPalo(carta);
//   asignarValor(carta);
// }
