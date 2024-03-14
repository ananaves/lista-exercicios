/*
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno: Ana Carolina M. Naves
*/
var teclado = require("prompt-sync")();
var letra = teclado("Digite a letra: ");
if (letra == "a" || letra == "A") {
    console.log("A letra \"".concat(letra, "\" \u00E9 vogal."));
}
else if (letra == "E" || letra == "e") {
    console.log("A letra \"".concat(letra, "\" \u00E9 vogal."));
}
else if (letra == "I" || letra == "i") {
    console.log("A letra \"".concat(letra, "\" \u00E9 vogal."));
}
else if (letra == "O" || letra == "o") {
    console.log("A letra \"".concat(letra, "\" \u00E9 vogal."));
}
else if (letra == "U" || letra == "u") {
    console.log("A letra \"".concat(letra, "\" \u00E9 vogal."));
}
else {
    console.log("A letra \"".concat(letra, "\" \u00E9 consoante."));
}
