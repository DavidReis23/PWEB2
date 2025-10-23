let contaBancaria = {
  numero: "12345-6",
  saldo: 1000,

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado com sucesso!`);
  },

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso!`);
    } else {
      console.log("Saldo insuficiente!");
    }
  },

  informarSaldo() {
    console.log(`Saldo atual: R$${this.saldo}`);
  }
};

console.log("\nf) Teste da conta bancária:");
contaBancaria.informarSaldo();
contaBancaria.depositar(500);
contaBancaria.sacar(300);
contaBancaria.informarSaldo();