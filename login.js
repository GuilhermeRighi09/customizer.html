var Indicador = document.getElementById("Indicador");
var formSlider = document.querySelector(".form-slider");

function register() {
    formSlider.style.transform = "translateX(-100%)";
    Indicador.style.transform = "translateX(100%)";
}

function login() {
    formSlider.style.transform = "translateX(0%)";
    Indicador.style.transform = "translateX(0%)";
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