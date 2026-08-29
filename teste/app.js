/* ── Config ─────────────────────────────────────────────────── */
const QTD_PADRAO_POR_DISCIPLINA = 10;
const PONTOS_BASE = 100;      // pontos por acerto
const BONUS_POR_COMBO = 20;   // pontos extras por acerto consecutivo (combo)

/* ── State ──────────────────────────────────────────────────── */
let selDisciplinas = new Set();
let selUnidades = new Set();
let qtdQuestoes = 0;
let qtdQuestoesManual = false; // true assim que a pessoa mexe no campo na mão

let quizAtual = [];
let curIndex = 0;
let acertos = 0;
let pontos = 0;
let combo = 0;
let maiorCombo = 0;
let respondido = false;
let opcaoSelecionada = null;

/* ── Persistence (localStorage, sem conta) ───────────────────── */
function loadTop3() {
  try {
    return JSON.parse(localStorage.getItem("folhinha_quiz_top3") || "[]");
  } catch (e) {
    return [];
  }
}

function saveResultado(resultado) {
  const top3 = loadTop3();
  top3.push(resultado);
  top3.sort((a, b) => b.pontos - a.pontos);
  const novoTop3 = top3.slice(0, 3);
  try {
    localStorage.setItem("folhinha_quiz_top3", JSON.stringify(novoTop3));
  } catch (e) {}
  return novoTop3;
}

function renderTop3() {
  const wrap = document.getElementById("top3-wrap");
  const tbody = document.getElementById("top3-body");
  if (!wrap || !tbody) return;

  const top3 = loadTop3();
  if (top3.length === 0) {
    wrap.style.display = "none";
    return;
  }
  wrap.style.display = "block";
  tbody.innerHTML = "";

  top3.forEach((r, i) => {
    const tr = document.createElement("tr");
    const data = new Date(r.data).toLocaleDateString("pt-BR");
    tr.innerHTML = `
      <td>#${i + 1}</td>
      <td>${r.pontos} pts</td>
      <td>${r.acertos}/${r.total}</td>
      <td>${r.disciplinasLabel}</td>
      <td>${data}</td>
    `;
    tbody.appendChild(tr);
  });
}

/* ── Quantidade de questões (padrão = 10 por disciplina) ────── */
function atualizarQtdPadrao() {
  if (qtdQuestoesManual) return;
  const disponiveis = filtrarQuestoes().length;
  const padrao = selDisciplinas.size * QTD_PADRAO_POR_DISCIPLINA;
  qtdQuestoes = Math.min(padrao, disponiveis) || 0;
  atualizarInputQtd();
}

function atualizarInputQtd() {
  const input = document.getElementById("input-qtd-questoes");
  const hint = document.getElementById("qtd-questoes-hint");
  const disponiveis = filtrarQuestoes().length;
  if (input) {
    input.value = qtdQuestoes;
    input.max = disponiveis || 1;
  }
  if (hint) {
    hint.textContent = disponiveis
      ? `(máximo disponível: ${disponiveis})`
      : "(nenhuma questão disponível para esse filtro)";
  }
}

function onQtdQuestoesChange(valorStr) {
  const disponiveis = filtrarQuestoes().length;
  let valor = parseInt(valorStr, 10);
  if (isNaN(valor) || valor < 1) valor = 1;
  if (valor > disponiveis) valor = disponiveis;
  qtdQuestoes = valor;
  qtdQuestoesManual = true;
  atualizarInputQtd();
  updateStartButton();
}

