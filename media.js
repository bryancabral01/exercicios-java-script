const prompt = require('prompt-sync')();

let n1 = prompt("Digite o 1º número: ");
let n2 = prompt("Digite o 2º número: ");
let n3 = prompt("Digite o 3º número: ");
let n4 = prompt("Digite o 4º número: ");
let n5 = prompt("Digite o 5º número: ");

let media = (n1 * 1 + n2 * 1 + n3 * 1 + n4 * 1 + n5 * 1) / 5;

console.log("A média dos números é: " + media);
