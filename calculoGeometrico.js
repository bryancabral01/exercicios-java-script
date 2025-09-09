/** Calculando Áreas */

/** Let referente ao Retângulo */
let base = 10;
let altura = 15;


/** Let referente ao Quadrado */
let lado = 25;


/** Let referente Circunferência */
let raio = 40;


/** Let refente ao Triângulo */
let baseTriangulo = 10;
let alturaTriangulo = 20;

let lado1 = 2;
let lado2 = 4;
let lado3 = 8;


/** Calculando o Retângulo */

let opção = 1; // Retângulo / Quadrado / Circunferência / Triângulo

if(opção === 1){
    let area = base * altura;
    let perímetro = 2 * (base + altura);

    console.log("Área do Retângulo: " + area);
    console.log("Perímetro do Retângulo: " + perímetro);
}

/** Calculando o Quadrado */

else if(opção === 2){
    let area = lado * lado;
    let perímetro = 4 * lado;

    console.log("Área do Quadrado: " + area);
    console.log("Perímetro do Quadrado: " + perímetro);
}

/** Calculando a Circunferência */

else if(opção === 3){
    let area = 3.14 * raio * raio;
    let perímetro = 2 * 3.14 * raio;

    console.log("Área da Circunferência: " + area.toFixed(2));
    console.log("Perímetro da Circunferência: " + perímetro.toFixed(2));
}

/** Calculando o Triângulo */

else if(opção === 4){
    let area = (baseTriangulo * alturaTriangulo) / 2;
    let perímetro = lado1 + lado2 + lado3;

    console.log("Área da Triângulo: " + area);
    console.log("Perímetro do Triângulo: " + perímetro);
}

else {
    console.log("Opção Inválida")
}