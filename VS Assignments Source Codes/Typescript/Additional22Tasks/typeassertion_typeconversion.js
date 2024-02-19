/*
6. Write a TypeScript program that converts a variable of one type to
another using type assertions and type conversion functions like parseInt().
*/
// Using Type Assertion
var x1 = "10";
var y1 = Number(x1); // Type conversion to convert the string "10" to a number
var x2 = "10";
var y2 = x2; // Type assertion to convert the string "10" to a number
var x = "10";
var y = x; // Another way of type assertion
var w = "1223dfassd";
console.log("Type of w:" + typeof w);
// console.log("Using Type Assertion:");
// console.log("Original String:", myString);
// console.log("Converted Number:", myNumber);
// // Using Type Conversion Functions
// let anotherString: string = "123.45";
// let parsedNumber: number = parseFloat(anotherString); // Using parseFloat() for conversion
// console.log("\nUsing Type Conversion Function (parseFloat):");
// console.log("Original String:", anotherString);
// console.log("Converted Number:", parsedNumber);
// let myNum: number = 42;
// // Using toString() method
// let myString1: string = myNum.toString();
// // Using string interpolation
// let myString2: string = `${myNumber}`;
// console.log("Converted String (toString()):", myString1);
// console.log("Converted String (string interpolation):", myString2);
