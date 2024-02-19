/*
6. Write a TypeScript program that converts a variable of one type to 
another using type assertions and type conversion functions like parseInt().  
*/

// Using Type Assertion
let x1: string = "10";
let y1: number = Number(x1); //

let x2: any = "10"; //VVIP: We need to specify here type: any, for type assertion, it gives freedom for assertion
let y2: number = x2 as number; //

let x: any = "10";
let y: number = <number>x; // Another way of type assertion

let w:any="1223dfassd"
console.log("Type of w:"+typeof w)


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