/* ── Filtro de disciplinas ──────────────────────────────────── */
function renderDisciplinas() {
  const el = document.getElementById("filtro-disciplinas");
  if (!el) return;
  el.innerHTML = "";

  Object.keys(DISCIPLINAS).forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "filtro-chip" + (selDisciplinas.has(key) ? " active" : "");

    // Conta as questões desta disciplina
    const qtd = QUESTOES.filter((q) => q.disciplina === key).length;

    btn.innerHTML = `${DISCIPLINAS[key].label} <span class="chip-count">(${qtd})</span>`;
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
  const unidadesValidas = new Set();
  selDisciplinas.forEach((d) => {
    if (DISCIPLINAS[d] && DISCIPLINAS[d].unidades) {
      Object.keys(DISCIPLINAS[d].unidades).forEach((u) => unidadesValidas.add(u));
    }
  });
  selUnidades.forEach((u) => {
    if (!unidadesValidas.has(u)) selUnidades.delete(u);
  });

  qtdQuestoesManual = false;

  renderDisciplinas();
  renderUnidades();
  atualizarQtdPadrao();
  renderConfigQuestoes();
  updateStartButton();
}

/* ── Filtro de unidades (união das disciplinas selecionadas) ── */
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
    if (DISCIPLINAS[d] && DISCIPLINAS[d].unidades) {
      Object.assign(unidades, DISCIPLINAS[d].unidades);
    }
  });

  Object.keys(unidades).forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "filtro-chip" + (selUnidades.has(key) ? " active" : "");

    // Conta as questões desta unidade considerando apenas as disciplinas selecionadas
    const qtd = QUESTOES.filter(
      (q) => selDisciplinas.has(q.disciplina) && q.unidade === key
    ).length;

    btn.innerHTML = `${unidades[key]} <span class="chip-count">(${qtd})</span>`;
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
  atualizarQtdPadrao();
  renderUnidades();
  renderConfigQuestoes();
  updateStartButton();
}

/* ── Configuração (quantidade de questões) ──────────────────── */
function renderConfigQuestoes() {
  const group = document.getElementById("config-group");
  if (!group) return;
  group.style.display = selDisciplinas.size > 0 ? "block" : "none";
  atualizarInputQtd();
}

function updateStartButton() {
  const btn = document.getElementById("btn-iniciar");
  if (!btn) return;
  btn.disabled = selDisciplinas.size === 0 || qtdQuestoes < 1;
}

/* ── Seleção e Embaralhamento de Questões e Alternativas ─────── */
function filtrarQuestoes() {
  return QUESTOES.filter((q) => {
    const disciplinaOk = selDisciplinas.has(q.disciplina);
    const unidadeOk = selUnidades.size === 0 || selUnidades.has(q.unidade);
    return disciplinaOk && unidadeOk;
  });
}

// Algoritmo Fisher-Yates para embaralhamento uniforme sem viés
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Embaralha as alternativas de cada questão sorteada mantendo a resposta certa
function prepararQuestoes(questoes) {
  return questoes.map((q) => {
    const textoCorreto = q.opcoes[q.correta];
    const opcoesEmbaralhadas = embaralhar([...q.opcoes]);
    const novoIndiceCorreto = opcoesEmbaralhadas.indexOf(textoCorreto);

    return {
      ...q,
      opcoes: opcoesEmbaralhadas,
      correta: novoIndiceCorreto,
    };
  });
}

/* ── Início do quiz ─────────────────────────────────────────── */
function iniciarQuiz() {
  const disponiveis = filtrarQuestoes();
  if (disponiveis.length === 0) {
    alert("Nenhuma questão encontrada para esse filtro.");
    return;
  }

  // 1. Embaralha todas as questões disponíveis do filtro (garante ordem aleatória se pegar menos questões que o total)
  const questoesEmbaralhadas = embaralhar(disponiveis);

  // 2. Seleciona a quantidade desejada aleatoriamente
  const selecionadas = questoesEmbaralhadas.slice(0, qtdQuestoes);

  // 3. Embaralha as alternativas de cada questão sorteada
  quizAtual = prepararQuestoes(selecionadas);
  curIndex = 0;
  acertos = 0;
  pontos = 0;
  combo = 0;
  maiorCombo = 0;

  document.getElementById("filtros-wrap").style.display = "none";
  document.getElementById("top3-wrap").style.display = "none";
  document.getElementById("quiz-resultado").classList.remove("visible");
  document.getElementById("quiz-panel").classList.add("visible");

  renderPergunta();
}

