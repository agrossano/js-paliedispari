// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.

var msg;

function palindrome(word) {
  function reverse(word) {
    return word.split("").reverse().join("");
  }
  if (reverse(word) === word) {
    msg = 'La parola è palindroma.';
  } else {
    msg = 'La parola non è palindroma.';
  }
  return reverse(word)
}

parola = prompt("Scrivi una parola")
parolaCapovolta = palindrome(parola)

console.log('La parola capovolta è ' + parolaCapovolta + '. ' + msg)