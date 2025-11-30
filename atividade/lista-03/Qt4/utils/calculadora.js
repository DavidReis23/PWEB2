// Função para calcular média
export function calcularMedia(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    const soma = array.reduce((acc, n) => acc + n, 0);
    return soma / array.length;
}

export const VALOR_PI = 3.14159;