/* ── Renderiza Pergunta e Opções ────────────────────────────── */
function renderPergunta() {
  respondido = false;
  opcaoSelecionada = null;

  const q = quizAtual[curIndex];
  if (!q) return;

  // Disciplina e Unidade
  const discInfo = DISCIPLINAS[q.disciplina];
  const discLabel = discInfo ? discInfo.label : q.disciplina;
  const unidLabel = discInfo && discInfo.unidades ? discInfo.unidades[q.unidade] || q.unidade : q.unidade;
  document.getElementById("quiz-disciplina-label").textContent = `${discLabel} · ${unidLabel}`;

  // Metadados (pontos, combo, contador)
  document.getElementById("quiz-pontos").textContent = `${pontos} pts`;
  document.getElementById("quiz-combo").textContent = combo > 1 ? `combo x${combo}` : "";
  document.getElementById("quiz-contador").textContent = `${curIndex + 1}/${quizAtual.length}`;

  // Texto da Pergunta
  const perguntaEl = document.getElementById("quiz-pergunta-texto");
  perguntaEl.innerHTML = q.pergunta;

  // Opções com SOMENTE números (1, 2, 3, 4...)
  const opcoesEl = document.getElementById("quiz-opcoes");
  opcoesEl.innerHTML = "";

  q.opcoes.forEach((opcaoTexto, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opcao";
    btn.type = "button";
    btn.setAttribute("data-index", idx);

    const num = idx + 1;

    btn.innerHTML = `
      <span class="quiz-opcao-num">${num}</span>
      <span class="quiz-opcao-texto">${opcaoTexto}</span>
    `;

    btn.addEventListener("click", () => {
      if (respondido) return;
      if (opcaoSelecionada === idx) {
        executarAcaoPrincipal();
      } else {
        selecionarOpcao(idx);
      }
    });

    opcoesEl.appendChild(btn);
  });

  // Limpa feedback
  const feedbackEl = document.getElementById("quiz-feedback");
  feedbackEl.innerHTML = "";

  // Atualiza o botão de ação único
  atualizarBotaoAcao();

  // Renderiza MathJax
  if (window.MathJax && MathJax.typesetPromise) {
    const painel = document.getElementById("quiz-panel");
    MathJax.typesetClear([painel]);
    MathJax.typesetPromise([painel]).catch(() => {});
  }
}

/* ── Atualiza o botão de ação único (Confirmar / Próxima) ───── */
function atualizarBotaoAcao() {
  const btn = document.getElementById("btn-acao-quiz");
  if (!btn) return;

  if (!respondido) {
    btn.innerHTML = `Confirmar <kbd class="kbd-hint">↵ Enter</kbd>`;
    btn.disabled = opcaoSelecionada === null;
  } else {
    btn.disabled = false;
    if (curIndex + 1 < quizAtual.length) {
      btn.innerHTML = `Próxima <kbd class="kbd-hint">↵ Enter</kbd> »`;
    } else {
      btn.innerHTML = `Ver resultado <kbd class="kbd-hint">↵ Enter</kbd> »`;
    }
  }
}

/* ── Seleção de Opção (via clique ou tecla numérica) ────────── */
function selecionarOpcao(idx) {
  if (respondido) return;
  const botoes = document.querySelectorAll("#quiz-opcoes .quiz-opcao");
  if (idx < 0 || idx >= botoes.length) return;

  opcaoSelecionada = idx;

  botoes.forEach((btn, i) => {
    if (i === idx) {
      btn.classList.add("selecionada");
    } else {
      btn.classList.remove("selecionada");
    }
  });

  atualizarBotaoAcao();
}

