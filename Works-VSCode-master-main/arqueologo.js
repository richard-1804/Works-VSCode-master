// Vamos criar 3 objetos para guardar todas as variáveis sem ter necessidade de muitas repetições

let artefatoA = {tipoArtefato: "ferramenta", estaIntacto: false, dataDescoberta: 1998, pesoKg: 65}; 
let artefatoB = {tipoArtefato: "estatua", estaIntacto: true, dataDescoberta: 2010, pesoKg: 40};
let artefatoC ={tipoArtefato: "mapa", estaIntacto: false, dataDescoberta: 2022, pesoKg: 30};


// Após os objetos, vamos juntar as inscrições em uma única variável, depois vamos verificar se elas atendem as inscrições

/* Para verificar, criamos a variável do grande artefato (grandeAA) para o artefato A,
chamamos a variavel que queremos (neste caso o artefatoA), através do nome dela, um ponto e o que queremos dentro do nosso objeto.
Ex: nome da variável (artefatoA), ponto (.) e o dado dentro do objeto (tipoArtefato), fica assim: artefatoA.tipoArtefato
desta forma conseguimos "chamar" o tipo de dado que queremos e juntar as instruções. Duplique este processo nas outras variáveis e
lembre-se de utilizar os operadores de comparação &&, || ou !
*/

let grandeAA = (artefatoA.tipoArtefato !== "joia" && artefatoA.dataDescoberta > 2000) &&
                (artefatoA.estaIntacto === true || artefatoA.pesoKg > 50);

let grandeAB = (artefatoB.tipoArtefato !== "joia" && artefatoB.dataDescoberta > 2000) &&
                (artefatoB.estaIntacto === true || artefatoB.pesoKg > 50);

let grandeAC = (artefatoC.tipoArtefato !== "joia" && artefatoC.dataDescoberta > 2000) &&
                (artefatoC.estaIntacto === true || artefatoC.pesoKg > 50);


// Use as condições aninhadas para verificar qual é o Grande Artefato.
if (grandeAA){
    console.log("O Grande Artefato é o Artefato A");
} else if (grandeAB){
    console.log("O Grande Artefato é o Artefato B");
} else if (grandeAC){
    console.log("O Grande Artefato é o Artefato C");
};