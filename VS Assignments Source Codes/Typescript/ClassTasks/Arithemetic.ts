// Functions for arithemetic Operations

//add two numbers
function add(num1: number, num2: number): number {
    return num1 + num2;
}

//subtract two numbers
function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

//multiply two numbers
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

//divide two numbers
function divide(num1: number, num2: number): number {
    if (num2 === 0) {
        console.error("Cannot divide by zero.");
        return NaN; // Not a Number
    }
    return num1 / num2;
}

// Example Usage
var number1: number = 10;
var number2: number = 5;

console.log("Addition:", add(number1, number2));
console.log("Subtraction:", subtract(number1, number2));
console.log("Multiplication:", multiply(number1, number2));
console.log("Division:", divide(number1, number2));

