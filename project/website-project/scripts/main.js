document.addEventListener('DOMContentLoaded', () => {
    // Footer: Display the current year and the last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;
});

/* Array of sayings for the user to display  */
document.addEventListener("DOMContentLoaded", () => {
    const sayings = [
        "El que madruga, Dios lo ayuda. 🌞",
        "Mas vale pájaro en mano que cien volando. 🐦",
        "Camarón que se duerme, se lo lleva la corriente. 🌊",
        "En boca cerrada no entran moscas. 🤫",
        "Dime con quien andas y te diré quien eres. 👥",
        "Al mal tiempo, buena cara. 😊",
        "De grano en grano, la gallina se llena el buche. 🐔"
    ];

    const button = document.getElementById("generateSaying");
    const display = document.getElementById("sayingDisplay");

    button.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * sayings.length);
        display.textContent = sayings[randomIndex];
    });
});

/* Open and Close Menu */
document.addEventListener("DOMContentLoaded", function () {
    const openMenu = document.getElementById("open");
    const closeMenu = document.getElementById("close");
    const nav = document.getElementById("nav");

    openMenu.addEventListener("click", () => {
        nav.classList.add("show");
    });

    closeMenu.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});