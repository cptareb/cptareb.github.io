document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".interest-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("open");

            const icon = card.querySelector(".expand-icon");

            if (card.classList.contains("open")) {
                icon.textContent = "−";
            } else {
                icon.textContent = "+";
            }

        });

    });

});