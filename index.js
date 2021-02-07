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
        return writePassword();
    }
    console.log(lengthPassword);
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
console.log("her");

function generatePassword(speacialChars, letterU, letterL, number) {
    var {
        confirmLowercase,
        confirmNumber,
        confirmSpecial,
        confirmUppercase,
        lengthPassword,
    } = writePassword();
    var result = [];
    var newStr = "";
    // console.log(speacialChars);

    // console.log(confirmLowercase);
    // filter out unchecked types
    var typesConfirmed =
        confirmLowercase + confirmNumber + confirmUppercase + confirmSpecial;
    // console.log(typesConfirmed);
    const typesArr = [
        confirmLowercase,
        confirmNumber,
        confirmUppercase,
        confirmSpecial,
    ];
    console.log(letterL);
    var chars = letterL;
    if (confirmUppercase) chars = chars.concat(letterU);
    console.log(letterU);
    if (confirmSpecial) chars = chars.concat(speacialChars);
    if (confirmNumber) chars = chars.concat(number);
    console.log("chars", chars);

    for (var i = 0; i < lengthPassword; i += 1) {
        var x = Math.floor(Math.random() * chars.length);
        console.log(x);
        result.push(chars[x]);
    }

    return result.join("");

    //.forEach((item) => {
    //     console.log(item);
    //     if (!item) {
    //         return Objects.values(item);
    //     }
    // });

    // console.log(typesArr);
    // return result;
}

// Math.random().toString()
var password = generatePassword(specialCharacter, letterU, letterL, number);
// passwor;

var passwordText = document.querySelector("#password");
console.log("passwor", password);
passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);