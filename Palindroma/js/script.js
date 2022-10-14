const userImput = prompt("Tell us a name").toLowerCase();

isPalindroma(userImput);

//FUNCTIONS

//to know if the inputed word by the client is palindrome or not
//userImput -> string 
//retun -> bolean
function isPalindroma(name) {

    let reverseName = "";
    for (let i = (name.length -1); i >= 0 ; i--) {
        const element = name[i];
        reverseName += element;
        console.log(reverseName);
    }

    let isEqual = false;
    if (reverseName === name) {
        isEqual = true;
        alert("it is palindrome");
    } else {
        console.log(isEqual);
        alert("is not palindrome");
    }

    return isEqual;
}