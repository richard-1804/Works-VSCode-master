const nomeAluno = "Otávio Morreau"; // Nome do Aluno
const frequenciaMin = 75; // Frequência mínima do curso
const mediaMin = 7.0; // Média mínima do curso
let nota1 = 7.3; // nota da primeira unidade
let nota2 = 8.0; // nota da segunda unidade
let nota3 = 9.0; // nota da terceira unidade
let frequencia = 80; // Frequência do aluno
let mediaG = (nota1 + nota2 + nota3) / 3; // Total da média geral do curso

let aprovado = mediaG >= mediaMin && frequencia >= frequenciaMin; // situação do aluno, se aprovado

let recuperacao = mediaG < mediaMin && frequencia >= frequenciaMin; // situação do aluno, se estiver em recuperação

let reprovado = !aprovado; // situação do aluno, se reprovado

// Uma mensagem de boas vindas, além da exibição do nome do aluno e da média geral do curso
console.log(
  "\n---Bem-vindo ao Sistema de Análise de Desempenho Escolar (SADE)---\n"
);
console.log("Nome do Aluno: " + nomeAluno, "\nMédia Geral: " + mediaG);

// Aqui utilizei condições aninhadas para mostrar a situação escular do estudante.
if (aprovado) {
  console.log("Situação Escolar Atual: Aprovado");
} else if (recuperacao) {
  console.log("Situação Escolar Atual: Em recuperação");
} else if (reprovado) {
  console.log("Situação Escolar Atual: Reprovado");
};