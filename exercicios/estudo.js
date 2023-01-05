function malBem(tempo) {
    if (tempo >= 16) {
        return 'bem'
    } else {
        return 'mal'
    }
}


let hora = [4, 4, 0, 4, 4];

const somaDasHoras = (hora[0] + hora[1] + hora[2] + hora[3] + hora[4]);


console.log(`Total: ${somaDasHoras} horas de estudo durante a semana,`, `você foi ${malBem(somaDasHoras)}!! `)
// console.log(estudo(horas));
