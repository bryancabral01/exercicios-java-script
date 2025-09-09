const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

console.log("Escolha a operação:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

let operacao = prompt("Digite o número da operação desejada: ");
let resultado;

if (operacao === "1") {
    resultado = num1 + num2;
    console.log("Resultado da soma: " + resultado);
} else if (operacao === "2") {
    resultado = num1 - num2;
    console.log("Resultado da subtração: " + resultado);
} else if (operacao === "3") {
    resultado = num1 * num2;
    console.log("Resultado da multiplicação: " + resultado);
} else if (operacao === "4") {
    if (num2 === 0) {
        console.log("Erro: divisão por zero!");
    } else {
        resultado = num1 / num2;
        console.log("Resultado da divisão: " + resultado);
    }
} else {
    console.log("Operação inválida.");
}
