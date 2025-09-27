let nome = prompt("Olá, qual o seu nome?");
alert("Bem-Vindo " + nome)

let idade = prompt(`${nome}, digite sua idade`)

if (idade >= 16) {
    alert("Você pode votar !!!");
} else {
    alert("Você ainda não pode votar !!!");
};