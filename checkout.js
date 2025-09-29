let valorTDCompra = 200; // aqui está o valor total da compra
let cupomDeDesconto = 20; // aqui fica o cupom de desconto se a pessoa é cliente fidelidade
let clienteFidelidade = true; // aqui diz se o cliente fidelidade é true or falses

    if(clienteFidelidade === true){ // este é o if principal que executará uma condição dentro dele somente se o cliente fidelidade for true

    if(clienteFidelidade === true && valorTDCompra >= 200){ // aqui verifica se ele é true e a compra é maior que R$ 200
        console.log("Você tem direito a 20% de desconto"); // mensagem que exibe o desconto baseado na condição anterior
    } else { // se não atender a 1 condição, exibe a mensagem abaixo
        console.log("Você tem direito apenas a 10% de desconto");
    } 
        
} else if (clienteFidelidade === false){ // se a condição dentro da principal não atender, (o clienteFidelidade for false) ele exibe a mensagem abaixo
    console.log("Você tem direito apenas a 10% de desconto")
};