//                     0   1
const precosLivros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++) {
    if (precosLivros[atual] < precosLivros[maisBarato]) { 
        maisBarato = atual
    }
}

console.log(`O livro mais barato custa ${precosLivros[maisBarato]}`)

// atual e mais barato guardam 0, e 0 é o indice 25.


// se o array precosLivros na posição [atual], ou seja, no indice 0
// se ele for menor que o precosLivros na posição [maisBarato], ou seja, no indice 0 
// então o maisbarato ele receberá o indice atual

// vamos supor quando chegar no 15 o array
// se o precosLivros[15] for menor que precosLivros[25]
// então o maisBarato irá guardar o 15 

// quando vier o 30
// se o precosLivros[30] for menor que o precosLivros[15]
// não é, então o maisBarato permanecerá guardando o 15
