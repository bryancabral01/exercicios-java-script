let original = "849";

// Passo 1: transformar em array
let arrayCaracteres = original.split('');

// Passo 2: inverter o array
let arrayInvertido = arrayCaracteres.reverse();

// Passo 3: juntar para virar string novamente
let invertida = arrayInvertido.join('');

console.log(invertida);  // saída: 948
