const pessoa = {
    nome: 'João',
    idade: 30,
    endereco: {
        logradouro: 'Rua dos bobs',
        numero: 0
    }
}

const {nome: primeiroNome, idade } = pessoa;
const { logradouro } = pessoa.endereco;

console.log(primeiroNome);
console.log(logradouro);


//Destrucuring em Arrays
const numeros = [23, 2, 32, 12];
const [n1, n2, n3, n4] = numeros;
console.log(n1); // 23

let a = 10;
let b = 5;

//Troca de valores usando destructuring
[a, b] = [b, a];

console.log(a, b);

//Rest operator
const { nome, ...pessoaD } = pessoa;
console.log(pessoaD);

//Rest operator em Funções
function soma(valorInicial, ...numeros) {
    return numeros.reduce((acc, valor) => acc + valor, valorInicial);
}

console.log(soma(10, 3, 5, 12, 32));
console.log(soma(15, 3, 5, 12));