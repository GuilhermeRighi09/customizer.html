/* ----- MENU MOBILE ----- */
const MenuItems = document.getElementById("MenuItems");

if (MenuItems) {
    MenuItems.style.maxHeight = "0px";
}

function menutoggle() {
    if (MenuItems.style.maxHeight === "0px") {
        MenuItems.style.maxHeight = "250px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

/* ----- LOGIN / REGISTRO ----- */
const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const Indicador = document.getElementById("Indicador");
const contaPage = document.getElementById("conta");

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

/* ----- Scroll suave e exibição da seção de login ----- */

// Função para mostrar a seção de conta e rolar para ela
function showContaAndScroll() {
    contaPage.classList.add('active'); // Mostra a seção de conta
    document.querySelector('#conta').scrollIntoView({ behavior: 'smooth' });
    login(); // Já abre a aba de login
}

// Event listener para o botão "Explore Já"
const btnExplore = document.querySelector('.btn');
if (btnExplore) {
    btnExplore.addEventListener('click', (e) => {
        e.preventDefault();
        showContaAndScroll();
    });
}

// Event listeners para links do menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');

        // Se o link for para a seção de conta, chame a função específica
        if (targetId === '#conta') {
            e.preventDefault();
            showContaAndScroll();
        } else {
            // Para outros links, oculte a seção de conta e faça o scroll normal
            contaPage.classList.remove('active');
            // Scroll suave para a seção
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault(); // Previne o comportamento padrão do link
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Oculta o menu mobile após clicar em um item
        if (MenuItems.style.maxHeight !== "0px") {
            menutoggle();
        }
    });
});

/* ----- Google Maps Integration ----- */
let map;
let autocomplete;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -23.5505, lng: -46.6333 }, // Centro inicial: São Paulo
        zoom: 8
    });

    const input = document.getElementById('cityAutocomplete');
    autocomplete = new google.maps.places.Autocomplete(input, {
        types: ['(cities)'], // Restringe para apenas cidades
        componentRestrictions: { country: ['br'] } // Opcional: Restringe para o Brasil
    });

    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
            alert("Não foi possível encontrar detalhes para: '" + place.name + "'");
            return;
        }

        // Centraliza o mapa na cidade selecionada
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(12);
        }

        console.log('Cidade selecionada:', place.name);
        // Ao selecionar a cidade, redireciona para a aba de login/registro
        // showContaAndScroll(); // Comentei para não forçar o login após selecionar cidade no mapa.
    });
}

// Carrega a API do Google Maps com a chave e a biblioteca 'places'
// Certifique-se de substituir 'SUA_CHAVE_DE_API' pela sua chave real!
const googleMapsScript = document.createElement('script');
googleMapsScript.src = "https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_DE_API&libraries=places&callback=initMap";
googleMapsScript.async = true;
googleMapsScript.defer = true;
document.head.appendChild(googleMapsScript);