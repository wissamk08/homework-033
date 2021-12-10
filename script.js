// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
// var string_length = 8;
var randomstring = '';
var charCount = 0;
var numCount = 0;

// Write password to the #password input
function writePassword() {
  
  var characters = prompt("how many characters would you like to have 8-128", "");

if (!characters || characters < 8 || characters > 128) {
  alert("Please enter a valid character amount")
  return
}
var up = confirm("Do you want uppercase")
  if (up == true) {
    characters.toUpperCase();
  } else {
    characters.toLowerCase();
  }
  var num = confirm("Do you want numbers")
  if (num == true) {
    }
else{
}
var symbols = confirm("Do you want symbols")
  if (symbols == true) {
    }
else{
}


var string_length = characters;
  
for (var i=0; i<string_length; i++) {
    if((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
        var rnum = Math.floor(Math.random() * 10);
        randomstring += rnum;
        numCount += 1;
    } else {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
        charCount += 1;
    }
    
    
}
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomstring;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






