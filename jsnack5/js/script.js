// Snack5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// Versione ciclo for
var array = [];
for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt('inserisce un numero'));
  if (numero % 2 != 0) {
    array.push(numero);
  }
}
console.log(array);

// Versione ciclo while
var array = [];
var i = 0;
while (i < 6) {
  var numero = parseInt(prompt('inserisce un numero'));
  if (numero % 2 != 0) {
    array.push(numero);
  }
  i ++
}
console.log(array);
