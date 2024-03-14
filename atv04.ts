/* 
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Ana carolina M. naves
*/

const teclado = require(`prompt-sync`)();

let num1: number = parseFloat(teclado(`digite o primeiro numero inteiro: `));
let num2: number = parseFloat(teclado(`digite o segundo numero inteiro: `));
let num3: number = parseFloat(teclado(`digite o terceiro numero inteiro: `));

let maior: number = 0;
let mediano: number = 0;
let menor: number = 0;

if (num1 > num2 && num1 > num3) {
    maior= num1;

    if(num2>num3){
        mediano=num2;
        menor=num3;
    }
    else{
        mediano=num3;
        menor=num2;
    }

}
else if (num2 > num1 && num2 > num3) {
    maior=num2;

    if (num1>num3){
        mediano=num1;
        menor=num3;
    }
    else{
        mediano=num3;
        menor=num1;
    }

}
else if (num3 > num1 && num3 > num2) {
    maior=num3;

    if (num1>num2){
        mediano=num1;
        menor=num2;
    }
    else{
        mediano=num2;
        menor=num1;
    }

}

console.log(`os numeros em ordem crescente são: ${maior}, ${mediano}, ${menor}.`);