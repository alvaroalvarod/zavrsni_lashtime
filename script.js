document.addEventListener("DOMContentLoaded", function () {
    // Interaktivna navigacija - dodaje klasu aktivnom linku
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Forma - potvrda slanja ankete
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Hvala što ste sudjelovali u anketi!");
            form.reset();
        });
    }
});
