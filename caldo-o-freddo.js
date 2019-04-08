/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/

var a = 30;
var b = 32;
var c = 33;
var d = 31;
var e = 29;
var f = 30;
var g = 25;

if (a<b) {
  if (a<c)
  if (a<d)
  if (a<e)
  if (a<f)
  if (a<g)
  console.log('e il minore');
} else
if (b<a) {
  if (b<c)
  if (b<d)
  if (b<e)
  if (b<f)
  if (b<g)
  console.log(' e il minore');
} else
if (c<a) {
  if (c<b)
  if (c<d)
  if (c<e)
  if (c<f)
  if (c<g)
  console.log( `${a}`);
}
