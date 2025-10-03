const idCartaoCorreto = 18092008
const senhaCorreta = 20080918

let idDigitado = "18092008"
let senhaDigitada = "20080918"

let igual = idCartaoCorreto == idDigitado;
let estritamenteIgual = senhaCorreta == senhaDigitada;

let igual2 = idCartaoCorreto === idDigitado;
let estritamenteIgual2 = senhaCorreta === senhaDigitada;


console.log("O id digitado é igual ao correto? " + igual);
console.log("A senha digitada é igual a correta? " + estritamenteIgual);

console.log("O id2 digitado é igual ao correto? " + igual2);
console.log("A senha2 digitada é igual a correta? " + estritamenteIgual2);
