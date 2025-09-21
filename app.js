// Importa o módulo readline do Node.js
// Ele serve para "ler" o que o usuário digita no terminal
const readline = require("readline");

// Criamos a interface para interagir com o usuário
const rl = readline.createInterface({
  input: process.stdin,   // entrada de dados (teclado)
  output: process.stdout  // saída de dados (tela)
});

// Objeto que vai guardar as respostas do usuário
let dados = {};

// Primeira pergunta
rl.question("Qual é o seu nome? ", (nome) => {
  dados.nome = nome; // salva o nome

  // Segunda pergunta
  rl.question("Quantos anos você tem? ", (idade) => {
    dados.idade = idade; // salva a idade

    // Terceira pergunta
    rl.question("Qual é a sua altura em metros? ", (altura) => {
      dados.altura = altura; // salva a altura

      // Mostra todos os dados do usuário
      console.log("\n--- Dados do Usuário ---");
      console.log(`Nome: ${dados.nome}`);
      console.log(`Idade: ${dados.idade} anos`);
      console.log(`Altura: ${dados.altura} m`);

      // Fecha a interface (senão o programa fica aberto)
      rl.close();
    });
  });
});