if (!localStorage.getItem('usuarios')) {
    const usuarioPadrao = [
      {
        id: 1,
        nome: "Yan",
        senha: "Karina",
        cpf: "123.456.789-01",
        telefone: "(47)99901-4350",
        email: "Yan.KarinaLinda@Mokele.com",
        salario: "R$2.50",
        cargo: "Gerente",
        status: "ativo"
      }
    ];

    localStorage.setItem('usuarios', JSON.stringify(usuarioPadrao));
    console.log('Usuário padrão criado: Yan/Karina');
  }
  
function verificarLogin() {
    const nomeFuncionario = document.getElementById("nome_funcionario").value.trim();
    const senhaFuncionario = document.getElementById("senha_funcionario").value.trim();
    const mensagemErro = document.getElementById("mensagemErro");
  
    if (senhaFuncionario === "" || nomeFuncionario === "") {
      mensagemErro.style.display = "block";
      return;
    }
  
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    const usuarioValido = usuarios.find(u =>
      u.nome === nomeFuncionario &&
      u.senha === senhaFuncionario &&
      u.status === 'ativo'
    );
  
    if (usuarioValido) {
      // Guardar o usuário logado no localStorage para uso futuro
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));
      window.location.href = "home.html";
    } else {
      mensagemErro.style.display = "block";
    }
  }
  