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

    const recipeBtn = document.getElementById("recipe-btn");
    const recipeDisplay = document.getElementById("recipe-display");

    const recipes = [
        {
            name: "Mangú con los Tres Golpes",
            description: "Mashed plantains served with fried cheese, salami, and eggs.",
            image: "../website-project/images/mangu.webp",
            ingredients: [
                "3 green plantains",
                "1/4 cup butter",
                "1/2 cup cold water",
                "Salt to taste",
                "4 slices of Dominican salami",
                "4 slices of fried cheese",
                "4 eggs"
            ],
            steps: [
                "Peel and cut plantains into chunks.",
                "Boil plantains until soft (about 20 minutes).",
                "Mash with butter and cold water until smooth.",
                "Fry the salami, cheese, and eggs separately.",
                "Serve the mashed plantains with the fried items on the side."
            ]
        },
        {
            name: "Sancocho",
            description: "A rich stew made with meat, plantains, and root vegetables.",
            image: "../website-project/images/sancocho-dominicano.webp",
            ingredients: [
                "1 lb beef (chopped into pieces)",
                "1 lb chicken (cut into pieces)",
                "2 green plantains (peeled and sliced)",
                "1 yucca root (peeled and chopped)",
                "2 potatoes (chopped)",
                "1 corn on the cob (cut into pieces)",
                "1/2 cup cilantro (chopped)",
                "1 onion (chopped)",
                "3 garlic cloves (minced)",
                "1 bell pepper (chopped)",
                "Salt and pepper to taste",
                "1 teaspoon oregano",
                "8 cups water"
            ],
            steps: [
                "Season the meat with salt, pepper, and oregano.",
                "In a large pot, sauté the onion, garlic, and bell pepper until soft.",
                "Add the meat and brown it for about 10 minutes.",
                "Pour in water and bring to a boil.",
                "Add the plantains, yucca, potatoes, and corn.",
                "Simmer for about 1 hour or until everything is tender.",
                "Stir in chopped cilantro before serving."
            ]
        },
        {
            name: "Mofongo",
            description: "Garlic mashed plantains with pork cracklings, served with broth.",
            image: "../website-project/images/mofongo.webp",
            ingredients: [
                "3 green plantains",
                "1/2 cup pork cracklings (chicharrón)",
                "3 garlic cloves (minced)",
                "1/4 cup olive oil",
                "Salt to taste",
                "1 cup chicken broth (for serving)"
            ],
            steps: [
                "Peel and slice the plantains into chunks.",
                "Fry the plantains in hot oil until golden and tender.",
                "Mash the fried plantains with garlic, pork cracklings, and olive oil.",
                "Shape into a mound or ball and place in a bowl.",
                "Serve with warm chicken broth on the side."
            ]
        },
        {
            name: "Tostones",
            description: "Twice-fried green plantains, crispy and golden.",
            image: "../website-project/images/tostones.webp",
            ingredients: [
                "2 green plantains",
                "Vegetable oil (for frying)",
                "Salt to taste"
            ],
            steps: [
                "Peel and slice the plantains into 1-inch thick pieces.",
                "Fry the plantain slices in hot oil for about 3 minutes, then remove.",
                "Flatten each fried plantain using a tostonera (or a plate).",
                "Return them to the oil and fry again until golden and crispy.",
                "Sprinkle with salt and serve immediately."
            ]
        }
    ];

    let lastRecipeIndex = -1;

    recipeBtn.addEventListener("click", function () {

        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * recipes.length);
        } while (randomIndex === lastRecipeIndex);


        lastRecipeIndex = randomIndex;

        const randomRecipe = recipes[randomIndex];


        const ingredientsList = randomRecipe.ingredients.map(ing => `<li>${ing}</li>`).join("");
        const stepsList = randomRecipe.steps.map(step => `<li>${step}</li>`).join("");

        recipeDisplay.innerHTML = `
        <div class="recipe-card">
            <img src="${randomRecipe.image}" alt="${randomRecipe.name}" loading="lazy">
            <div class="recipe-details">
                <h3>${randomRecipe.name}</h3>
                <p>${randomRecipe.description}</p>
                <h4>Ingredients</h4>
                <ul>${ingredientsList}</ul>
                <h4>Instructions</h4>
                <ol>${stepsList}</ol>
            </div>
        </div>
        `;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the button and display paragraph
    const factButton = document.getElementById("fact-button");
    const factDisplay = document.getElementById("fact-display");

    // Ensure both elements exist before adding an event listener
    if (factButton && factDisplay) {
        const facts = [
            "The Dominican Republic shares an island with Haiti, making it one of two Caribbean nations on one island! 🇩🇴",
            "Merengue and Bachata are both UNESCO-recognized cultural treasures! 🎶",
            "The DR has the second-largest gold mine in the world, the Pueblo Viejo mine! ⛏️",
            "The first streetlights in the Americas were installed in Santo Domingo in 1896! 💡",
            "Baseball is the national sport, and the country has produced over 800 MLB players! ⚾"
        ];

        let lastFactIndex = -1;

        const lastFact = localStorage.getItem("lastFact");
        if (lastFact) {
            factDisplay.textContent = lastFact;
        }

        factButton.addEventListener("click", function () {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * facts.length);
            } while (randomIndex === lastFactIndex);

            lastFactIndex = randomIndex;
            const newFact = facts[randomIndex];
            factDisplay.textContent = facts[randomIndex];

            localStorage.setItem("lastFact", newFact);
        });
    } else {
        console.error("Fact button or display not found. Check your HTML.");
    }
});
