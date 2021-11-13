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
var options;

// Special Characters to choose from :

character = ["!", "#", "$", "&", "*", "$", "@", "+", "-", "=", "<", ">", "\\"];

// Alphabet to choose from :

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "W", "x", "y", "z"];

// Uppercase Conversions
space = [];

var toUpper = function(x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("Generate");

get.addEventListener("click", function() {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// To Generate :

// This will ask the user yo pick their character and character count :
function generatePassword() {
    enter = parseInt(prompt("Please choose your character count.  Must be between 8-128"));

}