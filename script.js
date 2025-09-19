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

// Event listeners para links do menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');

        // Se o link é para uma seção interna (começa com '#')
        if (targetId.startsWith('#')) {
            const email = window.localStorage.getItem('email');
            const senha = window.localStorage.getItem('senha');

            // Verifica se o usuário está logado
            if (email === null || email === undefined || email !== 'customizer@gmail.com' || senha !== '1234') {
                e.preventDefault(); // Previne o scroll para a seção
                alert('Você precisa estar logado para navegar nesta página!');
                window.location.href = 'login.html';
            } else {
                // Se o usuário está logado, permite o scroll suave
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
});

/* ----- Google Maps Integration ----- */
let map;
let autocomplete;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -23.5505, lng: -46.6333 },
        zoom: 8
    });

    const input = document.getElementById('cityAutocomplete');
    autocomplete = new google.maps.places.Autocomplete(input, {
        types: ['(cities)'],
        componentRestrictions: { country: ['br'] }
    });

    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
            alert("Não foi possível encontrar detalhes para: '" + place.name + "'");
            return;
        }
        
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(12);
        }
        
        console.log('Cidade selecionada:', place.name);
        window.location.href = 'login.html';
    });
}

// Carrega a API do Google Maps com a chave e a biblioteca 'places'
const googleMapsScript = document.createElement('script');
googleMapsScript.src = "https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_DE_API&libraries=places&callback=initMap";
googleMapsScript.async = true;
googleMapsScript.defer = true;
document.head.appendChild(googleMapsScript);