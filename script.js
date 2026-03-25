window.addEventListener("scroll", function () {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        let pos = card.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if (pos < screen - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
window.addEventListener("scroll", function () {
    let header = document.querySelector(".custom-header");
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
