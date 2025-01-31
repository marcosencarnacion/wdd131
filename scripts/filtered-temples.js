const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("nav-visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
});


document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;