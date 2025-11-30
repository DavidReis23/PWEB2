const log = (nivel) => (tag) => (mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);

log("ERROR")("SERVIDOR")("Falha ao conectar com o servidor.");

const logErroServidor = log("ERROR")("SERVIDOR");
logErroServidor("Falha ao conectar com o servidor.");
logErroServidor("Erro 500");