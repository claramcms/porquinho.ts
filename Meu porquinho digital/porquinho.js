var porquinhoDigital = /** @class */ (function () {
    function porquinhoDigital() {
        this.saldo = 0;
        this.objetivo = 0;
    }
    porquinhoDigital.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("DepositadoR$".concat(valor, ". Saldo atual: R$").concat(this.saldo));
        }
        else {
            console.log('O valor do depósito deve ser maior que zero.');
        }
    };
    porquinhoDigital.prototype.retirar = function (valor) {
        if (valor > 0) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
                console.log("Retirado R$".concat(valor, ". Saldo atual: R$").concat(this.saldo));
            }
            else {
                console.log('Saldo insuficiente para retirada.');
            }
        }
        else {
            console.log('O valor da retirada deve ser maior que zero.');
        }
    };
    porquinhoDigital.prototype.definirObjetivo = function (valor) {
        if (valor > 0) {
            this.objetivo = valor;
            console.log("Objetivo definido: R$".concat(valor));
        }
        else {
            console.log('O valor do objetivo deve ser maior que zero.');
        }
    };
    porquinhoDigital.prototype.verificarProgresso = function () {
        var faltaParaObjetivo = this.objetivo - this.saldo;
        if (faltaParaObjetivo > 0) {
            console.log("Faltam R$".concat(faltaParaObjetivo, " para alcan\u00E7ar o objetivo de R$").concat(this.objetivo));
        }
        else {
            console.log('Objetivo alcançado!');
        }
    };
    return porquinhoDigital;
}());
//exemplo de uso da classe 
var porquinho = new porquinhoDigital();
porquinho.depositar(200);
porquinho.definirObjetivo(650);
porquinho.verificarProgresso();
porquinho.retirar(30);
porquinho.verificarProgresso();
