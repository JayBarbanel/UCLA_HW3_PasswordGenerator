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

// This will ask the user yo pick their character and character count :
function generatePassword() {
    enter = parseInt(prompt("Please choose your character count.  Must be between 8-128"));
} else {
    // Continues once user input is validated
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
};
// Else if for 4 negative options
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

}
// First if statement that uses user input prompts to determine choices
// Else if for 4 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alpha2);
}
// Else if for 3 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
} else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
} else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
} else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
}
// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
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
}
// Else if for 1 positive option
else if (confirmCharacter) {
    choices = character;
} else if (confirmNumber) {
    choices = number;
} else if (confirmLowercase) {
    choices = alpha;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
    choices = space.concat(alpha2);
};

// password variable is an array placeholder for user generated amount of length
var password = [];

// Start random selection variables:
// Random selection for all variables: 
for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}
// This joins the password array and converts it to a string
// Worked with a tutor to incorporate this option
var ps = password.join("");
UserInput(ps);
return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function() {
    copyPassword();
});
// This copies the password value - works
// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to