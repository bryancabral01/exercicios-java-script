const promptsync = require("prompt-sync");
const prompt = promptsync();

let numero = 7;

let extenso = [
  "um", "dois", "três", "quatro", "cinco",
  "seis", "sete", "oito", "nove", "dez",
  "onze", "doze", "treze", "quatorze", "quinze",
  "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"
];

if (numero >= 1 && numero <= 20) {
  console.log(extenso[numero - 1]);
} else {
  console.log("Número fora do intervalo de 1 a 20");
}
