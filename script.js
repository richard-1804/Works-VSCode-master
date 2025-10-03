const numSec = 37 // este é o número secreto que o usuário terá que digitar
let tentativa = 0 // esta é a tentativa inicial, ou seja, a 1 tentativa do usuário
let contadorTen = 0 // este é o contador das tentativas que o usuário irá levar para adivinhar o número


alert("Bem-vindo ao jogo de saber o número")
alert(`Neste jogo você terá que adivinhar um número 
baseado em uma condição que será revelada em breve`)


// aqui começa o seu loop. 
while (tentativa !== numSec) { // Ele executará o loop se a tentativa for estritamente diferente do número secreto

    // ele inicia já adicionando uma tentativa, (ela estava com 0 e foi adicionado mais 1)
    contadorTen++
    let inputUsuario = prompt("Tentativa " + contadorTen + ". Digite um número entre 1 e 100:")
    tentativa = Number(inputUsuario)

    /*aqui em cima criamos uma variável temporária chamada de inputusuario, ela irá guardar a resposta do usuário,
    além de dar um prompt para pegar essa resposta. Ela também exibe um texto com o número de tentativas.
    */



    // aqui temos um if else para verificar se o número digitado é maior ou menor que o número secreto
    if (inputUsuario > numSec) {
        alert("O número secreto é menor")
    } else if (inputUsuario < numSec) {
        alert("O número secreto é maior")
    }

}


// Mensagem exibida se o usuário acertar o número
alert("Good Job, você acertou o número secreto");