// Snack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt('inserisci la prima parola');
var parola2 = prompt('inserisci la seconda parola');
if (parola1.length == parola2.length ) {
  alert('le tue parole hanno la stessa lunghezza');
}
else if (parola1.length < parola2.length ) {
  console.log(parola1);
}
else {
  console.log(parola2);
}
