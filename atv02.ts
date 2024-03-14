
/* 
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x.
 Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y,
 e que y passe a ter o valor de x.
Nome Aluno: Ana Carolina M. Naves
*/

const teclado = require("prompt-sync")();
let x: number = parseFloat(teclado(`digite o primeiro numero: `));
let y: number = parseFloat(teclado(`digite o segundo numero: `));
let z: number = 0;

console.log(`O número y é ${y} e o numero x é ${x} `);

z = x
x = y;
y = z;

console.log(`agora que invertemos o numero y é ${y} e o numero x é ${x}`);
