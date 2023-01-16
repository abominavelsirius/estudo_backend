var n1 = 1545.5
// 1545.5

n1.toFixed(2)
// 1545.50
// com duas casas

n1.toFixed(2).replace('.' , ',')
// 1545,50
// se quiser com virgula ao invés de ponto

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
// R$ 1,545.0            //estilo    // dinheiro         // real
