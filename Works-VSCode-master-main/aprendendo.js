const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dados = {};

console.log("\nOlá, seja bem vindo(a) ao sistema de votação!!");

r1.question("\nQual o seu nome? ", (nome) => {
    dados.nome = (nome);

    r1.question("Qual a sua idade? ", (idade) => {
        dados.idade = Number(idade);


        r1.question("Qual o seu país de nascença? ", (nacao) => {
            dados.nacao = nacao.toLowerCase();


            console.log(`\nSeu Nome: ${nome}`);
            console.log(`Sua idade: ${idade} anos`);
            console.log(`Seu país de nascença: ${nacao}`);

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

            r1.close();

        });
    });
});