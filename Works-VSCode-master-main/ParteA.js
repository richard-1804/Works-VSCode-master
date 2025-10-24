var somaNotas = 0
var nota = [1, 2, 3, 4, 5]

for ( let i = 0; i < nota.length; i++) {
    
    somaNotas += nota[i]

};

let media = somaNotas / nota.length

console.log("--Somando Notas em um Array--\n");
console.log("Notas: ",nota);
console.log("Soma das Notas: ",somaNotas);
console.log("Média final: ",media);

