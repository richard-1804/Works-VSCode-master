const limiteDiarioAlerta = 50;
const totalDiaAnalise = 7;
let diasContados = 1;
let consumoAcumulado = 0;

while (diasContados <= totalDiaAnalise) {
    let consumoDia = 40 + diasContados*2
    consumoAcumulado += consumoDia
    diasContados++
};

let mediaConsumoSemanal = consumoAcumulado / totalDiaAnalise;


console.log(`----Boleto da Coelba----`);
console.log(`Consumo total acumulado: ${consumoAcumulado} kWh`);
console.log(`Consumo semanal: ${mediaConsumoSemanal} kWh\n`);


console.log(`----Análise de Consumo----`);

if (mediaConsumoSemanal < 40) {
    console.log(`Classificação: Excelente. Consumo muito baixo.`);
} else if (mediaConsumoSemanal <= limiteDiarioAlerta) {
    console.log(`Classificação: Satisfatória. Consumo dentro do limite.`);
} else {
    console.log(`Classificação: Atenção. Consumo acima do limite de alerta.`);
}; 