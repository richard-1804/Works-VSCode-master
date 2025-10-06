let diaDaSemana = "sábado" // Está é a variável que vai armazenar o dia da semana

switch (diaDaSemana){ // o switch veririca a expressão e compara com os casos. Se estiver compatível com o caso certo ele para


    // Este é o case quando o dia da semana é segunda
    case "segunda":
        console.log("Ebaaa, é dia de programarrr");
    break;


    // Este é o case quando o dia da semana é de terça a quinta
    /* Podemos agrupar vários cases juntos, o chamado 
    "fall-through" (a omissão do break) para que vários cases executem o mesmo código.*/
    case "terça":
    case "quarta":
    case "quinta":
        console.log("é dia de sesi");
    break;


    // Este é o case quando o dia da semana é sexta
    case "sexta":
        console.log("Sextou com programaçãoooo");
    break;


    // Este é o case quando o dia da semana no fim de semana
    case "sábado":
    case "domingo":
        console.log("Dia de descanso");
    break;


    // o default é usado quando nenhum dos cases acima satisfez a expressão
    default:
        console.log("Escolha um dia da semana (com letra minúscula)")

};