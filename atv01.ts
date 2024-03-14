/*
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
sabendo que PI é um valor constante de 3.14159,
o programa deve pedir os valores de RAIO e ALTURA,
utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Ana Carolina M. Naves
*/
const teclado = require("prompt-sync")();
let raio = parseFloat(teclado("digite o valor do raio da lata: "));
let altura = parseFloat(teclado("digite o valor da altura da lata:"));
let volume = 0;
let PI = 3.14159;
volume = PI *(raio*raio) * altura;
console.log(`o volume da lata é ${volume}`);