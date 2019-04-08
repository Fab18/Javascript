/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/


var seconds = 12560;

var hours = Math.round(seconds/3600);

var minutes = Math.round([12560-hours*3600]/60);

var second = (12560-[hours*3600+minutes*60]);

console.log(hours,minutes,second)
