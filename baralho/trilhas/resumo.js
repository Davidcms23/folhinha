/* ─────────────────────────────────────────────────────────
 * Trilha: Resumo Geral
 * Trilha feita com base na folha de resumo
 * ───────────────────────────────────────────────────────── */

TRILHAS.resumo = {
  label: "Resumo Geral",
  units: [
    {
      label: null,
      totalSlots: 40,
      days: [
        {
          label: "Momentos e Medidas de Forma",
          topic: "Fundamentos",
          tag: "momentos",
          cards: [
            {
              q: "Definição operacional da Variância",
              a: "\\[\\text{Var}(X)=\\mathbb{E}(X^2)-[\\mathbb{E}(X)]^2\\]",
              raw: "\\text{Var}(X)=\\mathbb{E}(X^2)-[\\mathbb{E}(X)]^2",
            },
            {
              q: "Definição da Função Geradora de Momentos (FGM)",
              a: "\\[M_X(t)=\\mathbb{E}\\left(e^{tX}\\right)\\]",
              raw: "M_X(t)=\\mathbb{E}\\left(e^{tX}\\right)",
            },
            {
              q: "Definição da função característica",
              a: "\\[\\phi_X(t)=\\mathbb{E}\\left(e^{itX}\\right)\\]",
              raw: "\\phi_X(t)=\\mathbb{E}\\left(e^{itX}\\right)",
            },
            {
              q: "Definição do quantil de ordem \\(p\\)",
              a: "\\[x_p=F^{-1}(p)\\quad\\Rightarrow\\quad\\text{Med}(X)=x_{1/2}\\]",
              raw: "x_p=F^{-1}(p)\\quad\\Rightarrow\\quad\\text{Med}(X)=x_{1/2}",
            },
            {
              q: "Definição da Assimetria \\(A(X)\\)",
              a: "\\[A(X)=\\frac{\\mathbb{E}[(X-\\mathbb{E}(X))^3]}{[\\text{Var}(X)]^{3/2}}\\]",
              raw: "A(X)=\\frac{\\mathbb{E}[(X-\\mathbb{E}(X))^3]}{[\\text{Var}(X)]^{3/2}}",
            },
            {
              q: "Definição da Curtose \\(K(X)\\)",
              a: "\\[K(X)=\\frac{\\mathbb{E}[(X-\\mathbb{E}(X))^4]}{[\\text{Var}(X)]^2}-3\\]",
              raw: "K(X)=\\frac{\\mathbb{E}[(X-\\mathbb{E}(X))^4]}{[\\text{Var}(X)]^2}-3",
            },
            {
              q: "Interpretação: \\(A(X)>0\\)",
              a: "Cauda pesada à direita",
              raw: "Cauda pesada à direita",
            },
            {
              q: "Interpretação: \\(A(X)<0\\)",
              a: "Cauda pesada à esquerda",
              raw: "Cauda pesada à esquerda",
            },
            {
              q: "Interpretação: \\(A(X)=0\\)",
              a: "Distribuição simétrica",
              raw: "Distribuição simétrica",
            },
            {
              q: "Interpretação: \\(K(X)>0\\)",
              a: "Leptocúrtica (afunilada)",
              raw: "Leptocúrtica (afunilada)",
            },
            {
              q: "Interpretação: \\(K(X)<0\\)",
              a: "Platicúrtica (achatada)",
              raw: "Platicúrtica (achatada)",
            },
            {
              q: "Interpretação: \\(K(X)=0\\)",
              a: "Mesocúrtica",
              raw: "Mesocúrtica",
            },
          ],
        },
        {
          label: "Bernoulli e Hipergeométrica",
          topic: "Distribuições Discretas",
          tag: "discretas_1",
          cards: [
            {
              q: "Coeficiente binomial",
              a: "\\[\\binom{n}{x}=\\frac{n!}{x!(n-x)!}\\]",
              raw: "\\binom{n}{x}=\\frac{n!}{x!(n-x)!}",
            },
            {
              q: "Propriedade do coeficiente binomial",
              a: "\\[\\binom{n}{x}+\\binom{n}{x-1}=\\binom{n+1}{x}\\]",
              raw: "\\binom{n}{x}+\\binom{n}{x-1}=\\binom{n+1}{x}",
            },
            {
              q: "Soma binomial (identidade de Newton)",
              a: "\\[\\sum_{i=0}^{n}\\binom{n}{i}a^i b^{n-i}=(a+b)^n\\]",
              raw: "\\sum_{i=0}^{n}\\binom{n}{i}a^i b^{n-i}=(a+b)^n",
            },
            {
              q: "Função de probabilidade da \\(Bernoulli(p)\\)",
              a: "\\[\\mathbb{P}(X=x)=p^x(1-p)^{1-x}\\,\\mathbb{I}_{\\{0,1\\}}(x)\\]",
              raw: "\\mathbb{P}(X=x)=p^x(1-p)^{1-x}\\,\\mathbb{I}_{\\{0,1\\}}(x)",
            },
            {
              q: "Valor esperado da \\(Bernoulli(p)\\)",
              a: "\\[\\mathbb{E}(X)=p\\]",
              raw: "\\mathbb{E}(X)=p",
            },
            {
              q: "Variância da \\(Bernoulli(p)\\)",
              a: "\\[\\text{Var}(X)=p(1-p)\\]",
              raw: "\\text{Var}(X)=p(1-p)",
            },
            {
              q: "FGM da \\(Bernoulli(p)\\)",
              a: "\\[M_X(t)=pe^t+1-p\\]",
              raw: "M_X(t)=pe^t+1-p",
            },
            {
              q: "Função de probabilidade da \\(Hipergeo(N,k,n)\\)",
              a: "\\[\\mathbb{P}(X=x)=\\frac{\\binom{k}{x}\\binom{N-k}{n-x}}{\\binom{N}{n}}\\,\\mathbb{I}_{\\{\\max\\{0,n-(N-k)\\},\\ldots,\\min\\{k,n\\}\\}}(x)\\]",
              raw: "\\mathbb{P}(X=x)=\\frac{\\binom{k}{x}\\binom{N-k}{n-x}}{\\binom{N}{n}}\\,\\mathbb{I}_{\\{\\max\\{0,n-(N-k)\\},\\ldots,\\min\\{k,n\\}\\}}(x)",
            },
            {
              q: "Valor esperado da \\(Hipergeo(N,k,n)\\)",
              a: "\\[\\mathbb{E}(X)=n\\frac{k}{N}\\]",
              raw: "\\mathbb{E}(X)=n\\frac{k}{N}",
            },
            {
              q: "Variância da \\(Hipergeo(N,k,n)\\)",
              a: "\\[\\text{Var}(X)=n\\frac{k}{N}\\left(1-\\frac{k}{N}\\right)\\frac{N-n}{N-1}\\]",
              raw: "\\text{Var}(X)=n\\frac{k}{N}\\left(1-\\frac{k}{N}\\right)\\frac{N-n}{N-1}",
            },
            {
              q: "Relação entre Hipergeométrica e Bernoulli",
              a: "\\[X\\sim\\text{Hipergeo}(N,k,1)\\;\\Leftrightarrow\\;X\\sim\\text{Bernoulli}\\left(\\frac{k}{N}\\right)\\]",
              raw: "X\\sim\\text{Hipergeo}(N,k,1)\\;\\Leftrightarrow\\;X\\sim\\text{Bernoulli}\\left(\\frac{k}{N}\\right)",
            },
            {
              q: "Moda da \\(Hipergeo(N,k,n)\\)",
              a: "\\[\\text{Mo}(X)=\\left\\lfloor\\frac{(n+1)(k+1)}{N+2}\\right\\rfloor\\text{ ou }\\frac{(n+1)(k+1)}{N+2}-1\\]",
              raw: "\\text{Mo}(X)=\\left\\lfloor\\frac{(n+1)(k+1)}{N+2}\\right\\rfloor\\text{ ou }\\frac{(n+1)(k+1)}{N+2}-1",
            },
          ],
        },
        {
          label: "Binomial e Geométrica",
          topic: "Distribuições Discretas",
          tag: "discretas_2",
          cards: [
            {
              q: "Função de probabilidade da \\(Bin(n,p)\\)",
              a: "\\[\\mathbb{P}(X=x)=\\binom{n}{x}p^x(1-p)^{n-x}\\,\\mathbb{I}_{\\{0,\\ldots,n\\}}(x)\\]",
              raw: "\\mathbb{P}(X=x)=\\binom{n}{x}p^x(1-p)^{n-x}\\,\\mathbb{I}_{\\{0,\\ldots,n\\}}(x)",
            },
            {
              q: "Valor esperado da \\(Bin(n,p)\\)",
              a: "\\[\\mathbb{E}(X)=np\\]",
              raw: "\\mathbb{E}(X)=np",
            },
            {
              q: "Variância da \\(Bin(n,p)\\)",
              a: "\\[\\text{Var}(X)=np(1-p)\\]",
              raw: "\\text{Var}(X)=np(1-p)",
            },
            {
              q: "FGM da \\(Bin(n,p)\\)",
              a: "\\[M_X(t)=(pe^t+1-p)^n\\]",
              raw: "M_X(t)=(pe^t+1-p)^n",
            },
            {
              q: "Moda da \\(Bin(n,p)\\)",
              a: "\\[\\text{Mo}(X)=\\begin{cases}\\lfloor(n+1)p\\rfloor&\\text{se }(n+1)p\\notin\\mathbb{Z}^+\\\\(n+1)p\\text{ e }(n+1)p-1&\\text{se }(n+1)p\\in\\mathbb{Z}^+\\end{cases}\\]",
              raw: "\\text{Mo}(X)=\\begin{cases}\\lfloor(n+1)p\\rfloor&\\text{se }(n+1)p\\notin\\mathbb{Z}^+\\n+1)p\\text{ e }(n+1)p-1&\\text{se }(n+1)p\\in\\mathbb{Z}^+\\end{cases}",
            },
            {
              q: "Relação construtiva: Bernoulli \\(\\rightarrow\\) Binomial",
              a: "\\[X_1,\\ldots,X_n\\overset{iid}{\\sim}\\text{Bernoulli}(p)\\;\\Rightarrow\\;\\sum_{i=1}^{n}X_i\\sim\\text{Bin}(n,p)\\]",
              raw: "X_1,\\ldots,X_n\\overset{iid}{\\sim}\\text{Bernoulli}(p)\\;\\Rightarrow\\;\\sum_{i=1}^{n}X_i\\sim\\text{Bin}(n,p)",
            },
            {
              q: "Soma finita de constante",
              a: "\\[\\sum_{i=a}^{b}c=c(b-a+1)\\]",
              raw: "\\sum_{i=a}^{b}c=c(b-a+1)",
            },
            {
              q: "Soma dos \\(n\\) primeiros inteiros",
              a: "\\[\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}\\]",
              raw: "\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}",
            },
            {
              q: "Função de probabilidade da \\(G_0(p)\\)",
              a: "\\[\\mathbb{P}(X=x)=pq^x\\,\\mathbb{I}_{\\{0,1,\\ldots\\}}(x),\\quad q=1-p\\]",
              raw: "\\mathbb{P}(X=x)=pq^x\\,\\mathbb{I}_{\\{0,1,\\ldots\\}}(x),\\quad q=1-p",
            },
          ],
        },
      ],
    },
  ],
};
