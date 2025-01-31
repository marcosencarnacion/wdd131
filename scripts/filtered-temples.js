document.addEventListener('DOMContentLoaded', () => {
    // Footer: Display the current year and the last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;


    // Hambuerge menu functionality
    const nav = document.querySelector("#nav");
    const open = document.querySelector("#open");
    const close = document.querySelector("#close");

    open.addEventListener("click", () => {
        nav.classList.add("nav-visible");
    });

    close.addEventListener("click", () => {
        nav.classList.remove("nav-visible");
    });





});