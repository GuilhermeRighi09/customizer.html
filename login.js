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
        window.location.href = 'adm.html';
    } 
    // Redireciona para a página principal (pgn1.html) para qualquer outro login
    else if (email && senha) {
        window.location.href = 'pgn1.html';
    }
    // Caso contrário, mostra um alerta de erro
    else {
        alert('Email ou senha inválidos');
        document.getElementById('loginPassword').value = '';
    }
}

// Added a separate function for registration
function registrarUsuario() {
    const email = document.getElementById('regEmail').value;
    const senha = document.getElementById('regPassword').value;

    if (email && senha) {
        alert('Usuário registrado com sucesso!');
        // Aqui você enviaria os dados para um servidor
        login();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}