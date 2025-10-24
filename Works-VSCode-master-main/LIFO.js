let historicoNavegacao = [];

// Entrada de dados (PUSH): o último a entrar 

console.log("---Entrada de Dados (PUSH)---");

historicoNavegacao.push("Cuzcuz cru");
historicoNavegacao.push("Cuzcuz cozido");
historicoNavegacao.push("Cuzcuz pronto");

console.log("Pilha Atual:", historicoNavegacao);


// O último a entrar é primeiro a sair
let saida = historicoNavegacao.pop()

console.log("\nSaída POP: ", saida)