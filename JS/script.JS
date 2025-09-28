function calculadoraIMC() {
    // Pega o valor digitado no campo nome
    let nome = document.getElementById("nome").value;

    // Pega o valor digitado no campo peso e converte para número decimal
    let peso = parseFloat(document.getElementById("peso").value);

    // Pega o valor digitado no campo altura e converte para número decimal
    let altura = parseFloat(document.getElementById("altura").value);

    // Fórmula do IMC = peso / (altura * altura)
    let imc = peso / (altura * altura);

    // Mostra o resultado do IMC dentro da div "resultado"
    let resultadoDIV = document.getElementById("resultado");
    resultadoDIV.innerHTML = "<p>" + nome + ", seu imc é: <strong>" + imc.toFixed(2) + "</strong></p>";

    // Mostra a classificação do IMC dentro da div "tabelaIMC"
    let tabela = document.getElementById("tabelaIMC");
    
    // Verifica em qual faixa o IMC se encontra e mostra a classificação
    if (imc <= 18.5) {
        tabela.innerHTML = "<p> Você é classificado como <strong>Abaixo do peso</strong> </p>";
    } else if (imc >= 18.6 && imc <= 24.9) {
        tabela.innerHTML = "<p> Você é classificado como <strong>Peso normal ou Saudável</strong> </p>";
    } else if (imc >= 25 && imc <= 29.9) {
        tabela.innerHTML = "<p> Você é classificado como <strong>Sobrepeso</strong> </p>";
    } else if (imc >= 30) {
        tabela.innerHTML = "<p> Você é classificado como <strong>Obeso</strong> </p>";
    };
}
