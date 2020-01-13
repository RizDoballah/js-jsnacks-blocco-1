// Snack1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

// alert('Ciao!');
// var primoNumero = parseInt(prompt('inserici il primo numero'));
// console.log(primoNumero);
// var secondoNumero = parseInt(prompt('inserici il secondo numero'));
// console.log(secondoNumero);
// if (primoNumero > secondoNumero) {
//   console.log(primoNumero);
// } else if (primoNumero < secondoNumero) {
//   console.log(secondoNumero);
// }
// else {
//   alert('uguale');
// }

// Snack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

// var parola1 = prompt('inserisci la prima parola');
// var parola2 = prompt('inserisci la seconda parola');
// if (parola1.length > parola2.length ) {
//   console.log(parola2 + ' ' + parola1);
// }
// else if (parola1.length < parola2.length ) {
//   console.log(parola1 + ' ' + parola2);
// }
// else {
//   alert('le tue parole hanno la stessa lunghezza');
// }

// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for

// var num1 = parseInt(prompt('inserisci il primo numero'));
// var num2 = parseInt(prompt('inserisci il secondo numero'));
// var num3 = parseInt(prompt('inserisci il terzo numero'));
// var num4 = parseInt(prompt('inserisci il quarto numero'));
// var num5 = parseInt(prompt('inserisci il quinto numero'));
//
// var numeri = [num1, num2, num3, num4, num5];
// for (var i = 0; i < numeri.length; i++) {
//   // console.log(numeri[i]);
//   var somma = num1 + num2 + num3 + num4 + num5;
//   console.log(somma);
// }

// var somma = 0;
// var i = 0;
// while (i < 5) {
//   var numero = parseInt(prompt('inserisci un numero'));
//   console.log(numero);
//   somma = somma + numero;
//   i++;
// }
// console.log(somma);


// snack4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.
//

// var invitati = ['mark', 'angel', 'beatrice', 'john', 'derek'];
// var nomeUtente = prompt('quale il tuo nome?');
// var invitato = false
// for (var i = 0; i < invitati.length; i++) {
//   console.log(invitati[i]);
//   if (nomeUtente == invitati[i]) {
//     invitato = true;
//   }
// }
// console.log(invitato);

// var invitati = ['mark', 'angel', 'beatrice', 'john', 'derek'];
// var nomeUtente = prompt('quale il tuo nome?');
// var i = 0;
// var invitato = false;
// var messagio = 'Non sei invitato alla festa'
// while (invitato == false && i < invitati.length) {
//   if (nomeUtente == invitati[i]) {
//     invitato = true;
//     messagio = 'Sei invitato alla festa'
//   }
//   i++
// }
// alert(messagio);


//
// Snack5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// var array = [];
// for (var i = 0; i < 6; i++) {
//   var numero = parseInt(prompt('inserisce un numero'));
//   if (numero % 2 != 0) {
//     array.push(numero);
//   }
// }
// console.log(array);

// var array = [];
// var i = 0;
// while (i < 6) {
//   var numero = parseInt(prompt('inserisce un numero'));
//   if (numero % 2 != 0) {
//     array.push(numero);
//   }
//   i ++
//
// }
// console.log(array);

// Snack6
// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var cubo = [];
var n = parseInt(prompt('inserisci un numero'));
for (var i = 1; i <= n; i++) {
  console.log(Math.pow(i, 3));
}
