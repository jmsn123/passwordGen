// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterU = "qwertyuiopasdfghjklzxcvbnm".split("");
var letterL = "QWERTYUIOPASDFGHJKLZXCVBNNM".split("");
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

// Write password to the #password input
function writePassword() {
    // e.preventDefault();
    // return true/false
    var confirmUppercase = confirm("Uppercase letters?");
    // console.log(confirmUppercase);
    // return true/false
    var confirmLowercase = confirm("Lowercase letters?");
    // console.log(confirmLowercase);
    // return true/false
    var confirmNumber = confirm("Number?");
    // console.log(number);
    // return true /false
    var confirmSpecial = confirm("Special Characters?");
    // console.log(specialCharacter);
    // return string
    var lengthPassword = prompt("How long do you want the password to be?");
    if (!lengthPassword) {
        alert("you must input a length try again ");
        return;
    }
    // console.log(lengthPassword);
    var values = {
        confirmUppercase,
        confirmLowercase,
        confirmNumber,
        confirmSpecial,
        lengthPassword,
    };

    return values;
}
// console.log(writePassword());

function generatePassword() {
    var {
        confirmLowercase,
        confirmNumber,
        confirmSpecial,
        confirmUppercase,
        lengthPassword,
    } = writePassword();
    var result = [];
    // var newStr = "";
    // console.log(speacialChars);

    // console.log(confirmLowercase);
    // filter out unchecked types

    // console.log(typesConfirmed);
    // // const typesArr = [
    // //     confirmLowercase,
    // //     confirmNumber,
    // //     confirmUppercase,
    // //     confirmSpecial,
    // ];
    var chars = letterL;
    if (confirmUppercase) chars = chars.concat(letterU);
    if (confirmSpecial) chars = chars.concat(specialCharacter);
    if (confirmNumber) chars = chars.concat(number);

    for (var i = 0; i < lengthPassword; i += 1) {
        var x = Math.floor(Math.random() * chars.length);
        // console.log(x);
        result.push(chars[x]);
    }

    //.forEach((item) => {
    //     console.log(item);
    //     if (!item) {
    //         return Objects.values(item);
    //     }
    // });

    // console.log(typesArr);
    // return result;
    var password = result.join("");
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    // return result.join("");
}

// Math.random().toString()
// var password = generatePassword();
// passwor;

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);