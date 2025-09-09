/** Notas do aluno */
let nomealuno = "Jonas";
let nota1 = 6.5;
let nota2 = 7.5;
let nota3 = 6.9;

/** soma e divisão para chegar na média */
let media = (nota1 + nota2 + nota3) /3;

/** resultado com "toFixed(2)", para que seja com duas casa decimais */
console.log(media.toFixed(2));


if(media >= 7){
console.log("Parabens.Aprovado");
}

else{
console.log("Uma pena.Reprovado");
}