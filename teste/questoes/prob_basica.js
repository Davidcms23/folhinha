/* ── questoes/prob_basica.js ──────────────────────────
   Perguntas da disciplina "Probabilidade Básica I".
   Chaves de `disciplina`/`unidade` batem com as de tags.js.

   `trilhaRef` é o vínculo (por enquanto manual) com um cartão do
   baralho — preencha `cartaId` quando os cartões tiverem um id
   próprio. Deixe `null` se ainda não houver correspondência.
   ───────────────────────────────────────────────────── */
QUESTOES.push(
  {
    id: "pb_u3_001",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta:
      "Seja \\(X \\sim \\mathcal{N}(\\mu, \\sigma^2)\\). Qual afirmação sobre a distribuição normal é correta?",
    opcoes: [
      "É assimétrica à direita",
      "É simétrica em torno da média",
      "Tem suporte finito, restrito a \\([\\mu - \\sigma, \\mu + \\sigma]\\)",
      "Média, mediana e moda nunca coincidem",
    ],
    correta: 1,
    msg: "Na normal, média = mediana = moda, e a curva é simétrica em torno de \\(\\mu\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null },
  },
  {
    id: "pb_u3_002",
    disciplina: "prob_basica_1",
    unidade: "u3",
    pergunta:
      "Sobre a Regra Empírica (68-95-99.7) para a distribuição normal, qual intervalo contém aproximadamente 95% dos dados?",
    opcoes: [
      "\\(\\mu \\pm 1\\sigma\\)",
      "\\(\\mu \\pm 2\\sigma\\)",
      "\\(\\mu \\pm 3\\sigma\\)",
      "\\(\\mu \\pm 0.5\\sigma\\)",
    ],
    correta: 1,
    msg: "68% em \\(\\pm 1\\sigma\\), 95% em \\(\\pm 2\\sigma\\), 99.7% em \\(\\pm 3\\sigma\\).",
    trilhaRef: { arquivo: "prob_basica.js", cartaId: null },
  },
);
