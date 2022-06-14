/* Realizziamo un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale andrà mostrato in forma umana in console (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const km = parseInt(prompt(" how many km do you want to travel "));
console.log("you will travel:", km, "km");

const ticketPrice = 0.21;
console.warn("cost x km");

const totalPrice = km * ticketPrice;
console.log("full price for destination:", totalPrice, "$");

//alert(discountElders);
//alert(discountYoung);

const clientAge = parseInt(prompt("age"));
if (clientAge > 65) {
  const afterDiscountElders = totalPrice - discountElders;
  const discountElders = totalPrice * 0.4;
  console.log("please pay:", afterDiscountElders.toFixed(2), "$");
} else if (clientAge < 18) {
  const discountYoung = totalPrice * 0.2;
  const afterDiscountYoung = totalPrice - discountYoung;
  console.log("please pay:", afterDiscountYoung.toFixed(2), "$");
} else {
  console.log("you have no discounts");
  console.log("please pay:", totalPrice.toFixed(2), "$");
}

// how to ins3rt d3ecimal numb3r
// const number = totalPrice - discountElders
// console.log(number.toFixed(2))
