// Função que vai cálcular o orçamento bruto do projeto
function caucularOrcamentoBruto(horaTrabalhada, valorHora){
    let valorBruto = horaTrabalhada * valorHora
    return valorBruto
};

// Função que vai cálcular o valor líquido do projeto
function aplicarImposto(valorBruto){
    let valorLiquido = valorBruto * 0.85
    return valorLiquido
;}

// Essas constantes possuem os valores de horas trabalhadas e o custo por hora
const horaProjeto = 80;
const custoHora = 35.00;

// Aqui alimentamos os parâmetros das funções
let custoInicial = caucularOrcamentoBruto(horaProjeto, custoHora);
let custoFinal = aplicarImposto(custoInicial);

// Exibimos o resultado do valor bruto e do líquido
console.log("Valor Bruto: " + custoInicial);
console.log("Valor Líquido: " + custoFinal);