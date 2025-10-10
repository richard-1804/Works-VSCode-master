// Constantes e Variáveis para iniciar o código.
const totalBimestre = 4
const mediaAprovacao = 7.0
let somaNotas = 0


// Laço for para atribuir notas a cada bimestre.
for (let bimestre = 1; bimestre <= totalBimestre; bimestre++) {

    // variável de nota por bimestre.
    let notaBimestral = 0

    if (bimestre === 1) { // Se o bimestre for === 1, ele via adicionar uma nota. O laço continuará desta forma.
        notaBimestral = 7.0

    } else if (bimestre === 2) {
        notaBimestral = 7.5

    } else if (bimestre === 3) {
        notaBimestral = 8.0

    } else if (bimestre === 4) {
        notaBimestral = 9.0
    }

    // Aqui somamos as notas do bimestre a variável soma das notas (somaNotas).
    somaNotas += notaBimestral
}

// Aqui calculamos a média final dividindo a soma das notas pelo total de unidades no bimestre.
let mediaFinal = somaNotas / totalBimestre

// Exibimos o resultado no console.
console.log("---Resultado Final---\n");
console.log("Média Final: " +mediaFinal.toFixed(2)); // O uso do toFixed(2) é usado para deixar somente 2 casas decimais após a vírgula.


// Condicional para decidir se ele foi aprovado ou não
if (mediaFinal >= mediaAprovacao) {
    console.log("Situação Final: Parabéns! Você foi aprovado(a)!");
} else {
    console.log("Situação Final: Estude mais! Você foi reprovado(a).");
};