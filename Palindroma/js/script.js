const userImput = prompt("Tell us a name").toLowerCase();

isPalindroma(userImput);

if (isPalindroma(userImput)){
    alert("is palindrime");
} else {
    alert("its not palindrome");
}

//FUNCTIONS

//to revert the imputed word
//word --> string
//returm --> string
function revertWord(word) {
    
    let reverseName = "";
    for (let i = (word.length -1); i >= 0 ; i--) {
        const element = word[i];
        reverseName += element;
    }
    
    return reverseName;
}

//to know if the inputed word by the client is palindrome or not
//name -> string 
//retun -> boolean
function isPalindroma(name) {

    let isEqual;
    if (revertWord(userImput) === name) {
        isEqual = true;
    } else {
        let isEqual = false;
    }

    return isEqual;
}