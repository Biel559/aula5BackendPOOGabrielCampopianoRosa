// Exercício 1
 
/* class Carro{
   
 constructor(marca,modelo,ano,motorligado) {
   this.marca = marca
   this.modelo = modelo  
   this.ano = ano
   this.motorligado = motorligado
 }
 
 ligarMotor(){
    this.motorligado = true
 }
 
 desligarMotor(){
    this.motorligado = false
 }
 
  stausMotor(){
    if(this.motorligado == true){
    console.log("Status do motor: Ligado")
    }
    else if(this.motorligado == false){
    console.log("Status do motor: Desligado")
    }
}
}
 
const carroNovo = new Carro('Chevrolet','Corsa',2012)
carroNovo.ligarMotor()
carroNovo.stausMotor()
carroNovo.desligarMotor()
carroNovo.stausMotor() */
 
// Exercício 2
/* class Pessoa{
   
 constructor(nome,idade,profissao,salario) {
   this.nome = nome
   this.idade = idade  
   this.profissao = profissao
   this.salario = salario
 }
 
 exibetrabalho(nomeempresa, tempo_de_trabalho){
    console.log("Empresa que trabalha:", nomeempresa,"\nTempo de trabalho em horas:", tempo_de_trabalho," horas")
 }
}
 
const pessoa1 = new Pessoa("Gabriel",18,"Programador",15000)
pessoa1.exibetrabalho("Senai", "6") */
 
// Exercicio 3
 
/* class Automovel{
    constructor(cor,modelo,tipCombus,qtRodas) {
        this.cor = cor
        this.modelo = modelo
        this.tipCombus = tipCombus
        this.qtRodas = qtRodas
        this.carroLigado = false
        this.vidroAberto = false
    }
 
    ligarCarro(){
    this.carroLigado = true    
    }
 
    desligarCarro(){
    this.carroLigado = false    
    }
 
    abriVidro(){
    this.vidroAberto = true    
    }

    fechaVidro(){
    this.vidroAberto = false    
    }
}

class Carro extends Automovel {
    constructor(cor, modelo, tipCombus) {
        super(cor, modelo, tipCombus, 4);
    }
}

class Moto extends Automovel {
    constructor(cor, modelo, tipCombus) {
        super(cor, modelo, tipCombus, 2);
    }
}

class Caminhão extends Automovel {
    constructor(cor, modelo, tipCombus) {
        super(cor, modelo, tipCombus, 6);
    }
}

const meuCarro = new Carro("Vermelho", "Astra", "Flex");
meuCarro.ligarCarro(); 
if(meuCarro.carroLigado == true){
    console.log("Status do Carro: Ligado")
    }
    else if(meuCarro.carroLigado == false){
    console.log("Status do Carro: Desligado")
    }
meuCarro.abriVidro();  
if(meuCarro.vidroAberto == true){
    console.log("Status do Vidro: Aberto")
    }
    else if(meuCarro.vidroAberto == false){
    console.log("Status do Vidro: Fechado")
    }
meuCarro.fechaVidro();
if(meuCarro.vidroAberto == true){
    console.log("Status do Vidro: Aberto")
    }
    else if(meuCarro.vidroAberto == false){
    console.log("Status do Vidro: Fechado")
    }
meuCarro.desligarCarro();
if(meuCarro.carroLigado == true){
    console.log("Status do Carro: Ligado")
    }
    else if(meuCarro.carroLigado == false){
    console.log("Status do Carro: Desligado")
    }  */

// Exercício 4
/* class Cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }

    pix(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Transação Pix de R$${valor.toFixed(2)} realizada com sucesso.`);
        } else {
            console.log('Saldo insuficiente para realizar o Pix.');
        }
    }

    emprestimo(valor) {
        // Supondo que o empréstimo seja concedido sem verificação de crédito, apenas adiciona o valor ao saldo.
        this.saldo += valor;
        console.log(`Empréstimo de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    saque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log('Saldo insuficiente para realizar o saque.');
        }
    }

    extrato() {
        console.log(`Extrato: Saldo atual é de R$${this.saldo.toFixed(2)}.`);
    }
}

// Função para capturar entradas do usuário e realizar operações bancárias
function realizarOperacoes() {
    const nome = prompt("Digite o seu nome:");
    const profissao = prompt("Digite a sua profissão:");
    let saldoInicial = parseFloat(prompt("Digite o saldo inicial:"));
    
    if (isNaN(saldoInicial)) {
        console.log("Valor inválido para saldo inicial. O saldo será definido como R$0.00.");
        saldoInicial = 0.00;
    }

    const cliente = new Cliente(nome, profissao, saldoInicial);
    let continuar = true;

    while (continuar) {
        const opcao = prompt("Escolha uma operação:\n1 - Pix\n2 - Empréstimo\n3 - Saque\n4 - Extrato\n5 - Sair");
        
        switch (opcao) {
            case '1':
                const valorPix = parseFloat(prompt("Digite o valor do Pix:"));
                if (!isNaN(valorPix)) {
                    cliente.pix(valorPix);
                } else {
                    console.log("Valor inválido para Pix.");
                }
                break;
            case '2':
                const valorEmprestimo = parseFloat(prompt("Digite o valor do Empréstimo:"));
                if (!isNaN(valorEmprestimo)) {
                    cliente.emprestimo(valorEmprestimo);
                } else {
                    console.log("Valor inválido para Empréstimo.");
                }
                break;
            case '3':
                const valorSaque = parseFloat(prompt("Digite o valor do Saque:"));
                if (!isNaN(valorSaque)) {
                    cliente.saque(valorSaque);
                } else {
                    console.log("Valor inválido para Saque.");
                }
                break;
            case '4':
                cliente.extrato();
                break;
            case '5':
                continuar = false;
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

realizarOperacoes(); */

