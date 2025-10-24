let nota = [1, 2, 3, 4, 5]; // Array que irá guardar notas


// Essa função calcula a soma das notas usando o laço FOR. Ela também tira a média das notas e retorna o seu valor
function calcularMediaPura(nota) {
    
    // Soma de notas iniciada com 0
    let somaNotas = 0;
    
    //j Laço de repetição para somar as notas
    for ( let i = 0; i < nota.length; i++) {

    // As notas são somadas aqui
    somaNotas += nota[i];

    };

// Esta variável calcula a média
let media = somaNotas / nota.length;

// Aqui retornamos o valor da média
return media;

};

// Criamos uma variável chamada resultado para ligar a nossa função
// Colocamos no parâmetro o nosso array 
let resultado = calcularMediaPura(nota);


// Exibimos o resultado na tela
console.log("--Somando Notas Com Function--\n");
console.log("Notas: ",nota);
console.log("Média final: ",resultado);
