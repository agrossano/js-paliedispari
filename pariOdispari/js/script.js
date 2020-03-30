// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso. 
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto. 

// Dichiaro variabili

var winner, computerNumberOne, randomChoice1, randomChoice2, computerNumberTwo, computerChoiceOne, computerChoiceTwo, sum;

//seleziono bottone dall'html
var button = document.getElementsByClassName('btn');


// funzione che genera un numero casuale
function randomNumber() {
  var random = Math.floor(Math.random() * 5) + 1;
  return random;
}

// funzione che determina scelta di pari o dispari
function pariDispari() {
  var randomChoice = Math.floor(Math.random() * (2 - 1 + 1) + 1);
  if (randomChoice === 1) {
    randomChoice1 = 'Pari'
    randomChoice2 = 'Dispari'
  } else {
    randomChoice1 = 'Dispari'
    randomChoice2 = 'Pari'
  }
  return randomChoice;
}


function game() {
  //chiamo la funzione per generare il pari o dispari
  pariDispari();
  //assegno a computer uno e computer due rispettivamente un numero generato e il pari o dispari
  computerNumberOne = randomNumber();
  computerNumberTwo = randomNumber();
  computerChoiceOne = randomChoice1;
  computerChoiceTwo = randomChoice2;
  //determino se a vincere è il pari o dispari
  sum = computerNumberOne + computerNumberTwo;
  if (sum % 2 === 0) {
    result = "Pari";
  } else {
    result = "Dispari"
  }
  //determino il vincitore del gioco
  if (result === "Pari" && computerChoiceOne === "Pari" || result === "Dispari" && computerChoiceOne === "Dispari") {
    winner = 'Computer 1 ha vinto';
  } else if (result === "Pari" && computerChoiceTwo === "Pari" || result === "Dispari" && computerChoiceTwo === "Dispari") {
    winner = 'Computer 2 ha vinto';
  }
  document.getElementById('sceltaUno').innerHTML = 'Computer Uno ha scelto ' + computerChoiceOne + ' e il numero ' + computerNumberOne;
  document.getElementById('sceltaDue').innerHTML = 'Computer Due ha scelto ' + computerChoiceTwo + ' e il numero ' + computerNumberTwo;
  document.getElementById('winner').innerHTML = winner;
  return winner;
}

//lancio il gioco all'avvio
vincitore = game();

//lancio il gioco al click del bottone
button[0].addEventListener('click', function () {
  game();
})


