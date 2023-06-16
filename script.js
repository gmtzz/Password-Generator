// Assignment code here

var symbols =["!","@","#"];
var numbers =["1","2","3"];
var uppercase =["A","B","C"];
var lowercase =["a","b","c"];

function generatePassword(){
    var length =parseInt(prompt("How long would you like your generated password?"))
    if (Number.isNaN(length)|| length<8 || length>128){
        alert ("Must be more than 8 or less than 128 characters.Must be a valid number.")
        return null 

    }
    var wantsymbols =confirm("Do you want special characters?")
    var wantnumbers = confirm("Do you want numbers?")
    var wantlowercase = confirm("Do you want lowercase letters?")
    var wantuppercase = confirm("Do you want uppercase letters?")

    if(!wantsymbols && !wantnumbers && !wantlowercase && !wantuppercase){
        alert ("Must select at least one option.")

        return null
    }


//1prompt user
//password length 8-128
//uppercase, lowercase, special characters, 
//2validate input
//validate length
//validate character
//3generate password




//4display password
    return "generated password";
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);