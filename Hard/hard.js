var userChoice= prompt(" Do you want to add(1), subtract(2), multiply(3) or divide(4)? Enter a choice 1-4");


if(userChoice == 1){
var x = prompt(" Type a number" );
var y = prompt(" Type another number" );
var num1 = parseInt(x);
var num2 = parseInt(y);
add(num1,num2);
}

if(userChoice == 2){
var x = prompt(" Type a number" );
var y = prompt(" Type another number" );
var num1 = parseInt(x);
 var num2 = parseInt(y);
subtract(num1,num2);
}

if(userChoice == 3){
var x = prompt(" Type a number" );
var y = prompt(" Type another number" );
var num1 = parseInt(x);
    var num2 = parseInt(y);
multiply(num1,num2);
}

if(userChoice == 4){
var x = prompt(" Type a number" );
var y = prompt(" Type another number" );
var num1 = parseInt(x);
var num2 = parseInt(y);
divide(num1,num2);
}

function add(num1, num2){
    var result= (num1+num2); 
    console.log(result);
}

function subtract(num1, num2){
    var result=(num1 - num2);
    console.log(result);
}

function multiply(num1, num2){
    var result=(num1 * num2);
    console.log(result);
}

function divide(num1, num2){
     var result=(num1 / num2);
     console.log(result);
}

