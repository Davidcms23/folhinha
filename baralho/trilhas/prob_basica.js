/* ═══════════════════════════════════════════════════════════════════════════════
 * Trilha: Probabilidade Básica
 * Trilha para a disciplina de Probabilidade básica I
 * ═══════════════════════════════════════════════════════════════════════════════ */

TRILHAS.prob_basica = {
  label: "Probabilidade Básica I",
  units: [
    {
      label: "Unidade 1",
      days: [
        {
          label: "Espaço Amostral e Eventos",
          topic: "Fundamentos",
          tag: "uni1_fundamentos",
          cards: [
            {
              q: "Definição: O que é um evento?",
              a: "Qualquer subconjunto do espaço amostral",
              raw: "Qualquer subconjunto do espaço amostral"
            },
            {
              q: "Reconhecimento: \\(A \\cap B^c\\) representa qual situação?",
              a: "O evento \\(A\\) ocorre, mas o evento \\(B\\) não ocorre",
              raw: "O evento A ocorre, mas o evento B não ocorre"
            },
            {
              q: "Definição de Espaço Amostral \\(\\Omega\\) de um experimento aleatório",
              a: "Conjunto de todos os resultados possíveis do experimento",
              raw: "Conjunto de todos os resultados possíveis do experimento"
            },
            {
              q: "Condição para que dois eventos \\(A\\) e \\(B\\) sejam mutuamente exclusivos",
              a: "\\[A \\cap B = \\emptyset\\]",
              raw: "A \\cap B = \\emptyset"
            },
            {
              q: "Operação de conjuntos que representa a afirmação verbal: Pelo menos um dos eventos \\(A\\) ou \\(B\\) ocorre",
              a: "\\[A \\cup B\\]",
              raw: "A \\cup B"
            }
          ]
        },
        {
          label: "Sigma-Álgebra",
          topic: "Teoria da Medida",
          tag: "uni1_sigma_algebra",
          cards: [
            {
              q: "Três propriedades definidoras de uma \\(\\sigma\\)-álgebra \\(\\mathcal{F}\\) sobre um espaço amostral \\(\\Omega\\)",
              a: "\\[\\begin{aligned} 1.& \\; \\Omega \\in \\mathcal{F} \\\\[2pt] 2.& \\; \\text{se } A \\in \\mathcal{F} \\implies A^c \\in \\mathcal{F} \\\\[2pt] 3.& \\; \\text{se } A_1, A_2, \\dots \\in \\mathcal{F} \\implies \\bigcup_{i=1}^{\\infty} A_i \\in \\mathcal{F} \\end{aligned}\\]",
              raw: "\\Omega \\in \\mathcal{F}; \\text{ se } A \\in \\mathcal{F}, \\text{ então } A^c \\in \\mathcal{F}; \\text{ se } A_1, A_2, \\dots \\in \\mathcal{F}, \\text{ então } \\bigcup_{i=1}^{\\infty} A_i \\in \\mathcal{F}"
            },
            {
              q: "Dois conjuntos triviais que obrigatoriamente pertencem a qualquer \\(\\sigma\\)-álgebra \\(\\mathcal{F}\\) sobre um espaço amostral \\(\\Omega\\)",
              a: "\\[\\emptyset, \\Omega\\]",
              raw: "\\emptyset, \\Omega"
            },
            {
              q: "Resultado da interseção de duas \\(\\sigma\\)-álgebras \\(\\mathcal{F}_1\\) e \\(\\mathcal{F}_2\\)",
              a: "Uma sigma-álgebra",
              raw: "Uma sigma-álgebra"
            }
          ]
        },
        {
          label: "Axiomas de Kolmogorov",
          topic: "Axiomas e Propriedades",
          tag: "uni1_axiomas",
          cards: [
            {
              q: "Relação: Se \\(A \\subset B\\), o que podemos afirmar sobre \\(P(A)\\) e \\(P(B)\\)?",
              a: "\\[P(A) \\le P(B)\\]",
              raw: "P(A) \\le P(B)"
            },
            {
              q: "Intuição: Por que \\(P(A \\cup B)\\) não é simplesmente \\(P(A) + P(B)\\)?",
              a: "Porque a interseção \\(A \\cap B\\) seria contada duas vezes caso não fosse subtraída",
              raw: "Porque a interseção A \\cap B seria contada duas vezes caso não fosse subtraída"
            },
            {
              q: "Aplicação: Um problema apresenta \\(P(A)\\), \\(P(B)\\) e \\(P(A \\cap B)\\). Como calcular \\(P(A \\cup B)\\)?",
              a: "\\[P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\]",
              raw: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
            },
            {
              q: "Erro: Um aluno afirma que \\(P(A \\cup B) = P(A) + P(B)\\) para quaisquer eventos. Onde está o erro?",
              a: "A igualdade só é válida se os eventos forem mutuamente exclusivos, ou seja, se \\(A \\cap B = \\emptyset\\)",
              raw: "A igualdade só é válida se os eventos forem mutuamente exclusivos, ou seja, se A \\cap B = \\emptyset"
            },
            {
              q: "Memória: Qual é o primeiro axioma de Kolmogorov (não-negatividade) para um evento \\(A\\)?",
              a: "\\[P(A) \\ge 0\\]",
              raw: "P(A) \\ge 0"
            },
            {
              q: "Segundo Axioma de Kolmogorov referente ao espaço amostral \\(\\Omega\\)",
              a: "\\[P(\\Omega) = 1\\]",
              raw: "P(\\Omega) = 1"
            },
            {
              q: "Entendimento: Por que necessariamente \\(P(A) \\le 1\\)?",
              a: "\\[A \\subset \\Omega \\implies P(A) \\le P(\\Omega) = 1\\]",
              raw: "A \\subset \\Omega \\implies P(A) \\le P(\\Omega) = 1"
            },
            {
              q: "Terceiro Axioma de Kolmogorov para uma sequência de eventos mutuamente exclusivos \\(E_1, E_2, \\dots\\)",
              a: "\\[P\\left(\\bigcup_{i=1}^{\\infty} E_i\\right) = \\sum_{i=1}^{\\infty} P(E_i)\\]",
              raw: "P\\left(\\bigcup_{i=1}^{\\infty} E_i\\right) = \\sum_{i=1}^{\\infty} P(E_i)"
            },
            {
              q: "Probabilidade do evento complementar \\(A^c\\)",
              a: "\\[P(A^c) = 1 - P(A)\\]",
              raw: "P(A^c) = 1 - P(A)"
            },
            {
              q: "Fórmula da probabilidade da união de três eventos \\(A\\), \\(B\\) e \\(C\\)",
              a: "\\[\\begin{aligned} P(A \\cup B \\cup C) = & \\; P(A) + P(B) + P(C) - P(A \\cap B) \\\\[2pt] & - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C) \\end{aligned}\\]",
              raw: "P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)"
            },
            {
              q: "Limite superior da probabilidade da união de eventos (Desigualdade de Boole)",
              a: "\\[P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) \\le \\sum_{i=1}^{\\infty} P(A_i)\\]",
              raw: "P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) \\le \\sum_{i=1}^{\\infty} P(A_i)"
            }
          ]
        },
        {
          label: "Probabilidade Condicional",
          topic: "Condicionamento e Regra do Produto",
          tag: "uni1_condicional",
          cards: [
            {
              q: "Definição matemática de Probabilidade Condicional de \\(A\\) dado \\(B\\), assumindo \\(P(B) > 0\\)",
              a: "\\[P(A|B) = \\frac{P(A \\cap B)}{P(B)}\\]",
              raw: "P(A|B) = \\frac{P(A \\cap B)}{P(B)}"
            },
            {
              q: "Teorema do Produto (Regra da Multiplicação) para \\(n\\) eventos \\(E_1, E_2, \\dots, E_n\\)",
              a: "\\[\\begin{aligned} P(E_1 E_2 \\dots E_n) = & P(E_1)P(E_2|E_1)P(E_3|E_1 E_2) \\dots \\\\[2pt] & P(E_n|E_1 \\dots E_{n-1}) \\end{aligned}\\]",
              raw: "P(E_1 E_2 \\dots E_n) = P(E_1)P(E_2|E_1)P(E_3|E_1 E_2) \\dots P(E_n|E_1 \\dots E_{n-1})"
            }
          ]
        },
        {
          label: "Teorema da Probabilidade Total e Bayes",
          topic: "Teoremas de Bayes e Probabilidade Total",
          tag: "uni1_bayes",
          cards: [
            {
              q: "Teorema da Probabilidade Total para calcular \\(P(E)\\) a partir de uma partição \\(F_1, F_2, \\dots, F_n\\)",
              a: "\\[P(E) = \\sum_{i=1}^{n} P(E|F_i)P(F_i)\\]",
              raw: "P(E) = \\sum_{i=1}^{n} P(E|F_i)P(F_i)"
            },
            {
              q: "Fórmula de Bayes para calcular a probabilidade a posteriori \\(P(F_j|E)\\) usando uma partição \\(F_1, F_2, \\dots, F_n\\)",
              a: "\\[P(F_j|E) = \\frac{P(E|F_j)P(F_j)}{\\sum_{i=1}^{n} P(E|F_i)P(F_i)}\\]",
              raw: "P(F_j|E) = \\frac{P(E|F_j)P(F_j)}{\\sum_{i=1}^{n} P(E|F_i)P(F_i)}"
            },
            {
              q: "Relação que define a Chance (Odds) de ocorrência de um evento \\(H\\)",
              a: "\\[\\frac{P(H)}{P(H^c)} = \\frac{P(H)}{1 - P(H)}\\]",
              raw: "\\frac{P(H)}{P(H^c)} = \\frac{P(H)}{1 - P(H)}"
            }
          ]
        },
        {
          label: "Independência",
          topic: "Eventos Independentes",
          tag: "uni1_independencia",
          cards: [
            {
              q: "Contraste: Independência implica que \\(A\\) e \\(B\\) são mutuamente exclusivos?",
              a: "Não.",
              raw: "Não."
            },
            {
              q: "Entendimento: Por que independência não implica exclusividade mútua?",
              a: "Porque exclusividade exige \\(P(A \\cap B) = 0\\), enquanto independência exige \\(P(A \\cap B) = P(A)P(B)\\). Logo, se \\(P(A) > 0\\) e \\(P(B) > 0\\), então \\(P(A \\cap B) > 0\\).",
              raw: "Porque exclusividade exige P(A \\cap B) = 0, enquanto independência exige P(A \\cap B) = P(A)P(B). Logo, se P(A) > 0 e P(B) > 0, então P(A \\cap B) > 0."
            },
            {
              q: "Condição exata para que dois eventos \\(A\\) e \\(B\\) sejam independentes",
              a: "\\[P(A \\cap B) = P(A)P(B)\\]",
              raw: "P(A \\cap B) = P(A)P(B)"
            },
            {
              q: "Condição para que \\(A\\) e \\(B\\) sejam independentes expressa em probabilidade condicional, assumindo \\(P(B) > 0\\)",
              a: "\\[P(A|B) = P(A)\\]",
              raw: "P(A|B) = P(A)"
            },
            {
              q: "Relação de independência entre \\(A\\) e \\(B^c\\) se \\(A\\) e \\(B\\) são independentes",
              a: "Os eventos \\(A\\) e \\(B^c\\) também são independentes",
              raw: "Os eventos A e B^c também são independentes"
            },
            {
              q: "As quatro condições matemáticas para a independência mútua de três eventos \\(E\\), \\(F\\) e \\(G\\)",
              a: "\\[\\begin{aligned} P(EF) &= P(E)P(F) \\\\[2pt] P(EG) &= P(E)P(G) \\\\[2pt] P(FG) &= P(F)P(G) \\\\[2pt] P(EFG) &= P(E)P(F)P(G) \\end{aligned}\\]",
              raw: "P(EF) = P(E)P(F), P(EG) = P(E)P(G), P(FG) = P(F)P(G) \\text{ e } P(EFG) = P(E)P(F)P(G)"
            },
            {
              q: "Fórmula para a probabilidade de funcionamento de um sistema em série com \\(n\\) componentes independentes de confiabilidades \\(p_i\\)",
              a: "\\[\\prod_{i=1}^{n} p_i\\]",
              raw: "\\prod_{i=1}^{n} p_i"
            },
            {
              q: "Fórmula para a probabilidade de funcionamento de um sistema em paralelo com \\(n\\) componentes independentes de confiabilidades \\(p_i\\)",
              a: "\\[1 - \\prod_{i=1}^{n} (1 - p_i)\\]",
              raw: "1 - \\prod_{i=1}^{n} (1 - p_i)"
            }
          ]
        }
      ]
    },
    {
      label: "Unidade 2",
      days: [
        {
          label: "Distribuição Uniforme",
          topic: "Distribuições Contínuas",
          tag: "uni2_dia1",
          cards: [
            {
              q: "Função densidade de probabilidade da distribuição Uniforme Contínua no intervalo \\((a, b)\\)",
              a: "\\[f(x) = \\frac{1}{b-a} \\mathbb{I}_{[a,b]}(x)\\]",
              raw: "f(x) = \\frac{1}{b-a} \\mathbb{I}_{[a,b]}(x)"
            }
          ]
        },
        {
          label: "Distribuição Binomial",
          topic: "Distribuições Discretas",
          tag: "uni2_dia1",
          cards: [
            {
              q: "Qual é a variância da Binomial?",
              a: "\\[np(1 - p)\\]",
              raw: "np(1 - p)",
              msg: "Por que a variância diminui quando p se aproxima de 0 ou 1? \\(\\mathcal{N}(\\mu, \\sigma^2)\\)"
            }
          ]
        }
      ]
    },
    {
      label: "Unidade 3",
      days: [
        {
          label: "Distribuição Normal",
          topic: "Distribuições Contínuas",
          tag: "uni3_dia1",
          cards: [
            {
              q: "Função densidade de probabilidade da distribuição Normal \\(\\mathcal{N}(\\mu, \\sigma^2)\\)",
              a: "\\[f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}\\]",
              raw: "f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}"
            }
          ]
        }
      ]
    }
  ]
};
