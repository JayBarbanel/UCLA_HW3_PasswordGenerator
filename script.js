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

character = ["!", "#", "$", "&", "*", "$", "@", "+", "-", "=", "<", ">", "\\"];

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


    // this is the aler if a number count is not inputed 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Before continuing, you must chose a number"));

    } else {
        confirmNumber = confirm("Do you want the password to contain numbers?")
        confirmCharacter = confirm("Do you want the password to contain special characters?")
        confirmUppercase = confirm("Do you want the password to contain upper case letters?")
        confirmLowercase = confirm("Do you want the password to contain lower case letters?")
    }