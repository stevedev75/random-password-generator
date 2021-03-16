var size  
var caseL 
var caseU
var num 
var schar
var i = 0
var d = 0
//is a "while" or "for" statement needed to control loop for first question ??

size = window.prompt("What length do you prefer (between 8 and 128?");
if (size < 129 && size > 7) {
    console.log(size); }

else if (size > 128 || size < 8) {
 size = window.prompt("Please pick a length between 8 and 128."); 
    console.log(size); }


else (size.isNaN)
    (window.prompt("This is not a number. Please enter a number from between 8 and 128."));
     console.log(size);  // bombs out if not a number ---- displays prompt but then says
     // NAN is not a function        
                
// Add code to repeat the question if it doesn't validate between 8 and 128
// or is NULL or is a letter or symbol

    

caseL = window.confirm ('Do you want lower case?'); {
    if (true) {(d=(d+1))}  
    console.log(caseL);}

caseU = window.confirm ('Do you want upper case?'); {
    if (true) {(d=(d+1))}
    console.log(caseU); }

num = window.confirm ('Do you want to include a number?'); {
    if (true) {(d=(d+1))}    
    console.log(num); }

schar = window.confirm ('Do you want to include a special character?'); {
    if (true) {(d=(d+1))}        
    console.log(schar);}

    console.log(d); // This is a counter to make sure at least one option
                    // in addition to size (length) was chosen. If d < 1 
                    // at this point, the last 4 questions should be re-asked 
                    // since (I believe) one choice is required. (?)


// while statement here? i.e.:
// i = 0
// while i < size.length { run loop x number of iteration based on the number (size)
// the user wants his/her password to be?

// do you need to go through multiple iterations to make sure you capture at least 1
// of each item selected by the user's prompt inputs?


// size: "length" --> exact number of characters for random string
// if caseL=true, caseL = "abcdefghijklmnopqrstuvwxyz"           
// if caseU=true, caseU="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// if num=true, num="0123456789"
// if schar=true, schar= " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);