// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()-=+{}[]";
var possibleCharacters = "";
var password = "";
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  //user inputs how many characters for password
  characterAmount = prompt(
    "How many characters would you like your password to be?  Choose between 8 and 128."
  );
  // if user chooses password length outside the range or isn't a number
  if (characterAmount < 8 || characterAmount > 128) {
    alert("Your password length should be between 8 and 128.");
    writePassword();
  }
  var includeUpper = confirm(
    "Would you like uppercase characters in your password?"
  );
  var includeLower = confirm(
    "Would you like lowercase characters in your password?"
  );
  var includeNumbers = confirm(
    "Would you like numbers in your password?"
  );
  var includeSymbols = confirm(
    "Would you like symbols in your password?"
  );

  //user chooses at least one variable to be included in randomized password
  if (includeUpper) {
    possibleCharacters += upper;
  } if (includeLower) {
    possibleCharacters += lower;
  } if (includeNumbers) {
    possibleCharacters += numbers;
  } if (includeSymbols) {
    possibleCharacters += symbols;
  } else if (includeLower && includeUpper && includeNumbers && includeSymbols) {
    alert("Please include at least one value to meet password requirements.");
  }


  for (var i = 0; i < characterAmount; i++) {
    password +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
  }

  passwordText.value = password;

  // console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function getRandomCharacters() {
  return possibleCharacters(Math.floor(Math.random() * possibleCharacters.length) * possibleCharacters.length);
}



