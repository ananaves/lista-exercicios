/* 
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, 
 e R$ 0,25 se forem compradas pelo menos doze. 
 Escreva um programa que leia o número de maçãs compradas,
  calcule e escreva o valor total da compra.
Nome Aluno: Ana Carolina M. Naves
*/

const teclado = require(`prompt-sync`)();

const preçoMenosDoze = 0.30;
const preçoDozeOuMais = 0.25;

let quantidadeDeMaças = parseInt(teclado(`digite o numero de maças compradas: `));
let valorTotal = 0

if (quantidadeDeMaças < 12){ 
    valorTotal = quantidadeDeMaças * preçoMenosDoze;
}
else {
    valorTotal = quantidadeDeMaças * preçoDozeOuMais;
}

console.log(`o valor total da compra foi de R$ ${valorTotal}.`);
 
