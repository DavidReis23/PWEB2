1) B- Apenas multiplica pode ser chamada antes da definição; sub não.
2) A afirmação está incorreta, pois arrow functions não possuem seu próprio this e sim herda do escopo que está ao redor dela e não podem ser usadas como construtoras com new.
3) No JavaScript, ele assume o valor de taxa = 0.1 se o argumento passado for estritamente undefined. Você está dizendo ao JS que não está passando valor nenhum aqui e ele assume o padrão que é 0.1.
- Para o JavaScript, null é um valor. Ele representa a ausência de um valor. Como null é diferente de undefined, o parâmetro padrão é ignorado e a variável taxa assume o valor null. 
- Para o falsy se você passar 0 ou null, o padrão não será aplicado, o que pode quebrar sua lógica se você não validar os dados dentro da função. 
6) A palavra-chave const impede apenas a reatribuição da variável (ou seja, você não pode usar o sinal = nela novamente). No entanto, ela não torna o valor imutável. Se a variável armazena um objeto ou array (tipos por referência), o const "trava" o endereço de memória, mas permite que o conteúdo dentro desse endereço seja modificado (adicionar itens, mudar propriedades).
7) B- for...of
8) C- querySelector retorna o primeiro elemento; querySelectorAll retorna todos os elementos que casam.
9) A afirmação está incorreta. Embora a sintaxe element.style['background-color'] (usando colchetes e string) tecnicamente funcione, a convenção padrão do JavaScript para acessar propriedades CSS é o camelCase.
element.style.backgroundColor = 'red';
element.style.fontSize = '20px';
10) Criar: document.createElement('li')
- Inserir: element.appendChild(child)
- Remover: parent.removeChild(child)
11) C- button.addEventListener("click", minhaFuncao)
12) Selection: Você localiza o elemento HTML no DOM com o qual o usuário vai interagir (ex: querySelector).
- Binding: Você usa o método addEventListener para "ligar" um tipo de evento (como 'click' ou 'submit') àquele elemento selecionado.
- Callback: É a função que você passa como argumento para o addEventListener. Essa função "chama de volta" (é executada) apenas quando o evento ocorre.
13) A afirmação está incorreta, pois funções puras não podem depender de variáveis globais mutáveis, pois isso quebraria o determinismo (retornar sempre o mesmo valor para a mesma entrada).
14) Em JavaScript, arrays são passados por referência, não por valor. Isso significa que, quando você passa um array para uma função, você está passando o "endereço" de onde ele mora na memória. Se você usar .push() nesse array, você está alterando diretamente o conteúdo naquele endereço. Isso causa um efeito colateral: a lista original é modificada fora da função, o que pode quebrar outras partes do sistema que esperavam que aquela lista permanecesse intacta.
15) B- Higher-order é toda função que retorna outra função ou recebe função como argumento.
16) forEach: Executa uma função para cada item (causa efeitos colaterais, não retorna nada).
- map: Transforma os dados, retornando um novo array do mesmo tamanho.
- filter: Filtra os dados, retornando um novo array com elementos que satisfazem a condição.
- reduce: Reduz a lista a um único valor (acumulado).
17) Esses métodos são imutáveis, ou seja, eles não alteram a lista original (pedidos), mas sim retornam uma nova lista ou valor.
18) Currying é a técnica de transformar uma função com múltiplos argumentos em uma sequência de funções com um único argumento. Isso depende de Closures, pois a função interna "lembra" do valor de t (a taxa) mesmo após a função externa ter terminado de executar.
19) A- Compose: Executa as funções da direita para a esquerda (matematicamente $f(g(x))$). O dado entra na última função e o resultado sobe.Pipe: Executa da esquerda para a direita (fluxo de leitura natural). O dado entra na primeira e passa para a próxima.
20) Lazy evaluation (avaliação preguiçosa) adia o cálculo de uma operação até que o resultado seja estritamente necessário.
Vantagem: Performance e economia de memória. No exemplo dado, se o array values tivesse 1 milhão de itens e usássemos um .map() normal, o JS calcularia 1 milhão de descontos imediatamente. Com lazyMap, o cálculo value * (1 - 0.1) só acontece na linha valuesWithDiscount.get(0) e apenas para o índice 0. Os outros itens nunca são processados.
21) "O ambiente léxico é lembrado" significa que a função interna mantém uma referência às variáveis que existiam no escopo onde ela foi criada (no caso, count), impedindo que o Garbage Collector apague essa variável, mesmo após a execução da função externa.
25) C- Subprogramas facilitam a reutilização e manutenção do código.
26) Imperativo (Como): "Crie uma variável acc, faça um loop de i até n, multiplique acc por i e salve em acc." (Foca no controle de fluxo e estado).
Funcional (O quê): "O fatorial é a redução de uma lista de números de 1 a n através da multiplicação." (Foca na definição matemática).
Critério: Prefira reduce quando você quer transformar uma lista inteira em um único valor (seja um número, objeto ou outra estrutura) sem efeitos colaterais. Prefira for (ou for...of) se precisar de performance extrema em arrays gigantes ou se o objetivo for apenas causar efeitos colaterais (ex: interrupção prematura com break, que o reduce não suporta nativamente).
27) C- Suporta programação orientada a objetos, funcional e imperativa, permitindo múltiplos paradigmas.
28) A- var, let, const
29) D- Dão suporte a funções de ordem superior e funções de primeira classe.
30) A- 2 verdadeiras e 2 falsas.