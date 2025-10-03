

// Importa o módulo readline do Node.js
// Ele serve para "ler" o que o usuário digita no terminal
const readline = require("readline");

// Criamos a interface para interagir com o usuário
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Objeto que vai guardar as respostas do usuário
let dados = {};

console.log("\nOlá, seja bem vindo(a) ao sistema de votação!!");

// primeira pergunta
r1.question("\nQual o seu nome? ", (nome) => {
    dados.nome = (nome);

    // segunda pergunta
    r1.question("Qual a sua idade? ", (idade) => {
        dados.idade = Number(idade);

        // terceira pergunta
        r1.question("Qual o seu país de nascença? ", (nacao) => {
            dados.nacao = nacao.toLowerCase();

            // mostrar todos os dados do usuário
            console.log(`\nSeu Nome: ${nome}`);
            console.log(`Sua idade: ${idade} anos`);
            console.log(`Seu país de nascença: ${nacao}`);


            // condições para verificação de voto
            if (nacao.toLowerCase() === 'brasil') {
                console.log("Você tem direito ao voto");
            } else {
                console.log("Você não tem direito ao voto, pois não é brasileiro!!");
            };

            if (dados.idade >= 18 && dados.nacao.toLowerCase() === 'brasil') {
                console.log("Você pode Votar!! "); 
            } else if (dados.idade < 18 && dados.nacao.toLowerCase() === 'brasil') {
                console.log("Você não tem idade para Votar");
            } else if (dados.nacao.toLowerCase() !== 'brasil') {
                console.log("Você não pode votar, pois não é brasileiro");
            };

            console.log("\nObrigado por participar do nosso sistema de votação!!");
            console.log("\n");


            // Fecha a inteface (senão o programa fica aberto)
            r1.close();

        });
    });
});