// Array of Temples
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-utah-temple.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah-temple.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo-guam-temple.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-d.c.-temple.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru-temple.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city-mexico-temple.webp"
    },
    {
        templeName: "Santo Domingo Dominican Republic Temple",
        location: "Santo Domingo, Dominican Republic",
        dedicated: "2000, September, 17",
        area: 67000,
        imageUrl: "images/santo-domingo-dominican-republic-temple.webp"
    },
    {
        templeName: "Bogota Colombia Temple",
        location: "Bogota, Colombia",
        dedicated: "1999, April, 24-26",
        area: 53500,
        imageUrl: "images/bogota-colombia-temple.webp"
    }

    // Temple Data Resource: https://churchofjesuschristtemples.org/temples/
];

document.addEventListener('DOMContentLoaded', () => {
    // Footer: Display the current year and the last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;

    // Hamburger Menu functionality
    const nav = document.querySelector("#nav");
    const open = document.querySelector("#open");
    const close = document.querySelector("#close");

    open.addEventListener("click", () => {
        nav.classList.add("nav-visible");
    });

    close.addEventListener("click", () => {
        nav.classList.remove("nav-visible");
    });


    // Display all temples initially
    displayTemples(temples);



    function displayTemples(templesArray) {
        const gallery = document.getElementById("temple-gallery");
        gallery.innerHTML = ""; // Clear the gallery before adding new elements

        templesArray.forEach(temple => {
            // Create HTML elements
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const figcaption = document.createElement("figcaption");
            const details = document.createElement("p");

            // Assign attributes and content
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy"; // Lazy loading
            figcaption.textContent = temple.templeName;
            details.innerHTML = `<strong>Location:</strong> ${temple.location} <br>
                                 <strong>Dedicated:</strong> ${temple.dedicated} <br>
                                 <strong>Area:</strong> ${temple.area} sq. ft.`;

            // Add elements to `figure`
            figure.appendChild(img);
            figure.appendChild(figcaption);
            figure.appendChild(details);

            // Add `figure` to gallery
            gallery.appendChild(figure);
        });
    }




});
