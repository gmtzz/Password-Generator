// Assignment code here

var symbols =["!","@","#","%","^","&","*","(",")","_","-","=","="];
var numbers =["1","2","3","4","5","6","7","8","9"];
var uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","v","W","X","Y","Z"];
var lowercase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//this functions-get random array is what generates the password
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
//
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
    // we declare these var in an empty array bc we know it will be an array but dk whats in it yet
    var password = []
    var possibleoptions = []
    var guaranteedoptions =[]
    //. is like a file path
    if (useroptions.wantsymbols) {
        //possibleoptions.concat is like adding but with words 
        // posoptions added with symbols
        possibleoptions = possibleoptions.concat(symbols)
        //the array you want to put stuff into.push(pushes stuff to the end of array), 
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
    console.log("before loop, possibleoptions:", possibleoptions)
    console.log("before loop guaranteedoptions:", guaranteedoptions)
    console.log("before loop password", password)
// loop thru user options and guar options, return the result
    for (var i =0;i<useroptions.length;i++) {
        var newarray= getrandomarray(possibleoptions)
        password.push(newarray)
    }

    for (var i=0;i<guaranteedoptions.length;i++) {
password[i]=guaranteedoptions[i]
    }
    console.log(possibleoptions,guaranteedoptions,password,"after loop")


//1prompt user
//password length 8-128
//uppercase, lowercase, special characters, 
//2validate input
//validate length
//validate character
//3generate password




//4display password
    return password.join("");
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