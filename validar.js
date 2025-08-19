function validarCliente() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value.trim();
    let email = document.getElementById("email").value.trim();
    let endereco = document.getElementById("endereco").value;

    if (nome.length < 3) {
        alert("O nome do cliente deve ter pelo menos 3 caracteres.");
        document.getElementById("nome").focus();
        return false;
    }
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        document.getElementById("email").focus();
        return false;
    }

    let regexTelefone = /^[0-9]{10,11}$/;
    if (!regexTelefone.test(telefone)) {
        alert("Digite um telefone válido (10 ou 11 dígitos).");
        document.getElementById("telefone").focus();
        return false;
    }

    if(endereco.length < 5) {
        alert("O Endereço deve ter pelo menos 5 caracteres.");
        document.getElementById("endereco").focus();
        return false;
    }

    return true;
}