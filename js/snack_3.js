//  Calcola la somma dei primi 10 numeri di un array
//? Calcola la somma e la media dei primi 10 numeri di un array.
//* Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let somma = 0;
let media = 0;
const limite = 10;
let valoreMassimo = 0;

for (let i = 0; i < limite; i++) {
  somma += arrayNumbers[i];
  valoreMassimo = Math.max(arrayNumbers[i])
}
media = somma / limite;

console.log(somma);
console.log(media);
console.log(valoreMassimo);
