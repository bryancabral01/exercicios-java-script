/** Atividade números primos*/

const promptsync = require("prompt-sync");
const prompt = promptsync();

let numero = parseInt(prompt("Digite um número: "));


if(numero <= 0){
    console.log("É um número irracional")
}

else if(numero === 2){
    console.log("É um número primo")
}

else if(numero === 3){
    console.log("É um número primo")
}

else if(numero === 4){
    console.log("Não é um número primo")
}

else{
    console.log("Fora do intervalo de 1 a 4")
}