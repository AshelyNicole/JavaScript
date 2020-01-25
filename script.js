//Type password out with perameters: special characters, numbers, upper & lowercase
//clickable button
//alert prompt with text box showing password

var generateButton = document.querySelector("#generateButton");
var previousPasswordEl = document.querySelector("#last_gen");
var passwordEl = document.querySelector("#password");

function generatePassword(){
    passwordEl = characterset; 
    var characterset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()><?!"
    length = passwordLength;
}

function genPasswordLength() {
    var passwordLength = Number;
    
    if ((passwordLength < 8) || (passwordLength > 128) || isNaN(passwordLength)) {
        alert("Oops! Try again! Remember password must be between 8 to 128 characters!");
        passwordLength = genPasswordLength ();
    }
    return passwordLength;
}

generateButton.addEventListener ("click", generatePassword();




