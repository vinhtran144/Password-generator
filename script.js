// Assignment code here
function generatePassword(){
  var length;

  //  Keep prompting the user until an acceptable answer is inputed
  //  Only exit the loop once all conditions been meet
  while ( !( (typeof length != "undefined") && !(isNaN(length,10)) && (length >=8) && (length<128) )){
    length = parseInt(window.prompt("Select length of password (MUST be least 8 characters and no more than 128 characters)"));
  }

  var lower; var upper; var number; var special;
  // Keep looping if the user decline all options
  // Only exit when the user select one of the options
  while (!( lower || upper ||number || special)){
    // Notice the user to try again, only alert when the user didn't match it once
    if (typeof lower != "undefined" ){
      window.alert("Please try again (select at least 1 option)");
    }
    lower = window.confirm("Would you like Lowercase characters?");
    upper = window.confirm("Would you like Uppercase characters?");
    number = window.confirm("Would you like Numbers?");
    special = window.confirm("Would you like Special characters?");
  }
  
  password ="";
  var type = 0;
  // Type variable to keep track of the type of character that will be appended to the password string with
  // '0' for normal char, '1' for upper char, '2' for number char, '3' for special char
  // If the user specified to not use certain char, it would simply skip the option, so maximum number of loops will be 128*4=512 loops (not bad)
  return parseInt(length,10);
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