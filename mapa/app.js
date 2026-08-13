document.addEventListener("DOMContentLoaded", () => {
    const data = {
        nodes: [
            // Distribuições Contínuas
            { id: "Exponencial", sup: "x > 0", pdf: "\\lambda e^{-\\lambda x}", mgf: "\\frac{\\lambda}{\\lambda - t}", esp: "\\frac{1}{\\lambda}", var: "\\frac{1}{\\lambda^2}" },
            { id: "Weibull", sup: "x > 0", pdf: "ab x^{b-1} e^{-a x^b}", mgf: "\\text{N/A}", esp: "a^{-1/b}\\Gamma(1+\\frac{1}{b})", var: "a^{-2/b}\\left[\\Gamma(1+\\frac{2}{b}) - \\Gamma^2(1+\\frac{1}{b})\\right]" },
            { id: "Normal", sup: "x \\in \\mathbb{R}", pdf: "\\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}", mgf: "e^{\\mu t + \\frac{\\sigma^2 t^2}{2}}", esp: "\\mu", var: "\\sigma^2" },
            { id: "Normal Padrão", sup: "x \\in \\mathbb{R}", pdf: "\\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}}", mgf: "e^{\\frac{t^2}{2}}", esp: "0", var: "1" },
            { id: "Uniforme", sup: "a < x < b", pdf: "\\frac{1}{b-a}", mgf: "\\frac{e^{tb} - e^{ta}}{t(b-a)}", esp: "\\frac{a+b}{2}", var: "\\frac{(b-a)^2}{12}" },
            { id: "Rayleigh", sup: "x > 0", pdf: "\\frac{x}{\\sigma^2} e^{-\\frac{x^2}{2\\sigma^2}}", mgf: "\\text{N/A}", esp: "\\sigma\\sqrt{\\frac{\\pi}{2}}", var: "\\sigma^2\\frac{4-\\pi}{2}" },
            { id: "Pareto", sup: "x > \\beta", pdf: "\\frac{\\alpha\\beta^\\alpha}{x^{\\alpha+1}}", mgf: "\\text{N/A}", esp: "\\frac{\\alpha\\beta}{\\alpha-1}", var: "\\frac{\\alpha\\beta^2}{(\\alpha-2)(\\alpha-1)^2}" },
            { id: "Lognormal", sup: "x > 0", pdf: "\\frac{1}{x\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(\\ln x - \\mu)^2}{2\\sigma^2}}", mgf: "\\text{N/A}", esp: "e^{\\mu + \\frac{\\sigma^2}{2}}", var: "e^{2\\mu+\\sigma^2}(e^{\\sigma^2}-1)" },
            { id: "Cauchy", sup: "x \\in \\mathbb{R}", pdf: "\\frac{1}{\\pi b \\left[1 + \\left(\\frac{x-a}{b}\\right)^2\\right]}", mgf: "\\text{Indefinido}", esp: "\\text{Indefinido}", var: "\\text{Indefinido}" },
            { id: "Gama", sup: "x > 0", pdf: "\\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\beta x}", mgf: "\\left(\\frac{\\beta}{\\beta-t}\\right)^\\alpha", esp: "\\frac{\\alpha}{\\beta}", var: "\\frac{\\alpha}{\\beta^2}" },
            { id: "Qui-quadrado", sup: "x > 0", pdf: "\\frac{(1/2)^{n/2}}{\\Gamma(n/2)} x^{\\frac{n}{2}-1} e^{-x/2}", mgf: "(1 - 2t)^{-n/2}", esp: "n", var: "2n" },
            { id: "Gama Inversa", sup: "x > 0", pdf: "\\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} x^{-\\alpha-1} e^{-\\frac{\\beta}{x}}", mgf: "\\text{N/A}", esp: "\\frac{\\beta}{\\alpha-1}", var: "\\frac{\\beta^2}{(\\alpha-1)^2(\\alpha-2)}" },
            { id: "Power", sup: "0 < x < \\alpha", pdf: "\\frac{\\beta x^{\\beta-1}}{\\alpha^\\beta}", mgf: "\\text{N/A}", esp: "\\frac{\\alpha\\beta}{\\beta+1}", var: "\\frac{\\alpha^2\\beta}{(\\beta+2)(\\beta+1)^2}" },
            { id: "Beta", sup: "0 < x < 1", pdf: "\\frac{1}{B(a,b)} x^{a-1} (1-x)^{b-1}", mgf: "\\text{N/A}", esp: "\\frac{a}{a+b}", var: "\\frac{ab}{(a+b)^2(a+b+1)}" },
            { id: "Beta Prime", sup: "x > 0", pdf: "\\frac{x^{a-1}}{B(a,b)(x+1)^{a+b}}", mgf: "\\text{N/A}", esp: "\\frac{a}{b-1}", var: "\\frac{a(a+b-1)}{(b-2)(b-1)^2}" },
            { id: "t-Student", sup: "x \\in \\mathbb{R}", pdf: "\\frac{\\Gamma(\\frac{n+1}{2})}{\\Gamma(\\frac{n}{2})\\sqrt{\\pi n}} \\left(1+\\frac{x^2}{n}\\right)^{-\\frac{n+1}{2}}", mgf: "\\text{Indefinido}", esp: "0", var: "\\frac{n}{n-2}" },
            { id: "F-Snedecor", sup: "x > 0", pdf: "\\frac{n^{n/2} m^{m/2} x^{m/2-1}}{B(\\frac{m}{2},\\frac{n}{2})(n+mx)^{\\frac{n+m}{2}}}", mgf: "\\text{Indefinido}", esp: "\\frac{n}{n-2}", var: "\\frac{2n^2(m+n-2)}{m(n-2)^2(n-4)}" },
            { id: "Laplace", sup: "x \\in \\mathbb{R}", pdf: "\\frac{1}{2b} e^{-\\frac{|x-a|}{b}}", mgf: "\\frac{e^{at}}{1-(bt)^2}", esp: "a", var: "2b^2" },
            { id: "Logística", sup: "x \\in \\mathbb{R}", pdf: "\\frac{\\exp\\{-(x-a)/b\\}}{b(1+\\exp\\{-(x-a)/b\\})^2}", mgf: "e^{at}B(1-bt, 1+bt)", esp: "a", var: "\\frac{b^2\\pi^2}{3}" },
            { id: "Triangular", sup: "a < x < b", pdf: "\\text{Tri}(a,c,b)", mgf: "\\text{N/A}", esp: "\\frac{a+b+c}{3}", var: "\\frac{a^2+b^2+c^2-ab-ac-bc}{18}" },
            { id: "Kumaraswamy", sup: "0 < x < 1", pdf: "ab x^{a-1} (1-x^a)^{b-1}", mgf: "\\text{N/A}", esp: "b B(1+\\frac{1}{a}, b)", var: "b B(1+\\frac{2}{a}, b) - [b B(1+\\frac{1}{a}, b)]^2" },
            { id: "Gumbel", sup: "x \\in \\mathbb{R}", pdf: "\\frac{1}{\\beta}e^{-(x-\\alpha)/\\beta - e^{-(x-\\alpha)/\\beta}}", mgf: "e^{t\\alpha}\\Gamma(1-\\beta t)", esp: "\\alpha + \\beta\\gamma", var: "\\frac{\\beta^2\\pi^2}{6}" },

            // Distribuições Discretas
            { id: "Binomial", sup: "x \\in \\{0, \\dots, n\\}", pdf: "\\binom{n}{x} p^x (1-p)^{n-x}", mgf: "(pe^t + 1 - p)^n", esp: "np", var: "np(1-p)" },
            { id: "Bernoulli", sup: "x \\in \\{0, 1\\}", pdf: "p^x (1-p)^{1-x}", mgf: "pe^t + 1 - p", esp: "p", var: "p(1-p)" },
            { id: "Geométrica", sup: "x \\in \\{0, 1, \\dots\\}", pdf: "pq^x", mgf: "\\frac{p}{1-qe^t}", esp: "\\frac{q}{p}", var: "\\frac{q}{p^2}" },
            { id: "Binomial Negativa", sup: "x \\in \\{0, 1, \\dots\\}", pdf: "\\binom{x+r-1}{x} p^r q^x", mgf: "\\left(\\frac{p}{1-qe^t}\\right)^r", esp: "\\frac{rq}{p}", var: "\\frac{rq}{p^2}" },
            { id: "Uniforme Discreta", sup: "x \\in \\{a, \\dots, b\\}", pdf: "\\frac{1}{b-a+1}", mgf: "\\frac{e^{at}-e^{(b+1)t}}{(b-a+1)(1-e^t)}", esp: "\\frac{a+b}{2}", var: "\\frac{(b-a+1)^2-1}{12}" },
            { id: "Poisson", sup: "x \\in \\{0, 1, \\dots\\}", pdf: "\\frac{\\lambda^x e^{-\\lambda}}{x!}", mgf: "e^{\\lambda(e^t-1)}", esp: "\\lambda", var: "\\lambda" },
            { id: "Hipergeométrica", sup: "x \\in \\{\\max(0, n-(N-k)), \\dots, \\min(k,n)\\}", pdf: "\\frac{\\binom{k}{x}\\binom{N-k}{n-x}}{\\binom{N}{n}}", mgf: "\\text{N/A}", esp: "n\\frac{k}{N}", var: "n\\frac{k}{N}\\left(1-\\frac{k}{N}\\right)\\frac{N-n}{N-1}" }
        ],
        links: [
            // Relações a partir da Uniforme
            { source: "Uniforme", target: "Exponencial", label: "Y = -\\frac{\\ln X}{\\lambda}" },
            { source: "Uniforme", target: "Beta", label: "Y = 1 - X^{1/n}" },
            { source: "Uniforme", target: "Power", label: "Y = \\alpha X^{1/\\beta}" },
            { source: "Uniforme", target: "Laplace", label: "Y = \\ln(X_1/X_2)" },
            { source: "Uniforme", target: "Logística", label: "Y = a + b\\ln\\left(\\frac{X}{1-X}\\right)" },
            { source: "Uniforme", target: "Triangular", label: "Y = X_1 - X_2" },
            { source: "Uniforme", target: "Kumaraswamy", label: "Y = (1-(1-X)^{1/b})^{1/a}" },

            // Relações a partir da Exponencial
            { source: "Exponencial", target: "Gama", label: "Y = \\sum X_i" },
            { source: "Exponencial", target: "Laplace", label: "Y = X_1 - X_2" },
            { source: "Exponencial", target: "Rayleigh", label: "Y = \\sqrt{X}" },
            { source: "Exponencial", target: "Logística", label: "Y = a - b\\ln(X_1/X_2)" },
            { source: "Exponencial", target: "Geométrica", label: "Y = \\lfloor X \\rfloor" },

            // Rayleigh, Weibull, Cauchy
            { source: "Rayleigh", target: "Weibull", label: "W_1\\left(\\frac{1}{2\\beta^2}, 2\\right)" },
            { source: "Rayleigh", target: "Gama", label: "Y = \\sum X_i^2" },
            { source: "Weibull", target: "Exponencial", label: "b = 1" },
            { source: "Weibull", target: "Gumbel", label: "Y = -\\ln X" },
            { source: "Cauchy", target: "Cauchy", label: "Y = 1/X" },

            // Gama e Qui-quadrado
            { source: "Gama", target: "Qui-quadrado", label: "\\alpha=\\frac{n}{2}, \\beta=\\frac{1}{2}" },
            { source: "Gama", target: "Beta", label: "Y = \\frac{X_1}{X_1+X_2}" },
            { source: "Gama", target: "Gama Inversa", label: "Y = 1/X" },
            { source: "Qui-quadrado", target: "F-Snedecor", label: "Y = \\frac{X_1/n_1}{X_2/n_2}" },

            // Normal
            { source: "Normal", target: "Normal Padrão", label: "Z = \\frac{X-\\mu}{\\sigma}" },
            { source: "Normal Padrão", target: "Qui-quadrado", label: "Y = \\sum Z_i^2" },
            { source: "Normal Padrão", target: "Cauchy", label: "Y = Z_1 / Z_2" },
            { source: "Normal Padrão", target: "Rayleigh", label: "Z = \\sqrt{X^2 + Y^2}" },
            { source: "Normal", target: "Lognormal", label: "Y = e^X" },
            { source: "Lognormal", target: "Normal", label: "Y = \\ln X" },

            // Pareto e t-Student
            { source: "Pareto", target: "Exponencial", label: "Y = \\ln(X/\\beta)" },
            { source: "Pareto", target: "Beta Prime", label: "Y = X/\\beta - 1" },
            { source: "t-Student", target: "Cauchy", label: "n=1" },
            { source: "t-Student", target: "Normal Padrão", label: "n \\to \\infty" },
            { source: "t-Student", target: "F-Snedecor", label: "Y = X^2" },

            // Beta e Laplace
            { source: "Beta", target: "Uniforme", label: "a=1, b=1" },
            { source: "Beta", target: "Beta Prime", label: "Y = \\frac{X}{1-X}" },
            { source: "Beta", target: "F-Snedecor", label: "Y = \\frac{mX}{n(1-X)}" },
            { source: "Beta", target: "Exponencial", label: "Y = -\\ln X" },
            { source: "F-Snedecor", target: "Beta Prime", label: "Y = \\frac{a}{b}X" },
            { source: "Laplace", target: "Exponencial", label: "Y = |X-a|" },
            { source: "Laplace", target: "F-Snedecor", label: "Y = \\frac{|X_1-a|}{|X_2-a|}" },
            { source: "Kumaraswamy", target: "Exponencial", label: "Y = -\\ln X" },
            { source: "Gumbel", target: "Exponencial", label: "Y = e^{-(X-\\alpha)/\\beta}" },

            // Discretas
            { source: "Bernoulli", target: "Binomial", label: "Y = \\sum X_i" },
            { source: "Geométrica", target: "Binomial Negativa", label: "Y = \\sum X_i" },
            { source: "Binomial Negativa", target: "Poisson", label: "r \\to \\infty" },
            { source: "Binomial", target: "Poisson", label: "n \\to \\infty" },
            { source: "Poisson", target: "Normal", label: "\\lambda \\to \\infty" },
            { source: "Binomial", target: "Normal", label: "n \\to \\infty" },
            { source: "Hipergeométrica", target: "Bernoulli", label: "n=1" },
            { source: "Hipergeométrica", target: "Binomial", label: "N \\to \\infty" }
        ]
    };

    const grau = {};
    data.nodes.forEach(n => grau[n.id] = 0);
    data.links.forEach(l => {
        grau[l.source] += 1;
        grau[l.target] += 1;
    });

    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3.select("#grafo")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", [0, 0, width, height])
        .call(d3.zoom().on("zoom", (event) => {
            svgGroup.attr("transform", event.transform);
        }))
        .on("dblclick.zoom", null);

    const svgGroup = svg.append("g");

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id).distance(280))
        .force("charge", d3.forceManyBody().strength(-900))
        .force("center", d3.forceCenter(width / 2, (height / 2) + 40));

    // Fios estáticos base
    const linkBase = svgGroup.append("g")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("class", "link-base");

    // Correntes de energia animadas
    const linkEnergy = svgGroup.append("g")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("class", "link-energy");

    // Linha guia perpendicular do rótulo para a aresta (Tether)
    const linkTether = svgGroup.append("g")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("class", "label-tether");

    const linkLabel = svgGroup.append("g")
        .selectAll("foreignObject")
        .data(data.links)
        .enter().append("foreignObject")
        .attr("class", "foreign-label")
        .attr("width", 200)
        .attr("height", 40)
        .append("xhtml:div")
        .html(d => `\\( ${d.label} \\)`);

    const nodesUI = svgGroup.append("g")
        .selectAll("g")
        .data(data.nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    const tooltip = d3.select("#tooltip");

    nodesUI.append("circle")
        .attr("r", d => 10 + (grau[d.id] * 4))
        .on("mouseover", (event, d) => {
            const vizinhos = new Set();
            vizinhos.add(d.id);
            data.links.forEach(l => {
                if (l.source.id === d.id || l.target.id === d.id) {
                    vizinhos.add(l.source.id);
                    vizinhos.add(l.target.id);
                }
            });

            // Gerencia focos visuais
            nodesUI.style("opacity", n => vizinhos.has(n.id) ? 1 : 0.1);
            linkBase.style("opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1);
            linkTether.style("opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 0.4 : 0.05);
            svgGroup.selectAll(".foreign-label").style("opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1);
            linkEnergy.style("opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0);

            // Popula HTML do Tooltip
            tooltip.style("opacity", 1)
                .html(`
                    <div class="tooltip-title">${d.id}</div>
                    <div class="tooltip-sup">Suporte: \\( ${d.sup || ''} \\)</div>
                    <div class="tooltip-math">\\( f(x) = ${d.pdf || ''} \\)</div>
                    <div class="tooltip-math">\\( M_X(t) = ${d.mgf || '\\text{N/A}'} \\)</div>
                    <div class="tooltip-math">\\( \\mathbb{E}(X) = ${d.esp} \\)</div>
                    <div class="tooltip-math">\\( \\text{Var}(X) = ${d.var} \\)</div>
                `);

            // Controle da Promise do MathJax para evitar quebra ao mudar o cursor de posição rápido
            if (window.MathJax) {
                const tooltipElem = document.getElementById("tooltip");
                MathJax.typesetClear([tooltipElem]);
                MathJax.typesetPromise([tooltipElem]).catch(err => console.log('MathJax Error:', err));
            }
        })
        .on("mousemove", (event) => {
            tooltip
                .style("left", (event.pageX + 18) + "px")
                .style("top", (event.pageY - 30) + "px");
        })
        .on("mouseout", () => {
            tooltip.style("opacity", 0);
            nodesUI.style("opacity", 1);
            linkBase.style("opacity", 1);
            linkTether.style("opacity", 0.4);
            svgGroup.selectAll(".foreign-label").style("opacity", 1);
            linkEnergy.style("opacity", 0);
        });

    nodesUI.append("text")
        .attr("dx", d => 16 + (grau[d.id] * 4))
        .attr("dy", ".35em")
        .text(d => d.id);

    // Motor de Renderização Interativo
    const OFFSET = 35; // Distância fixa da aresta para o rótulo

    simulation.on("tick", () => {
        linkBase.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x).attr("y2", d => d.target.y);

        linkEnergy.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
                  .attr("x2", d => d.target.x).attr("y2", d => d.target.y);

        svgGroup.selectAll(".foreign-label").each(function(d) {
            const midX = (d.source.x + d.target.x) / 2;
            const midY = (d.source.y + d.target.y) / 2;

            const dx = d.target.x - d.source.x;
            const dy = d.target.y - d.source.y;
            const len = Math.sqrt(dx*dx + dy*dy) || 1;

            // Empurra o rótulo na perpendicular (nx, ny)
            const nx = -dy / len;
            const ny = dx / len;

            d.lx = midX + nx * OFFSET;
            d.ly = midY + ny * OFFSET;
            d.midX = midX;
            d.midY = midY;
        })
        .attr("x", d => d.lx - 100)
        .attr("y", d => d.ly - 20);

        linkTether
            .attr("x1", d => d.midX)
            .attr("y1", d => d.midY)
            .attr("x2", d => d.lx)
            .attr("y2", d => d.ly);

        nodesUI.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    setTimeout(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([document.getElementById("grafo")]);
        }
    }, 200);

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
    }
    function dragged(event, d) {
        d.fx = event.x; d.fy = event.y;
    }
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null; d.fy = null;
    }
});
