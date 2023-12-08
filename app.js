// alert("Chapter 6");

//                  Exercise 6.1

/*See if you can write a function for yourself. We want to write a function that adds 
two numbers.*/

function add(a, b) {
    return a + b;
}
const val1 = 10; 
const val2 = 20;
console.log(add(val1, val2));
console.log(add(20, 30));

//                  Exercise 6.2

/*We are going to create a program that will randomly describe an inputted name.*/

let randomName = ["super", "wonderful", "bad", "angry", "careful"];
 
function Name() {
    let userName = prompt("What is your name?");
    let nameAdj = randomName[Math.floor(Math.random() * randomName.length)];
    console.log(`"${userName}" is ${nameAdj}!`);
}
Name();

//                  Exercise 6.3

/*Create a basic calculator that takes two numbers and one string value indicating 
an operation. If the operation equals add, the two numbers should be added. If the 
operation equals subtract, the two numbers should be subtracted from one another. 
If there is no option specified, the value of the option should be add.*/

const number1 = 20;
const number2 = 10;


let operator = '+';

function calculate(num1, num2, operation) {
    if (operation === '+') {
        return num1 + num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else {
        
        return num1 + num2;
    }
}

console.log(`Result (operator: ${operator}):`, calculate(number1, number2, operator));

operator = '-';
console.log(`Result (operator: ${operator}):`, calculate(number1, number2, operator));

//                  Exercise 6.4

/*Modify the calculator that you made in Practice exercise 6.2 to return added values 
instead of printing them. Then, call the function 10 or more times in a loop, and store 
the results in an array. Once the loop finishes, output the final array into the console.*/

const resultsArray = [];

for (let i = 0; i < 10; i++) {
   
    const value1 = i * 5;
    const value2 = i * i;

    function calculateAndReturn(num1, num2) {
       
        const result = num1 + num2;
       
        resultsArray.push(result);
       
        return result;
    }

    const response = calculateAndReturn(value1, value2);

    console.log(`Iteration ${i + 1}: ${value1} + ${value2} = ${response}`);
}

console.log("Final Array:", resultsArray);

//                  Exercise 6.5

/*Use IIFE to create a few immediately invoked functions and observe how the scope is 
affected.*/

let value = "1000";

(function() {
   
    let value = "Inside IIFE";
    
    console.log("Inside IIFE:", value);
})();

let result = (function() {
    
    let value = "Inside IIFE Expression";
    
    return value;
})();


console.log("IIFE Expression Result:", result);


let anonymousFunction = function(param) {
   
    let value = "Inside Anonymous Function: " + param;
    
    console.log(value);
};

anonymousFunction("Custom Value");

//                  Exercise 6.6

/*A common problem that we can solve with recursion is calculating the factorial.*/

function calculateFactorial(num) {
   
    if (num === 0) {
        return 1;
    } else {
       
        return num * calculateFactorial(num - 1);
    }
}

const results = calculateFactorial(5);

console.log(`Factorial of 5 is: ${results}`);

function printFactorialSteps(num) {
    if (num >= 0) {
        console.log(`Calculating factorial for ${num}`);
        const factorialResult = calculateFactorial(num);
        console.log(`Factorial of ${num} is: ${factorialResult}`);
        printFactorialSteps(num - 1);
    }
}

printFactorialSteps(5);

//                  Exercise 6.7

/*Create a countdown loop starting at a dynamic value of 10.*/

let start = 10;

function countdown(count) {
    
    console.log(count);

    if (count < 1) {
        return;
    }

    countdown(count - 1);
}

function countdown2(count) {
 
    console.log(count);

    if (count > 0) {
        return countdown2(count - 1);
    }
}

countdown(start);


countdown2(8);


//                  Exercise 6.7

const myFunctionExpression = function(parameter) {

    console.log(parameter);
};


myFunctionExpression("Hello from function expression!");


function myFunctionDeclaration(parameter) {
    
    console.log(parameter);
}

myFunctionDeclaration("Hello from function declaration!");
