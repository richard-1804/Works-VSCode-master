const anoNasci = 2008; // Aqui digitamos o ano em que a pessoa nasceu.
const minimoCaracter = 7; // Aqui colocamos o mínimo de caracteres, ou seja, quantos caracteres
let nomeUsuario = "richard"; // Este é o nome de usuário
let senha = "richard"; // Está é a senha que vamos usar para se basear
let temSimbolo = false; // Está variável indica se a senha possuí símbolo ou não

/*
A variável senha é verdaderia se ela possuir um símbolo (temSimbolo === true) ou atingir o mímino 
de caracteres (minimoCaracter >= 8)
*/
senha = temSimbolo === true || minimoCaracter >= 8; // Aqui fazemos a validação se nossa senha é forte ou não

let senhaForte = senha; // Igualamos a nossa senha a variável senha forte

console.log("A senha é forte ? " + senhaForte); // Exibimos uma mensagem para dizer se nossa senha é forte ou não

/*
Se nossa senha tiver símbolo ou atingir o minimo de caracteres, ela exibirá a mensagem true. 
Se não, possuir nemhum nem outro, exibirá a mensagem false.
*/