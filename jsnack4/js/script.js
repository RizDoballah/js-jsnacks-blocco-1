// snack4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.
//


var invitati = ['mark', 'angel', 'beatrice', 'john', 'derek'];
var nomeUtente = prompt('quale il tuo nome?');
var i = 0;
var invitato = false;
var messagio = 'Non sei invitato alla festa'
while (invitato == false && i < invitati.length) {
  if (nomeUtente == invitati[i]) {
    invitato = true;
    messagio = 'Sei invitato alla festa'
  }
i++
}
alert(messagio);
