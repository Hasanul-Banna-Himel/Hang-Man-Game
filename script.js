// "Apple","Blueberry","Mandarin","Pineapple","Pomegranate","Watermelon"
// "Hedgehog","Rhineceros","Squirrel","Panther","Walrus","Zebra"
// "Bangladesh","India","Hungary","Kyrgystan","Switzerland","Zimbabwe","Dominica"

// Initial Ref
const letterContainer = document.getElementById("letter-container");
const optionContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

// options value for btn
let options = {
    fruits: ["Apple","Blueberry","Mandarin","Pineapple","Pomegranate","Watermelon"],
    animals: ["Hedgehog","Rhineceros","Squirrel","Panther","Walrus","Zebra"],
    countries: ["Bangladesh","India","Hungary","Kyrgystan","Switzerland","Zimbabwe","Dominica"],
}; 
// count
let winCount = 0;
let count = 0;

let chosenWord = "";

// display opt btn
const displayOptions = () => {
    optionContainer.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionContainer.appendChild(buttonCon);
};
//init function (called when page loads/user presses new game)
const initializer = () => {
    winCount = 0;
    count = 0;
    displayOptions();
};
//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;