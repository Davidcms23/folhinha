const DAYS = [
  {
    label: "Distribuição Beta",
    topic: "Distribuições Contínuas",
    tag: "beta",
    cards: [
      {
        q: "Função de densidade da \\(Beta(a,b)\\)",
        a: "\\[f(x)=\\frac{1}{B(a,b)}x^{a-1}(1-x)^{b-1}\\mathbb{I}_{(0,1)}(x)\\]",
        raw: "f(x) = x^{a-1}(1-x)^{b-1}/B(a,b)",
      },
      {
        q: "Valor esperado da \\(Beta(a,b)\\)",
        a: "\\[\\mathbb{E}(X)=\\frac{a}{a+b}\\]",
        raw: "E(X)=a/(a+b)",
      },
      {
        q: "Variância da \\(Beta(a,b)\\)",
        a: "\\[\\text{Var}(X)=\\frac{ab}{(a+b)^2(a+b+1)}\\]",
        raw: "Var(X)=ab/(a+b)^2(a+b+1)",
      },
      {
        q: "Momento de ordem \\(k\\) da \\(Beta(a,b)\\)",
        a: "\\[\\mathbb{E}(X^k)=\\frac{\\Gamma(a+b)\\,\\Gamma(a+k)}{\\Gamma(a+b+k)\\,\\Gamma(a)}\\]",
        raw: "E(X^k) = Gamma(a+b)Gamma(a+k) / Gamma(a+b+k)Gamma(a)",
      },
      {
        q: "Assimetria \\(A(X)\\) da \\(Beta(a,b)\\)",
        a: "\\[A(X)=\\frac{2(b-a)\\sqrt{a+b+1}}{(a+b+2)\\sqrt{ab}}\\]",
        raw: "A(X) = 2(b-a)sqrt(a+b+1) / (a+b+2)sqrt(ab)",
      },
      {
        q: "Curtose \\(K(X)\\) da \\(Beta(a,b)\\)",
        a: "\\[K(X)=\\frac{3(a+b+1)\\left[2(a+b)^2+ab(a+b+6)\\right]}{ab(a+b+2)(a+b+3)}\\]",
        raw: "K(X) = 3(a+b+1)[2(a+b)^2 + ab(a+b+6)] / ab(a+b+2)(a+b+3)",
      },
      {
        q: "Moda da \\(Beta(a,b)\\)",
        a: "\\[\\text{Mo}(X)=\\begin{cases}\\dfrac{a-1}{a+b-2}&\\text{se }a,b>1\\\\0&\\text{se }a\\leq1,\\,b>1\\\\1&\\text{se }a>1,\\,b\\leq1\\\\0\\text{ e }1&\\text{se }a,b<1\\end{cases}\\]",
        raw: "Mo(X) = (a-1)/(a+b-2) se a,b > 1",
      },
      {
        q: "Se \\(X\\sim Beta(a,b)\\), qual a distribuição de \\(Y=1-X\\)?",
        a: "\\[Y=1-X\\sim Beta(b,a)\\]",
        raw: "1-X ~ Beta(b,a)",
      },
      {
        q: "Se \\(X\\sim Beta(a,b)\\), qual a distribuição de \\(Y=\\dfrac{X}{1-X}\\)?",
        a: "\\[Y=\\frac{X}{1-X}\\sim BP(a,b)\\]",
        raw: "X/(1-X) ~ BP(a,b)",
      },
      {
        q: "Se \\(X\\sim Beta\\!\\left(\\tfrac{n}{2},\\tfrac{m}{2}\\right)\\), qual a distribuição de \\(Y=\\dfrac{mX}{n(1-X)}\\)?",
        a: "\\[Y=\\frac{mX}{n(1-X)}\\sim F(n,m)\\]",
        raw: "mX/n(1-X) ~ F(n,m)",
      },
      {
        q: "Se \\(X\\sim Beta(a,1)\\), qual a distribuição de \\(Y=-\\ln X\\)?",
        a: "\\[Y=-\\ln X\\sim Exp(a)\\]",
        raw: "-ln(X) ~ Exp(a)",
      },
    ],
  },
];
