 var agora = new Date()
 var hora = agora.getHours()
 var minuto = agora.getMinutes()
 var segundos = agora.getSeconds()
 var ano = agora.getFullYear()
 var dia = agora.getDay()
 var mes = agora.getMonth()

 console.log(`Agora são exatamente ${hora}h${minuto} | data: ${dia}/${mes}/${ano}`)

//  if (data < 10 && dia < 10) {
//     console.log("0")
//  }


if (hora < 12 && hora >= 5) {
    console.log('Bom Dia!')
} else if (hora <= 18 && hora >= 12) {
    console.log('Boa Tarde!')
} else if (hora <= 24 && hora >= 18) {
    console.log('Boa Noite!')
} else if (hora <= 4) {
    console.log('Boa Madrugada!')
}
