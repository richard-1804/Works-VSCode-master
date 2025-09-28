// Função chamada quando o botão "OK" é clicado
function mostrarNome() {
    // Pega o valor digitado na caixinha (input com id="nome")
    let nome = document.getElementById("nome").value;

    // Mostra um alerta com a mensagem personalizada
    alert("Seja bem-vindo(a) " + nome + " a sua calculadora de IMC");
}