/* ── Executa a ação principal (Confirmar se aberto / Próxima se respondido) ─ */
function executarAcaoPrincipal() {
  if (!respondido) {
    if (opcaoSelecionada !== null) {
      responder(opcaoSelecionada);
    }
  } else {
    proximaPergunta();
  }
}

/* ── Avalia a resposta ──────────────────────────────────────── */
function responder(i) {
  if (respondido) return;
  respondido = true;

  const q = quizAtual[curIndex];
  const botoes = document.querySelectorAll("#quiz-opcoes .quiz-opcao");

  botoes.forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.remove("selecionada");
    if (idx === q.correta) btn.classList.add("correta");
    if (idx === i && i !== q.correta) btn.classList.add("errada");
  });

  const feedback = document.getElementById("quiz-feedback");

  if (i === q.correta) {
    acertos++;
    combo++;
    maiorCombo = Math.max(maiorCombo, combo);
    const ganho = PONTOS_BASE + (combo - 1) * BONUS_POR_COMBO;
    pontos += ganho;
    feedback.innerHTML = q.msg
      ? `&gt;_ +${ganho} pts — ${q.msg}`
      : `&gt;_ +${ganho} pts — Correto!`;
  } else {
    combo = 0;
    feedback.innerHTML = q.msg ? `&gt;_ ${q.msg}` : "&gt;_ Não foi dessa vez.";
  }

  document.getElementById("quiz-pontos").textContent = `${pontos} pts`;
  document.getElementById("quiz-combo").textContent =
    combo > 1 ? `combo x${combo}` : "";

  atualizarBotaoAcao();

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([feedback, document.getElementById("quiz-opcoes")]).catch(() => {});
  }
}

/* ── Avança pra próxima pergunta ou finaliza ────────────────── */
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
  document.getElementById("quiz-score").textContent = `${pontos} pts`;
  document.getElementById("quiz-score-detalhe").textContent =
    `${acertos}/${quizAtual.length} acertos · maior combo x${maiorCombo}`;

  const disciplinasLabel = [...selDisciplinas]
    .map((d) => DISCIPLINAS[d].label)
    .join(", ");

  saveResultado({
    pontos,
    acertos,
    total: quizAtual.length,
    maiorCombo,
    disciplinasLabel,
    data: new Date().toISOString(),
  });

  renderTop3();
}

function refazerFiltros() {
  document.getElementById("quiz-resultado").classList.remove("visible");
  document.getElementById("filtros-wrap").style.display = "block";
  renderDisciplinas();
  renderUnidades();
  atualizarQtdPadrao();
  renderConfigQuestoes();
  updateStartButton();
  renderTop3();
}

/* ── Atalhos de Teclado (Números 1-N, Enter) ─────────────────── */
document.addEventListener("keydown", (e) => {
  // Não captura atalhos se o usuário estiver digitando em um input
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  const quizPanel = document.getElementById("quiz-panel");
  const resultadoPanel = document.getElementById("quiz-resultado");

  // Se estiver na tela de resultado
  if (resultadoPanel && resultadoPanel.classList.contains("visible")) {
    if (e.key === "Enter") {
      e.preventDefault();
      refazerFiltros();
      return;
    }
  }

  // Se estiver na tela de quiz ativo
  if (quizPanel && quizPanel.classList.contains("visible")) {
    const q = quizAtual[curIndex];
    if (!q) return;

    // Teclas numéricas de 1 a N
    const num = parseInt(e.key, 10);
    if (!respondido && !isNaN(num) && num >= 1 && num <= q.opcoes.length) {
      e.preventDefault();
      selecionarOpcao(num - 1);
      return;
    }

    // Tecla Enter
    if (e.key === "Enter") {
      e.preventDefault();
      executarAcaoPrincipal();
      return;
    }
  }
});

/* ── Init ───────────────────────────────────────────────────── */
renderDisciplinas();
renderUnidades();
renderConfigQuestoes();
updateStartButton();
renderTop3();
