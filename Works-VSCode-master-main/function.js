// Função declarada com os parâmetros de nome e turno
function saudarTurnos(nome, turno){
    let mensagem = "Olá " + nome + "."+ " Bem-Vindo ao turno da " + turno +"!" // Exibe uma mensagem para o turno da manhã, tarde e noite.

    // Exibe a variável mensagem
    console.log(mensagem);
}

// Aqui ligamos nossa função com os respectivos nomes e turnos
saudarTurnos("Daniel", "manhã");
saudarTurnos("Mateus", "tarde");
saudarTurnos("Jessica", "noite");