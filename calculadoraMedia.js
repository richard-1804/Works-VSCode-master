const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dados = {};

console.log("Digite abaixo 4 notas\n");

r1.question("Nota 1: ", (nota1) => {
    dados.nota1 = Number(nota1)

    r1.question("Nota 2: ", (nota2) => {
        dados.nota2 = Number(nota2)
        r1.question("Nota 3: ", (nota3) => {
            dados.nota3 = Number(nota3)

            r1.question("Nota 4: ", (nota4) => {
                dados.nota4 = Number(nota4)



                let media = (nota1 + nota2 + nota3 + nota4) / 4

                if (media >= 9) {
                    console.log("Aprovado com distinção")
                } else if (media >= 7 && media <= 8.9) {
                    console.log("Aprovado")
                } else if (media >= 4 && media <= 6.9) {
                    console.log("Recuperação")
                } else if (media < 4) {
                    console.log("Reprovado")
                };

                r1.close();
            });
        });
    });
});