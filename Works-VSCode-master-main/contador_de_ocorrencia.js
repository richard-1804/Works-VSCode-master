// Iniciamos o array com 6 elementos e a variável votoA com 0
let votos = ["A", "B", "C", "D", "E", "F"];
let votosA = 0


// Usamos o for loop com a variável 1 para limitar a votação
for (let i = 0; i < 6; i++) {


    // Se o array votos no índice 0 for estritamente igual a "A", ele vai incrementar os votos a variável "votosA"
    if (votos[0] === "A") {
        votosA++
    }

    // Exibimos a quantidade de votos que o candidato A recebeu
    console.log("O candidato A recebeu " +votosA+ " Votos")

};


// Exibimos um if/else para mostrar se o candidato A venceu a votação ou não 
if (votosA > 3) {
    console.log("\nO candidato A venceu a votação");
} else {
    console.log("\nO candidato A não venceu a votação");
};