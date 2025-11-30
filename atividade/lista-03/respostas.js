//Resposta das Questões 1.1

//Destructuring de Objeto:
const respostaApi = {
    id: 101,
    username: "user_a",
    email: "a@ex.com",
    status: "ativo"
};

const {username: user, email: mail} = respostaApi;

console.log(user);
console.log(mail);

//Rest Operator em Objeto:
const {id, ...dadosComplementares} = respostaApi;

console.log(id);
console.log(dadosComplementares);

//Spread Operator:
const configPadrao = { tema: "dark", notificacoes: true };
const configUsuario = { notificacoes: false}

const configFinal = { ...configPadrao, ...configUsuario}

console.log(configFinal)

//Resposta das Questões 1.2

function registrarEvento(tipo, ...metadados) {
    console.log("Tipo de evento:", tipo);
    console.log("Metadados:", metadados);
}

//Resposta das Questões 1.3

const propsBotao = {
    id: "btn-submit",
    className: "btn-primary",
    onClick: () => {},
    "data-acao": "enviar",
    disabled: true,
    title: "Enviar formulário"
};

function prepararPropsBotao(propriedades) {
    // Parte 3 + 4
    const { id, className, onClick, ...atributosNativos } = propriedades;

    // Parte 5
    const configuracaoPadrao = {
        id: "default-id",
        type: "button",
        disabled: false
    };

    // Parte 6
    const propsFinais = {
        ...configuracaoPadrao,
        ...atributosNativos,
        disabled: false
    };

    return propsFinais;
}

const resultado = prepararPropsBotao(propsBotao);
console.log(resultado);

//Resposta das Questões 2.1

const configuracoes = {
    cache: null // ou undefined
};

const tempoAPI = configuracoes.cache?.tempoExpiracao;

const tempoExpiracao = (tempoAPI ?? 600);

console.log("Tempo final de expiração:", tempoExpiracao);

//Resposta das Questões 2.2

const dispositivo1 = { info: { bateria: { nivel: 85 } } };
const dispositivo2 = { info: null };
const dispositivo3 = { info: { bateria: { nivel: 0 } } };

function obterNivelBateria(dispositivo) {
    const nivel = dispositivo.info?.bateria?.nivel;
    return nivel ?? -1;
}

console.log("Dispositivo 1:", obterNivelBateria(dispositivo1));
console.log("Dispositivo 2:", obterNivelBateria(dispositivo2));
console.log("Dispositivo 3:", obterNivelBateria(dispositivo3));

/**
 * O nível da bateria é 0. O operador ?? não trata 0 como valor vazio. Com isso 0 ?? -1 = 0
 * Já o -1, info é null, então dispositivo2.info?.bateria?.nivel já retorna undefind. Então, undefined ?? -1 = -1
 */

//Resposta das Questões 3.1

class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}`);
    }
}

class Administrador extends Usuario {
    constructor(nome, email, nivelAcesso) {
        super(nome, email);
        this.nivelAcesso = nivelAcesso;
    }

    exibirInfo() {
        super.exibirInfo();
        console.log(`Nível de acesso: ${this.nivelAcesso}`);
    }
}

const usuarioComum = new Usuario("Carlos", "carlos@email.com");
const admin = new Administrador("Ana", "ana@email.com", "super-admin");

usuarioComum.exibirInfo();
admin.exibirInfo();

//Resposta das Questões 3.2

class ContaBancaria {
    #saldo = 0;

    constructor() {
        this.#saldo = 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saque inválido: saldo insuficiente.");
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const minhaConta = new ContaBancaria();

minhaConta.depositar(500);
console.log("Saldo após depósito:", minhaConta.consultarSaldo());

minhaConta.sacar(800);
console.log("Saldo após saque:", minhaConta.consultarSaldo());

try {
    minhaConta.#saldo = 9999;
} catch (erro) {
    console.log("Erro ao tentar acessar campo privado:", erro.message);
}

/**
 * Os campos com # só podem ser acessados dentro da própria classe. Isso garante o encapsulamento real, impedindo
 * que o código externo altere o valor interno diratemente.
 */

//Resposta das Questões 4.1

/**
 * Para que o sistema de módulos ES6 funcione no navegador, o arquivo JavaScript principal deve ser carregado usando a tag:
 * <script type="module" src="app.js"></script>
 * O atributo type="module" habilita o uso de import e export, garantindo que o navegador trate o arquivo como um módulo JavaScript moderno
 */