// Exercício 5

/* class Maquina {
    constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
        this.nome = nome;
        this.quantidadeEixos = quantidadeEixos;
        this.rotacoesPorMinuto = rotacoesPorMinuto;
        this.consumoEnergia = consumoEnergia;
        this.ligada = false;
    }

    ligar() {
        if (!this.ligada) {
            this.ligada = true;
            console.log(`${this.nome} está agora ligada.`);
        } else {
            console.log(`${this.nome} já está ligada.`);
        }
    }

    desligar() {
        if (this.ligada) {
            this.ligada = false;
            console.log(`${this.nome} está agora desligada.`);
        } else {
            console.log(`${this.nome} já está desligada.`);
        }
    }

    ajustarRotacao(rotacoes) {
        if (rotacoes > 0) {
            this.rotacoesPorMinuto = rotacoes;
            console.log(`${this.nome} ajustada para ${rotacoes} rotações por minuto.`);
        } else {
            console.log("Valor de rotação inválido.");
        }
    }
}

class Furadeira extends Maquina {
    constructor(nome, rotacoesPorMinuto, consumoEnergia) {
        super(nome, 1, rotacoesPorMinuto, consumoEnergia);
    }
}

const minhaFuradeira = new Furadeira("Furadeira Bosch", 1500, 500);

minhaFuradeira.ligar();
minhaFuradeira.ajustarRotacao(2000);
minhaFuradeira.desligar();
minhaFuradeira.desligar(); */

// Exercício 6

/* class Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tipoComunicacao = tipoComunicacao;
        this.consumoEnergia = consumoEnergia;
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.nome} está agora ligado.`);
        } else {
            console.log(`${this.nome} já está ligado.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.nome} está agora desligado.`);
        } else {
            console.log(`${this.nome} já está desligado.`);
        }
    }

    ajustarTemperatura(setpoint) {
        console.log(`A temperatura de ${this.nome} foi ajustada para ${setpoint} graus.`);
    }
}

class Fritadeira extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
}

class Televisao extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
}

class ArCondicionado extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
}

const minhaFritadeira = new Fritadeira("Fritadeira Elétrica", 10, 299.99, "Bluetooth", 1500);
const minhaTelevisao = new Televisao("Smart TV", 5, 1999.99, "Wi-Fi", 200);
const meuArCondicionado = new ArCondicionado("Ar Condicionado Split", 2, 1299.99, "Wi-Fi", 3500);

minhaFritadeira.ligar();
minhaFritadeira.ajustarTemperatura(180);
minhaFritadeira.desligar();

minhaTelevisao.ligar();
minhaTelevisao.desligar();

meuArCondicionado.ligar();
meuArCondicionado.ajustarTemperatura(22);
meuArCondicionado.desligar();
 */

// Exercício 7

class Livro {
    constructor(nome, quantidade, preco, autor, edicao) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.autor = autor;
        this.edicao = edicao;
    }

    emprestar() {
        if (this.quantidade > 0) {
            this.quantidade--;
            console.log(`Você emprestou o livro "${this.nome}". Quantidade restante: ${this.quantidade}.`);
        } else {
            console.log(`O livro "${this.nome}" não está disponível para empréstimo.`);
        }
    }

    devolver() {
        this.quantidade++;
        console.log(`Você devolveu o livro "${this.nome}". Quantidade disponível: ${this.quantidade}.`);
    }
}

const meuLivro = new Livro("O Senhor dos Anéis", 3, 79.90, "J.R.R. Tolkien", 1);

meuLivro.emprestar();
meuLivro.emprestar();
meuLivro.devolver();
meuLivro.emprestar();
meuLivro.emprestar();
meuLivro.emprestar();
