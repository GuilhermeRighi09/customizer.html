var Indicador = document.getElementById("Indicador");
var formSlider = document.querySelector(".form-slider");

// Event listeners for form submission
document.getElementById('LoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    logarSistema();
});

document.getElementById('RegForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    registrarUsuario();
});

function register() {
    formSlider.style.transform = "translateX(-100%)";
    Indicador.style.transform = "translateX(100%)";
}

function login() {
    formSlider.style.transform = "translateX(0%)";
    Indicador.style.transform = "translateX(0%)";
}

function logarSistema() {
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginPassword').value;

    // Redireciona para a página de administrador se as credenciais forem do admin
    if (email === 'comercecustom@gmail.com' && senha === '1234') {
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('senha', senha);
        window.location.href = '../adm-pag/adm.html';
    } 
    // Redireciona para a página de acesso para qualquer outro login
    else if (email && senha) {
        window.location.href = '../pgn-logada/pgnacesso.html';
    }
    // Caso contrário, mostra um alerta de erro
    else {
        alert('Email ou senha inválidos');
        document.getElementById('loginPassword').value = '';
    }
}

function carregarUsuarios() {
    const usuariosLS = window.localStorage.getItem('usuarios');
    const usuarios = JSON.parse(usuariosLS) || [];

    const tbodyusuarios = document.getElementById('tbody-usuarios');
    tbodyusuarios.innerHTML = ''; // Limpa antes de renderizar

    usuarios.forEach(usuario => {
        const linha = document.createElement('tr');
        const colunaNome = document.createElement('td');
        const colunaEmail = document.createElement('td');

        colunaNome.textContent = usuario.nome;
        colunaEmail.textContent = usuario.email;

        linha.appendChild(colunaNome);
        linha.appendChild(colunaEmail);
        tbodyusuarios.appendChild(linha);
    });
}

// Chamada quando a página carregar
window.onload = carregarUsuarios;

function registrarUsuario() {
    let nome = document.querySelector('#RegForm input[type="text"]').value;
    let email = document.getElementById('regEmail').value;

    // Verifica se os campos foram preenchidos
    if (!nome || !email) {
        alert('Preencha nome e email.');
        return;
    }

    // Pega os usuários já cadastrados (ou cria um array vazio)
    let usuarios = JSON.parse(window.localStorage.getItem('usuarios')) || [];

    // Adiciona o novo usuário
    usuarios.push({ nome: nome, email: email });

    // Salva de volta no localStorage
    window.localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuário registrado com sucesso!');

    // Limpa os campos
    document.querySelector('#RegForm input[type="text"]').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';

    // Volta para tela de login (opcional)
    login();
}


