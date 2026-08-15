const plotDefinitions = {
    "Exponencial": {
        params: [
            { id: "lambda", label: "\\( \\lambda \\) (Taxa)", min: 0.1, max: 5, step: 0.1, default: 1 }
        ],
        xRange: [0, 10],
        fx: (x, p) => {
            return p.lambda * Math.exp(-p.lambda * x);
        },
        specialCases: (p) => {
            return `A Exponencial de taxa \\(\\lambda = ${p.lambda}\\) é um caso especial da <b>Gama</b> com forma \\(\\alpha = 1\\) e da <b>Weibull</b> com forma \\(b = 1\\).`;
        }
    },
    "Gama": {
        params: [
            { id: "alpha", label: "\\( \\alpha \\) (Forma)", min: 0.5, max: 10, step: 0.5, default: 2 },
            { id: "beta", label: "\\( \\beta \\) (Taxa)", min: 0.5, max: 5, step: 0.5, default: 1 }
        ],
        xRange: [0, 20],
        fx: (x, p) => {
            const gammaFunc = (z) => Math.sqrt(2 * Math.PI / z) * Math.pow((1 / Math.E) * (z + 1 / (12 * z - 1 / (10 * z))), z);
            if (x === 0 && p.alpha < 1) return null;
            return (Math.pow(p.beta, p.alpha) / gammaFunc(p.alpha)) * Math.pow(x, p.alpha - 1) * Math.exp(-p.beta * x);
        },
        specialCases: (p) => {
            if (p.beta === 0.5 && Number.isInteger(p.alpha * 2)) {
                return `Com \\(\\beta = 0.5\\) e \\(\\alpha = ${p.alpha}\\), a curva reflete uma <b>Qui-quadrado</b> com \\(\\nu = ${p.alpha * 2}\\) graus de liberdade.`;
            }
            if (p.alpha === 1) {
                return `Com \\(\\alpha = 1\\), o decaimento é estritamente equivalente à <b>Exponencial</b> com taxa \\(\\lambda = ${p.beta}\\).`;
            }
            return null;
        }
    },
    "Weibull": {
        params: [
            { id: "a", label: "\\( a \\) (Escala)", min: 0.1, max: 5, step: 0.1, default: 1 },
            { id: "b", label: "\\( b \\) (Forma)", min: 0.5, max: 5, step: 0.1, default: 2 }
        ],
        xRange: [0, 5],
        fx: (x, p) => {
            if (x === 0 && p.b < 1) return null;
            return p.a * p.b * Math.pow(x, p.b - 1) * Math.exp(-p.a * Math.pow(x, p.b));
        },
        specialCases: (p) => {
            if (p.b === 1) return `Com forma \\(b = 1\\), a distribuição colapsa em uma <b>Exponencial</b> de taxa \\(\\lambda = ${p.a}\\).`;
            if (p.b === 2) return `Com forma \\(b = 2\\), a distribuição assume o comportamento de uma <b>Rayleigh</b>.`;
            return null;
        }
    },
    "Normal": {
        params: [
            { id: "mu", label: "\\( \\mu \\) (Média)", min: -5, max: 5, step: 0.5, default: 0 },
            { id: "sigma", label: "\\( \\sigma \\) (Desv)", min: 0.5, max: 5, step: 0.1, default: 1 }
        ],
        xRange: [-10, 10],
        fx: (x, p) => {
            return (1 / (p.sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - p.mu) / p.sigma, 2));
        },
        specialCases: (p) => {
            if (p.mu === 0 && p.sigma === 1) return `Com \\(\\mu=0\\) e \\(\\sigma=1\\), temos a <b>Normal Padrão</b> \\(\\mathcal{Z}\\).`;
            return null;
        }
    }
};

let currentDist = null;
let currentParams = {};

function iniciarGraficoInterativo(distId) {
    const container = document.getElementById("plot-container");
    const distData = plotDefinitions[distId];

    if (!distData) {
        container.innerHTML = ``;
        return;
    }

    currentDist = distData;
    currentParams = {};

    // A estrutura HTML garante que o alerta venha APÓS os sliders
    let html = `
        <div class="plot-wrapper">
            <div id="plotly-div" class="plot-area"></div>
            <div class="plot-controls">
    `;

    distData.params.forEach(param => {
        currentParams[param.id] = param.default;
        html += `
            <div class="control-group">
                <label style="width: 100px; display: flex; align-items: center; justify-content: flex-start; font-size: 13px;">${param.label}</label>
                <input type="range" id="slider-${param.id}" min="${param.min}" max="${param.max}" step="${param.step}" value="${param.default}">
                <input type="number" id="input-${param.id}" min="${param.min}" max="${param.max}" step="${param.step}" value="${param.default}">
            </div>
        `;
    });

    html += `
            </div>
            <!-- ALERTA VERDE STRICTLY NO FUNDO DO PAINEL -->
            <div class="dynamic-alert" id="plot-alert"></div>
        </div>
    `;

    container.innerHTML = html;

    distData.params.forEach(param => {
        const slider = document.getElementById(`slider-${param.id}`);
        const input = document.getElementById(`input-${param.id}`);

        slider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            input.value = val;
            currentParams[param.id] = val;
            atualizarPlot();
        });

        input.addEventListener('change', (e) => {
            let val = parseFloat(e.target.value);
            if (val < param.min) val = param.min;
            if (val > param.max) val = param.max;
            e.target.value = val;
            slider.value = val;
            currentParams[param.id] = val;
            atualizarPlot();
        });
    });

    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise([container]).catch(err => console.log(err));
    }

    atualizarPlot();
}

function atualizarPlot() {
    const xValues = [];
    const yValues = [];
    const points = 200;
    const step = (currentDist.xRange[1] - currentDist.xRange[0]) / points;

    for (let i = 0; i <= points; i++) {
        const x = currentDist.xRange[0] + (i * step);
        const y = currentDist.fx(x, currentParams);
        if (y !== null && !isNaN(y)) {
            xValues.push(x);
            yValues.push(y);
        }
    }

    const trace = {
        x: xValues,
        y: yValues,
        type: 'scatter',
        mode: 'lines',
        line: { color: '#58a6ff', width: 2.5, shape: 'spline' },
        fill: 'tozeroy',
        fillcolor: 'rgba(88, 166, 255, 0.15)'
    };

    const layout = {
        margin: { l: 30, r: 10, t: 10, b: 25 },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        xaxis: { color: '#8b949e', gridcolor: 'rgba(48, 54, 61, 0.4)', zerolinecolor: '#8b949e' },
        yaxis: { color: '#8b949e', gridcolor: 'rgba(48, 54, 61, 0.4)', zerolinecolor: '#8b949e' }
    };

    const config = { responsive: true, displayModeBar: false };

    Plotly.react('plotly-div', [trace], layout, config);

    const alertDiv = document.getElementById("plot-alert");
    if (currentDist.specialCases) {
        const alertMsg = currentDist.specialCases(currentParams);
        if (alertMsg) {
            alertDiv.innerHTML = alertMsg;
            alertDiv.style.display = "block";
            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetClear([alertDiv]);
                MathJax.typesetPromise([alertDiv]);
            }
        } else {
            alertDiv.style.display = "none";
        }
    } else {
        alertDiv.style.display = "none";
    }
}
