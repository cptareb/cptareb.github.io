const grid = document.querySelector(".tile-grid");

const rows = 7;
const cols = 10;


// Area behind your name
function isHeroZone(row, col) {

    return (
        col >= 6 &&
        row >= 2 &&
        row <= 4
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


function randomTile(row, col) {


    // Keep hero area clean
    if (isHeroZone(row, col)) {

        return {
            type: "light",
            color: "#ffffff"
        };

    }


    const roll = Math.random();


    // Mostly light
    if (roll < 0.80) {

        return {
            type: "light",
            color: randomLightShade()
        };

    }


    // Some dark industrial blocks
    if (roll < 0.95) {

        return {
            type: "dark",
            color: "#111111"
        };

    }


    // Rare orange accent
    return {
        type: "accent",
        color: "#ff6a00"
    };

}



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

function isHeroZone(row, col) {

    const heroStartRow = 2;
    const heroEndRow = 4;

    const heroStartCol = 6;
    const heroEndCol = 9;


    return (
        row >= heroStartRow - 1 &&
        row <= heroEndRow + 1 &&
        col >= heroStartCol - 1 &&
        col <= heroEndCol
    );

}