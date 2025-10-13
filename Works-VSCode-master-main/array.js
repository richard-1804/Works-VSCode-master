// Criamosum array com 5 elementos e declaramos uma variável de senha correta
let senhaSecreta = ["d", "a", "i", "e", "l"]
let senhaCorreta = false

// Utilizamos algumas regras para nortear o nosso if/else

// Regra 1: O primeiro elemento (Índice 0) deve ser a letra "d".
// Regra 2: O terceiro elemento (Índice 2) deve ser o número "i".
// Regra 3: O quinto elemento (Índice 4) deve ser a letra "l".

// if/else para verificar se as regras são verdadeiras
if (senhaSecreta[0] === "d" && senhaSecreta[2] === "i" && senhaSecreta[4] === "l"){
    senhaCorreta = true // Se atender as regras, a senha correta se tornará true, senão será false

} else {
    senhaCorreta = false
};

// Exibimos uma mensagem de validação se a senha correta foi true
if (senhaCorreta === true){
    console.log("Parabéns, a senha é válida");
} else {
    console.log("Erro, a senha não é válida")
};