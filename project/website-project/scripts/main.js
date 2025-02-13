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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            window.location.href = "thank-you.html"; // Redirect to the thank-you page
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        {
            name: "Mangú con los Tres Golpes",
            description: "Mashed plantains served with fried cheese, salami, and eggs.",
            image: "../website-project/images/mangu.webp"
        },
        {
            name: "Sancocho",
            description: "A rich stew made with meat, plantains, and root vegetables.",
            image: "../website-project/images/sancocho-dominicano.webp"
        },
        {
            name: "Mofongo",
            description: "Garlic mashed plantains with pork cracklings, served with broth.",
            image: "../website-project/images/mofongo.webp"
        },
        {
            name: "Tostones",
            description: "Twice-fried green plantains, crispy and golden.",
            image: "../website-project/images/tostones.webp"
        }
    ];

    const recipeBtn = document.getElementById("recipe-btn");
    const recipeDisplay = document.getElementById("recipe-display")

    recipeBtn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        const randomRecipe = recipes[randomIndex];

        recipeDisplay.innerHTML = `
            <div class="recipe-card">
                <h3>${randomRecipe.name}</h3>
                <img src="${randomRecipe.image}" alt="${randomRecipe.name}" loading="lazy">
                <p>${randomRecipe.description}</p>
            </div>
        `;
    });
});
