// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

const ArrayNumbers = []

for (let i = 0; i < 6; i++) {
  let UserNumber = prompt('inserisci un numero')

  if (!(UserNumber % 2 == 0)){
    ArrayNumbers.push(UserNumber)
  }
}

console.log(ArrayNumbers)