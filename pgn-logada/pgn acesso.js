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




