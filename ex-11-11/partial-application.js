// Função genérica de 3 argumentos
//const log = (nivel, tag, mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);
//log("ERRO", "API", "Erro ao integrar api de pagamento.");
const log = (nivel) => (tag, mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);

const logInfo = log("INFO");
const logErro = log("ERROR");
const logWarning = log("WARNING");

logInfo("API", "Informação sobre a API.");
logErro("Banco de Dados", "Erro ao conectar ao banco de dados.");
logWarning("Servidor", "Uso de memória alto."); 