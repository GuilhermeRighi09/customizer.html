/* ----- LOGIN / REGISTRO ----- */
const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const Indicador = document.getElementById("Indicador");

function login() {
    if (LoginForm && RegForm && Indicador) {
        LoginForm.style.transform = "translateX(0px)";
        RegForm.style.transform = "translateX(350px)";
        Indicador.style.transform = "translateX(0px)";
    }
}

function registro() {
    if (LoginForm && RegForm && Indicador) {
        LoginForm.style.transform = "translateX(-350px)";
        RegForm.style.transform = "translateX(0px)";
        Indicador.style.transform = "translateX(100px)";
    }
}
 
function logarSistema() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('senha', senha);

    if (email === 'customizer@gmail.com' && senha === '1234') {
        window.location.href = 'pgn1.html';
    } else {
        alert('Email ou senha inválidos');
        document.getElementById('password').value = '';
    }
}