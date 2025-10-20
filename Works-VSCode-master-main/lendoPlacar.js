// Criamos nosso array de 2 dimensões
let tabela = [
    // Valores mostrando respectivamente a pontuação e as faltas de cada jogador
    [10, 5], // jogador 0
    [25, 3], // jogador 1
    [40, 1] // jogador 2
]

// For principal que irá contar as linhas
// O "tabela.length" serve para contar as linhas da tabela, garantindo que o contador passe por todas as linhas.
// Porém, isso ainda não garante a leitura por coluna.
for (let contador = 0; contador < tabela.length; contador++) {


    // Aqui garantimos que o contador (o 2 for) passa também pelas colunas
    // O "tabela[contador].length" faz com que, além das linhas (tabela[contador]), ele passe pelas colunas (.length)
    for (let i = 0; i < tabela[contador].length; i++) {

    // Essa variável faz com que a análise das linhas (contador) e das colunas (i) aconteca
    let valorAtual = tabela[contador][i]
    
        // Esse if verifica se algum valor das colunas é maior que 10
        if (valorAtual > 10) {
            // Se alguma coluna tiver um valor maior que 10, ele será exibido
            console.log(`Valor alto encontrado: ${valorAtual}`)
        }
    }
   
}