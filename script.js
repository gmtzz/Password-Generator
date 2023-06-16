// Assignment code here

var symbols =["!","@","#"];
var numbers =["1","2","3"];
var uppercase =["A","B","C"];
var lowercase =["a","b","c"];
function getrandomarray(arr){
var randomindex = Math.floor(Math.random()* arr.length);
var randomelement = arr[randomindex]
return randomelement 
}
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

    var useroptions ={
        length:length, 
        wantsymbols: wantsymbols,
        wantnumbers: wantnumbers,
        wantlowercase:wantlowercase,
        wantuppercase:wantuppercase,
    }
    console.log(useroptions)
    var password = []
    var possibleoptions = []
    var guaranteedoptions =[]
    if (useroptions.wantsymbols) {
        possibleoptions = possibleoptions.concat(symbols)
        guaranteedoptions.push(getrandomarray(symbols))

    }
    if(useroptions.wantnumbers) {
        possibleoptions = possibleoptions.concat(numbers)
        guaranteedoptions.push(getrandomarray(numbers))
    }
    if(useroptions.wantlowercase) {
        possibleoptions = possibleoptions.concat(lowercase)
        guaranteedoptions.push(getrandomarray(lowercase))
    }
    if(useroptions.wantuppercase) {
        possibleoptions = possibleoptions.concat(uppercase)
        guaranteedoptions.push(getrandomarray(uppercase))
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