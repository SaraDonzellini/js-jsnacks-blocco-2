// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const Number = parseInt(prompt("inserisci un numero"))

if (Number % 2 == 0) {
  console.log(Number)
} else {
  console.log(Number + 1)
}

