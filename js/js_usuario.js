let usuario = JSON.parse(localStorage.getItem('usuarios')) || [];

let indiceEditando = null;

function abrir_popup() {
  document.getElementById('popup_usuario').style.display = 'block';
}

function fechar_popup() {
  document.getElementById('popup_usuario').style.display = 'none';
  indiceEditando = null; // resetar edição
}

function criar_usuario(event) {
  if (event) event.preventDefault();

  let nome = document.getElementById('nomeForm').value;
  let senha = document.getElementById('senhaForm').value;
  let telefone = document.getElementById('telefoneForm').value;
  let cpf = document.getElementById('cpfForm').value;
  let email = document.getElementById('emailForm').value;
  let salario = document.getElementById('salarioForm').value;
  let cargo = document.getElementById('curintiaCARgo').value;

  const novo_usuario = {
    nome,
    senha,
    telefone,
    cpf,
    email,
    salario,
    cargo,
    status: 'ativo'
  };

  if (indiceEditando !== null) {
    usuario[indiceEditando] = novo_usuario;
  } else {
    usuario.push(novo_usuario);
  }

  // Salvar no localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuario));

  limparFormulario();
  fechar_popup();
  atualizarTabelaUsuarios();
}


function atualizarTabelaUsuarios() {
  const tabelaUsuarios = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];
  tabelaUsuarios.innerHTML = '';

  usuario.forEach((u, i) => {
    const novaLinha = tabelaUsuarios.insertRow();

    const colunaId = novaLinha.insertCell();
    const colunaNome = novaLinha.insertCell();
    const colunaCpf = novaLinha.insertCell();
    const colunaEmail = novaLinha.insertCell();
    const colunaCargo = novaLinha.insertCell();
    const colunaAcoes = novaLinha.insertCell();

    colunaId.textContent = i + 1;
    colunaNome.textContent = u.nome + (u.status === 'inativo' ? ' (Inativo)' : '');
    colunaCpf.textContent = u.cpf;
    colunaEmail.textContent = u.email;
    colunaCargo.textContent = u.cargo;

    colunaAcoes.innerHTML = `
  <button onclick="editarUsuario(${i})">
    <span class='material-symbols-outlined'>edit</span>
  </button>
  <button onclick="inativarUsuario(${i})">
    <span class='material-symbols-outlined'>delete</span>
  </button>
`;
  });
}

function editarUsuario(indice) {
  const u = usuario[indice];
  indiceEditando = indice;

  document.getElementById('nomeForm').value = u.nome;
  document.getElementById('senhaForm').value = u.senha;
  document.getElementById('telefoneForm').value = u.telefone;
  document.getElementById('cpfForm').value = u.cpf;
  document.getElementById('emailForm').value = u.email;
  document.getElementById('salarioForm').value = u.salario;

  abrir_popup();
}

function inativarUsuario(indice) {
  usuario[indice].status = usuario[indice].status === 'ativo' ? 'inativo' : 'ativo';
  localStorage.setItem('usuarios', JSON.stringify(usuario));
  atualizarTabelaUsuarios();
}


function limparFormulario() {
  document.getElementById('nomeForm').value = '';
  document.getElementById('senhaForm').value = '';
  document.getElementById('telefoneForm').value = '';
  document.getElementById('cpfForm').value = '';
  document.getElementById('emailForm').value = '';
  document.getElementById('salarioForm').value = '';
}

atualizarTabelaUsuarios();
