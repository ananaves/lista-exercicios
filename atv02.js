/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x.
 Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y,
 e que y passe a ter o valor de x.
Nome Aluno: Ana Carolina M. Naves
*/
var teclado = require("prompt-sync")();
var x = parseFloat(teclado("digite o primeiro numero: "));
var y = parseFloat(teclado("digite o segundo numero: "));
var z = 0;
console.log("agora que invertemos o numero um \u00E9 ".concat(y, " e o nuemro dois \u00E9 ").concat(x, " "));
z = x;
x = y;
y = z;
console.log("agora que invertemos o numero um \u00E9 ".concat(y, " e o numero dois \u00E9 ").concat(x));
