// Snack6
// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

// Versione ciclo for
var cubo = [];
var n = parseInt(prompt('inserisci un numero'));
for (var i = 1; i <= n; i++) {
  console.log(Math.pow(i, 3));
}

// Versione ciclo for
var cubo = [];
var n = parseInt(prompt('inserisci un numero'));
var i = 1
while (i <= n) {
  console.log(Math.pow(i, 3));
  i++
}
