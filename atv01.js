/*
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
sabendo que PI é um valor constante de 3.14159,
o programa deve pedir os valores de RAIO e ALTURA,
utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Ana Carolina M. Naves
*/
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("digite o valor do raio da lata: "));
var altura = parseFloat(teclado("digite o valor da altura da lata:"));
var volume = 0;
var PI = 3.14159;
volume = PI * Math.pow(raio, 2) * altura;
console.log("o volume da lata \u00E9 ".concat(volume));
