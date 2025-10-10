const investimentoInicial = 1.000 // Constante do investimento inicial
const taxaJuros = 0.05 // Taxa de juros aplicada
let saldoAtual = 1.000 // Valor do saldo atual


// Mensagem inicial
console.log("---Investimento de 10 Anos---\n")

// Laço for para contar os anos
for (let ano = 1; ano <= 10; ano++) {

    // Aqui pega o saldo atual, soma o valor de 1 a taxa de juros, multiplica pelo saldo atual e soma ao saldo
    // Iso garante que o valor do juros calculado se some ao saldo atual
    saldoAtual = (1 + taxaJuros) * saldoAtual + saldoAtual

    // Exibimos o resultado com do saldo atual
    console.log(`Após o ano ${ano}, o saldo é: R$ ${saldoAtual.toFixed(2)}`); // O uso do toFixed(2) garante que não apareça uma dízima
}
// O laço for foi encerrado