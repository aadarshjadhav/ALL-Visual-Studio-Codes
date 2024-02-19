/*
5. Write a TypeScript function that accepts a parameter of type number and returns a
boolean indicating whether the number is odd.
Use a type guard to check and ensure the input is a valid number.
*/
function checkNumOdd(temp_num) {
    if (typeof temp_num !== "number") {
        console.log("Invalid Number Type");
        return false;
    }
    else {
        return temp_num % 2 !== 0;
    }
}
console.log(checkNumOdd("Aadarsh"));
console.log(checkNumOdd(11));
