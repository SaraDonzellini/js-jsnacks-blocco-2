//Calcola la somma dei primi 10 numeri di un array

const ArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let somma = 0;

for (let i = 0; i < 10; i++) {
  somma += ArrayNumbers[i];
  
}

console.log(somma);