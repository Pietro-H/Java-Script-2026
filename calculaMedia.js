let nota1 = 8;
let nota2 = 5;
let nota3 = 4;
let nota4 = 1;

const nomeAluno = "Bruninho Sigrles";

const nomeDoColégio = "Reni Correia Gamper imforma que o estudante";

let media = (nota1 + nota2 + nota3 +nota4) / 4

console.log("Carissimos responsaveis o colégio " + nomeDoColégio);
console.log(nomeAluno);
console.log("Tem a média: " + media);


if (media >= 7){
    console.log("O aluno " + nomeAluno + " está aprovado! Parabéns!")
} 
if(media < 5){
    console.log("O aluno " + nomeAluno + " está reprovado! Tente novamente ano que vem!")
}
if( media >= 5 && media < 7){
    console.log("O aluno " + nomeAluno + " está no se liga! Mais cuidado!")
}




