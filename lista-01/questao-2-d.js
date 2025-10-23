let numeros = [2, 4, 5, 7, 8, 11];
let soma = 0;

for (let n of numeros) {
  if (n === 2 || n === 3 || n === 5 || n === 7 || n === 11 || n === 13) {
    soma += n;
  }
}

console.log("A soma dos números primos é: " + soma);
