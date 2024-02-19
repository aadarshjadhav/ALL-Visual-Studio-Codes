/*
2
.Write a TypeScript program that creates a function combine that 
accepts two parameters of types boolean and number. 
It returns a value that can be either a boolean or a number. 
Use a union type to achieve this.  
*/

function comBine(param1: boolean, param2:number):boolean | number{

    return param1? param2:!param1   // param2:returns 22 and !param1: returns true
}

let result1:boolean|number=comBine(true, 22)
let result2:boolean|number=comBine(false,20)

console.log(`Result 1: ${result1}`)
console.log(`Result 2: ${result2}`)

