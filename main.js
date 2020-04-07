var possibilita= 100;
var listaBombe = [];
var numeriConsentiti = [];
var utente = 0;
var punteggio = 0;



while (listaBombe.length < 16) {
  var numeroBomba = getRandomNumber(100);

  if (listaBombe.includes(numeroBomba)== false) {
    listaBombe.push(numeroBomba)
  }
}

while ((numeriConsentiti.length < possibilita) && (listaBombe.includes(utente)!==true)) {

utente = parseInt(prompt ('Inserisci un numero da 1 a 100'));
console.log('Scelta utente ' + utente )

controlloNumero(utente);

if(numeriConsentiti.length == possibilita)
  alert('Hai vinto!');

}


function getRandomNumber(max) {
  return Math.floor(Math.random() * max ) + 1;
}

function controlloNumero(numero) {
  if(listaBombe.includes(numero)==true){
    alert('Hai perso, hai provato ' + punteggio +'volte prima di trovare la bomba')
  }

  else if (numeriConsentiti.includes(numero)) {
    alert ('Numero già inserito, inseriscine un altro.')
  }
  else if (numeriConsentiti.includes(numero) == false) {
    numeriConsentiti.push(numero);
    punteggio = punteggio + 1;
  }
}
console.log('Lista bombe =', listaBombe)
console.log('Numeri validi inseriti:', numeriConsentiti)
console.log('Tentativi riusciti:', punteggio)
