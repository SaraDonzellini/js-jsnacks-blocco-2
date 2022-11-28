// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const arrayNumbers = [1, 22, 45, 78, 65, 43, 44, 66, 87, 68, 9, 5, 4, 23, 5, 6, 7, 8, 9, 10, 11, 12, 31]
let somma = 0;

for (let i = 0; i < arrayNumbers.length; i++) {

  if (i % 2 === 1) {
    somma += arrayNumbers[i]
  }
}

console.log(somma)