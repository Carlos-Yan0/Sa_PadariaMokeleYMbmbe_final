function verificarLogin() {
  const nomeFuncionario = document.getElementById("nome_funcionario").value.trim();
  const senhaFuncionario = document.getElementById("senha_funcionario").value.trim();
  const mensagemErro = document.getElementById("mensagemErro");

  if (senhaFuncionario === "" || nomeFuncionario === "") {
    mensagemErro.style.display = "block";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Garante que o usuário "Yan" fique em primeiro lugar
  usuarios.sort((a, b) => {
    if (a.nome === "Yan") return -1;
    if (b.nome === "Yan") return 1;
    return 0;
  });

  const usuarioValido = usuarios.find(u =>
    u.nome === nomeFuncionario &&
    u.senha === senhaFuncionario &&
    u.status === 'ativo'
  );

  if (usuarioValido) {
    window.location.href = "home.html";
  } else {
    mensagemErro.style.display = "block";
  }
}
