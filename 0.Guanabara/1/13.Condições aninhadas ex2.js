var hora = 5
console.log(`Agora são exataente ${hora} horas.`)

if (hora < 12 && hora >= 5) {
    console.log('Bom Dia!')
} else if (hora <= 18 && hora >= 12) {
    console.log('Boa Tarde!')
} else if (hora <= 24 && hora >= 18) {
    console.log('Boa Noite!')
} else if (hora <= 4) {
    console.log('Boa Madrugada!')
}