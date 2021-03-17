var size  
var caseL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var caseU = ["A","B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var schar = ["!","@","#","%","^","&","*","$","(",")"];
var i = 0
var d = 0
var wantsLow
var wantsUp
var wantsNum
var wanstSchar

// Add event listener to generate button


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword(); 
var passwordText = document.querySelector("#password"); 
passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var password = ""

size = window.prompt("What length do you prefer between 8 and 128?");
if (size < 129 && size > 7) {
    console.log(size); }

//else if (size > 128 || size < 8) {
// size = window.alert("Your length was not between 8 and 128. Please start over."); 
//     return;
//           }

//else {(isNaN) 
//    (window.alert("This is not a number. Please start over."));{
//     return;            }
    

wantsLow = window.confirm ('Do you want lower case?'); {
    if (true) {
        password+=caseL[Math.floor(Math.random()*caseL.length)];    
        (d=(d+1)) }   
}

wantsUp = window.confirm ('Do you want upper case?'); {
    if (true) {
        password+=caseU[Math.floor(Math.random()*caseU.length)];    
        (d=(d+1)) }
}

wantsNum = window.confirm ('Do you want to include a number?'); {
    if (true) {
        password+=num[Math.floor(Math.random()*num.length)];    
        (d=(d+1)) }
}
    
wanstSchar = window.confirm ('Do you want to include a special character?'); {
    if (true) {
        password+=schar[Math.floor(Math.random()*schar.length)];    
        (d=(d+1)) }
}
//if (d < 1) (window.alert("You didn't select any details. Please start over.")); {
//    return;
//} 
    // how to stop the program here?

//allChoices = ["caseL" + "caseU" + "num" + "schar"];
//console.log(allChoices);

return password;
                }

// size: "length" --> exact number of characters for random string


// while statement here? i.e.:
// i = 0
// while i < size.length { run loop x number of iteration based on the number (size)
// the user wants his/her password to be?


// do you need to go through multiple iterations to make sure you capture at least 1
// of each item selected by the user's prompt inputs?



