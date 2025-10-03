const imposto = 0.1;
const taxa = 15;
const processador = 600;
const memoria = 250;
const placa_mae = 800;

let totalProc = 2*processador;
let totalMem = 4*memoria; 
let totalPlaca = 1*placa_mae;

let subtotalProcessador = totalProc + taxa;
let subtotalMemoria = totalMem + taxa;
let subtotalMae = totalPlaca + taxa;

let totalProcessador = (totalProc * imposto) + totalProc + taxa;
let totalMemoria = (totalMem * imposto) + totalMem + taxa;
let totalMae = (totalPlaca * imposto) + totalPlaca + taxa;

let subtotal = subtotalProcessador + subtotalMemoria + subtotalMae;
let total = totalProcessador + totalMemoria + totalMae;


console.log("\n---NOTA--FICAL---");

console.log("1x processador Ryzen 5 5600G R$ 600"); 
console.log("1x processador Ryzen 5 5600G R$ 600");
console.log("1x Memória XPG 8GB 3200MHz R$ 250");
console.log("1x Memória XPG 8GB 3200MHz R$ 250");
console.log("1x Memória XPG 8GB 3200MHz R$ 250");
console.log("1x Memória XPG 8GB 3200MHz R$ 250");
console.log("1x Placa Mãe Aorus Elite B550m Pro-Vdh-Wifi R$ 800");
console.log("Subtotal da compra: ", subtotal);
console.log("Total da compra: ", total);
