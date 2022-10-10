// Assignment code here


// Get references to the #generate element, create a password
var generateBtn = document.querySelector("#generate");


// variables for password
var password = ""; 
var specialCharacters = "!@%^?*&()_";
var numbers = (128<=8);
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var passwordGenerator = function()
{
 
// functions
function numbers(max); {
  return Math.floor(Math.random() * 129);
}
function specialCharacters(); {
  return Math.floor(Math.random() * 11);
}



}
// writing the password prompts
function writePassword() {
  confirm("Do you want numbers in your password?");
  confirm("Do you want special characters in your password?");
  confirm("Do you want lowercase letters?");
  confirm("Do you want uppercase letters?");
  prompt("How many characters do you want the password to be?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// answer each prompt
// input should be validated one character type should be selected
// all prompts answers for loop


// a password is generated that matches the criteria
document.getElementById("password").value = password;
// password is generated
// password is either displayed in an alert or writted to the page
