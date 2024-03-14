/*
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
 e R$ 0,25 se forem compradas pelo menos doze.
 Escreva um programa que leia o número de maçãs compradas,
  calcule e escreva o valor total da compra.
Nome Aluno: Ana Carolina M. Naves
*/
var teclado = require("prompt-sync")();
var preçoMenosDoze = 0.30;
var preçoDozeOuMais = 0.25;
var quantidadeDeMaças = parseInt(teclado("digite o numero de ma\u00E7as compradas: "));
var valorTotal = 0;
if (quantidadeDeMaças < 12) {
    valorTotal = quantidadeDeMaças * preçoMenosDoze;
}
else {
    valorTotal = quantidadeDeMaças * preçoDozeOuMais;
}
console.log("o valor total da compra foi de R$ ".concat(valorTotal, "."));
