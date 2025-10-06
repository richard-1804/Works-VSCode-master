// Definição das constantes e variáveis
const capacidadeMaxima = 50;
const  limiteCritico = 10;
let estoqueAtual = 35;
let vendasPendentes = 28;

// Mensagem de boas vindas
console.log("---Bem-Vindo ao Sistema de Controle de Estoque---");
console.log("Verifique abaixo o estoque atual e as vendas pendentes:");
console.log(`\nEstoque Atual: ${estoqueAtual} \nVendas Pendentes: ${vendasPendentes} \n`);


// Verificação da situação atual do estoque
if (estoqueAtual <= limiteCritico) {
    console.log("Situação do Estoque: ALERTA MÁXIMO: Estoque em nível crítico! Necessário comprar mais.\n");
} else if (estoqueAtual < capacidadeMaxima) {
    let vagasR = (capacidadeMaxima - estoqueAtual)
    console.log(`Situação do Estoque: Estoque OK, mas fique atento. Restam ${vagasR} vagas.\n`);
} else {
    console.log("Situação do Estoque: Estoque lotado (Capacidade Máxima Atingida).\n")
};


// Processamento de vendas com laço whiile para processar as vendas
console.log("---Processamento de Vendas---\n");

while(vendasPendentes > 0 && estoqueAtual > 0) {
    vendasPendentes-- && estoqueAtual--
    console.log(`Venda processada. Restam ${vendasPendentes} pedidos e ${estoqueAtual} itens em estoque.\n`)
};


// Verifica se as vendas foram processadas com sucesso ou se o estoque foi esgotado
if (vendasPendentes > 0) {
    console.log(`Estoque esgotado! ${vendasPendentes} vendas ficaram pendentes.`);
} else {
    console.log("Todas as vendas foram processadas com sucesso!");
};