/**
 * Aula sobre estruturas de repetiçã
 * Data: 21/10/2024
 */

const alunos = ["Guilherme", "Saul", "Lupércio", "Rosimeire"];

// for of
for (let aluno of alunos) {
    //console.log(aluno);
}

function imprimir(valor) {
    //console.log(valor);
}
 
// O forEach() itera um array, chamando uma função callback para cada elemento.
alunos.forEach(imprimir);

/**
 * Repetição em Objetos
 */

const escola = {
    nome: "IFCE campus Tauá",
    endereco: "Rua Antônio Teixeira Benevides, 01, Colibris",
    qtaAlunos: 500,
    CNPJ: "10.744.098/0015-40",
    reitor: "Wally",
    diretor: "Alan Sombra",
    cursos: ["ADS", "Telemáticas", "Redes", "Agropecuária", "Letras", "Infonet", "EJA Agroindustrial"]
}

// for in
for (let chave in escola) {
    console.log(escola[chave]);
}