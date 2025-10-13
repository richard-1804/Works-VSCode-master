alert("Bem-Vindo ao Pedra, Papel e Tesoura")
alert(`Regras:
Você e seu colega irão digitar suas escolhas (pedra, papel ou tesoura, em caixa baixa).
Em seguida será exibido o resultado da vitoria de um dos membros.`)

let jogador1 = prompt("Jogador 1, digite sua jogada :")
let jogador2 = prompt("Jogador 2, digite sua jogada:")
alert("Preparados para o Resultado????")

if (jogador1 === "pedra" && jogador2 === "tesoura") {
    alert("Vitória do jogador 1!!!");
} else if (jogador1 === "pedra" && jogador2 === "papel") {
    alert("Vitória do jogador 2!!!");
} else if (jogador1 === "pedra" && jogador2 === "pedra") {
    alert("Deu empate. Ambos jogaram Pedra!!!");


} else if (jogador1 === "papel" && jogador2 === "pedra") {
    alert("Vitória do jogador 1!!!");
} else if (jogador1 === "papel" && jogador2 === "tesoura") {
    alert("Vitória do jogador 2!!!");
} else if (jogador1 === "papel" && jogador2 === "papel") {
    alert("Deu empate. Ambos jogaram Papel!!!");


} else if (jogador1 === "tesoura" && jogador2 === "papel") {
    alert("Vitória do jogador 1!!!");
} else if (jogador1 === "tesoura" && jogador2 === "pedra") {
    alert("Vitória do jogador 2!!!");
} else if (jogador1 === "tesoura" && jogador2 === "tesoura") {
    alert("Deu empate. Ambos jogaram Tesoura!!!");
};  