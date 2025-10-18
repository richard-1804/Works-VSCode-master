// Configuração Inicial + Definição de variáveis
let nomeProduto = "Cuscuz";
let quantAtual = 50
let consumoDiario = 3
let estoqueMinimo = 10
let diasDeMonitoramento = 20
let diaAteZero = 0
let custoReposicao = 150


// Início da Funçao principal
function iniciarMonitoramento() {

    // Função criada para repor o estoque quando este zerar u ficar menos que zero
    function fazerReposicao() {

        quantAtual += 50
        console.log(`REPOSICAO REALIZADA! Custo: ${custoReposicao}. Novo Estoque: ${quantAtual}`);
        return custoReposicao
    }


    // Laço de repetiçãp para mostrar o consumo diário, o alerta de estoque criítico e fazer a reposição
    for (let dia = 1; dia <= diasDeMonitoramento; dia++) {
        quantAtual -= consumoDiario
        console.log(`Dia ${dia}: Consumido. Estoque restante: ${quantAtual}`);
        
        if (quantAtual <= estoqueMinimo && quantAtual > 0) {
            console.log(`ALERTA: Estoque Critico! Reposicao Sugerida.`)
            
        } else if (quantAtual <= 0) {
            console.log(`ESTOQUE ZERADO! Paralisacao de vendas no dia ${dia}`)
            fazerReposicao() // Fazemos a reposição quando o estoque acaba
        };

    };


    // Aqui verificamos o fim do monitoramento. Se e quanto sobrou do estoque ou se ele terminou antes do prazo.
    if (quantAtual > 0) {
        console.log(`FIM DO MONITORAMENTO. Estoque remanescente: ${quantAtual}`)
    } else {
        console.log(`FIM DO MONITORAMENTO. O estoque terminou antes do prazo.`)
    }


}

// Chamamos a função principal para "ligá-la"
iniciarMonitoramento()