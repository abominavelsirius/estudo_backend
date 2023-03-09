var agora = new Date()
var diaSem = agora.getDay()

/*
    Como funciona o getDay:

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Seta
    6 = Sabado
*/

// poderiamos fazer 
// if (diaSem == 0) se for 0 ele escreve domingo, senão, se for 1, escreve segunda
// mas com o switch é bem mais facil de fazer isso, se liga:

// se caso for 0 é domingo
// 


switch(diaSem) {
    case 0:
    console.log('Domingo')
    break

    case 1:
    console.log('Segunda')
    break

        case 2:
    console.log('Terça')
    break

            case 3:
    console.log('Quarta')
    break

        case 4:
    console.log('Quinta')
    break

        case 5:
    console.log('Sexta')
    break

        case 6:
    console.log('Sabado')
    break

    default:
        console.log('[ERRO] Dia inválido!') // caso dê problema

}

console.log(diaSem);
