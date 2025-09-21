const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dados = {};

console.log("Olá, seja bem vindo(a) a sua calculadora de área e perímetro");
console.log(`Insira a base e a altura do retângulo\n`);

r1.question("Base do retângulo: ", (base) => {
    dados.base = Number(base);

    r1.question("Altura do retângulo: ", (altura) => {
        dados.altura = Number(altura);


        let area = dados.base * dados.altura;
        let perimetro = (2 * dados.base) + (2 * dados.altura);


        console.log(`Área do retângulo: ${area}`);
        console.log(`Perímetro do rêtangulo: ${perimetro}`);


        r1.close();
    });
});