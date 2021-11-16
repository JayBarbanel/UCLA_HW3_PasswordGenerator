// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Variables :

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;


// Special Characters to choose from :

character = ["!", "$", "^", "+", "*", "$", "%", "%", "-", "=", "<", ">", "\\"];

// Alphabet to choose from :

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "W", "x", "y", "z"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Uppercase Conversions
space = [];

var choices;

var toUpper = function(x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function() {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// To Generate :

// This will ask the user to pick their character and character count :
function generatePassword() {
    enter = parseInt(prompt("Please choose your character count.  Must be between 8-128"));


    // this is the alert if a number count is not inputed :
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Before continuing, you must chose a number"));

    } else {
        confirmNumber = confirm("Do you want the password to contain numbers?");
        confirmLowercase = confirm("Do you want the password to contain lower case letters?");
        confirmUppercase = confirm("Do you want the password to contain upper case letters?");
        confirmCharacter = confirm("Do you want the password to contain special characters?");
    };
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Please chose password guidlines");
    } else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    } else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    } else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    } else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    } else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    } else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    } else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    } else if (confirmCharacter) {
        choices = character;
    } else if (confirmNumber) {
        choices = number;
    } else if (confirmLowercase) {
        choices = alpha;
    } else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function() {
    copyPassword();
});

// function copyPassword() {
//     document.getElementById("password").select();
//     document.execCommand("Copy");
//     alert("Password copied to clipboard!");
// }