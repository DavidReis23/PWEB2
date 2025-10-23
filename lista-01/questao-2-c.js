let N1 = 10;
let N2 = 7;

let notaFinal = (N1 * 2 + N2 * 3) / 5;

if (notaFinal >= 7) {
    console.log(`Parabéns! Você foi aprovado com a nota final de ${notaFinal.toFixed(2)}`);
} else {
    console.log(`Infelizmente você foi reprovado com a nota final de ${notaFinal.toFixed(2)}`);
}