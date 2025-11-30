function calculaImposto(valor, taxa = 0.1) {
  return valor * taxa;
}
console.log(calculaImposto(100, undefined));
console.log(calculaImposto(100, null));