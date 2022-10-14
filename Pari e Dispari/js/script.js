let oddOrEven = prompt("do you wanna play? choose odd or even:");
while (oddOrEven !== "odd" && oddOrEven !== "even") {
     oddOrEven = prompt("you MUST choose between odd or even!!!");
}

let playerNumber = parseInt(prompt("please pic a number:"));
while (isNaN(playerNumber)) {
    playerNumber = parseInt(prompt("please pic a VALID number:"));
}
const computerNumber = randomGenerator(1, 10);
const result = playerNumber + computerNumber;


if (oddOrEven === isOddOrEven(result)) {
    alert(`${playerNumber} + ${computerNumber} =  ${isOddOrEven(result)}, you won`);
} else {
    alert(`${playerNumber} + ${computerNumber} =  ${isOddOrEven(result)}, you lost`);
}


//FUNCTIONS

//generate a number btween the min and max value setted
//min -> number
//max -> number
//return -> number
function randomGenerator(min, max) {
    const rdnNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return rdnNumber;
}


//to see if a number is odd or even
//userChoise -> string
//return - > string
function isOddOrEven(userChoise) {

    let isResult = "odd";
    if (userChoise % 2 === 0) {
        isResult = "even";
    } 
    return isResult;
}
