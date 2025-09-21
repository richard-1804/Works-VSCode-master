const nomeCompleto = "Daniel Richard";
const anoNascimento = 2008;
let idade = 16;
let altura = 1.69; 
let podeDirigir = false;
let cep = 42800000;
let estudante = true;

if (idade >= 18){
    podeDirigir = true;
};

console.log("Seu nome: ", nomeCompleto, "\nIdade: ", idade, "\nAltura: ", altura, "\nPode dirigir? ", podeDirigir, "\nCEP: ", cep, "\nÉ estudante? ", estudante);

console.log(typeof nomeCompleto, typeof anoNascimento, typeof idade, typeof altura, typeof podeDirigir, typeof cep, typeof estudante);

idade = "18";
console.log(typeof idade);

// A mudança do valor da variável idade de number para string nos mostra que os dados em Js são bem dinâmicos, ou seja podemos mudar o tipo de dado de uma variável LET, de forma fácil e rápida que o Js entenderá o comando.