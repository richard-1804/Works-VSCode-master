let filaCaixa = [];

console.log("---Entrada de Dados (PUSH)---"); // Entrada (PUSH): o primeiro a entrar

filaCaixa.push('Fardo coringa 15kg'); // O primeiro a entrar
filaCaixa.push('Fardo tabajara 20kg');
filaCaixa.push('Feijão preto 5 unidades');

console.log("Seus Produtos: ", filaCaixa)

// Saída (SHIFT): O primeiro a entrar é o último a sair

let retiradaProduto = filaCaixa.shift();

console.log("Produto Retirado: ", retiradaProduto)