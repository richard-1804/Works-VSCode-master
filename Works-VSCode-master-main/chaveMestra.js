// Criei objetos para não ficar muitas informações repetidas e ter uma bao identação
let chaveA = { corChave: "verde", possuiSimbolo: true,  brilhoIntensidade: 65, material: "bronze",   idadeAnos: 300   };
let chaveB = { corChave: "azul",  possuiSimbolo: false, brilhoIntensidade: 90, material: "prata",    idadeAnos: 700   };
let chaveC = { corChave: "prata", possuiSimbolo: false, brilhoIntensidade: 75, material: "outro",    idadeAnos: 600   };
let chaveD = { corChave: "ouro",  possuiSimbolo: true,  brilhoIntensidade: 85, material: "ouro",     idadeAnos: 550   };
let chaveE = { corChave: "verde", possuiSimbolo: true,  brilhoIntensidade: 95, material: "diamante", idadeAnos: 450   };


// Nesta parte aninhei as condições pedidas criando variáveis para a chave mestra A, B, C, D, e E
let chaveMestraA = ( chaveA.corChave !== "vermelho" && chaveA.material !== "ferro")  &&
                   ( chaveA.brilhoIntensidade > 80 || chaveA.possuiSimbolo === true) &&
                   ( chaveA.idadeAnos > 500 && chaveA.material === "ouro");

let chaveMestraB = ( chaveB.corChave !== "vermelho" && chaveB.material !== "ferro" ) &&
                   ( chaveB.brilhoIntensidade > 80 || chaveB.possuiSimbolo === true) &&
                   ( chaveB.idadeAnos > 500 && chaveB.material === "ouro");

let chaveMestraC = ( chaveC.corChave !== "vermelho" && chaveC.material !== "ferro")  &&
                   ( chaveC.brilhoIntensidade > 80 || chaveC.possuiSimbolo === true) &&
                   ( chaveC.idadeAnos > 500 && chaveC.material === "ouro");

let chaveMestraD = ( chaveD.corChave !== "vermelho" && chaveD.material !== "ferro")  &&
                   ( chaveD.brilhoIntensidade > 80 || chaveD.possuiSimbolo === true) &&
                   ( chaveD.idadeAnos > 500 && chaveD.material === "ouro");

let chaveMestraE = ( chaveE.corChave !== "vermelho" && chaveE.material !== "ferro")  &&
                   ( chaveE.brilhoIntensidade > 80 || chaveE.possuiSimbolo === true) &&
                   ( chaveE.idadeAnos > 500 && chaveE.material === "ouro");


/* Peguei as condições aninhadas e fiz uma verificação usando if else para ver se atendia o que foi peiddo. 
Petição: Condição1 && Condição2 && Condição3;
*/

if (chaveMestraA){
    console.log("A Chave Mestra é a chave A!!!");

} else  if (chaveMestraB) {
    console.log("A Chave Mestra é a chave B!!!");

} else if (chaveMestraC) {
    console.log("A Chave Mestra é a chave C!!!");

} else if (chaveMestraD) {
    console.log("A Chave Mestra é a chave D!!!");

} else {
    console.log("A Chave Mestra é a chave E!!!");
};