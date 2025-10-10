// Constante para definir o limite máximo
const limiteMaximo = 50

// Laço for para exibir os números de 0 a 50
for (let limiteMaximo = 1; limiteMaximo <= 50; limiteMaximo++) {
    
    // Condicional para verificar se o número é par ou ímpar
    if (limiteMaximo % 2 !== 0) {
        console.log("O número " + limiteMaximo + ", é ímpar");
    };

// Para alternar de um número ímpar para par, deve-se fazer o seguinte:
// Atualize o "(limiteMaximo % 2 !== 0)" para "(limiteMaximo % 3 !== 1)" e o "("O número " + limiteMaximo + ", é ímpar");" para "é par"
// Dessa forma você consegue alterar para mostrar somente os números pares
// Para mostrar somente os pares, mude o código para os seguintes valores:
// "(limiteMaximo % 2 !== 0)" e ""O número " + limiteMaximo + ", é ímpar");"
}