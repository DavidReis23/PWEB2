//Questão 4

 // IIFE
(function(a, b){
    let teste = "teste";
    console.log(a + b);
})(10, 5);

(function abc(){
    let privateVariable = "x";
    console.log(privateVariable);
})();
console.log(privateVariable); // ReferenceError: privateVariable is not defined

//Questão 5

function getUserNameOrLoginCTA(user) {
  return user.name || "<a href='/login'>Entrar</a>";
}

const user1 = { name: "Ana" };
console.log(getUserNameOrLoginCTA(user1)); 

const user2 = { name: "" }; 
console.log(getUserNameOrLoginCTA(user2)); 

//Questão 6

// Objeto Original
const usuario = { nome: 'Ana', nivel: 1 };
const usuarioAtualizado = { ...usuario, nivel: 2 };
console.log(usuario);
console.log(usuarioAtualizado);

//Questão 12

document.querySelector('#formLogin').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email');
  if (!email.value.trim()) email.classList.add('error');
  else email.classList.remove('error');
});

//Questão 17

const pedidos = [
  { cliente: "A", total: 100 },
  { cliente: "B", total: 200 },
  { cliente: "A", total: 50  },
  { cliente: "C", total: 350 }
];

const totais = pedidos.map(p => p.total); 
const pedidosCaros = pedidos.filter(p => p.total >= 200); 
const somaTotal = pedidos.reduce((acc, cur) => acc + cur.total, 0);

//Questão 18

const aplicarTaxa = (taxa) => (valor) => valor + (valor * taxa);
const aplicarICMS = aplicarTaxa(0.18);
const aplicarIPI = aplicarTaxa(0.05);

console.log(aplicarICMS(100));
console.log(aplicarIPI(100));

//Questão 19 letra B

const somar1 = x => x + 1;
const dup = x => x * 2;
const pip = (fn1, fn2) => (x) => fn2(fn1(x));
console.log(pip(somar1, dup)(5)); // 12
const compose = (fn1, fn2) => (x) => fn1(fn2(x));
console.log(compose(dup, somar1)(5)); // 12

//Questão 21

let count = 0;
function increment() {
  count++;
}
function getCount() {
    return count;
}

//Questão 22

/**
 * 
 * @param {nome, preco, categoria} p => define um objeto do tipo produto para ser validado
 * @returns {ok: boolean, erros: []} => retorna um objeto indicando sucesso ou falha na validação e um array de erros, caso existam. 
 */
function validarProduto(p) {
    const erros = [];

    if(p.nome.trim() == "") {
        erros.push("O nome não pode ser vazio!");
    }

    if(Number(p.preco) <= 0) {
        erros.push("O preço deve ser maior do que 0!");
    }

    if(p.categoria.trim() == "") {
        erros.push("A categoria não pode ser vazia!");
    }

    return {
        ok: erros.length === 0,
        erros
    };
}

function renderizarErros(resultadoValidacao) {
    if (resultadoValidacao.ok) {
        return;
    }

    const listaErros = document.createElement("ul");

    resultadoValidacao.erros.forEach((erro) => {
        const itemErro = document.createElement("li");
        itemErro.innerText = erro;
        listaErros.appendChild(itemErro);
    });

    document.querySelector("#erros").appendChild(listaErros);
}

const form = document.getElementById("form-cadastro");
const divErros = document.querySelector("#erros");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    divErros.innerHTML = "";

    const nome = form.querySelector("#nome").value;
    const preco = form.querySelector("#preco").value;
    const categoria = form.querySelector("#categoria").value;

    const produto = {
        nome,
        preco,
        categoria
    };

    const resultadoValidacao = validarProduto(produto);

    renderizarErros(resultadoValidacao);
});

//Questão 23

let filmes = [];
const listaElement = document.getElementById('listaFilmes');
const inputElement = document.getElementById('filmeInput');
const filtroElement = document.getElementById('filtroInput');

function addDelegatedEventListener(parent, type, selector, handler) {
    parent.addEventListener(type, (event) => {
        if (event.target.matches(selector)) {
            handler(event);
        }
    });
}

function renderizarLista(listaParaExibir = filmes) {
    listaElement.innerHTML = '';
    
    listaParaExibir.forEach((filme) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="nome-filme">${filme}</span>
            <button class="btn-remover">Remover</button>
        `;
        listaElement.appendChild(li);
    });
}

document.getElementById('addBtn').addEventListener('click', () => {
    const nome = inputElement.value.trim();
    if (nome) {
        filmes.push(nome);
        inputElement.value = '';
        inputElement.focus();
        renderizarLista();
    }
});

addDelegatedEventListener(listaElement, 'click', '.btn-remover', (event) => {
    const botao = event.target;
    const li = botao.closest('li');
    const nomeFilme = li.querySelector('.nome-filme').textContent;

    filmes = filmes.filter(f => f !== nomeFilme);
    
    renderizarLista();
});

filtroElement.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase();
    const filmesFiltrados = filmes.filter(filme => 
        filme.toLowerCase().includes(texto)
    );
    
    renderizarLista(filmesFiltrados);
});

//Questão 24

const vendas = [
    { produto: "Notebook", preco: 3500, quantidade: 1, status: "pago" },
    { produto: "Mouse", preco: 50, quantidade: 3, status: "pendente" },
    { produto: "Teclado", preco: 150, quantidade: 2, status: "pago" },
    { produto: "Monitor", preco: 1200, quantidade: 1, status: "pago" },
    { produto: "Webcam", preco: 80, quantidade: 5, status: "pendente" },
];

const pipe = (...fns) => (valorInicial) => fns.reduce((v, f) => f(v), valorInicial);

const filterVendasPagas = (lista) => {
    console.log("1. Filtrando pagos...");
    return lista.filter(item => item.status === 'pago');
};

const mapTotalItem = (listaPagas) => {
    console.log("2. Calculando subtotais...");
    return listaPagas.map(item => item.preco * item.quantidade);
};

const reduceTotalGeral = (listaTotais) => {
    console.log("3. Somando tudo...");
    return listaTotais.reduce((acc, val) => acc + val, 0);
};

const exibirTotalGeral = (total) => {
    console.log("4. Exibindo no DOM.");
    const div = document.getElementById('totalGeral');

    const formatado = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    }).format(total);

    div.textContent = `Receita Confirmada: ${formatado}`;
    return total;
};

const processarRelatorio = pipe(
    filterVendasPagas,
    mapTotalItem,
    reduceTotalGeral,
    exibirTotalGeral
);

document.getElementById('calcularReceitaTotal').addEventListener('click', () => {
    processarRelatorio(vendas);
});