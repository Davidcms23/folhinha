function abrirPainelLateral(d) {
    const sidePanel = document.getElementById("side-panel");
    document.getElementById("panel-title").innerText = d.id;

    const content = document.getElementById("panel-content");

    // Construção do bloco matemático puramente notacional
    let html = `<div class="math-display" style="color:#8b949e;">\\( \\text{Suporte: } ${d.sup || '\\text{N/A}'} \\)</div>`;

    if (d.pdf) html += `<div class="math-display">\\[ f(x) = ${d.pdf} \\]</div>`;
    if (d.mgf) html += `<div class="math-display">\\[ M_X(t) = ${d.mgf} \\]</div>`;
    if (d.esp) html += `<div class="math-display">\\[ \\mathbb{E}(X) = ${d.esp} \\]</div>`;
    if (d.var) html += `<div class="math-display">\\[ \\text{Var}(X) = ${d.var} \\]</div>`;
    if (d.ass) html += `<div class="math-display">\\[ A(X) = ${d.ass} \\]</div>`;
    if (d.curt) html += `<div class="math-display">\\[ K(X) = ${d.curt} \\]</div>`;

    if (d.nota) html += `<div style="margin-top:20px; padding:12px; background:rgba(88,166,255,0.1); border-left:3px solid #58a6ff; font-size: 0.85em;">\\( ${d.nota} \\)</div>`;

    content.innerHTML = html;
    sidePanel.classList.add("open");

    // Delega a montagem gráfica para o plot.js
    if (typeof iniciarGraficoInterativo === "function") {
        iniciarGraficoInterativo(d.id);
    }

    // Renderiza o LaTeX isoladamente apenas para o conteúdo descritivo do painel
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetClear([content]);
        MathJax.typesetPromise([content]).catch(err => console.log('MathJax Error:', err));
    }
}

function fecharPainelLateral() {
    const sidePanel = document.getElementById("side-panel");
    if (sidePanel) sidePanel.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("close-panel");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            fecharPainelLateral();
            window.dispatchEvent(new CustomEvent('painelFechado'));
        });
    }
});
