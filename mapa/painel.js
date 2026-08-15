function abrirPainelLateral(d) {
    const sidePanel = document.getElementById("side-panel");
    document.getElementById("panel-title").innerText = d.id;
    const content = document.getElementById("panel-content");

    // A tag \textstyle força o MathJax a amassar frações como texto corrido
    let html = '';

    if (d.sup)  html += `<div class="math-line">\\( \\textstyle \\text{Suporte: } ${d.sup} \\)</div>`;
    if (d.pdf)  html += `<div class="math-line">\\( \\textstyle f(x) = ${d.pdf} \\)</div>`;
    if (d.mgf)  html += `<div class="math-line">\\( \\textstyle M_X(t) = ${d.mgf} \\)</div>`;
    if (d.esp)  html += `<div class="math-line">\\( \\textstyle \\mathbb{E}(X) = ${d.esp} \\)</div>`;
    if (d.var)  html += `<div class="math-line">\\( \\textstyle \\text{Var}(X) = ${d.var} \\)</div>`;
    if (d.ass)  html += `<div class="math-line">\\( \\textstyle A(X) = ${d.ass} \\)</div>`;
    if (d.curt) html += `<div class="math-line">\\( \\textstyle K(X) = ${d.curt} \\)</div>`;

    if (d.nota) html += `<div class="nota-box">\\( \\textstyle ${d.nota} \\)</div>`;

    content.innerHTML = html;
    sidePanel.classList.add("open");

    if (typeof iniciarGraficoInterativo === "function") {
        iniciarGraficoInterativo(d.id);
    }

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
