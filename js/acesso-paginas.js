document.addEventListener('DOMContentLoaded', () => {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (!usuario) {
    window.location.href = 'login.html';
    return;
  }

  const caminhoPagina = window.location.pathname.split('/').pop();

  const permissoes = {
    'Gerente': ['*'],
    'Caixa': ['home.html', 'comanda.html', 'pdv.html'],
    'Analista de vendas': ['home.html', 'historico-vendas.html', 'dashboard.html'],
    'Controlador de estoque': ['home.html', 'estoque.html']
  };

  const paginasPermitidas = permissoes[usuario.cargo] || [];

  if (!paginasPermitidas.includes('*') && !paginasPermitidas.includes(caminhoPagina)) {
    document.documentElement.innerHTML = `
      <head>
        <meta charset="UTF-8">
        <title>Acesso Negado</title>
        <style>
          body {
            margin: 0;
            background: black;
            color: white;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-family: sans-serif;
          }
        </style>
      </head>
      <body>
        <p style="font-size:24px;">Acesso negado.</p>
        <p>Redirecionando para a home...</p>
      </body>
    `;

    // Redirecionamento separado, fora do innerHTML
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 3000);
  }
});
