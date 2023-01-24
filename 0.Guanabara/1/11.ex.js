var velocidade = 60.5

console.log(`A velocidade do seu carro é ${velocidade}Km/h`)

if (velocidade > 60) { // Condição Simples!
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
}
console.log('Dirija sempre usando cinto de segurança!')

console.log('-------------------------------------------')
// ----------------------------------------------------------------
// condição composta

var país = 'EUA'

console.log(`Vivendo em ${país}`);
if (país == 'Brasil') {
    console.log('Você é Brasileiro!');
} else {
    console.log('Você é Estrangeiro!');
}


// -------------------------------------------------------------------
// -------------------------------------------------------------------

// <h1>Sistemas de Multas</h1>
// Velocidade do carro: <input type="number" name="txtvel" id="txtvel"> Km/h
// <input type="button" value="Verificar" onclick="calcular()">
// <div id="res">


function calcular() [
    var txtv = window.document.querySelector('inpuut#txtvel');
    var res = window.document.querySelector('div#res');
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`;
    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade`;
        res.innerHTML += `<p> Dirija sempre com cinto de segurança!</p>`;
    }
]