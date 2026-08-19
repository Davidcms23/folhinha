/* ── State ───────────────────────────────────────────── */
let curTrilhaKey = Object.keys(TRILHAS)[0];
let curUnit = 0;
let curDay = null;
let curCard = 0;
let tuxClicks = 0;
let flipHeat = 0;
let isCardBroken = false;

let doneSet = new Set();
try {
  doneSet = new Set(JSON.parse(localStorage.getItem("folhinha_done") || "[]"));
} catch (e) {}

/* ── Helpers de trilha/unidade ───────────────────────── */
function getTrilha() {
  return TRILHAS[curTrilhaKey];
}

function getUnit() {
  return getTrilha().units[curUnit];
}

function dayKey(trilha, unit, day) {
  return `${trilha}:${unit}:${day}`;
}

function isDayDone(i) {
  return doneSet.has(dayKey(curTrilhaKey, curUnit, i));
}

/* ── Persistence ─────────────────────────────────────── */
function saveDone() {
  try {
    localStorage.setItem("folhinha_done", JSON.stringify([...doneSet]));
  } catch (e) {}
}

/* ── Trilha selector ─────────────────────────────────── */
function renderTrilhaSelector() {
  const el = document.getElementById("trilha-selector");
  if (!el) return;
  el.innerHTML = "";

  const keys = Object.keys(TRILHAS);
  if (keys.length <= 1) {
    el.style.display = "none";
    return;
  }
  el.style.display = "flex";

  keys.forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "trilha-btn" + (key === curTrilhaKey ? " active" : "");
    btn.textContent = TRILHAS[key].label;
    btn.addEventListener("click", () => setTrilha(key));
    el.appendChild(btn);
  });
}

function setTrilha(key) {
  if (key === curTrilhaKey) return;
  curTrilhaKey = key;
  curUnit = 0;
  curDay = null;
  renderAll();
}

/* ── Unit tabs ───────────────────────────────────────── */
function renderUnitTabs() {
  const el = document.getElementById("unit-tabs");
  if (!el) return;
  el.innerHTML = "";

  const units = getTrilha().units;
  const hasNamedUnits = units.length > 1 || units[0].label;

  if (!hasNamedUnits) {
    el.style.display = "none";
    return;
  }
  el.style.display = "flex";

  units.forEach((unit, i) => {
    const btn = document.createElement("button");
    btn.className = "unit-tab" + (i === curUnit ? " active" : "");
    btn.textContent = unit.label || `Unidade ${i + 1}`;
    btn.addEventListener("click", () => setUnit(i));
    el.appendChild(btn);
  });
}

function setUnit(i) {
  if (i === curUnit) return;
  curUnit = i;
  curDay = null;
  renderUnitTabs();
  renderGrid();
  hidePanel();
}

