//  Calcola la somma dei primi 10 numeri di un array
//? la media dei primi 10 numeri di un array
//* il valore massimo dei primi 10 numeri di un array

const arrayNumbers = [1, 42, 93, 24, 15, 66, 37, 8, 79, 10, 171, 12, 613, 14, 15, 516, 17, 18, 19, 20];
let somma = 0;
let media = 0;
const limite = 10;
let valoreMassimo = arrayNumbers[0];

for (let i = 0; i < limite; i++) {
  somma += arrayNumbers[i];

  if (arrayNumbers[i] > valoreMassimo) {
    valoreMassimo = arrayNumbers[i];
  }
}
media = somma / limite;

console.log(somma);
console.log(media);
console.log(valoreMassimo);
