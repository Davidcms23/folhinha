/* ── State ───────────────────────────────────────────── */
const TOTAL_DAYS = 30;

let done = [];
try {
  done = JSON.parse(localStorage.getItem("folhinha_done") || "[]");
} catch (e) {}

let curDay = null;
let curCard = 0;

/* ── Persistence ─────────────────────────────────────── */
function save() {
  try {
    localStorage.setItem("folhinha_done", JSON.stringify(done));
  } catch (e) {}
}

/* ── Grid ────────────────────────────────────────────── */
function renderGrid() {
  const grid = document.getElementById("days-grid");
  if (!grid) return;
  grid.innerHTML = "";

  for (let i = 0; i < TOTAL_DAYS; i++) {
    const day = typeof DAYS !== "undefined" && DAYS[i] ? DAYS[i] : null;
    const isDone = done.includes(i);
    const isActive = curDay === i;
    const isLocked = !day;

    const cell = document.createElement("div");
    cell.className = [
      "day-cell",
      isDone ? "done" : "",
      isActive ? "active" : "",
      isLocked ? "locked" : "",
    ]
      .join(" ")
      .trim();

    cell.setAttribute("role", "listitem");
    cell.setAttribute(
      "aria-label",
      day
        ? `Dia ${i + 1}: ${day.label}${isDone ? " (concluído)" : ""}`
        : `Dia ${i + 1}: em breve`,
    );

    const numEl = document.createElement("div");
    numEl.className = "dc-num" + (isDone ? " done-mark" : "");
    numEl.textContent = `Day ${i + 1}`;

    const labelEl = document.createElement("div");
    labelEl.className = "dc-label";
    if (day) {
      labelEl.innerHTML = day.label;
    } else {
      labelEl.textContent = "Em breve";
      labelEl.style.fontWeight = "400";
    }

    cell.appendChild(numEl);
    cell.appendChild(labelEl);

    if (day) {
      cell.style.cursor = "pointer";
      cell.addEventListener("click", () => openDay(i));
    }

    grid.appendChild(cell);
  }

  updateProgress();
}

function updateProgress() {
  const n = done.length;
  const pct = Math.round((n / TOTAL_DAYS) * 100);
  const dayNo = Math.min(n + 1, TOTAL_DAYS);

  // Adicionado Null-Check: Impede travamento caso os elementos não existam na página (ex: página do baralho)
  const progLabel = document.getElementById("prog-label");
  const progFill = document.getElementById("prog-fill");

  if (progLabel) progLabel.textContent = `Overall progress: Day ${dayNo} of ${TOTAL_DAYS}`;
  if (progFill) progFill.style.width = pct + "%";
}

/* ── Open a day ──────────────────────────────────────── */
function openDay(i) {
  curDay = i;
  curCard = 0;

  const day = DAYS[i];

  document.getElementById("panel").classList.add("visible");
  document.getElementById("empty-state").style.display = "none";
  document.getElementById("fc-wrap").style.display = "flex";

  renderCard();
  renderGrid();

  document
    .getElementById("panel")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ── Render current card ─────────────────────────────── */
function renderCard() {
  if (curDay === null) return;

  const cards = DAYS[curDay].cards;
  const card = cards[curCard];

  document.getElementById("card-counter").textContent =
    `${curCard + 1} / ${cards.length}`;

  const fcCard = document.getElementById("fc-card");
  fcCard.classList.remove("flipped");

  const qEl = document.getElementById("card-q");
  const aEl = document.getElementById("card-a");

  qEl.innerHTML = card.q;
  aEl.innerHTML = card.a;

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([qEl, aEl]).catch(() => {});
  }
}

/* ── Flip card ───────────────────────────────────────── */
function flipCard() {
  document.getElementById("fc-card").classList.toggle("flipped");
}

/* ── Copy helpers ────────────────────────────────────── */
function stripHtml(html) {
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function flashBtn(btn) {
  const original = btn.innerHTML;
  btn.classList.add("ok");
  btn.textContent = "Copiado!";
  setTimeout(() => {
    btn.classList.remove("ok");
    btn.innerHTML = original;
  }, 1400);
}

// NOVO: Função de Fallback para uso local (file://)
function fallbackCopyTextToClipboard(text, btn) {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Impede scroll indesejado ao criar o textarea
  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      flashBtn(btn);
    } else {
      console.error("Falha ao copiar usando execCommand");
    }
  } catch (err) {
    console.error("Erro ao executar fallback de cópia", err);
  }

  document.body.removeChild(textArea);
}

function copyToClipboard(text, btn) {
  // Tenta usar a API moderna (requer HTTPS ou Localhost)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => flashBtn(btn))
      .catch((err) => {
        console.warn("Clipboard API bloqueada, tentando fallback...", err);
        fallbackCopyTextToClipboard(text, btn);
      });
  } else {
    // Se o protocolo for file:// ou ambiente inseguro, cai direto no fallback
    fallbackCopyTextToClipboard(text, btn);
  }
}

function copyFront(btn) {
  if (curDay === null) return;
  const card = DAYS[curDay].cards[curCard];
  copyToClipboard(stripHtml(card.q), btn);
}

function copyBack(btn) {
  if (curDay === null) return;
  const card = DAYS[curDay].cards[curCard];
  copyToClipboard(stripHtml(card.a), btn);
}

/* ── Navigation ──────────────────────────────────────── */
function prevCard() {
  if (curCard > 0) {
    curCard--;
    renderCard();
  }
}

function nextCard() {
  if (curDay !== null && curCard < DAYS[curDay].cards.length - 1) {
    curCard++;
    renderCard();
  }
}

/* ── Keyboard navigation ─────────────────────────────── */
document.addEventListener("keydown", (e) => {
  if (curDay === null) return;
  if (e.key === "ArrowLeft") prevCard();
  if (e.key === "ArrowRight") nextCard();
});

/* ── Mark done ───────────────────────────────────────── */
function markDone() {
  if (curDay === null || done.includes(curDay)) return;
  done.push(curDay);
  save();
  openDay(curDay);
}

/* ── Init ────────────────────────────────────────────── */
renderGrid();

/* ── AnkiConnect ─────────────────────────────────────── */
const ANKI_URL = "http://127.0.0.1:8765";
const ANKI_DECK = "folhinha";

async function ankiInvoke(action, params = {}) {
  const res = await fetch(ANKI_URL, {
    method: "POST",
    body: JSON.stringify({ action, version: 6, params }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

async function addToAnki(btn) {
  if (curDay === null) return;
  const card = DAYS[curDay].cards[curCard];
  const original = btn.innerHTML;
  btn.disabled = true;

  try {
    await ankiInvoke("createDeck", { deck: ANKI_DECK });
    await ankiInvoke("addNote", {
      note: {
        deckName: ANKI_DECK,
        modelName: "Basic",
        fields: {
          Front: stripHtml(card.q),
          Back: stripHtml(card.a),
        },
        options: { allowDuplicate: false },
        tags: ["folhinha", `dia-${curDay + 1}`],
      },
    });
    btn.classList.add("ok");
    btn.textContent = "Adicionado!";
  } catch (err) {
    btn.classList.add("error");
    btn.textContent = err.message.includes("duplicate") ? "Já existe!" : "Erro";
  } finally {
    setTimeout(() => {
      btn.disabled = false;
      btn.classList.remove("ok", "error");
      btn.innerHTML = original;
    }, 1800);
  }
}
