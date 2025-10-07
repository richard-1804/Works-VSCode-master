// Simulação de uma análise de 7 dias de consumo usando o loop while e operadores aritméticos
const limiteDiarioAlerta = 50;
const totalDiaAnalise = 7;
let diasContados = 1;
let consumoAcumulado = 0;


// Simulação de Consumo
while (diasContados <= totalDiaAnalise) {
    let consumoDia = 40 + diasContados*2
    consumoAcumulado += consumoDia
    diasContados++
};

// Medição do consumo semanal
let mediaConsumoSemanal = consumoAcumulado / totalDiaAnalise;

// Exibindo resultados
console.log(`----Boleto da Coelba----`);
console.log(`Consumo total acumulado: ${consumoAcumulado} kWh`);
console.log(`Consumo semanal: ${mediaConsumoSemanal} kWh\n`);


// Analisando o consumo com if/else
console.log(`----Análise de Consumo----`);

if (mediaConsumoSemanal < 40) {
    console.log(`Classificação: Excelente. Consumo muito baixo.\n`);
} else if (mediaConsumoSemanal <= limiteDiarioAlerta) {
    console.log(`Classificação: Satisfatória. Consumo dentro do limite.\n`);
} else {
    console.log(`Classificação: Atenção. Consumo acima do limite de alerta.\n`);
}; 


// Exibindo um relatório mensal com switch
console.log(`----Relatório Mensal----`);

const mesAnalise = 3

switch (mesAnalise) {
    case 1:
        console.log(`Janeiro: Início de ano.`);
    break;

    case 3:
        console.log(`Março: Relatório de Primeiro Trimestre.`);
    break;

    case 6:
        console.log(`Junho: Relatório Semestral.`);
    break;

    case 12:
        console.log(`Dezembro: Fechamento Anual.`);
    break;

    default:
        console.log(`Relatório Mensal Padrão.`);
};