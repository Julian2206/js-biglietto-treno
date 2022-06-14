/* Realizziamo un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale andrà mostrato in forma umana in console (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const km = parseInt(prompt(" how many km  do you want to travel "));
console.log("you will travel:", km);

const ticketPrice = 0.21;
console.log("cost x km");

const totalPrice = km * ticketPrice;
console.log("you will pay $:", totalPrice);

const discountElders = totalPrice * 0.4;
//alert(discountElders);
const discountYoung = totalPrice * 0.2;
//alert(discountYoung);

const afterDiscountElders = totalPrice - discountElders;

const afterDiscountYoung = totalPrice - discountYoung;

const clientAge = parseInt(prompt("age"));
if (clientAge > 65) {
  console.log(afterDiscountElders.toFixed(2), "$");
} else if (clientAge < 18) {
  console.log(afterDiscountYoung.toFixed(2), "$");
} else {
  console.log("you have no discounts", totalPrice, "$");
}

// how to ins3rt d3ecimal numb3r
// const number = totalPrice - discountElders
// console.log(number.toFixed(2))
