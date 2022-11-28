/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];
const people = [];

for (let i = 0; i < names.length; i++) {
  
  people.push(names[i] + " " + lastnames[i]);
  
}

console.log(people);


//soluzioni


const guests = []

for ( let i = 0; i < Math.ceil(Math.random() * 25 + 4);i++ ){
  const randomNamesIndex= Math.floor(Math.random * names.length);
  const randomLastNamesIndex= Math.floor(Math.random * lastnames.length);

  const guest = names[randomNamesIndex] + " " + lastnames[randomLastNamesIndex];

  guests.push(guest);
}


while ( guests.length < 20 ) {
  const randomNamesIndex= Math.floor(Math.random * names.length);
  const randomLastNamesIndex= Math.floor(Math.random * lastnames.length);

  const guest = names[randomNamesIndex] + " " + lastnames[randomLastNamesIndex];

  guests.push(guest);
}