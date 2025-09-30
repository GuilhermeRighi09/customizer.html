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