/* ── Grid ────────────────────────────────────────────── */
function renderGrid() {
  const grid = document.getElementById("days-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const unit = getUnit();
  const days = unit.days;
  const total = unit.totalSlots || days.length;

  for (let i = 0; i < total; i++) {
    const day = days[i] || null;
    const isDone = day && isDayDone(i);
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
    numEl.textContent = `Dia ${i + 1}`;

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
  const unit = getUnit();
  const days = unit.days;
  const total = unit.totalSlots || days.length;

  const n = days.reduce(
    (acc, _, i) => acc + (isDayDone(i) ? 1 : 0),
    0,
  );
  const pct = total ? Math.round((n / total) * 100) : 0;
  const dayNo = Math.min(n + 1, total || 1);

  const progLabel = document.getElementById("prog-label");
  const progFill = document.getElementById("prog-fill");

  if (progLabel) progLabel.textContent = `Overall progress: Dia ${dayNo} of ${total}`;
  if (progFill) progFill.style.width = pct + "%";
}

/* ── Open a day ──────────────────────────────────────── */
function openDay(i) {
  curDay = i;
  curCard = 0;

  document.getElementById("panel").classList.add("visible");
  document.getElementById("empty-state").style.display = "none";
  document.getElementById("fc-wrap").style.display = "flex";

  renderCard();
  renderGrid();

  document
    .getElementById("panel")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function hidePanel() {
  const panel = document.getElementById("panel");
  const empty = document.getElementById("empty-state");
  const fcWrap = document.getElementById("fc-wrap");
  if (panel) panel.classList.remove("visible");
  if (empty) empty.style.display = "";
  if (fcWrap) fcWrap.style.display = "none";
}

/* ── Render current card ─────────────────────────────── */
function renderCard() {
  if (curDay === null) return;

  const cards = getUnit().days[curDay].cards;
  const card = cards[curCard];

  document.getElementById("card-counter").textContent =
    `${curCard + 1} / ${cards.length}`;

  // Lógica do Contador Cyberpunk em Hexadecimal
  const currHex = (curCard + 1).toString(16).padStart(2, '0').toUpperCase();
  const totalHex = cards.length.toString(16).padStart(2, '0').toUpperCase();
  const hexStr = `[ 0x${currHex} // 0x${totalHex} ]`;

  const hexFront = document.getElementById("hex-front");
  const hexBack = document.getElementById("hex-back");
  if(hexFront) hexFront.textContent = hexStr;
  if(hexBack) hexBack.textContent = hexStr;

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

/* ── Flip card & Tux Easter Egg ──────────────────────── */
function flipCard() {
  if (isCardBroken) return;

  const card = document.getElementById("fc-card");
  const scene = document.getElementById("fc-scene");

  card.classList.toggle("flipped");

  tuxClicks++;
  if (tuxClicks >= 10) {
    const tux = document.getElementById("tux-easter-egg");
    if (tux) {
      tux.classList.add("peek");
      setTimeout(() => tux.classList.remove("peek"), 2000);
    }
    tuxClicks = 0;
  }

  flipHeat++;
  const heatIntensity = flipHeat / 20;

  if (flipHeat > 0 && flipHeat < 20) {
    // O filtro é aplicado na scene para evitar a perda do transform-style: preserve-3d no card
    scene.style.filter = `drop-shadow(0 0 ${15 * heatIntensity}px red) sepia(${heatIntensity}) hue-rotate(-20deg) saturate(${1 + heatIntensity * 3})`;
  }

  if (flipHeat >= 20) {
    shatterCard();
  }
}

function shatterCard() {
  isCardBroken = true;
  const scene = document.getElementById("fc-scene");
  const card = document.getElementById("fc-card");

  card.style.display = "none";

  // Libera o overflow para permitir que os fragmentos ultrapassem as bordas do contêiner
  scene.style.overflow = "visible";

  const numShards = 30;

  for (let i = 0; i < numShards; i++) {
    const shard = document.createElement("div");
    shard.className = "glass-shard";

    shard.style.background = "#fff";
    shard.style.boxShadow = "inset 0 0 10px red, 0 0 5px red";

    const p1 = `${Math.random() * 100}% ${Math.random() * 100}%`;
    const p2 = `${Math.random() * 100}% ${Math.random() * 100}%`;
    const p3 = `${Math.random() * 100}% ${Math.random() * 100}%`;
    shard.style.clipPath = `polygon(${p1}, ${p2}, ${p3})`;

    scene.appendChild(shard);

    const dirX = (Math.random() - 0.5) * 600;
    const dirY = (Math.random() * 400) + 150;
    const rot = (Math.random() - 0.5) * 720;

    requestAnimationFrame(() => {
      shard.style.transform = `translate(${dirX}px, ${dirY}px) rotate(${rot}deg) scale(0.6)`;
      shard.style.opacity = "0.5";
    });
  }
}

setTimeout(() => tux.classList.remove("peek"), 2000);

/* ── Copy helpers ────────────────────────────────────── */
function stripHtml(html) {
  return html
    .replace(/&nbsp;/g, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function flashBtn(btn) {
  if (btn.classList.contains("ok")) return;

  const original = btn.innerHTML;
  btn.classList.add("ok");
  btn.textContent = "Copiado!";

  setTimeout(() => {
    btn.classList.remove("ok");
    btn.innerHTML = original;
  }, 1400);
}

function fallbackCopyTextToClipboard(text, btn) {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
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
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => flashBtn(btn))
      .catch((err) => {
        console.warn("Clipboard API bloqueada, tentando fallback...", err);
        fallbackCopyTextToClipboard(text, btn);
      });
  } else {
    fallbackCopyTextToClipboard(text, btn);
  }
}

function copyFront(btn) {
  if (curDay === null) return;
  const card = getUnit().days[curDay].cards[curCard];
  copyToClipboard(stripHtml(card.q), btn);
}

function copyBack(btn) {
  if (curDay === null) return;
  const card = getUnit().days[curDay].cards[curCard];
  copyToClipboard(stripHtml(card.a), btn);
}

/* ── Navigation (Glitch on Next/Prev) ────────────────── */
function prevCard() {
  if (curCard > 0) {
    const fcCard = document.getElementById("fc-card");
    const fcScene = document.getElementById("fc-scene");

    if (fcCard.classList.contains("flipped")) {
      fcScene.classList.add("glitching");

      setTimeout(() => {
        fcCard.style.transition = "none";
        curCard--;
        renderCard();
        void fcCard.offsetWidth;
        fcCard.style.transition = "";
      }, 200);

      setTimeout(() => fcScene.classList.remove("glitching"), 400);
    } else {
      curCard--;
      renderCard();
    }
  }
}

function nextCard() {
  const cards = getUnit().days[curDay].cards;

  if (curDay !== null && curCard < cards.length - 1) {
    const fcCard = document.getElementById("fc-card");
    const fcScene = document.getElementById("fc-scene");

    if (fcCard.classList.contains("flipped")) {
      fcScene.classList.add("glitching");

      setTimeout(() => {
        fcCard.style.transition = "none";
        curCard++;
        renderCard();
        void fcCard.offsetWidth;
        fcCard.style.transition = "";
      }, 200);

      setTimeout(() => {
        fcScene.classList.remove("glitching");
      }, 400);

    } else {
      curCard++;
      renderCard();
    }
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
  if (curDay === null) return;
  const key = dayKey(curTrilhaKey, curUnit, curDay);
  if (doneSet.has(key)) return;
  doneSet.add(key);
  saveDone();
  openDay(curDay);
}

/* ── Init ────────────────────────────────────────────── */
function renderAll() {
  renderTrilhaSelector();
  renderUnitTabs();
  renderGrid();
  hidePanel();
}

renderAll();

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
  const card = getUnit().days[curDay].cards[curCard];
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
        tags: ["folhinha", curTrilhaKey, `dia-${curDay + 1}`],
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
