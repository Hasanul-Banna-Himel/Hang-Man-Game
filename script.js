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

//block all the buttons 
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    //disable all options
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });
    //disable all letters
    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    newGameContainer.classList.remove("hide");
};
//word generator
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //if optionvalue matches the button innerText then highlight the button
    optionsButtons.forEach((button) => {
        if(button.innerText.toLowerCase() === 
        optionValue){
            button.classList.add("active");
        }
        button.disabled = true;
    });

    //initially hide letters, clear previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = ""; 

    let optionArray = options[optionValue];
    //choose random word
    chosenWord = optionArray[Math.floor(Math.random () * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
    console.log(chosenWord);
};




//init function (called when page loads/user presses new game)
const initializer = () => {
    winCount = 0;
    count = 0;

//for creating letter buttons
for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    letterContainer.append(button);
}    
    displayOptions();
};
//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;