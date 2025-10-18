// Configuração Inicial das variáveis
let valorPrinc = 5000
let taxaJurosMensal = 0.02
let prazoMeses = 12
let rendaMensal = 3000
let valorTotalJuros = 0
let valorTotalDevido = valorPrinc

// Funções de Cálculo
// Calculamos o valor do juros

function calcularJuros(valorPrinc) {
    let jurosMensal = valorPrinc * taxaJurosMensal
    return jurosMensal    
};


// Simulação de Juros

console.log("----Simulador de Financiamento Pessoal----\n")

// Está é a função principal que vai guardar a maior parte do nosso código
function calcuarFinanciamento() {


    // Laço for para exibir o valor do juros de cada mês
            for (mesAtual = 1; mesAtual <= prazoMeses; mesAtual++) {

            let juros = calcularJuros(valorPrinc);
            valorTotalJuros = valorTotalJuros + juros

            //Exibimos o mês junto do juros
            console.log("Mês Atual: " +mesAtual+ " juros calculado " + juros)
        }

    // Dividimos o valor total devido pelo juros e pelo valor principal
    valorTotalDevido = valorTotalJuros + valorPrinc

    // Criamos uma variável para mostrar o valor de cada parcela
    let valorDaParcela = valorTotalDevido / prazoMeses


    // Verificação da Parcela
    // Verificamos de o valor da parcela excede ou não a renda do usuário

    if (valorDaParcela > rendaMensal * 0.3) {
        console.log("RISCO ALTO! A parcela excede 30 por cento de sua renda.\n")
    } else {
        console.log("Financiamento APROVADO e saudavel com sua renda.\n")
    }



    // Exibimos o valor do juros total, do total devido e do valor fixo de cada parcela
    console.log("Valor Total de Juros: "+ valorTotalJuros.toFixed(2));
    console.log("Valor Total Devido: "+ valorTotalDevido);
    console.log("Valor Fixo de Cada Parcela: "+ valorDaParcela.toFixed(2));
}

// Aqui chamamos a nossa função para "ligá-la"
calcuarFinanciamento()