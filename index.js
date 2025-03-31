 function randomChar() {
    // 0123456789abcdef
    const chars = "0123456789ABCDEF";
    return chars[Math.floor(Math.random() * chars.length)];
}

function randomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += randomChar();
    }

    return color;
}

function startGame() {
    const colors = [];
    for (let i = 0; i < 3; i++) {
        colors.push(randomColor());
    }

    const correct = colors[Math.floor(Math.random() * colors.length)];

    /** @type {HTMLDivElement} */
    const colorContainer = document.getElementsByClassName("color-container").item(0);
    colorContainer.style.backgroundColor = correct;

    /** @type {HTMLCollectionOf<HTMLButtonElement>} */
    const choices = document.getElementsByClassName("choice");
    for (let i = 0; i < choices.length; i++) {
        const choice = choices.item(i);

        choice.innerHTML = colors[i];

        choice.onclick = () => {
            if (choice.innerHTML === correct) {
                alert("correct!");
            } else {
                alert("wrong!");
            }

            startGame();
        };
    }
}

startGame();
