class PorquinhoDigital{
    saldo: number;
    objetivo: number;

    constructor() {
        this.saldo = 0;
        this.objetivo = 0;
      }

    depositar(valor:number): void {
        if(valor > 0){
            this.saldo += valor;
            console.log(`DepositadoR$${valor}. Saldo atual: R$${this.saldo}`);
        } 
        else{
            console.log('O valor do depósito deve ser maior que zero.')
        }
    }

    retirar(valor:number): void {
        if(valor > 0){
            if(this.saldo >= valor){
                this.saldo -= valor;
                console.log(`Retirado R$${valor}. Saldo atual: R$${this.saldo}`);
            }
            else{
                console.log('Saldo insuficiente para retirada.')
            }
        }
        else{
            console.log('O valor da retirada deve ser maior que zero.')
        }
    }

    definirObjetivo(valor: number): void {
        if (valor > 0){
            this.objetivo = valor;
            console.log(`Objetivo definido: R$${valor}`);
        }
        else{
            console.log('O valor do objetivo deve ser maior que zero.')
        }
    }

    verificarProgresso(): void {
        const faltaParaObjetivo = this.objetivo - this.saldo;
        if (faltaParaObjetivo > 0) {
            console.log(`Faltam R$${faltaParaObjetivo} para alcançar o objetivo de R$${this.objetivo}`);
        }
        else{
            console.log('Objetivo alcançado!')
        }
    }
}

//exemplo de uso da classe 
const Porquinho = new PorquinhoDigital();
Porquinho.depositar(200);
Porquinho.definirObjetivo(650);
Porquinho.verificarProgresso();
Porquinho.retirar(30);
Porquinho.verificarProgresso();