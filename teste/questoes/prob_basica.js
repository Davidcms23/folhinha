/* ── questoes/prob_basica.js ────────────────────────────
   Perguntas da disciplina "Probabilidade Básica I".
   Unidade I: Noções Básicas de Probabilidade
──────────────────────────────────────────────────────── */
QUESTOES.push(
  {
    id: "pb_u1_007",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Segundo o princípio básico da contagem, se um experimento 1 tem \\(m\\) resultados possíveis e, para cada um desses, um experimento 2 tem \\(n\\) resultados possíveis, quantos são os resultados conjuntos?",
    opcoes: [
      "\\(m + n\\)",
      "\\(m^n\\)",
      "\\(m \\cdot n\\)",
      "\\(n^m\\)"
    ],
    correta: 2,
    msg: "O princípio básico da contagem estabelece que dois experimentos em sequência com m e n resultados possuem conjuntamente m multiplicado por n resultados possíveis.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u1_008",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Quantas permutações diferentes podem ser formadas a partir de um conjunto de \\(n\\) objetos, dos quais \\(n_1\\) são idênticos entre si, \\(n_2\\) são idênticos entre si, até \\(n_r\\) idênticos?",
    opcoes: [
      "\\(\\frac{n!}{n_1! n_2! \\dots n_r!}\\)",
      "\\(n_1! n_2! \\dots n_r!\\)",
      "\\(\\frac{n!}{(n-r)!}\\)",
      "\\(n^r\\)"
    ],
    correta: 0,
    msg: "O número de permutações de n objetos com repetições é o fatorial do total de objetos dividido pelo produto dos fatoriais das frequências de cada grupo de objetos idênticos.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u1_009",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Se um experimento consiste em medir o tempo exato de vida (em horas) de um transistor até sua falha, qual é a representação adequada para o espaço amostral \\(S\\)?",
    opcoes: [
      "\\(S = \\{0, 1, 2, \\dots, 1000\\}\\)",
      "\\(S = \\{x \\in \\mathbb{R} : 0 \\leq x < \\infty\\}\\)",
      "\\(S = \\{x \\in \\mathbb{R} : 0 < x \\leq 1\\}\\)",
      "\\(S = \\{\\text{funciona}, \\text{defeituoso}\\}\\)"
    ],
    correta: 1,
    msg: "Como o tempo de vida é uma grandeza contínua não negativa, o espaço amostral é formado por todos os números reais não negativos.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u1_010",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Dado um espaço amostral, o que representa formalmente o evento \\(E \\cap F^c\\) (onde \\(F^c\\) é o complemento de \\(F\\))?",
    opcoes: [
      "O evento em que ambos \\(E\\) e \\(F\\) ocorrem simultaneamente.",
      "O evento em que nenhum dos dois ocorre.",
      "O evento em que \\(E\\) ocorre, mas \\(F\\) não ocorre.",
      "O evento em que no máximo um dos dois ocorre."
    ],
    correta: 2,
    msg: "A interseção de um evento E com o complemento de F contém todos os resultados que pertencem a E e simultaneamente não pertencem a F.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u1_011",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Qual das opções a seguir NÃO é um dos três axiomas de Kolmogorov para a probabilidade?",
    opcoes: [
      "Para qualquer evento \\(E\\), \\(0 \\leq P(E) \\leq 1\\).",
      "A probabilidade do espaço amostral \\(S\\) é \\(P(S) = 1\\).",
      "A probabilidade da união de quaisquer dois eventos é sempre a soma de suas probabilidades marginais.",
      "Para eventos mutuamente exclusivos, a probabilidade da união infinita é a soma das probabilidades individuais."
    ],
    correta: 2,
    msg: "O terceiro axioma garante que a probabilidade da união é a soma das probabilidades apenas se os eventos forem mutuamente exclusivos. Para eventos quaisquer, deve-se subtrair a interseção.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u1_012",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Pela Regra da Multiplicação (Teorema do Produto), a probabilidade da interseção de múltiplos eventos \\(P(E_1 E_2 \\dots E_n)\\) é dada por:",
    opcoes: [
      "\\(P(E_1) P(E_2) \\dots P(E_n)\\)",
      "\\(P(E_1) P(E_2|E_1) P(E_3|E_1 E_2) \\dots P(E_n|E_1 \\dots E_{n-1})\\)",
      "\\(P(E_1|E_2) P(E_2|E_3) \\dots P(E_{n-1}|E_n)\\)",
      "\\(P(E_1 \\cup E_2) \\dots P(E_{n-1} \\cup E_n)\\)"
    ],
    correta: 1,
    msg: "O Teorema do Produto expande a probabilidade da interseção encadeando as probabilidades condicionais de cada evento, dado que todos os eventos anteriores já ocorreram.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u1_013",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Utilizando a Lei da Probabilidade Total, se um evento \\(E\\) pode ser particionado pela ocorrência ou não de um evento \\(F\\), a probabilidade \\(P(E)\\) pode ser escrita como:",
    opcoes: [
      "\\(P(E|F) + P(E|F^c)\\)",
      "\\(P(E \\cap F) + P(E \\cap F^c)\\)",
      "\\(P(E|F) P(F^c) + P(E|F^c) P(F)\\)",
      "\\(P(E \\cup F) - P(F)\\)"
    ],
    correta: 1,
    msg: "A probabilidade do evento E é a soma de suas interseções particionadas, que também pode ser expressa de forma equivalente como a soma dos produtos \\(P(E|F)P(F) + P(E|F^c)P(F^c)\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u1_014",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Para que três eventos \\(E\\), \\(F\\) e \\(G\\) sejam considerados mutuamente independentes, além de serem independentes aos pares, qual condição é estritamente necessária?",
    opcoes: [
      "\\(P(E \\cup F \\cup G) = P(E)P(F)P(G)\\)",
      "\\(P(E \\cap F \\cap G) = P(E)P(F)P(G)\\)",
      "\\(P(E|F \\cap G) = 0\\)",
      "\\(P(E \\cap F \\cap G) = 0\\)"
    ],
    correta: 1,
    msg: "A independência de três eventos exige que a probabilidade da interseção dos três seja igual ao produto das três probabilidades marginais individuais.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u1_015",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Na teoria das probabilidades, como a interpretação subjetiva (ou pessoal) define o valor de uma probabilidade?",
    opcoes: [
      "Como o limite da frequência relativa de um evento em repetições infinitas.",
      "Como a razão puramente combinatória de casos favoráveis sobre casos possíveis.",
      "Como uma medida do grau de crença de um indivíduo a respeito da ocorrência do evento.",
      "Como uma propriedade determinística invariável de um experimento probabilístico."
    ],
    correta: 2,
    msg: "A visão subjetiva da probabilidade interpreta o valor estatístico como a medida da confiança do indivíduo sobre a ocorrência de um evento particular.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u1_016",
    disciplina: "prob_basica_1",
    unidade: "u1",
    pergunta: "Sejam \\(A\\) e \\(B\\) dois eventos com probabilidades estritamente positivas. Se for sabido que eles são mutuamente exclusivos, o que se conclui sobre a sua independência?",
    opcoes: [
      "Eles são obrigatoriamente independentes.",
      "Eles não podem ser independentes.",
      "Depende apenas do número de resultados no espaço amostral.",
      "Serão independentes se a soma de suas probabilidades for igual a 1."
    ],
    correta: 1,
    msg: "Se são mutuamente exclusivos, não ocorrem juntos (a interseção é nula). Se fossem independentes, a interseção não seria nula. Logo, a ocorrência de um inviabiliza o outro, denotando dependência total.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  }
);

/* ── questoes/prob_basica.js ────────────────────────────
   Perguntas da disciplina "Probabilidade Básica I".
   Unidade II: Variáveis Aleatórias Unidimensionais
──────────────────────────────────────────────────────── */
QUESTOES.push(
  {
    id: "pb_u2_001",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "Seja \\(F_X(x)\\) a função de distribuição acumulada (fda) de uma variável aleatória \\(X\\). Qual das seguintes propriedades matemáticas é universalmente verdadeira para \\(F_X(x)\\)?",
    opcoes: [
      "É uma função não decrescente e contínua à direita.",
      "É uma função estritamente crescente em toda a reta real.",
      "A sua integral definida de \\(-\\infty\\) a \\(\\infty\\) é exatamente igual a 1.",
      "É uma função sempre contínua, independentemente de \\(X\\) ser discreta ou contínua."
    ],
    correta: 0,
    msg: "Por definição, \\(F_X(x) = P(X \\leq x)\\), o que garante que a probabilidade acumulada nunca diminua e que os limites à direita coincidam com o valor da função no ponto.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u2_002",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "Para que uma função \\(f_X(x)\\) seja considerada uma legítima função densidade de probabilidade (fdp) de uma variável aleatória contínua em \\(\\mathbb{R}\\), quais condições fundamentais ela deve satisfazer?",
    opcoes: [
      "\\(f_X(x) \\geq 0\\) para todo \\(x\\), e \\(\\int_{-\\infty}^{\\infty} f_X(x)dx = 1\\).",
      "\\(0 \\leq f_X(x) \\leq 1\\) para todo \\(x\\), e \\(\\int_{-\\infty}^{\\infty} f_X(x)dx = 1\\).",
      "\\(\\int_{-\\infty}^{\\infty} x f_X(x)dx = 1\\) e \\(f_X(x) \\geq 0\\).",
      "\\(f_X(x)\\) deve ser estritamente positiva e contínua em todo o seu domínio."
    ],
    correta: 0,
    msg: "Uma fdp não precisa ter limite superior igual a 1 (pode assumir valores maiores que 1), mas deve ser não negativa e garantir que a área total sob a curva represente 100% da probabilidade.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u2_003",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "Seja \\(X\\) uma variável aleatória discreta com suporte \\(R_X = \\{1, 2, \\dots, n\\}\\) e função de probabilidade constante \\(P(X=x) = \\frac{1}{n}\\). Qual é o valor da esperança matemática \\(E[X]\\)?",
    opcoes: [
      "\\(\\frac{n+1}{2}\\)",
      "\\(\\frac{n^2-1}{12}\\)",
      "\\(\\frac{n}{2}\\)",
      "\\(n\\)"
    ],
    correta: 0,
    msg: "O valor esperado é calculado pela soma \\(\\sum_{x=1}^{n} x \\frac{1}{n} = \\frac{1}{n} \\frac{n(n+1)}{2} = \\frac{n+1}{2}\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u2_004",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "Para uma variável aleatória contínua \\(X\\) com densidade \\(f_X(x)\\), como se expressa o valor esperado de uma transformação \\(Y = g(X)\\) (assumindo que a integral convirja)?",
    opcoes: [
      "\\(\\int_{-\\infty}^{\\infty} g(x) f_X(x) dx\\)",
      "\\(g(E[X])\\)",
      "\\(\\int_{-\\infty}^{\\infty} x g(x) f_X(x) dx\\)",
      "\\(\\int_{-\\infty}^{\\infty} g(x) dx\\)"
    ],
    correta: 0,
    msg: "Pela Lei do Estatístico Inconsciente (LOTUS), a esperança de uma função de \\(X\\) é obtida integrando o produto da função \\(g(x)\\) pela própria fdp original \\(f_X(x)\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u2_005",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "A variância de uma variável aleatória \\(X\\), denotada por \\(Var(X)\\), pode ser calculada de forma algébrica através de qual expressão envolvendo momentos?",
    opcoes: [
      "\\(E[X^2] - (E[X])^2\\)",
      "\\(E[X - E[X]]\\)",
      "\\((E[X])^2 - E[X^2]\\)",
      "\\(E[X^2] - E[X]\\)"
    ],
    correta: 0,
    msg: "O teorema da translação de variância estabelece que \\(Var(X)\\) equivale à diferença entre o momento de segunda ordem e o quadrado do momento de primeira ordem.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u2_006",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "Se \\(X\\) é uma variável aleatória com variância estritamente positiva \\(\\sigma^2\\), qual é a variância da transformação linear \\(Y = aX + b\\) (onde \\(a\\) e \\(b\\) são constantes reais)?",
    opcoes: [
      "\\(a^2 \\sigma^2\\)",
      "\\(a \\sigma^2 + b\\)",
      "\\(a^2 \\sigma^2 + b^2\\)",
      "\\(a \\sigma^2\\)"
    ],
    correta: 0,
    msg: "A variância é uma medida de dispersão imune a deslocamentos na origem (adição de \\(b\\)). O escalonamento da variável por um fator \\(a\\) multiplica a variância por \\(a^2\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u2_007",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "Seja \\(X\\) uma variável aleatória com média \\(\\mu\\) e variância \\(\\sigma^2\\). A função de perda quadrática esperada \\(g(a) = E[(X - a)^2]\\) atinge o seu valor mínimo global quando a constante \\(a\\) é igual a:",
    opcoes: [
      "\\(\\mu\\)",
      "\\(0\\)",
      "\\(\\sigma\\)",
      "\\(\\mu^2\\)"
    ],
    correta: 0,
    msg: "A esperança do erro quadrático é minimizada unicamente quando o pivô da distância é a própria média da distribuição (\\(a = E[X] = \\mu\\)).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u2_008",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "Dada uma variável aleatória contínua \\(X\\) com função de distribuição acumulada \\(F_X(x)\\) diferenciável, a sua função densidade de probabilidade \\(f_X(x)\\) é matematicamente definida por:",
    opcoes: [
      "\\(\\frac{d}{dx} F_X(x)\\)",
      "\\(\\int_{-\\infty}^{x} F_X(t) dt\\)",
      "\\(\\lim_{x \\to \\infty} F_X(x)\\)",
      "\\(\\frac{F_X(x)}{x}\\)"
    ],
    correta: 0,
    msg: "Pelo Teorema Fundamental do Cálculo, a função densidade representa a taxa instantânea de acúmulo de probabilidade, sendo estritamente a primeira derivada da FDA em relação a \\(x\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u2_009",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "No escopo de variáveis aleatórias contínuas, a mediana \\(med(X)\\) é definida como a raiz exata da equação:",
    opcoes: [
      "\\(F_X(med(X)) = 0.5\\)",
      "\\(\\int_{-\\infty}^{med(X)} x f_X(x) dx = 0.5\\)",
      "\\(f_X(med(X)) = 0.5\\)",
      "\\(E[X] = med(X)\\)"
    ],
    correta: 0,
    msg: "A mediana divide a massa total de probabilidade ao meio, configurando-se analiticamente como o ponto no domínio no qual a função de distribuição acumulada atinge o valor de 0,5.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u2_010",
    disciplina: "prob_basica_1",
    unidade: "u2",
    pergunta: "Se \\(X\\) é uma variável aleatória com valor esperado \\(\\mu\\) e variância \\(\\sigma^2\\), qual é a expressão analítica expandida para a esperança não linear \\(E[X(X-1)]\\)?",
    opcoes: [
      "\\(\\mu(\\mu - 1) + \\sigma^2\\)",
      "\\(\\mu^2 - \\mu\\)",
      "\\(\\sigma^2 - \\mu\\)",
      "\\(\\mu(\\mu - 1) - \\sigma^2\\)"
    ],
    correta: 0,
    msg: "Avaliando pela linearidade: \\(E[X^2 - X] = E[X^2] - E[X]\\). Sabendo que \\(E[X^2] = \\sigma^2 + \\mu^2\\), a expressão se reduz para \\(\\sigma^2 + \\mu^2 - \\mu\\), que fatora como \\(\\mu(\\mu - 1) + \\sigma^2\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  }
);

/* ── questoes/prob_basica.js ────────────────────────────
   Perguntas da disciplina "Probabilidade Básica I".
   Unidade III: Modelos Probabilísticos Discretos e Contínuos
──────────────────────────────────────────────────────── */
QUESTOES.push(
  {
    id: "pb_u3_001",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "Seja \\(X\\) uma variável aleatória com função geradora de momentos \\(M_X(t)\\). Se definirmos uma transformação afim \\(Y = aX + b\\), qual é a expressão correta para a função geradora de momentos de \\(Y\\)?",
    opcoes: [
      "\\(e^{bt} M_X(at)\\)",
      "\\(e^{at} M_X(bt)\\)",
      "\\(a M_X(t) + b\\)",
      "\\(M_X(at + b)\\)"
    ],
    correta: 0,
    msg: "A demonstração padrão da função geradora de momentos sob transformação linear resulta em \\(M_Y(t) = E[e^{t(aX+b)}] = e^{bt} E[e^{(at)X}] = e^{bt} M_X(at)\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u3_002",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "Definindo a função \\(S(t) = \\log(M_X(t))\\), onde \\(M_X(t)\\) é a função geradora de momentos de \\(X\\). O que representa matematicamente a segunda derivada \\(S''(t)\\) avaliada em \\(t=0\\)?",
    opcoes: [
      "A esperança \\(E(X)\\).",
      "A variância \\(Var(X)\\).",
      "O segundo momento central \\(E(X^2)\\).",
      "O desvio padrão de \\(X\\)."
    ],
    correta: 1,
    msg: "A função \\(S(t) = \\log(M_X(t))\\) é a função geradora de cumulantes. A sua primeira derivada em \\(t=0\\) fornece a esperança \\(E(X)\\), enquanto a segunda derivada em \\(t=0\\) fornece diretamente a variância \\(Var(X)\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u3_003",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "Em qual das seguintes dinâmicas de amostragem o modelo Binomial é estritamente aplicável para modelar o número de sucessos?",
    opcoes: [
      "Extração de elementos de uma população finita sem reposição.",
      "Contagem do número de eventos ocorrendo em um intervalo contínuo de tempo ou espaço.",
      "Extração de elementos com reposição, garantindo probabilidade de sucesso constante em cada tentativa independente.",
      "Contagem do número de tentativas independentes necessárias até que ocorra o primeiro sucesso."
    ],
    correta: 2,
    msg: "A distribuição Binomial requer um número fixo de tentativas independentes e uma probabilidade de sucesso constante em cada tentativa, o que é garantido pela amostragem com reposição.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u3_004",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "Seja \\(X\\) uma variável aleatória seguindo o modelo de Poisson com parâmetro \\(\\lambda\\). Qual é a relação recursiva correta entre as probabilidades sucessivas \\(P(X=i+1)\\) e \\(P(X=i)\\)?",
    opcoes: [
      "\\(P(X=i+1) = \\frac{\\lambda}{i+1} P(X=i)\\)",
      "\\(P(X=i+1) = \\frac{\\lambda}{i} P(X=i)\\)",
      "\\(P(X=i+1) = \\lambda (i+1) P(X=i)\\)",
      "\\(P(X=i+1) = \\frac{i+1}{\\lambda} P(X=i)\\)"
    ],
    correta: 0,
    msg: "Abrindo a fórmula da Poisson para \\(i+1\\) e simplificando o fatorial no denominador, chegamos de forma exata à identidade recursiva \\(P(X=i+1) = \\frac{\\lambda}{i+1} P(X=i)\\) para todo \\(i \\geq 0\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u3_005",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "Uma característica fundamental do modelo Geométrico é a sua propriedade da 'falta de memória'. Analiticamente, para quaisquer inteiros positivos \\(a\\) e \\(b\\), como essa propriedade é expressa?",
    opcoes: [
      "\\(P(X \\ge a+b | X \\ge a) = P(X \\ge b)\\)",
      "\\(P(X = a+b | X = a) = P(X = b)\\)",
      "\\(P(X \\le a+b | X \\le a) = P(X \\le b)\\)",
      "\\(P(X > a+b | X > a) = P(X > a)\\)"
    ],
    correta: 0,
    msg: "A falta de memória indica que o fato de o evento já ter 'sobrevivido' por \\(a\\) tentativas não altera as probabilidades dos eventos subsequentes para as próximas \\(b\\) tentativas.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u3_006",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "Para uma variável aleatória contínua \\(X\\) com distribuição Uniforme no intervalo fechado \\([a, b]\\), qual é a fórmula analítica que define a sua variância?",
    opcoes: [
      "\\(\\frac{a+b}{2}\\)",
      "\\(\\frac{(b-a)^2}{12}\\)",
      "\\(\\frac{(b-a)^2}{2}\\)",
      "\\(\\frac{b-a}{12}\\)"
    ],
    correta: 1,
    msg: "Ao aplicar a definição de variância \\(E(X^2) - (E(X))^2\\) sobre a densidade uniforme \\(\\frac{1}{b-a}\\), a álgebra resulta no clássico \\(Var(X) = \\frac{(b-a)^2}{12}\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u3_007",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "Se uma variável aleatória \\(X\\) tem distribuição \\(\\mathcal{N}(\\mu, \\sigma^2)\\), uma transformação afim dada por \\(Y = aX + b\\) possuirá qual distribuição de probabilidade?",
    opcoes: [
      "\\(\\mathcal{N}(a\\mu + b, a\\sigma^2)\\)",
      "\\(\\mathcal{N}(a\\mu + b, a^2\\sigma^2)\\)",
      "\\(\\mathcal{N}(\\mu + b, a^2\\sigma^2)\\)",
      "\\(\\mathcal{N}(a\\mu, a^2\\sigma^2 + b)\\)"
    ],
    correta: 1,
    msg: "Uma combinação linear de uma variável Normal sempre produz outra Normal. A nova média sofre a translação e o ganho de escala (\\(a\\mu+b\\)), enquanto a variância é multiplicada pelo quadrado do fator de escala (\\(a^2\\sigma^2\\)).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u3_008",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "A transformação de variáveis é um recurso comum em modelos contínuos. Se \\(X \\sim Uniforme(0,1)\\), então a variável construída pela transformação \\(Y = -\\ln(X)\\) seguirá qual modelo probabilístico?",
    opcoes: [
      "Normal Padrão com \\(\\mu=0\\) e \\(\\sigma^2=1\\).",
      "Exponencial com parâmetro de taxa \\(\\lambda=1\\).",
      "Gama com parâmetros \\(\\alpha=1\\) e \\(\\beta=2\\).",
      "Weibull com parâmetros \\(\\alpha=2\\) e \\(\\lambda=1\\)."
    ],
    correta: 1,
    msg: "Pelo método da função de distribuição acumulada (ou Jacobiano), a aplicação do logaritmo negativo sobre a distribuição Uniforme gera rigorosamente uma distribuição Exponencial com taxa 1.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u3_009",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "Ao escalar uma variável com modelo Gama, o que ocorre com seus parâmetros? Especificamente, se \\(X \\sim Gama(\\alpha, \\beta)\\), onde \\(\\beta\\) é o parâmetro de taxa, a variável \\(Y = cX\\) (com \\(c > 0\\)) terá distribuição:",
    opcoes: [
      "\\(Gama(c\\alpha, \\beta)\\)",
      "\\(Gama(\\alpha, \\frac{\\beta}{c})\\)",
      "\\(Gama(\\alpha, c\\beta)\\)",
      "\\(Gama(\\frac{\\alpha}{c}, \\beta)\\)"
    ],
    correta: 1,
    msg: "O parâmetro de forma (\\(\\alpha\\)) de uma distribuição Gama não é alterado pelo escalonamento, mas a taxa (\\(\\beta\\)) é modificada inversamente pela constante de escala, resultando em \\(\\frac{\\beta}{c}\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  },
  {
    id: "pb_u3_010",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta: "Para uma variável aleatória contínua \\(X\\) que segue o modelo de Weibull parametrizado por \\((\\lambda, \\alpha)\\), qual expressão define corretamente a sua esperança matemática \\(E(X)\\)?",
    opcoes: [
      "\\(\\lambda \\Gamma(1 + \\alpha)\\)",
      "\\(\\frac{\\Gamma(1 + \\frac{1}{\\alpha})}{\\lambda^{1/\\alpha}}\\)",
      "\\(\\frac{\\Gamma(\\alpha)}{\\lambda}\\)",
      "\\(\\Gamma(1 + \\frac{\\lambda}{\\alpha})\\)"
    ],
    correta: 1,
    msg: "Ao integrar \\(x f(x)\\) sob o modelo de Weibull, a substituição de variável conduz à clássica função Gama avaliada no argumento fracionário correspondente aos parâmetros de forma e escala.",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null }
  }
);
