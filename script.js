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

else if (size > 128 || size < 8) {
 size = window.alert("Your length was not between 8 and 128. Please start over."); 
     return;
          }

else if (size = !NaN) {(window.alert("This is not a number. Please start over."));
    return;    
        }

wantsLow = window.confirm ('Do you want lower case?'); {
    if (wantsLow) {
        (d=(d+1)) }   
}
console.log(wantsLow);

wantsUp = window.confirm ('Do you want upper case?'); {
    if (wantsUp) {
        (d=(d+1)) }
}

console.log(wantsUp);

wantsNum = window.confirm ('Do you want to include a number?'); {
    if (wantsNum) {    
        (d=(d+1)) }
}

console.log(wantsNum);
    
wanstSchar = window.confirm ('Do you want to include a special character?'); {
    if (wanstSchar) {
        (d=(d+1)) }
}

console.log(wanstSchar);

console.log(d);

if (d < 1) {(window.alert("You didn't select any details. Please start over.")); 
   return;
}

while (i < size) { 
    
    if (wantsLow && i < size) {
        password+=caseL[Math.floor(Math.random()*caseL.length)]; 
        (i = i + 1);
    }

    if (wantsUp && i < size) {
    password+=caseU[Math.floor(Math.random()*caseU.length)];        
    (i = i + 1);   
    }  

    if (wantsNum && i < size) {
    password+=num[Math.floor(Math.random()*num.length)]; 
    (i = i + 1);
    }    
    
    if (wanstSchar && i < size) {
    password+=schar[Math.floor(Math.random()*schar.length)];
    (i = i + 1);
    }
    
    }


return password;
                }




