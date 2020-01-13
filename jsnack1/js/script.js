// Snack1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

// alert('Ciao!');
var primoNumero = parseInt(prompt('inserici il primo numero'));
console.log(primoNumero);
var secondoNumero = parseInt(prompt('inserici il secondo numero'));
console.log(secondoNumero);
if (primoNumero == secondoNumero) {
  alert('Hai inserito due numeri uguali');
}
else if (primoNumero > secondoNumero) {
  console.log(primoNumero);
}
else {
  console.log(secondoNumero);
}
