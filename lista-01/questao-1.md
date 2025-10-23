A- Uma linguagem de tipagem estática é aquela em que os tipos das variáveis são verificados em tempo de compilação. Isso significa que as variáveis que sejam incompatíveis não sejam combinadas. Nas verificações de tipos, ocorre durante a compilação, comparando os tipos esperados com os tipos atribuídos ou usados nas expressões.

B- Benefícios de performance:
• O código pode ser otimizado pelo compilador, já que os tipos são conhecidos antecipadamente.
• Evita verificações de tipo durante a execução, tornando o programa mais rápido.

Benefícios de segurança:
• Evita erros de tipo em tempo de execução, como tentar somar um número e uma string.
• Facilita a manutenção, pois erros são detectados mais cedo.
• Melhora o autocompletar e a refatoração em IDEs, já que os tipos são conhecidos.

C- A tipagem dinâmica realiza a verificação de tipos durante a execução do programa, não na compilação, o que oferece flexibilidade, mas acarreta custos de performance. O tipo de uma variável é determinado pelo valor que ela contém naquele momento, permitindo que a mesma variável armazene diferentes tipos de dados ao longo do tempo de vida do programa.

D- • Tipagem forte: não permite misturar tipos diferentes de forma implícita sem conversão.
• Tipagem fraca: permite conversões automáticas entre tipos, às vezes de maneira imprevisível.

E- Em linguagens híbridas, a combinação de tipagem estática e dinâmica é realizada de diferentes formas, normalmente ao enriquecer uma linguagem de tipagem estática com recursos dinâmicos ou vice-versa. O objetivo é unir a segurança e o desempenho da tipagem estática com a flexibilidade da tipagem dinâmica. Além disso, a inferência de tipos permite ao compilador deduzir automaticamente o tipo de uma variável, reduzindo a necessidade de declarações explícitas.

F- A linguagem JavaScript utiliza tipagem dinâmica e fraca. Isso significa que o tipo das variáveis é definido apenas em tempo de execução e pode mudar ao longo do programa. Além disso, o JavaScript realiza conversões automáticas entre tipos (coerção), o que oferece flexibilidade, mas pode gerar comportamentos inesperados. Para mitigar esses problemas, é comum o uso do TypeScript, que adiciona tipagem estática opcional à linguagem.