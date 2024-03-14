/* 
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e
 escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Ana Carolina M. Naves
*/

const teclado = require(`prompt-sync`)();

let angulo1: number = parseFloat(teclado(`digite o valor do primeiro angulo do triangulo: `));
let angulo2: number = parseFloat(teclado(`digite o valor do segundo angulo do triangulo: `));
let angulo3: number = parseFloat(teclado(`digite o valor do terceiro angulo do triangulo: `));


if (angulo1 == 90 || angulo2 ==90 || angulo3 ==90) {
    console.log(`o triangulo é retangulo`);

}
else if  (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
    console.log(`o triangulo é obtusangulo`);
}

else if (angulo1 < 90 || angulo2 < 90 || angulo3 < 90) {
    console.log(`o triangulo é acutangulo`);
}

else{
    console.log(`algo deu errado`)
}

