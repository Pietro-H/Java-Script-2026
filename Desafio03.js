const readline = require('readline-sync');

let nomeHeroi = readline.question("Digite o nome do seu herói: ");
let pontosXP = readline.question("Digite uma quantidade de XP: ");
let categoria;

if (pontosXP < 100){
    categoria = "Inciante";
}else if (pontosXP < 500){
    categoria = "Guerreiro";
}else if (pontosXP < 1000){
    categoria = "Mestre";
}else {
    categoria = "Lenda Viva";
}

console.log(`O Herói ${nomeHeroi} possui ${pontosXP} de experiência e seu rank atual é: ${categoria}. `);