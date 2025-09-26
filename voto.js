const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dados = {};

console.log("---Sistema de Votação---\n");

r1.question("Digite sua Idade ", (idade) => {
    dados.idade = Number(idade)



    if (idade >= 16) {
        console.log("Você pode votar!!")
    } else {
        console.log("Você ainda não pode votar")
    };



    r1.close();
});