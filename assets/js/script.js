const grid = document.querySelector(".tile-grid");

const rows = 7;
const cols = 10;

// for resizing safe zone alongside grid
const layout = {

    desktop: {
        hero: {
            colStart: 5,
            colEnd: 9,
            rowStart: 1,
            rowEnd: 4
        }
    },


    compact: {
        hero: {
            colStart: 1,
            colEnd: 8,
            rowStart: 1,
            rowEnd: 5
        }
    }

};

function isProtectedZone(row, col) {

    const mode =
        window.innerWidth <= 900
        ? layout.compact
        : layout.desktop;


    const hero = mode.hero;


    return (
        col >= hero.colStart &&
        col <= hero.colEnd &&
        row >= hero.rowStart &&
        row <= hero.rowEnd
    );

}

// Slight variations of the Asiimov white
function randomLightShade() {

    const shades = [
        "#f8f8f8",
        "#f2f2f2",
        "#ededed",
        "#e8e8e8",
        "#ffffff"
    ];

    return shades[
        Math.floor(Math.random() * shades.length)
    ];

}

function randomDarkShade() {

    const shades = [
        "#111111",
        "#151515",
        "#1a1a1a",
        "#202020",
        "#262626"
    ];

    return shades[
        Math.floor(Math.random() * shades.length)
    ];

}

function randomOrangeShade() {

    const shades = [
        "#ff6a00",
        "#f56600",
        "#ff7a00",
        "#e85d00",
        "#ff8500"
    ];

    return shades[
        Math.floor(Math.random() * shades.length)
    ];

}


function randomTile(row, col) {


    // Keep hero area clean
    if (isProtectedZone(row, col)) {

        return {
            type: "light",
            color: "#ffffff"
        };

    }


    const roll = Math.random();


    // Mostly light
    if (roll < 0.60) {

        return {
            type: "light",
            color: randomLightShade()
        };

    }


    // Some dark industrial blocks
    if (roll < 0.80) {

        return {
            type: "dark",
            color: randomDarkShade()
        };

    }


    // Rare orange accent
    return {
        type: "accent",
        color: randomOrangeShade()
    };

}



function generateGrid() {

    grid.innerHTML = "";

    for (let row = 0; row < rows; row++) {

        for (let col = 0; col < cols; col++) {

            const tileData = randomTile(row, col);

            const tile = document.createElement("div");

            tile.classList.add(
                "tile",
                tileData.type
            );

            tile.style.backgroundColor = tileData.color;

            grid.appendChild(tile);

        }

    }

}

// startup
generateGrid();


let isSmall = window.innerWidth <= 900;


window.addEventListener("resize", () => {

    const nowSmall = window.innerWidth <= 900;


    if (nowSmall !== isSmall) {

        isSmall = nowSmall;

        generateGrid();

    }

});