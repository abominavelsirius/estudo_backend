function parimpar(numero) {
    if (numero%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let resposta = parimpar(10)
console.log(resposta)

// ou só 
console.log(parimpar(10));