/**
 * md-loader.js
 * Busca um arquivo .md e injeta o HTML renderizado no elemento alvo.
 * Depende da lib "marked" (carregada via CDN no <head> de cada página).
 *
 * Uso: <div id="content" data-md="index.md"></div>
 */
(async function () {
    const mount = document.querySelector("[data-md]");
    if (!mount) return;

    const src = mount.getAttribute("data-md");

    try {
        const res = await fetch(src);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const raw = await res.text();

        mount.innerHTML = marked.parse(raw, {
            breaks: false,
            gfm: true,
        });

        // aplica as classes de título já usadas no CSS do site
        mount.querySelectorAll("h1").forEach((h) => h.classList.add("page-title"));
        mount.querySelectorAll("h2").forEach((h) => h.classList.add("section-title"));
        mount.querySelectorAll("h3").forEach((h) => h.classList.add("subsection-title"));

        buildToc(mount);

        document.dispatchEvent(new CustomEvent("md:loaded", { detail: { src } }));
    } catch (err) {
        mount.innerHTML = `<p class="md-error">// falha ao carregar ${src}: ${err.message}</p>`;
        console.error("[md-loader]", err);
    }
})();

function buildToc(mount) {
    const nav = document.getElementById("toc-nav");
    if (!nav) return;

    mount.querySelectorAll("h2, h3").forEach((h, i) => {
        h.id = h.id || `sec-${i}`;
        const a = document.createElement("a");
        a.href = `#${h.id}`;
        a.textContent = h.textContent;
        if (h.tagName === "H3") a.classList.add("toc-sub");
        nav.appendChild(a);
    });
}
