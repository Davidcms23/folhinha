/* ─────────────────────────────────────────────────────────
 * Trilha: Probabilidade Básica
 * Trilha para a disciplina de Probabilidade básica I
 * ───────────────────────────────────────────────────────── */

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
              q: "Definição de Espaço Amostral \\(\\Omega\\) de um experimento aleatório",
              a: "Conjunto de todos os resultados possíveis do experimento",
              raw: "Conjunto de todos os resultados possíveis do experimento"
            },
            {
              q: "Definição de Evento na teoria das probabilidades",
              a: "Qualquer subconjunto do espaço amostral",
              raw: "Qualquer subconjunto do espaço amostral"
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
            },
            {
              q: "Expressão algébrica para o evento em que ocorre \\(A\\) mas não ocorre \\(B\\)",
              a: "\\[A \\cap B^c\\]",
              raw: "A \\cap B^c"
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
              a: "\\[\\Omega \\in \\mathcal{F}; \\text{ se } A \\in \\mathcal{F}, \\text{ então } A^c \\in \\mathcal{F}; \\text{ se } A_1, A_2, \\dots \\in \\mathcal{F}, \\text{ então } \\bigcup_{i=1}^{\\infty} A_i \\in \\mathcal{F}\\]",
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
              q: "Primeiro Axioma de Kolmogorov (não-negatividade) para um evento \\(A\\)",
              a: "\\[0 \\le P(A) \\le 1\\]",
              raw: "0 \\le P(A) \\le 1"
            },
            {
              q: "Segundo Axioma de Kolmogorov referente ao espaço amostral \\(\\Omega\\)",
              a: "\\[P(\\Omega) = 1\\]",
              raw: "P(\\Omega) = 1"
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
              q: "Fórmula da probabilidade da união de dois eventos \\(A\\) e \\(B\\)",
              a: "\\[P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\]",
              raw: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
            },
            {
              q: "Fórmula da probabilidade da união de três eventos \\(A\\), \\(B\\) e \\(C\\)",
              a: "\\[P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)\\]",
              raw: "P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)"
            },
            {
              q: "Propriedade da monotonicidade da probabilidade para eventos \\(A\\) e \\(B\\), assumindo que \\(A \\subset B\\)",
              a: "\\[P(A) \\le P(B)\\]",
              raw: "P(A) \\le P(B)"
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
              a: "\\[P(E_1 E_2 \\dots E_n) = P(E_1)P(E_2|E_1)P(E_3|E_1 E_2) \\dots P(E_n|E_1 \\dots E_{n-1})\\]",
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
              a: "Os eventos A e B^c também são independentes",
              raw: "Os eventos A e B^c também são independentes"
            },
            {
              q: "As quatro condições matemáticas para a independência mútua de três eventos \\(E\\), \\(F\\) e \\(G\\)",
              a: "\\[P(EF) = P(E)P(F), P(EG) = P(E)P(G), P(FG) = P(F)P(G) \\text{ e } P(EFG) = P(E)P(F)P(G)\\]",
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
