// constantes e variáveis declaradas para dar vida ao programa
const nomeAluno = 'Otávio Morreau';
const nomeDisciplina = 'Matemática';
const mediaAprovacao = 7;
let notaProva1 = 8;
let notaTrabalho = 7.5;
let notaFinal = 9;
let faltasPercentual = 25;
let categoriaFaltas;
let mediaFinal = (notaProva1 * 0.3) + (notaTrabalho * 0.3) + (notaFinal * 0.4);
// acima está o cálculo da média final, pega as notas e multiplica elas pelo seu peso.
// Peso nota da Prova 1 = 30%
// Peso nota do Trabalho = 30%
// Peso nota Final = 40%


// Constantes para a aprovação por nota e reprovação por falta
const aprovadoPorNota = mediaFinal >= mediaAprovacao;
const reprovadoPoFalta = faltasPercentual > 25;


// Exibimos os dados do aluno no console
console.log("-----Resultado Do Aluno-----\n");
console.log(`--Dados do Aluno--`);
console.log(`Nome do aluno: ${nomeAluno}`);
console.log(`Disciplina Escolhida: ${nomeDisciplina}`);
console.log(`Media Final: ${mediaFinal.toFixed(2)}`);
console.log(`Percentual de Faltas do Aluno: ${faltasPercentual}\n`);

// Classificação do aluno baseado na média final e nas faltas
console.log(`-----Classificação Do Aluno-----\n`);
console.log(`--Reprovação ou Aprovação--`);

// Se a falta for acima do limite, o aluno é reprovado
if (reprovadoPoFalta == true) {
    console.log(`O aluno ${nomeAluno} foi reprovado por faltas`);

// Aprovado com distinção se a nota for maior que 9.5
} else if (aprovadoPorNota == true && mediaFinal >= 9.5) {
    console.log(`O aluno ${nomeAluno} foi aprovado com distinção`);

// Aprovado sem distinção, nota acima da média e menor que 9.4
} else if (aprovadoPorNota == true && mediaFinal <= 9.4) {
    console.log(`O aluno ${nomeAluno} foi aprovado`);

// Se a média for acima de 5 e menor que a média para aprovação, necessita fazer um exame final
} else if (mediaFinal >= 5 && mediaFinal <= 6.9) {
    console.log(`O aluno ${nomeAluno} necessita fazer um exame final`);
// Se não atender as condições será reprovado
} else {
    console.log(`O aluno ${nomeAluno} foi reprovado pela nota\n`);
};


// Aqui exibe a frequência de faltas baseado no percentual
console.log(`\n-----Frequência de Faltas-----\n`);


if (faltasPercentual <= 10) {
    categoriaFaltas = 'baixa'
} else if (faltasPercentual <= 25) {
    categoriaFaltas = 'moderada'
} else if (faltasPercentual > 25) {
    categoriaFaltas = 'alta'
};

// Um switch para categorizar e classificar o tipo de falta (baixa, moderada, alta)
switch (categoriaFaltas) {

    case 'baixa':
        console.log(`Muito bem, você não está no limite de faltas`);
        break;

    case 'moderada':
        console.log(`Você está perto do limite, cuidado!!!`);
        break;

    case 'alta':
        console.log(`Você ultrapassou o limite, pode reprovar por isso!!!`);
        break;

    default:
        console.log(`Nenhuma falta encontrada. Verifique se a variável da falta foi declarada.`);
};