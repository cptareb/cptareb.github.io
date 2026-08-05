document.addEventListener("DOMContentLoaded", () => {


    // =========================
    // Interest Cards
    // =========================

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



    // =========================
    // Timeline Grouping
    // =========================

    const timeline = document.querySelector(".timeline");


    if (!timeline) return;


    const items = Array.from(
        timeline.querySelectorAll(".timeline-item")
    );


    const groups = {};


    items.forEach(item => {

        const year =
            item.querySelector(".timeline-year")
            .textContent
            .trim();


        if (!groups[year]) {

            groups[year] = [];

        }


        groups[year].push(item);

    });



    timeline.innerHTML = "";


    Object.entries(groups)
    .sort(([yearA], [yearB]) => yearB - yearA)
    .forEach(([year, entries]) => {


        const group = document.createElement("article");

        group.classList.add("timeline-year-group");


        const yearElement =
            document.createElement("div");

        yearElement.classList.add("timeline-year");

        yearElement.textContent = year;



        const content = document.createElement("div");

        content.classList.add("timeline-content");


        entries.forEach(entry => {

            const event = document.createElement("div");

            event.classList.add("timeline-event");


            const eventText =
                document.createElement("div");

            eventText.classList.add("timeline-event-text");

            eventText.innerHTML =
                entry.querySelector(".timeline-content").innerHTML;



            const eventMedia =
                entry.querySelector(".timeline-media");


            event.appendChild(eventText);


            if (eventMedia) {

                event.appendChild(eventMedia);

            }


            content.appendChild(event);

        });


        group.appendChild(yearElement);

        group.appendChild(content);


        timeline.appendChild(group);

    });


});