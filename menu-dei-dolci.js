/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/

var scelta = 2;
var n1 = '1. Tiramisù';
var n2 = '2. Torta della nonna';
var n3 = '3. Cheesacake alla nutella';
var n4 = '4 Macedonia';

switch (scelta){
  case 1:
  console.log('hai scelto il dolce ' + n1);
  break;
  case 2:
  console.log('hai scelto il dolce ' + n2);
  break;
  case 3:
  console.log('hai scelto il dolce ' + n3);
  break;
  case 4:
  console.log('hai scelto il dolce ' + n4);
  break;
  default:
  console.log('Dolce non disponibile');
}
