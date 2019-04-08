/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/

var n1 = 5;
var n2 = 10;
var n3 = 15;
var n4 = 20;



if (n2<n1) {
  if (n2<n3)
  if (n2<n4)
  console.log('n2 e il minore');
} else
if (n1<n2) {
  if(n1<n3)
  if(n1<n4)
  console.log(n1 +' e il minore');
} else
if (n3<n1) {
  if(n3<n2)
  if(n3<n4)
  console.log('n3 e il minore');
} else
if (n4<n1)
if (n4<n2)
if (n4<n3)
console.log('n4 e il minore');

if (n1>n2 && n1>n3 && n1>n4){
  console.log('n1 e il maggiore');
}  else
if (n2>n1 && n2>n3 && n2>n4){
  console.log('n2 e il maggiore');
} else
if(n3>n1 && n3>n2 && n3>n4){
  console.log('n3 e il maggiore');
}else
if (n4>n1 && n4>n2 && n4>n3){
  console.log(n4 + ' e il maggiore');
}
