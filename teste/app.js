/* ── State ───────────────────────────────────────────── */
let selDisciplinas = new Set();
let selUnidades = new Set();
let quizAtual = [];
let curIndex = 0;
let acertos = 0;
let respondido = false;

/* ── Persistence (localStorage, sem conta) ───────────── */
function loadHistorico() {
  try {
    return JSON.parse(localStorage.getItem("folhinha_quiz_historico") || "[]");
  } catch (e) {
    return [];
  }
}

function saveResultado(resultado) {
  const historico = loadHistorico();
  historico.push(resultado);
  try {
    localStorage.setItem("folhinha_quiz_historico", JSON.stringify(historico));
  } catch (e) {}
}

/* ── Filtro de disciplinas ────────────────────────────── */
function renderDisciplinas() {
  const el = document.getElementById("filtro-disciplinas");
  if (!el) return;
  el.innerHTML = "";

  Object.keys(DISCIPLINAS).forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "filtro-chip" + (selDisciplinas.has(key) ? " active" : "");
    btn.textContent = DISCIPLINAS[key].label;
    btn.addEventListener("click", () => toggleDisciplina(key));
    el.appendChild(btn);
  });
}

function toggleDisciplina(key) {
  if (selDisciplinas.has(key)) {
    selDisciplinas.delete(key);
  } else {
    selDisciplinas.add(key);
  }
  // Ao mudar disciplinas, unidades selecionadas que não existem mais
  // nas disciplinas atuais saem do filtro.
  const unidadesValidas = new Set();
  selDisciplinas.forEach((d) => {
    Object.keys(DISCIPLINAS[d].unidades).forEach((u) => unidadesValidas.add(u));
  });
  selUnidades.forEach((u) => {
    if (!unidadesValidas.has(u)) selUnidades.delete(u);
  });

  renderDisciplinas();
  renderUnidades();
  updateStartButton();
}

/* ── Filtro de unidades (união das disciplinas selecionadas) ─────── */
function renderUnidades() {
  const el = document.getElementById("filtro-unidades");
  const group = document.getElementById("unidades-group");
  if (!el || !group) return;
  el.innerHTML = "";

  if (selDisciplinas.size === 0) {
    group.style.display = "none";
    return;
  }
  group.style.display = "block";

  const unidades = {};
  selDisciplinas.forEach((d) => {
    Object.assign(unidades, DISCIPLINAS[d].unidades);
  });

  Object.keys(unidades).forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "filtro-chip" + (selUnidades.has(key) ? " active" : "");
    btn.textContent = unidades[key];
    btn.addEventListener("click", () => toggleUnidade(key));
    el.appendChild(btn);
  });
}

function toggleUnidade(key) {
  if (selUnidades.has(key)) {
    selUnidades.delete(key);
  } else {
    selUnidades.add(key);
  }
  renderUnidades();
  updateStartButton();
}

function updateStartButton() {
  const btn = document.getElementById("btn-iniciar");
  if (btn) btn.disabled = selDisciplinas.size === 0;
}

/* ── Seleciona as questões a partir dos filtros ──────── */
function filtrarQuestoes() {
  return QUESTOES.filter((q) => {
    const disciplinaOk = selDisciplinas.has(q.disciplina);
    // Se nenhuma unidade estiver marcada, considera todas as unidades
    // das disciplinas selecionadas.
    const unidadeOk = selUnidades.size === 0 || selUnidades.has(q.unidade);
    return disciplinaOk && unidadeOk;
  });
}

/* ── Início do quiz ──────────────────────────────────── */
function iniciarQuiz() {
  quizAtual = filtrarQuestoes();
  if (quizAtual.length === 0) {
    alert("Nenhuma questão encontrada para esse filtro.");
    return;
  }

  curIndex = 0;
  acertos = 0;

  document.getElementById("filtros-wrap").style.display = "none";
  document.getElementById("quiz-resultado").classList.remove("visible");
  document.getElementById("quiz-panel").classList.add("visible");

  renderPergunta();
}

/* ── Renderiza a pergunta atual ──────────────────────── */
function renderPergunta() {
  respondido = false;
  const q = quizAtual[curIndex];

  document.getElementById("quiz-contador").textContent =
    `${curIndex + 1} / ${quizAtual.length}`;
  document.getElementById("quiz-disciplina-label").textContent =
    DISCIPLINAS[q.disciplina].label;

  const pEl = document.getElementById("quiz-pergunta-texto");
  pEl.innerHTML = q.pergunta;

  const opcoesEl = document.getElementById("quiz-opcoes");
  opcoesEl.innerHTML = "";

  q.opcoes.forEach((texto, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opcao";
    btn.innerHTML = texto;
    btn.addEventListener("click", () => responder(i));
    opcoesEl.appendChild(btn);
  });

  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("quiz-nav").style.display = "none";

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([pEl, opcoesEl]).catch(() => {});
  }
}

/* ── Responde a pergunta atual ───────────────────────── */
function responder(i) {
  if (respondido) return;
  respondido = true;

  const q = quizAtual[curIndex];
  const botoes = document.querySelectorAll("#quiz-opcoes .quiz-opcao");

  botoes.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correta) btn.classList.add("correta");
    if (idx === i && i !== q.correta) btn.classList.add("errada");
  });

  const feedback = document.getElementById("quiz-feedback");
  if (i === q.correta) {
    acertos++;
    feedback.textContent = q.msg ? `>_ ${q.msg}` : ">_ Correto!";
  } else {
    feedback.textContent = q.msg ? `>_ ${q.msg}` : ">_ Não foi dessa vez.";
  }

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([feedback]).catch(() => {});
  }

  document.getElementById("quiz-nav").style.display = "flex";
}

/* ── Avança pra próxima pergunta ou finaliza ─────────── */
function proximaPergunta() {
  curIndex++;
  if (curIndex >= quizAtual.length) {
    finalizarQuiz();
    return;
  }
  renderPergunta();
}

function finalizarQuiz() {
  document.getElementById("quiz-panel").classList.remove("visible");

  const resultadoEl = document.getElementById("quiz-resultado");
  resultadoEl.classList.add("visible");
  document.getElementById("quiz-score").textContent =
    `${acertos} / ${quizAtual.length}`;

  saveResultado({
    disciplinas: [...selDisciplinas],
    unidades: [...selUnidades],
    acertos,
    total: quizAtual.length,
    data: new Date().toISOString(),
  });
}

function refazerFiltros() {
  document.getElementById("quiz-resultado").classList.remove("visible");
  document.getElementById("filtros-wrap").style.display = "block";
}

/* ── Init ────────────────────────────────────────────── */
renderDisciplinas();
renderUnidades();
updateStartButton();
