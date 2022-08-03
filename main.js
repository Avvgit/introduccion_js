

"2" * "3"
/*var n1 = "2";
  var n2 = "3";

  var result = n1 * n2;
  alert("El resultado de n1 * n2 es: "+ result); 

  6 */

4 + 5 + "px"
/*var n1 = 4;
  var n2 = 5;
  var n3 = "px";

  var result = n1 + n2 + n3;
  alert("El resultado de n1 + n2 + n3 es: "+ result);

  9px */


"$" + 4 + 5
/*var n1 = "$";
  var n2 = 4;
  var n3 = 5;

  var result = n1 + n2 + n3;
  alert("El resultado de n1 + n2 + n3 es: "+ result);

  $45 */


"4" - 2
/*var n1 = "4";
var n2 = 2;


var result = n1 - n2;
alert("El resultado de n1 - n2 es: "+ result);

2 */

"4px" - 2
/*var n1 = "4px";
  var n2 = 2;
 

  var result = n1 - n2;
  alert("El resultado de n1 - n2 es: "+ result);

NaN Not-A-Number */

7 / 0
/*var n1 = 7;
var n2 = 0;


var result = n1 / n2;
alert("El resultado de n1 / n2 es: "+ result);

Infinity */

{}[0]
/* Objeto + Array = 0
   []+{} = Object  
*/


parseInt("09")
/* 9 */

5 && 2
/* 2 */

2 && 5
/* 5 */

5 || 0
/*5*/

0 || 5

[3]+[3]-[10]
/* 23 */

3>2>1
/*Falso*/


[] == ![]



var profesor = "Jhoswe";
let teacher = "Jose";
if (true) {
    var profesor = "The Flash";
    let teacher = "Reverse Flash";

    console.log(profesor); /*The Flash*/ 
    console.log(teacher); /*Reverse Flash*/
}

console.log(profesor); /* The Flash */
console.log(teacher); /* Jose */