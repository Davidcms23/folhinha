/* ─────────────────────────────────────────────────────────
 * Trilha: Probabilidade Básica
 * Dividida em 3 unidades, cada uma com número indeterminado
 * de dias/cards.
 * ───────────────────────────────────────────────────────── */

TRILHAS.prob_basica = {
  label: "Probabilidade Básica",
  units: [
    {
      label: "Unidade 1",
      days: [
        {
          label: "Introdução à Esperança",
          topic: "Valor Esperado",
          tag: "uni1_dia1",
          cards: [
            {
              q: "Definição de Esperança Matemática \\(\\mathbb{E}(X)\\) para variável aleatória contínua",
              a: "\\[\\mathbb{E}(X) = \\int_{-\\infty}^{\\infty} x f(x) dx\\]",
              raw: "\\mathbb{E}(X) = \\int_{-\\infty}^{\\infty} x f(x) dx"
            }
          ]
        }
      ],
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
      ],
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
      ],
    },
  ],
};
