var userInput = prompt(" Type how you are feeling" );


function isUpperCase(userInput) {
    return userInput === userInput.toUpperCase();
}

function isLowerCase(userInput) {
    return userInput === userInput.toLowerCase();
}

function hasLowerCase(userInput) {
    return userInput.toUpperCase() != userInput;
}

if(isUpperCase(userInput)=== true){
    console.log('You are YELLING')
}

else if(isLowerCase(userInput)=== false){
    console.log('You are neither whispering or YELLING')
}

if(isLowerCase(userInput)=== true){
    console.log('You are whispering')
}


