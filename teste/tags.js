/* ── tags.js ──────────────────────────────────────────
   Fonte única de verdade pros rótulos de disciplina/unidade.
   Tanto app.js quanto os arquivos em questoes/ usam essas chaves,
   evitando strings soltas duplicadas pelo código.

   Pra futuramente linkar uma questão a um cartão específico do
   baralho, basta usar a mesma chave de disciplina/unidade nos dois
   lugares (ver `trilhaRef` em questoes/prob_basica.js).
   ───────────────────────────────────────────────────── */
const DISCIPLINAS = {
  prob_basica_1: {
    label: "Probabilidade Básica I",
    unidades: {
      u1: "Unidade 1",
      u2: "Unidade 2",
      u3: "Unidade 3",
    },
  },
  amostragem: {
    label: "Amostragem",
    unidades: {
      u1: "Unidade 1",
      u2: "Unidade 2",
    },
  },
};

/* ── Registry global de questões ─────────────────────
   Cada arquivo em questoes/ dá `push` aqui dentro (mesmo
   padrão do TRILHAS no baralho, só que como array plano). */
const QUESTOES = [];
