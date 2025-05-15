function abrir_popup(){
  document.getElementById('popup_usuario').style.display = 'block'

}

function fechar_popup(){
  document.getElementById('popup_usuario').style.display = 'none'
}

let usuario = []

function criar_usuario(event){
  if(event){
    event.preventDefault();
  }

  let nome = document.getElementById('nomeForm').value
  let senha = document.getElementById('senhaForm').value
  let telefone = document.getElementById('telefoneForm').value
  let cpf = document.getElementById('cpfForm').value
  let email = document.getElementById('emailForm').value
  let salario = document.getElementById('salarioForm').value

  const novo_usuario = {
    nome: nome,
    senha: senha,
    telefone: telefone,
    cpf: cpf,
    email: email,
    salario: salario
  }
  usuario.push(novo_usuario)

  document.getElementById('nomeForm').value = '';
  document.getElementById('senhaForm').value = '';
  document.getElementById('telefoneForm').value = '';
  document.getElementById('cpfForm').value = '';
  document.getElementById('emailForm').value = '';
  document.getElementById('salarioForm').value = '';

  fechar_popup()
  atualizarTabelaUsuarios()
}

function atualizarTabelaUsuarios() {
  const tabelaUsuarios = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];

  tabelaUsuarios.innerHTML = '';

  for (let i = 0; i < usuario.length; i++) {
    const usuarioAtual = usuario[i];
    const novaLinha = tabelaUsuarios.insertRow();

    const colunaId = novaLinha.insertCell();
    const colunaNome = novaLinha.insertCell();
    const colunaCpf = novaLinha.insertCell();
    const colunaEmail = novaLinha.insertCell();
    const colunaCargo = novaLinha.insertCell(); 
    const colunaAcoes = novaLinha.insertCell();

    colunaId.textContent = i + 1; 
    colunaNome.textContent = usuarioAtual.nome;
    colunaCpf.textContent = usuarioAtual.cpf;
    colunaEmail.textContent = usuarioAtual.email;
    colunaCargo.textContent = 'Gerente'; 
    colunaAcoes.innerHTML = '<button class="editar">Editar</button> <button class="excluir">Excluir</button>'; 
  }
}

atualizarTabelaUsuarios();