const cliente = {
    nome: "Marina",
    idade: 16,
    email: "mariane@firma.com",
    telefone: [115582852, 21852195],
    saldo: 200,

    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    },
};

cliente.efetuaPagamento(50);


// quando a pessoa se torna cliente, ela também já começa com determinado saldo
// entaõ digamos que a pessoa começa com 200 reais guardado de saldo
// é possivel guardar funções nas propriedades, vamos fazer uma verificação
// se a pessoa tem saldo suficiente para fazer uma compra


// criamos uma propriedade com uma função
// o parametro será o valor, quanto que deu a conta que o cliente vai pagar por ex
// se o valor da compra é maior que o saldo, apareça "saldo insuficiente"

// para acessar o saldo do objeto, usamos a palavra reservada:
// this = isso
// ele representa o objeto atual que estamos trabalhando, a instancia do objeto atual
// this.saldo

// else this.saldo será "-=" o saldo antigo menos o valor da nova compra
// vamos deduzir um valor com cliente.efetuaPagamento();