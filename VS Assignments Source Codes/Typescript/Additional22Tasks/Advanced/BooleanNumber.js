/*
2
.Write a TypeScript program that creates a function combine that
accepts two parameters of types boolean and number.
It returns a value that can be either a boolean or a number.
Use a union type to achieve this.
*/
function comBine(param1, param2) {
    return param1 ? param2 : !param1;
}
var result1 = comBine(true, 42);
var result2 = comBine(false, 20);
console.log("Result 1: ".concat(result1));
console.log("Result2: ".concat(result2));
