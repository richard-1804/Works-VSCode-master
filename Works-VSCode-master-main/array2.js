// Função para buscar o valor dentro de uma lista
function buscaValor(lista, procurando) {
    for (let i = 0; i < 5; i++) {
        if (lista[i] === procurando) {
            return i;
        }

    } 
    return -1; // retorna -1 se não encontrar nada
}

// Criamos uma lista para procura
let minhasCores = ["preto", "azul", "verde", "branco", "vermelho"]

// Alimentamos nossa função com um valor que existe e que não existe
let resultado = buscaValor(minhasCores, "preto")
let resultado1 = buscaValor(minhasCores, "roxo")

// Exibimos o resultado no console
console.log(resultado)
console.log(resultado1)