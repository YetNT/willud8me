function wait(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}
/**
 *
 * @param {string[]} text
 * @param {number} h
 * @param {number} s
 * @param {number} l
 */
function createRandomH3(text, h, s, l) {
    // Create h3 element
    var h3 = document.createElement("h3");
    h3.textContent = text[Math.floor(Math.random() * text.length)];
    console.log(Math.floor(Math.random() * text.length));

    var randomX = Math.floor(Math.random() * window.innerWidth);
    var randomY = Math.floor(Math.random() * window.innerHeight);
    h3.style.position = "absolute";
    h3.style.left = randomX + "px";
    h3.style.top = randomY + "px";

    h3.style.color = "hsl(" + h + ", " + s + "%, " + l + "%)";

    document.body.appendChild(h3);
}

// Step 1: Identify the target and new elements
var targetElement = document.getElementById("no");
var newElement = document.getElementById("nE");

// Step 2: Set the position of the new element to "absolute"
newElement.style.position = "absolute";

// Step 3: Calculate the position of the target element
var targetRect = targetElement.getBoundingClientRect();
var topPosition = targetRect.top + window.scrollY - 25;
var leftPosition = targetRect.left + window.scrollX - 40;

// Step 4: Set the position of the new element to match the target element
newElement.style.top = topPosition + "px";
newElement.style.left = leftPosition + "px";

function performActions() {
    var actualMain = document.getElementById("html");
    var mainElement = document.getElementById("main");

    // Step 1: Clear all elements inside the main element
    mainElement.innerHTML = "";

    // Step 2: Dynamically add an h1 element
    var h1Element = document.createElement("h1");
    h1Element.textContent = "SHE SAID YES!";
    h1Element.id = "sheSaidYes";
    h1Element.position = "relative";
    mainElement.appendChild(h1Element);

    wait(0.5);

    function col() {
        actualMain.style.backgroundColor = "black";
        setTimeout(function () {
            actualMain.style.backgroundColor = "white";
            setTimeout(function () {
                actualMain.style.backgroundColor = "lightblue";
                setTimeout(function () {
                    actualMain.style.backgroundColor = "yellow";
                    createRandomH3(
                        [
                            "WOOHOO",
                            "type shii",
                            "<3",
                            "W",
                            "ayyy",
                            "tank u",
                            "K nigga",
                            "chicken",
                        ],
                        245,
                        57,
                        21
                    );
                }, 400); // Wait for 2 seconds before changing to green
            }, 400); // Wait for 2 seconds before changing to blue
        }, 400); // Wait for 2 seconds before changing to white
    }

    setInterval(col, 1200);
}

// Event listener for button click
document.getElementById("yes").addEventListener("click", performActions);
