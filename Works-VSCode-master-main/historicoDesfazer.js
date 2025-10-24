let historicoAcoes = []; //j Array vazio chamado histórico de Ações

// Função de fazer ação que usa um push()
function fazerAcao(acao) {

    historicoAcoes.push()
};

// Função desfazer que checa se o array (historicoAcoes) está vazio antes de tetar o pop.
// E retorna a ação desfeita
function desfazer() {
    
    if (historicoAcoes === 0) {
        historicoAcoes.pop()
    };

    return desfazer
};

// Alimentamos nosso array com os seguintes valores:
historicoAcoes.push("Escrever");
historicoAcoes.push("Salvar");
historicoAcoes.push("Corrigir");

// Exibimos o nosso array
console.log(historicoAcoes)


// Removemos o último valor do nosso arrya
let remover = historicoAcoes.pop()


// Exibimos a variável remover
console.log(remover);