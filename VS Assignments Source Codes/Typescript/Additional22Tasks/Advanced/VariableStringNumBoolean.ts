/*
Advanced
1. Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. 
Now write a function that takes an argument of type 'string | number | boolean' and logs its type.
*/

// Declare a variable that can hold either a string or a number
let result: string | number;

// Assign a string value
result = "Hello, world!";

// Assign a number value
result = 42;

// Function to log the type of an argument
function logType(temp_value: string | number | boolean) {
  if (typeof temp_value === "string") {
    console.log("The value is a string.");
  } else if (typeof temp_value === "number") {
    console.log("The value is a number.");
  } else if (typeof temp_value === "boolean") {
    console.log("The value is a boolean.");
  } else {
    console.log("The value is of an unknown type.");
  }
}

// Call the function with different argument types
logType(result); // Output: The temp_value is a number.
logType(10);    // Output: The temp_value is a number.
logType(true);  // Output: The temp_value is a boolean.

